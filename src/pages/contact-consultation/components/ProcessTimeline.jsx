import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Initial Discovery Call',
      duration: '30-45 minutes',
      description: 'We start with a comprehensive discussion about your project goals, target audience, and business objectives.',
      details: [
        'Understanding your business context and challenges',
        'Identifying key stakeholders and decision makers',
        'Discussing timeline expectations and constraints',
        'Preliminary technology recommendations'
      ],
      icon: 'MessageSquare',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Detailed Requirements Analysis',
      duration: '2-3 business days',
      description: 'Our team conducts thorough analysis and creates a comprehensive project specification document.',
      details: [
        'Functional and technical requirements documentation',
        'User journey mapping and wireframe creation',
        'Technology stack finalization and architecture planning',
        'Integration requirements and third-party service analysis'
      ],
      icon: 'FileText',
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Proposal & Estimation',
      duration: '1-2 business days',
      description: 'We prepare a detailed proposal with accurate timeline, cost breakdown, and project milestones.',
      details: [
        'Comprehensive project timeline with key milestones',
        'Detailed cost breakdown by feature and phase',
        'Team composition and resource allocation',
        'Risk assessment and mitigation strategies'
      ],
      icon: 'Calculator',
      color: 'accent'
    },
    {
      id: 4,
      title: 'Contract & Project Kickoff',
      duration: '1-2 business days',
      description: 'Once approved, we finalize contracts and begin project execution with dedicated team assignment.',
      details: [
        'Contract finalization and legal documentation',
        'Project team introduction and role assignments',
        'Communication channels and reporting setup',
        'Development environment setup and access provisioning'
      ],
      icon: 'Rocket',
      color: 'success'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      accent: 'bg-accent text-white',
      success: 'bg-success text-white'
    };
    return colors?.[color] || colors?.primary;
  };

  const getBorderColor = (color) => {
    const colors = {
      primary: 'border-primary',
      secondary: 'border-secondary',
      accent: 'border-accent',
      success: 'border-success'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Happens Next?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven consultation process ensures we understand your needs completely before starting development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-success rounded-full opacity-20"></div>

          <div className="space-y-12">
            {processSteps?.map((step, index) => (
              <div key={step?.id} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-card rounded-xl p-6 border border-border hover-lift">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(step?.color)}`}>
                        <Icon name={step?.icon} size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{step?.title}</h3>
                        <p className="text-sm text-muted-foreground">{step?.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{step?.description}</p>
                    
                    <div className="space-y-2">
                      {step?.details?.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className={`w-16 h-16 rounded-full border-4 ${getBorderColor(step?.color)} bg-card flex items-center justify-center shadow-lg`}>
                    <span className="text-xl font-bold text-foreground">{step?.id}</span>
                  </div>
                </div>

                {/* Mobile Timeline Node */}
                <div className="lg:hidden flex items-center space-x-4 mb-4">
                  <div className={`w-10 h-10 rounded-full border-2 ${getBorderColor(step?.color)} bg-card flex items-center justify-center`}>
                    <span className="text-sm font-bold text-foreground">{step?.id}</span>
                  </div>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl p-8 border border-border">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Join 500+ businesses who have transformed their operations with MindMesh solutions. 
                Let's discuss how we can help you achieve your digital goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Icon name="Calendar" size={20} />
                  <span>Schedule Free Consultation</span>
                </button>
                
                <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Icon name="Phone" size={20} />
                  <span>Call Now: +91 88848 67171</span>
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-secondary" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-secondary" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-secondary" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
