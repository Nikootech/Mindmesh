import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessOverview = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Analysis",
      description: "We dive deep into your business requirements, technical constraints, and success metrics to create a comprehensive project blueprint.",
      icon: "Search",
      duration: "1-2 weeks",
      deliverables: ["Requirements Document", "Technical Specification", "Project Roadmap"]
    },
    {
      id: 2,
      title: "Design & Architecture",
      description: "Our team creates detailed system architecture, user experience designs, and technical specifications that align with your vision.",
      icon: "Layers",
      duration: "2-3 weeks",
      deliverables: ["System Architecture", "UI/UX Designs", "Database Schema"]
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "Agile development with continuous integration, automated testing, and regular client feedback loops ensure quality delivery.",
      icon: "Code",
      duration: "4-12 weeks",
      deliverables: ["Working Software", "Test Reports", "Documentation"]
    },
    {
      id: 4,
      title: "Deployment & Support",
      description: "Seamless deployment to production with comprehensive monitoring, maintenance, and ongoing support for optimal performance.",
      icon: "Rocket",
      duration: "1-2 weeks",
      deliverables: ["Live Application", "Monitoring Setup", "Support Plan"]
    }
  ];

  return (
    <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">How We Work</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our proven methodology ensures successful project delivery through transparent communication, 
          iterative development, and continuous client collaboration.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {processSteps?.map((step, index) => (
          <div key={step?.id} className="relative">
            <div className="bg-card rounded-xl p-6 h-full border border-border shadow-soft hover:shadow-lift transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={step?.icon} size={24} className="text-white" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {step?.duration}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step?.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {step?.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">Key Deliverables:</h4>
                {step?.deliverables?.map((deliverable, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {index < processSteps?.length - 1 && (
              <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="ArrowRight" size={16} className="text-primary" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessOverview;
