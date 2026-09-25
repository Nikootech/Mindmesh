import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ConsultationForm from './components/ConsultationForm';
import ContactMethods from './components/ContactMethods';
import AlternativeServices from './components/AlternativeServices';
import ProcessTimeline from './components/ProcessTimeline';
import FAQSection from './components/FAQSection';
import Footer from '../../components/ui/Footer';

const ContactConsultationPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Contact & Technical Consultation | MindMesh WorkHub"
        description="Book a technical consultation with MindMesh engineering leads. Discuss your software, IoT, web app, or CRM/ERP requirements and receive a comprehensive project estimate."
        keywords="contact MindMesh, software consultation Bangalore, hire tech consultants India, custom software quote, IoT developers contact, CRM implementation consultation"
        url="https://mindmesh.co.in/contact-consultation"
        breadcrumbs={[
          { name: "Home", url: "/homepage" },
          { name: "Contact & Consultation", url: "/contact-consultation" }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "name": "MindMesh Technical Consultation & Contact",
              "url": "https://mindmesh.co.in/contact-consultation",
              "mainEntity": {
                "@type": "Organization",
                "name": "MindMesh WorkHub",
                "telephone": "+91 88848 67171",
                "email": "contact@mindmesh.co.in",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "addressCountry": "IN"
                }
              }
            }
          ]
        }}
        faq={[
          {
            question: "How do you determine project pricing?",
            answer: "Our pricing is transparent and based on project complexity, feature requirements, and timeline. We offer fixed-price contracts for well-defined scopes and flexible time & material sprints for evolving agile builds."
          },
          {
            question: "Do you work with startups as well as enterprise businesses?",
            answer: "Yes, MindMesh delivers rapid MVP launches for funded startups (5-8 weeks) as well as multi-phase digital transformations for mid-market and enterprise organizations."
          },
          {
            question: "How long does a typical software project take to deliver?",
            answer: "Web applications and MVPs typically take 6 to 12 weeks, while complex enterprise systems, industrial IoT platforms, and CRM migrations take 3 to 9 months with continuous milestone deliveries."
          },
          {
            question: "Do you provide ongoing maintenance and support after project launch?",
            answer: "Yes, we provide a 90-day comprehensive warranty on all deliverables, along with dedicated SLA-backed maintenance, security updates, and performance monitoring packages."
          },
          {
            question: "What information is needed to get an accurate project estimate?",
            answer: "An outline of business goals, required feature set, technical preferences (if any), target launch date, and estimated budget range will enable us to provide a detailed technical proposal."
          }
        ]}
      />
      
      <Header />

      <ContactHero />
      
      <div className="space-y-0">
        <ConsultationForm />
        <ProcessTimeline />
        <ContactMethods />
        <AlternativeServices />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactConsultationPage;
