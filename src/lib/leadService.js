import { supabase } from './supabaseClient.js';

const ADMIN_PRIMARY_EMAIL = 'paul@mindmesh.co.in';
const ADMIN_CC_EMAIL = 'sudhan@mindmesh.co.in';

/**
 * Submits lead data to deliver:
 * 1. An instant email notification to paul@mindmesh.co.in (CC: sudhan@mindmesh.co.in)
 * 2. An instant auto-reply confirmation to the user from noreply@mindmesh.co.in
 * 3. Local storage audit trail and database synchronization
 */
export async function submitConsultationLead(formData, estimate = null) {
  const timestamp = new Date().toISOString();
  const readableDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const estimateString = estimate
    ? `₹${estimate?.min?.toLocaleString('en-IN') || 0} - ₹${estimate?.max?.toLocaleString('en-IN') || 0} (${estimate?.complexity || 'Standard'} Complexity)`
    : 'Custom Estimate Requested';

  // 1. Save to localStorage as a reliable local audit trail
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const existingLeads = JSON.parse(window.localStorage.getItem('mindmesh_consultation_leads') || '[]');
      existingLeads.unshift({
        id: `lead_${Date.now()}`,
        formData,
        estimate,
        timestamp
      });
      window.localStorage.setItem('mindmesh_consultation_leads', JSON.stringify(existingLeads.slice(0, 50)));
    }
  } catch (err) {
    console.warn('Could not cache lead in localStorage:', err);
  }

  // 2. Primary Dispatch: Call our server-side cPanel PHP mailer (/api/contact.php)
  let serverDispatched = false;
  if (typeof window !== 'undefined') {
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          estimate: estimateString,
          timestamp
        }),
        signal: AbortSignal.timeout(5000)
      });

      if (res.ok) {
        const json = await res.json();
        if (json && json.success) {
          serverDispatched = true;
        }
      }
    } catch (err) {
      console.log('PHP mail endpoint bypassed (running in dev environment):', err?.message);
    }
  }

  // 3. Fallback / Dev Dispatch: FormSubmit AJAX Service
  // Delivers lead to paul@mindmesh.co.in, CCs sudhan@mindmesh.co.in, and sends instant _autoresponse to client!
  if (!serverDispatched) {
    try {
      const autoReplyText = `Thank you for reaching out to MindMesh WorkHub! We have received your project inquiry for ${formData?.projectType || 'Custom Software'}. Our team is reviewing your requirements and will reach out to you shortly (typically within 2 business hours). If you have urgent details, reply to this email or reach us at contact@mindmesh.co.in or +91 88848 67171.`;

      await fetch(`https://formsubmit.co/ajax/${ADMIN_PRIMARY_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        signal: AbortSignal.timeout(5000),
        body: JSON.stringify({
          _subject: `⚡ New MindMesh Lead: ${formData?.name || 'Inquiry'} (${formData?.projectType || 'Consultation'})`,
          _template: 'table',
          _captcha: 'false',
          _cc: ADMIN_CC_EMAIL,
          _replyto: formData?.email || ADMIN_PRIMARY_EMAIL,
          _autoresponse: autoReplyText,
          'Client Name': formData?.name || 'Not provided',
          'Email Address': formData?.email || 'Not provided',
          'Phone Number': formData?.phone || 'Not provided',
          'Company': formData?.company || 'Not provided',
          'Project Type': formData?.projectType || 'General Consultation',
          'Budget Range': formData?.budget || 'Not specified',
          'Target Timeline': formData?.timeline || 'Not specified',
          'Estimated Investment': estimateString,
          'Selected Features': Array.isArray(formData?.features) ? formData.features.join(', ') : (formData?.features || 'None specified'),
          'Existing System': formData?.hasExistingSystem ? 'Yes' : 'No',
          'Team Size': formData?.teamSize || 'N/A',
          'Preferred Contact': formData?.preferredContact || 'Email',
          'Project Scope': formData?.description || 'N/A',
          'Submission Timestamp': `${readableDate} (IST)`
        })
      });
    } catch (formSubmitErr) {
      console.warn('FormSubmit backup dispatch error:', formSubmitErr);
    }
  }

  // 4. Background Supabase attempt (safely wrapped so missing tables/offline DB never blocks user)
  if (supabase) {
    try {
      await supabase.from('consultations').insert([{
        name: formData?.name,
        email: formData?.email,
        company: formData?.company,
        phone: formData?.phone,
        project_type: formData?.projectType,
        description: formData?.description,
        budget: formData?.budget,
        timeline: formData?.timeline,
        priority: formData?.priority,
        features: formData?.features,
        has_existing_system: formData?.hasExistingSystem,
        team_size: formData?.teamSize,
        preferred_contact: formData?.preferredContact,
        min_estimate: estimate?.min,
        max_estimate: estimate?.max,
        complexity: estimate?.complexity
      }]);
    } catch (dbErr) {
      console.warn('Supabase sync skipped (offline or unconfigured):', dbErr?.message);
    }
  }

  return {
    success: true,
    message: "Thank you for reaching out to MindMesh! We have received your request and will reach out to you shortly."
  };
}
