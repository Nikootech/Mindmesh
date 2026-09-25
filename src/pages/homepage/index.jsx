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
        title="MindMesh WorkHub | Custom Software, IoT & Enterprise Solutions"
        description="MindMesh WorkHub builds bespoke software, web applications, industrial IoT platforms, and CRM/ERP systems for Finance, HR, and Enterprise leaders across India."
        keywords="software development company India, custom software Bangalore, web application development, IoT solutions, enterprise CRM, custom ERP, digital transformation, FinTech software, HR tech"
        url="https://mindmesh.co.in/homepage"
        breadcrumbs={[
          { name: "Home", url: "/homepage" }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://mindmesh.co.in/#organization",
              "name": "MindMesh WorkHub",
              "url": "https://mindmesh.co.in",
              "logo": "https://mindmesh.co.in/mindmesh-logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 88848 67171",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Kannada"]
              },
              "sameAs": [
                "https://www.facebook.com/share/14WqRjJDodP/",
                "https://www.instagram.com/mindmeshsolution?stkn=MWVnbzZsZjB6Zmlxdg==",
                "https://twitter.com/mindmesh_tech",
                "https://www.linkedin.com/in/mindmesh-solutions-628b22403"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Transformation & Software Engineering Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Software Engineering",
                      "description": "Enterprise-grade scalable backend APIs and resilient distributed architectures."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Industrial IoT & Hardware Automation",
                      "description": "Real-time hardware telemetry, biometric systems, and smart factory IoT integrations."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Enterprise CRM & ERP Systems",
                      "description": "Bespoke business operations platforms with integrated payroll, lead scoring, and financial analytics."
                    }
                  }
                ]
              }
            }
          ]
        }}
        faq={[
          {
            question: "What services does MindMesh provide?",
            answer: "MindMesh provides end-to-end digital engineering services including custom enterprise software development, web & mobile applications, industrial IoT integration, and bespoke CRM/ERP systems for Finance, HR, and Manufacturing industries."
          },
          {
            question: "Which companies partner with MindMesh?",
            answer: "MindMesh partners with industry leaders including Razorpay, eSSL, Tally Solutions, Saral PayPack, AmpUp, and RoadRobos to deliver high-performance digital solutions."
          },
          {
            question: "Where is MindMesh located?",
            answer: "MindMesh is headquartered in Bengaluru, Karnataka, India, serving clients across India and globally."
          }
        ]}
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
