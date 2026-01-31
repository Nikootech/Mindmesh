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
        title="Software Consultation | Hire Web & CRM Experts"
        description="Get a free consultation for your next software, web, or IoT project. Expert guidance on CRM, Finance, and HR software from MindMesh WorkHub."
        keywords="hire developers, software consultation, web development help, CRM experts, finance tech partners, HR software consulting"
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
