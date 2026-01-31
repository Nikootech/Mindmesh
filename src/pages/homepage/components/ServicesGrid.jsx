import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies",
      icon: "Globe",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      caseStudy: {
        client: "E-commerce Platform",
        result: "40% faster load times",
        preview: "Built a scalable e-commerce solution handling 10K+ concurrent users"
      },
      color: "primary"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "Smartphone",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      caseStudy: {
        client: "HealthTech Startup",
        result: "4.8★ App Store rating",
        preview: "Developed a telemedicine app serving 50K+ patients monthly"
      },
      color: "secondary"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps automation for modern businesses",
      icon: "Cloud",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
      caseStudy: {
        client: "FinTech Company",
        result: "99.9% uptime achieved",
        preview: "Migrated legacy systems to cloud, reducing costs by 60%"
      },
      color: "accent"
    },
    {
      id: 4,
      title: "AI & Analytics",
      description: "Intelligent data solutions and machine learning implementations",
      icon: "Brain",
      technologies: ["Python", "TensorFlow", "Power BI", "Tableau"],
      caseStudy: {
        client: "Manufacturing Corp",
        result: "30% cost reduction",
        preview: "Implemented predictive maintenance using IoT and ML"
      },
      color: "success"
    },
    {
      id: 5,
      title: "Digital Transformation",
      description: "End-to-end business process automation and digital strategy consulting",
      icon: "Zap",
      technologies: ["Automation", "Integration", "Strategy", "Training"],
      caseStudy: {
        client: "Traditional Retailer",
        result: "200% online growth",
        preview: "Complete digital transformation from offline to omnichannel"
      },
      color: "warning"
    },
    {
      id: 6,
      title: "Cybersecurity",
      description: "Comprehensive security audits, compliance, and protection solutions",
      icon: "Shield",
      technologies: ["Penetration Testing", "Compliance", "Monitoring", "Training"],
      caseStudy: {
        client: "Banking Institution",
        result: "Zero security incidents",
        preview: "Implemented multi-layer security framework with 24/7 monitoring"
      },
      color: "error"
    }
  ];

  const getColorClasses = (color, isHovered) => {
    const colorMap = {
      primary: {
        bg: isHovered ? 'bg-primary/10' : 'bg-primary/5',
        border: 'border-primary/20',
        icon: 'text-primary',
        accent: 'bg-primary'
      },
      secondary: {
        bg: isHovered ? 'bg-secondary/10' : 'bg-secondary/5',
        border: 'border-secondary/20',
        icon: 'text-secondary',
        accent: 'bg-secondary'
      },
      accent: {
        bg: isHovered ? 'bg-accent/10' : 'bg-accent/5',
        border: 'border-accent/20',
        icon: 'text-accent',
        accent: 'bg-accent'
      },
      success: {
        bg: isHovered ? 'bg-success/10' : 'bg-success/5',
        border: 'border-success/20',
        icon: 'text-success',
        accent: 'bg-success'
      },
      warning: {
        bg: isHovered ? 'bg-warning/10' : 'bg-warning/5',
        border: 'border-warning/20',
        icon: 'text-warning',
        accent: 'bg-warning'
      },
      error: {
        bg: isHovered ? 'bg-error/10' : 'bg-error/5',
        border: 'border-error/20',
        icon: 'text-error',
        accent: 'bg-error'
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Layers" size={16} />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smart Solutions for{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Business & Tech
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive digital solutions that drive real business results. 
            Explore our expertise across the full technology spectrum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => {
            const isHovered = hoveredService === service?.id;
            const colors = getColorClasses(service?.color, isHovered);
            
            return (
              <div
                key={service?.id}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isHovered ? 'transform -translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredService(service?.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setHoveredService(isHovered ? null : service?.id)}
              >
                <div className={`h-full p-8 rounded-2xl border transition-all duration-300 ${colors?.bg} ${colors?.border} hover:shadow-soft`}>
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-xl ${colors?.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service?.icon} size={24} className="text-white" />
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service?.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service?.description}
                    </p>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-2">
                      {service?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Preview - Shown on Hover */}
                  <div className={`absolute inset-0 p-8 rounded-2xl bg-card border ${colors?.border} transition-all duration-300 ${
                    isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <div className={`w-8 h-8 rounded-lg ${colors?.accent} flex items-center justify-center`}>
                            <Icon name="Star" size={16} className="text-white" />
                          </div>
                          <span className="text-sm font-medium text-foreground">Case Study</span>
                        </div>

                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {service?.caseStudy?.client}
                        </h4>
                        
                        <p className={`text-2xl font-bold mb-3 ${colors?.icon}`}>
                          {service?.caseStudy?.result}
                        </p>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service?.caseStudy?.preview}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-6">
                        <Link 
                          to="/solutions-gallery"
                          className={`text-sm font-medium ${colors?.icon} hover:underline flex items-center space-x-1`}
                        >
                          <span>View Case Study</span>
                          <Icon name="ArrowRight" size={14} />
                        </Link>
                        
                        <Link 
                          to="/contact"
                          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We'd love to discuss your unique requirements.
          </p>
          
          <Link to="/services">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-medium hover:shadow-soft hover:scale-105 transition-all duration-300">
              <span>Explore All Services</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
