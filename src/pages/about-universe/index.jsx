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

const AboutUniverse = () => {
  return (
    <>

      <SEO 
        title="About Our Universe"
        description="Learn about MindMesh's journey, mission, and the brilliant minds behind our innovative technology solutions."
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

        {/* Footer */}
        <footer className="bg-foreground text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/mindmesh-logo.jpg" alt="MindMesh WorkHub" className="h-12 w-auto object-contain rounded-lg" />
                  <div>
                    <div className="text-xl font-bold">MindMesh</div>
                    <div className="text-sm text-gray-400">WorkHub</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Where brilliant minds mesh together to create extraordinary technology solutions. Building the future of human-centered technology consulting.
                </p>
                <div className="text-sm text-gray-400">
                  © {new Date()?.getFullYear()} MindMesh WorkHub. All rights reserved.
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>About Universe</div>
                  <div>Our Team</div>
                  <div>Careers</div>
                  <div>Culture</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>Deepika@mindmesh.co.in</div>
                  <div>+91 88848 67171</div>
                  <div>Bangalore, India</div>
                  <div>LinkedIn • Twitter</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUniverse;
