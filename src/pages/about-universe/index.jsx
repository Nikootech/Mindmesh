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
        title="MindMesh | Strategic Technology Consulting & Digital Transformation"
        description="MindMesh is a leading digital transformation partner in Bangalore, India. We specialize in AI solutions, data analytics, and custom software development."
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TimelineSection />
          <TeamSection />
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
