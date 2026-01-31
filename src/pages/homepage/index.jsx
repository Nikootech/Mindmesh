import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import LiveMetrics from './components/LiveMetrics';
import ClientLogos from './components/ClientLogos';
import WorkHubPreview from './components/WorkHubPreview';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';
import Footer from '../../components/ui/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Innovation Emerges Where Minds Mesh"
        description="MindMesh is your partner for custom Software, Web Development, IoT solutions, and CRM systems. We provide expert tech services for Finance, HR, and Retail."
        keywords="software, web development, IoT, CRM, finance tech, HR software, MindMesh, digital transformation"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MindMesh WorkHub",
          "url": "https://mindmesh.co.in",
          "logo": "https://mindmesh.co.in/mindmesh-logo.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 88848 67171",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://twitter.com/mindmesh",
            "https://linkedin.com/company/mindmesh"
          ]
        }}
      />

      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <LiveMetrics />
        <ClientLogos />
        <WorkHubPreview />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
