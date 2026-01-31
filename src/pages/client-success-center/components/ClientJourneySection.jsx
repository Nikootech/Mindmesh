import React from 'react';
import Icon from '../../../components/AppIcon';

const ClientJourneySection = () => {
  const journeySteps = [
    {
      phase: "Discovery",
      title: "Initial Consultation",
      description: "We start with a comprehensive consultation to understand your business goals, technical requirements, and project constraints.",
      duration: "1-2 weeks",
      deliverables: ["Requirements analysis", "Technical feasibility study", "Project roadmap", "Cost estimation"],
      icon: "Search",
      color: "primary"
    },
    {
      phase: "Planning",
      title: "Strategic Planning",
      description: "Detailed project planning with architecture design, technology selection, and team allocation for optimal results.",
      duration: "1-2 weeks",
      deliverables: ["System architecture", "Technology stack", "Team assignment", "Timeline finalization"],
      icon: "Map",
      color: "secondary"
    },
    {
      phase: "Development",
      title: "Agile Development",
      description: "Iterative development with regular client feedback, ensuring the solution evolves according to your needs.",
      duration: "4-16 weeks",
      deliverables: ["Weekly demos", "Code reviews", "Progress reports", "Feature releases"],
      icon: "Code",
      color: "accent"
    },
    {
      phase: "Testing",
      title: "Quality Assurance",
      description: "Comprehensive testing including functionality, performance, security, and user acceptance testing.",
      duration: "1-2 weeks",
      deliverables: ["Test reports", "Bug fixes", "Performance optimization", "Security audit"],
      icon: "Shield",
      color: "success"
    },
    {
      phase: "Deployment",
      title: "Go-Live Support",
      description: "Smooth deployment with monitoring, training, and immediate support to ensure successful launch.",
      duration: "1 week",
      deliverables: ["Production deployment", "User training", "Documentation", "Go-live support"],
      icon: "Rocket",
      color: "warning"
    },
    {
      phase: "Support",
      title: "Ongoing Partnership",
      description: "Continuous support, maintenance, and enhancement to ensure your solution grows with your business.",
      duration: "Ongoing",
      deliverables: ["24/7 monitoring", "Regular updates", "Feature enhancements", "Technical support"],
      icon: "Heart",
      color: "error"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      secondary: "bg-secondary/10 text-secondary border-secondary/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      success: "bg-success/10 text-success border-success/20",
      warning: "bg-warning/10 text-warning border-warning/20",
      error: "bg-error/10 text-error border-error/20"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="Route" size={16} className="mr-2" />
            Client Journey
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Success Journey with MindMesh
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing partnership, we guide you through every step 
            of your digital transformation journey
          </p>
        </div>

        <div className="relative">
          {/* Journey Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>

          <div className="space-y-12 lg:space-y-16">
            {journeySteps?.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-card rounded-xl p-8 shadow-soft border border-border hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {step?.phase}
                      </span>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {step?.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">{step?.title}</h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step?.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {step?.deliverables?.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Icon name="Check" size={16} className="text-secondary mr-2 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="relative z-10 my-8 lg:my-0">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${getColorClasses(step?.color)}`}>
                    <Icon name={step?.icon} size={24} />
                  </div>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every successful project starts with a conversation. Let's discuss your vision 
              and create a roadmap for your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center">
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule Consultation
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-colors duration-200 flex items-center justify-center">
                <Icon name="Download" size={20} className="mr-2" />
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientJourneySection;
