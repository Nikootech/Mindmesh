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

const ContactConsultationPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Contact & Consultation"
        description="Connect with MindMesh experts for a free consultation. Get instant project estimates and start your digital transformation journey."
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
    </div>
  );
};

export default ContactConsultationPage;
