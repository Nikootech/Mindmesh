import React from 'react';
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

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src="/mindmesh-logo.jpg" alt="MindMesh WorkHub" className="h-12 w-auto object-contain rounded-lg" width="160" height="48" />
                <div>
                  <h3 className="text-xl font-bold">MindMesh</h3>
                  <p className="text-xs text-background/60 tracking-wider uppercase font-medium">WorkHub Ecosystem</p>
                </div>
              </div>
              <p className="text-background/70 leading-relaxed text-sm">
                Smart solutions for business & tech. We build the future, one brilliant connection at a time. 
                Where minds mesh, innovation emerges.
              </p>
              <div className="flex space-x-4">
                {['Linkedin', 'Twitter', 'Github', 'Instagram']?.map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    aria-label={`Visit our ${platform} page`}
                    className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 hover:text-primary transition-all duration-300"
                  >
                    <Icon name={platform} size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Explore Services</h4>
              <ul className="space-y-4 text-sm text-background/70">
                {['Web Development', 'Mobile App Dev', 'Cloud Architecture', 'AI & Data Analytics', 'Digital Strategy']?.map((item) => (
                  <li key={item}>
                    <a href="/services" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h4 className="font-bold text-lg mb-6">Our Universe</h4>
              <ul className="space-y-4 text-sm text-background/70">
                {[
                  { label: 'About Us', link: '/about' },
                  { label: 'Success Stories', link: '/client-success' },
                  { label: 'Contact Experts', link: '/contact' },
                  { label: 'Solutions Gallery', link: '/solutions' },
                  { label: 'WorkHub Portal', link: '#' }
                ]?.map((item) => (
                  <li key={item?.label}>
                    <a href={item?.link} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform">{item?.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-sm text-background/70">
                  <Icon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Manyata Mahogany, F2, 9&10 FLR<br />
                    Manyata-Techpar, Arabic College,<br />
                    Bangalore, Karnataka 560045
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-background/70">
                  <Icon name="Phone" size={18} className="text-primary flex-shrink-0" />
                  <span>+91 88848 67171</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-background/70">
                  <Icon name="Mail" size={18} className="text-primary flex-shrink-0" />
                  <span>Deepika@mindmesh.co.in</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="inline-flex items-center px-3 py-1 bg-background/5 border border-background/10 rounded-full text-[10px] font-medium text-background/50">
                  <div className="w-1.5 h-1.5 bg-success rounded-full mr-2 animate-pulse"></div>
                  SYSTEM STATUS: OPERATIONAL
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/40">
              © {new Date()?.getFullYear()} MindMesh Technology Solutions. All rights reserved.
            </p>
            <div className="flex space-x-8 text-xs text-background/40">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
