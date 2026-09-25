import React from 'react';
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

      <SEO 
        title="About MindMesh | Strategic Technology Consulting & Team"
        description="Learn about MindMesh WorkHub: our journey from 2018 to 2026, engineering philosophy, Bengaluru leadership, and mission to mesh human creativity with technological capability."
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
                "foundingDate": "2018",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Bengaluru, India"
                },
                "award": [
                  "Top Technology Partner Award 2024",
                  "Workplace Innovation Excellence 2025",
                  "Client Choice Digital Engineering Award 2026"
                ]
              }
            }
          ]
        }}
        faq={[
          {
            question: "When was MindMesh founded?",
            answer: "MindMesh was founded in 2018 in Bengaluru, India, and has grown into a leading technology consulting and digital engineering company."
          },
          {
            question: "What is MindMesh's core philosophy?",
            answer: "MindMesh operates on the principle that true innovation emerges where human creativity and domain expertise mesh seamlessly with advanced technological capability."
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
