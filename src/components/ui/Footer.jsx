import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white px-3 py-2 rounded-xl shadow-md inline-flex items-center justify-center">
                <img 
                  src="/mindmesh-logo.webp" 
                  alt="MindMesh WorkHub" 
                  className="h-10 w-auto object-contain" 
                  width="140" 
                  height="40" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">MindMesh</h3>
                <p className="text-xs text-background/60 tracking-wider uppercase font-medium">WorkHub Ecosystem</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed text-sm">
              Smart solutions for business & tech. We build the future, one brilliant connection at a time. 
              Where minds mesh, innovation emerges.
            </p>
            <div className="flex space-x-3">
              {[
                { name: 'Linkedin', url: 'https://www.linkedin.com/in/mindmesh-solutions-628b22403' },
                { name: 'Twitter', url: 'https://twitter.com/mindmesh_tech' },
                { name: 'Facebook', url: 'https://www.facebook.com/share/14WqRjJDodP/' },
                { name: 'Instagram', url: 'https://www.instagram.com/mindmeshsolution?stkn=MWVnbzZsZjB6Zmlxdg==' },
                { name: 'Github', url: 'https://github.com/mindmesh-workhub' }
              ]?.map((platform) => (
                <a 
                  key={platform?.name} 
                  href={platform?.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${platform?.name} page`}
                  className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 hover:text-primary transition-all duration-300"
                >
                  <Icon name={platform?.name} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Explore Services</h4>
            <ul className="space-y-4 text-sm text-background/70">
              {[
                { label: 'Web Development', link: '/services-overview' },
                { label: 'Mobile App Dev', link: '/services-overview' },
                { label: 'Cloud Architecture', link: '/services-overview' },
                { label: 'AI & Data Analytics', link: '/services-overview' },
                { label: 'Digital Strategy', link: '/services-overview' }
              ]?.map((item, idx) => (
                <li key={idx}>
                  <Link to={item?.link} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform">{item?.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Universe</h4>
            <ul className="space-y-4 text-sm text-background/70">
              {[
                { label: 'About Us', link: '/about-universe' },
                { label: 'Success Stories', link: '/client-success-center' },
                { label: 'Contact Experts', link: '/contact' },
                { label: 'Solutions Gallery', link: '/solutions-gallery' },
              ]?.map((item) => (
                <li key={item?.label}>
                  <Link to={item?.link} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform">{item?.label}</Link>
                </li>
              ))}
              <li>
                 <Link to="/about-universe" className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform">Our Team</Link>
              </li>
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
                <a href="tel:+918884867171" className="underline underline-offset-2 hover:text-primary transition-colors">+91 88848 67171</a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-background/70">
                <Icon name="Mail" size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@mindmesh.co.in" className="underline underline-offset-2 hover:text-primary transition-colors">info@mindmesh.co.in</a>
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
            <Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-background transition-colors">Terms of Service</Link>
            <Link to="/cookie-settings" className="hover:text-background transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
