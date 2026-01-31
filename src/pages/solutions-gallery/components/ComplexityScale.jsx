import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ComplexityScale = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const complexityLevels = [
    {
      level: 'Simple',
      title: 'Simple Projects',
      description: 'Basic websites, landing pages, and simple web applications',
      duration: '1-3 months',
      teamSize: '2-3 members',
      budget: '₹2L - ₹8L',
      features: [
        'Static or basic dynamic websites',
        'Simple CMS integration',
        'Basic responsive design',
        'Standard contact forms',
        'Basic SEO optimization'
      ],
      examples: ['Corporate websites', 'Portfolio sites', 'Small business websites'],
      color: 'green',
      icon: 'Zap'
    },
    {
      level: 'Medium',
      title: 'Medium Complexity',
      description: 'Custom web applications with moderate functionality and integrations',
      duration: '3-6 months',
      teamSize: '4-6 members',
      budget: '₹8L - ₹25L',
      features: [
        'Custom web applications',
        'Database integration',
        'User authentication',
        'Third-party API integrations',
        'Advanced responsive design',
        'Basic analytics and reporting'
      ],
      examples: ['E-commerce platforms', 'Booking systems', 'CRM applications'],
      color: 'yellow',
      icon: 'Settings'
    },
    {
      level: 'Complex',
      title: 'Complex Systems',
      description: 'Enterprise-grade applications with advanced features and scalability',
      duration: '6-18 months',
      teamSize: '7-15 members',
      budget: '₹25L - ₹1Cr+',
      features: [
        'Enterprise-grade architecture',
        'Microservices implementation',
        'Advanced security features',
        'Real-time data processing',
        'Multi-platform compatibility',
        'Advanced analytics and AI integration',
        'Scalable cloud infrastructure'
      ],
      examples: ['FinTech platforms', 'Healthcare systems', 'Manufacturing ERP'],
      color: 'red',
      icon: 'Cpu'
    }
  ];

  const getColorClasses = (color, isSelected = false) => {
    const colors = {
      green: {
        bg: isSelected ? 'bg-green-50' : 'bg-white',
        border: isSelected ? 'border-green-500' : 'border-green-200',
        text: 'text-green-800',
        accent: 'bg-green-100',
        icon: 'text-green-600'
      },
      yellow: {
        bg: isSelected ? 'bg-yellow-50' : 'bg-white',
        border: isSelected ? 'border-yellow-500' : 'border-yellow-200',
        text: 'text-yellow-800',
        accent: 'bg-yellow-100',
        icon: 'text-yellow-600'
      },
      red: {
        bg: isSelected ? 'bg-red-50' : 'bg-white',
        border: isSelected ? 'border-red-500' : 'border-red-200',
        text: 'text-red-800',
        accent: 'bg-red-100',
        icon: 'text-red-600'
      }
    };
    return colors?.[color];
  };

  return (
    <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="BarChart3" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Project Complexity Scale</h3>
          <p className="text-sm text-gray-600">Understand different engagement levels</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {complexityLevels?.map((level, index) => {
          const isSelected = selectedLevel === index;
          const colorClasses = getColorClasses(level?.color, isSelected);
          
          return (
            <div
              key={level?.level}
              className={`border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-md ${colorClasses?.bg} ${colorClasses?.border}`}
              onClick={() => setSelectedLevel(isSelected ? null : index)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 ${colorClasses?.accent} rounded-lg flex items-center justify-center`}>
                  <Icon name={level?.icon} size={20} className={colorClasses?.icon} />
                </div>
                <span className={`px-3 py-1 ${colorClasses?.accent} ${colorClasses?.text} text-xs font-medium rounded-full`}>
                  {level?.level}
                </span>
              </div>
              {/* Title and Description */}
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{level?.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{level?.description}</p>
              {/* Key Metrics */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium text-gray-900">{level?.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Team Size:</span>
                  <span className="font-medium text-gray-900">{level?.teamSize}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Budget Range:</span>
                  <span className="font-medium text-gray-900">{level?.budget}</span>
                </div>
              </div>
              {/* Expandable Content */}
              {isSelected && (
                <div className="border-t border-gray-200 pt-4 space-y-4">
                  {/* Features */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {level?.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <Icon name="Check" size={14} className={`${colorClasses?.icon} mt-0.5 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Examples:</h5>
                    <div className="flex flex-wrap gap-2">
                      {level?.examples?.map((example, idx) => (
                        <span 
                          key={idx}
                          className={`px-2 py-1 ${colorClasses?.accent} ${colorClasses?.text} text-xs rounded`}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* Expand Indicator */}
              <div className="flex items-center justify-center mt-4 pt-3 border-t border-gray-200">
                <Icon 
                  name={isSelected ? 'ChevronUp' : 'ChevronDown'} 
                  size={16} 
                  className="text-gray-400" 
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Bottom CTA */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Not sure about your project complexity?</h4>
            <p className="text-xs text-gray-600">Get a free consultation to determine the right approach</p>
          </div>
          <Icon name="ArrowRight" size={16} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ComplexityScale;
