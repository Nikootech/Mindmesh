import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const NextSuccessStoryCTA = () => {
  const [selectedProjectType, setSelectedProjectType] = useState('');

  const projectTypes = [
    {
      id: 'web-app',
      title: 'Web Application',
      description: 'Custom web applications built with modern technologies',
      icon: 'Globe',
      examples: ['E-commerce platforms', 'SaaS applications', 'Enterprise portals'],
      timeline: '8-16 weeks',
      startingPrice: '₹5,00,000'
    },
    {
      id: 'mobile-app',
      title: 'Mobile Application',
      description: 'Native and cross-platform mobile applications',
      icon: 'Smartphone',
      examples: ['iOS/Android apps', 'React Native apps', 'Progressive web apps'],
      timeline: '10-20 weeks',
      startingPrice: '₹7,50,000'
    },
    {
      id: 'enterprise-solution',
      title: 'Enterprise Solution',
      description: 'Large-scale enterprise systems and integrations',
      icon: 'Building',
      examples: ['ERP systems', 'CRM platforms', 'Data migration'],
      timeline: '16-32 weeks',
      startingPrice: '₹15,00,000'
    },
    {
      id: 'ai-integration',
      title: 'AI Integration',
      description: 'Artificial intelligence and machine learning solutions',
      icon: 'Brain',
      examples: ['Chatbots', 'Recommendation engines', 'Data analytics'],
      timeline: '12-24 weeks',
      startingPrice: '₹10,00,000'
    }
  ];

  const successMetrics = [
    { metric: '98%', label: 'On-time Delivery', icon: 'Clock' },
    { metric: '150+', label: 'Projects Completed', icon: 'CheckCircle' },
    { metric: '4.8/5', label: 'Client Satisfaction', icon: 'Star' },
    { metric: '24/7', label: 'Support Available', icon: 'Headphones' }
  ];

  const handleProjectTypeSelect = (projectType) => {
    setSelectedProjectType(projectType);
  };

  const getConsultationUrl = () => {
    const baseUrl = '/contact-consultation';
    if (selectedProjectType) {
      return `${baseUrl}?project=${selectedProjectType}`;
    }
    return baseUrl;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 mesh-pattern opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} className="mr-2" />
            Your Success Story Awaits
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Become Our Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Success Story
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join the ranks of successful businesses who've transformed their operations 
            with MindMesh. Your journey to digital excellence starts with a conversation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successMetrics?.map((metric, index) => (
            <div key={index} className="bg-card/80 backdrop-blur-sm rounded-xl p-6 text-center hover-lift border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric?.metric}</div>
              <div className="text-sm text-muted-foreground font-medium">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Project Type Selection */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            What Type of Project Do You Have in Mind?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes?.map((project) => (
              <div
                key={project?.id}
                onClick={() => handleProjectTypeSelect(project?.id)}
                className={`bg-card rounded-xl p-6 border cursor-pointer transition-all duration-300 hover-lift ${
                  selectedProjectType === project?.id
                    ? 'border-primary bg-primary/5 shadow-soft'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    selectedProjectType === project?.id
                      ? 'bg-primary text-white' :'bg-primary/10 text-primary'
                  }`}>
                    <Icon name={project?.icon} size={24} />
                  </div>
                  {selectedProjectType === project?.id && (
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  )}
                </div>
                
                <h4 className="font-bold text-foreground mb-2">{project?.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{project?.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium text-foreground">{project?.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Starting from:</span>
                    <span className="font-medium text-primary">{project?.startingPrice}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {project?.examples?.slice(0, 2)?.map((example, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <Icon name="Dot" size={12} className="mr-1" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="MessageCircle" size={64} className="text-primary mx-auto mb-6" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Success Journey?
            </h3>
            
            <p className="text-muted-foreground mb-8 text-lg">
              {selectedProjectType 
                ? `Great choice! Let's discuss your ${projectTypes?.find(p => p?.id === selectedProjectType)?.title?.toLowerCase()} project and create a roadmap for success.`
                : 'Every great project starts with a conversation. Let\'s discuss your vision and create a roadmap for your digital transformation.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to={getConsultationUrl()}>
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="Calendar" 
                  iconPosition="left"
                  className="gradient-accent hover-lift"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                iconName="Phone" 
                iconPosition="left"
                className="hover-lift"
              >
                Call Us: +91 88848 67171
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center">
                <Icon name="Clock" size={16} className="mr-2 text-primary" />
                Free 30-minute consultation
              </div>
              <div className="flex items-center justify-center">
                <Icon name="Shield" size={16} className="mr-2 text-primary" />
                No commitment required
              </div>
              <div className="flex items-center justify-center">
                <Icon name="Award" size={16} className="mr-2 text-primary" />
                Expert guidance guaranteed
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 150+ businesses across India
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-xs font-medium">ISO 27001 Certified</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="text-xs font-medium">GDPR Compliant</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="text-xs font-medium">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSuccessStoryCTA;
