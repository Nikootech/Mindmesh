import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from "../../components/SEO";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import IndustryMetricsSection from "./components/IndustryMetricsSection";
import TestimonialSection from "./components/TestimonialSection";
import CaseStudyCard from "./components/CaseStudyCard";
import ClientJourneySection from "./components/ClientJourneySection";
import ReferenceClientSection from "./components/ReferenceClientSection";
import ClientPortalSection from "./components/ClientPortalSection";
import SatisfactionSurveySection from "./components/SatisfactionSurveySection";
import NextSuccessStoryCTA from "./components/NextSuccessStoryCTA";
import Icon from "../../components/AppIcon";
import Footer from "../../components/ui/Footer";

const ClientSuccessCenterPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Enterprise E-commerce Transformation",
      client: "ShopEase India",
      industry: "Retail & E-commerce",
      projectType: "Full Stack Development",
      duration: "4 Months",
      teamSize: "6-member",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      challenge: "Legacy architecture unable to handle peak holiday traffic, leading to 20% revenue loss during sales.",
      solution: "Migrated to a serverless microservices architecture with optimized frontend performance and real-time inventory tracking.",
      results: "Zero downtime during Diwali sale, 300% conversion increase, and 50% faster page loads.",
      projectImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&fit=crop",
      metrics: [
        { label: "Revenue Growth", value: "300%" },
        { label: "Page Load Speed", value: "+65%" }
      ],
      testimonial: {
        quote: "MindMesh delivered beyond our expectations. The new platform is a beast!",
        author: "Priya Sharma",
        position: "CTO, ShopEase",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&fit=crop"
      }
    },
    {
      id: 2,
      title: "FinTech Security Overhaul",
      client: "PaySecure",
      industry: "Financial Services",
      projectType: "Cybersecurity & Backend",
      duration: "6 Months",
      teamSize: "4-member",
      technologies: ["Go", "Kubernetes", "Redis", "Security Audit Tools"],
      challenge: "Frequent security vulnerabilities and slow transaction processing times affecting trust.",
      solution: "Implemented bank-grade encryption, automated security scanning, and high-performance transaction engine.",
      results: "PCI DSS compliance achieved, 500% transaction processing speed, 99.99% system reliability.",
      projectImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&fit=crop",
      metrics: [
        { label: "Transaction Speed", value: "500%" },
        { label: "Security Compliance", value: "100%" }
      ],
      testimonial: {
        quote: "The level of technical expertise MindMesh brought to the table was refreshing.",
        author: "Vikram Malhotra",
        position: "Head of Engineering, PaySecure",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop"
      }
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Software & HR Projects | Finance & Web Success"
        description="See how MindMesh delivered high-performance Software, CRM, and IoT solutions for Finance, Retail, and HR sectors. Explore our success stories."
        keywords="software case studies, CRM implementation success, finance tech portfolio, IoT project examples, web development success"
      />
      
      <Header />

      <HeroSection />
      
      <div className="space-y-24 py-12">
        <IndustryMetricsSection />
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <Icon name="Briefcase" size={16} className="mr-2" />
                Featured Work
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Success Stories</h2>
            </div>
            <p className="text-muted-foreground mt-4 md:mt-0 max-w-md">
              A deep dive into some of our most impactful projects and the results we delivered for our partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies?.map((cs) => (
              <CaseStudyCard key={cs?.id} caseStudy={cs} />
            ))}
          </div>
        </section>

        <TestimonialSection />
        <ClientJourneySection />
        <ReferenceClientSection />
        <ClientPortalSection />
        <SatisfactionSurveySection />
        <NextSuccessStoryCTA />
      </div>
      <Footer />
    </div>
  );
};

export default ClientSuccessCenterPage;
