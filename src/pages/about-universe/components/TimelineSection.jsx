import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded by three passionate developers with a vision to bridge the gap between complex technology and real business needs.",
      icon: "Rocket",
      color: "primary"
    },
    {
      year: "2020",
      title: "First Major Success",
      description: "Delivered our first enterprise-level project for a leading fintech company, establishing our reputation for quality and reliability.",
      icon: "Trophy",
      color: "secondary"
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew from 3 to 15 team members, bringing in specialists in UI/UX, DevOps, and project management.",
      icon: "Users",
      color: "accent"
    },
    {
      year: "2022",
      title: "WorkHub Development",
      description: "Started building our internal workforce management platform, practicing what we preach about digital transformation.",
      icon: "Code",
      color: "primary"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Achieved ISO 27001 certification and recognized as 'Emerging Tech Partner of the Year' by TechIndia Awards.",
      icon: "Award",
      color: "secondary"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched our AI-powered project estimation tools and expanded into emerging technologies like blockchain and IoT.",
      icon: "Zap",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Journey of Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every milestone represents our commitment to growth, learning, and delivering exceptional value to our clients.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
          
          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={milestone?.year} className={`flex items-center min-h-[200px] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border contain-layout">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${milestone?.color}/10 flex-shrink-0`}>
                        <Icon name={milestone?.icon} size={24} className={`text-${milestone?.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-foreground">{milestone?.year}</div>
                        <div className="text-sm text-muted-foreground">Milestone</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone?.title}</h3>
                    <p className="text-muted-foreground">{milestone?.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto lg:mx-0 flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full bg-${milestone?.color} border-4 border-background shadow-lg`}></div>
                </div>
                
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
