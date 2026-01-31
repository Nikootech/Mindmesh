import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const MobileTabNav = () => {
  const location = useLocation();

  const tabs = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services-overview', icon: 'Briefcase' },
    { name: 'Solutions', path: '/solutions-gallery', icon: 'Layers' },
    { name: 'About', path: '/about-universe', icon: 'Users' },
    { name: 'Contact', path: '/contact', icon: 'MessageCircle' }
  ];

  const isActive = (path) => {
    return location?.pathname === path || (path === '/contact' && location?.pathname === '/contact-consultation');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] pb-safe-area-bottom">
        <div className="flex justify-around items-center h-16">
          {tabs?.map((tab) => {
            const active = isActive(tab?.path);
            return (
              <Link
                key={tab?.path}
                to={tab?.path}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  active ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className={`p-1.5 rounded-xl transition-all duration-300 ${
                  active ? 'bg-primary/10' : 'bg-transparent'
                }`}>
                  <Icon 
                    name={tab?.icon} 
                    size={20} 
                    className={`transition-all duration-300 ${active ? 'scale-110' : ''}`}
                  />
                </div>
                <span className="text-[10px] font-medium">{tab?.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileTabNav;
