import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import TeamSection from './components/TeamSection';
import CultureSection from './components/CultureSection';
import WorkHubStorySection from './components/WorkHubStorySection';
import CareersSection from './components/CareersSection';
import RecognitionSection from './components/RecognitionSection';
import VisionSection from './components/VisionSection';
import Footer from '../../components/ui/Footer';

const AboutUniverse = () => {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/about/hero-collaboration.webp" type="image/webp" fetchPriority="high" />
      </Helmet>
      <SEO 
        title="Strategic Technology Consulting & Software Engineering | MindMesh"
        description="Discover MindMesh: Bengaluru's strategic technology consulting & digital engineering firm. We build bespoke software, cloud platforms, and enterprise AI."
        keywords="about MindMesh, tech consulting Bangalore, software team India, IT engineering leadership, MindMesh story, digital innovation partners"
        url="https://mindmesh.co.in/about-universe"
        breadcrumbs={[
          { name: "Home", url: "/homepage" },
          { name: "About", url: "/about-universe" }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "name": "About MindMesh WorkHub",
              "description": "Company history, engineering leadership, organizational milestones, and corporate values of MindMesh WorkHub.",
              "url": "https://mindmesh.co.in/about-universe",
              "mainEntity": {
                "@type": "Organization",
                "name": "MindMesh WorkHub",
                "url": "https://mindmesh.co.in",
                "logo": "https://mindmesh.co.in/mindmesh-logo.png",
                "foundingDate": "2018",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Bengaluru, India"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/mindmesh-solutions-628b22403",
                  "https://www.facebook.com/share/14WqRjJDodP/",
                  "https://www.instagram.com/mindmeshsolution?stkn=MWVnbzZsZjB6Zmlxdg==",
                  "https://twitter.com/mindmesh_tech"
                ],
                "award": [
                  "Top Technology Partner Award 2024",
                  "Workplace Innovation Excellence 2025",
                  "Client Choice Digital Engineering Award 2026"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Strategic Technology & Software Engineering Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Web & Mobile Application Development",
                        "url": "https://mindmesh.co.in/services-overview"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Enterprise ERP & Cloud Architecture Modernization",
                        "url": "https://mindmesh.co.in/services-overview"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI & Large Language Model Data Integrations",
                        "url": "https://mindmesh.co.in/services-overview"
                      }
                    }
                  ]
                }
              }
            }
          ]
        }}
        faq={[
          {
            question: "What is MindMesh WorkHub and what does the company do?",
            answer: "MindMesh WorkHub is an ISO-aligned strategic technology consulting and custom digital engineering firm headquartered in Bengaluru, India. We design, engineer, and scale high-performance web applications, mobile apps, enterprise ERP/CRM platforms, and intelligent AI automation workflows for global businesses."
          },
          {
            question: "Who should partner with MindMesh?",
            answer: "MindMesh partners with enterprise CTOs, high-growth technology startups, and operational leaders across FinTech, Healthcare, E-commerce, Logistics, and Professional Services seeking senior engineering teams, transparent delivery, and robust SLA support."
          },
          {
            question: "How does MindMesh ensure code quality and information security?",
            answer: "MindMesh adheres to strict ISO/IEC 27001-aligned security governance, zero-trust cloud architectures, automated CI/CD testing pipelines, peer code reviews, and comprehensive NDA confidentiality protection across every engagement."
          },
          {
            question: "Where is MindMesh located and can we schedule a consultation?",
            answer: "Our engineering headquarters is located at Manyata Tech Park in Bengaluru, Karnataka, India. Businesses can schedule an architectural discovery consultation directly through our website."
          }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TimelineSection />
          {/* <TeamSection /> */}
          <CultureSection />
          <WorkHubStorySection />
          <RecognitionSection />
          <CareersSection />
          <VisionSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutUniverse;
