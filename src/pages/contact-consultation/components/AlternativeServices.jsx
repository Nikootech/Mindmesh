import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AlternativeServices = () => {
  const alternativeServices = [
    {
      id: 'workshop',
      title: 'Strategy Workshop',
      subtitle: 'Digital Transformation Planning',
      description: 'Comprehensive workshop to align your team and create a roadmap for digital transformation.',
      duration: '1-2 days',
      price: '₹25,000 - ₹50,000',
      icon: 'Users',
      color: 'primary',
      features: [
        'Stakeholder alignment sessions',
        'Current state assessment',
        'Future state visioning',
        'Technology roadmap creation',
        'Implementation timeline',
        'Budget planning guidance'
      ],
      deliverables: [
        'Digital transformation strategy document',
        'Technology roadmap with priorities',
        'Implementation timeline and milestones',
        'Budget estimates for each phase',
        'Risk assessment and mitigation plan'
      ],
      idealFor: 'Organizations planning major digital initiatives or seeking strategic direction'
    },
    {
      id: 'audit',
      title: 'Technical Audit',
      subtitle: 'System Health Check',
      description: 'Comprehensive evaluation of your existing systems, identifying improvement opportunities.',
      duration: '1-2 weeks',
      price: '₹15,000 - ₹35,000',
      icon: 'Search',
      color: 'secondary',
      features: [
        'Code quality assessment',
        'Performance analysis',
        'Security vulnerability scan',
        'Architecture review',
        'Scalability evaluation',
        'Best practices compliance'
      ],
      deliverables: [
        'Detailed audit report with findings',
        'Priority-based improvement recommendations',
        'Performance optimization suggestions',
        'Security enhancement plan',
        'Modernization roadmap'
      ],
      idealFor: 'Businesses with existing systems needing optimization or modernization'
    },
    {
      id: 'consulting',
      title: 'Strategic Consulting',
      subtitle: 'Expert Technology Guidance',
      description: 'Ongoing strategic guidance for technology decisions, architecture planning, and team development.',
      duration: 'Flexible',
      price: '₹5,000 - ₹15,000/hour',
      icon: 'Lightbulb',
      color: 'accent',
      features: [
        'Technology stack recommendations',
        'Architecture design guidance',
        'Team structure optimization',
        'Process improvement consulting',
        'Vendor evaluation assistance',
        'Strategic planning support'
      ],
      deliverables: [
        'Strategic recommendations document',
        'Architecture blueprints',
        'Technology evaluation reports',
        'Process optimization plans',
        'Team development roadmap'
      ],
      idealFor: 'CTOs, technical leaders, and businesses needing expert guidance on technology decisions'
    },
    {
      id: 'training',
      title: 'Team Training',
      subtitle: 'Skill Development Programs',
      description: 'Customized training programs to upskill your team on modern technologies and best practices.',
      duration: '1-4 weeks',
      price: '₹20,000 - ₹75,000',
      icon: 'GraduationCap',
      color: 'success',
      features: [
        'Customized curriculum design',
        'Hands-on practical sessions',
        'Real-world project exercises',
        'Best practices training',
        'Code review sessions',
        'Certification preparation'
      ],
      deliverables: [
        'Training materials and resources',
        'Practical exercise solutions',
        'Best practices documentation',
        'Skills assessment reports',
        'Certification guidance'
      ],
      idealFor: 'Development teams looking to adopt new technologies or improve existing skills'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      accent: 'bg-accent/10 text-accent border-accent/20',
      success: 'bg-success/10 text-success border-success/20'
    };
    return colors?.[color] || colors?.primary;
  };

  const getGradientClasses = (color) => {
    const gradients = {
      primary: 'from-primary/5 to-primary/10',
      secondary: 'from-secondary/5 to-secondary/10',
      accent: 'from-accent/5 to-accent/10',
      success: 'from-success/5 to-success/10'
    };
    return gradients?.[color] || gradients?.primary;
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Alternative Engagement Options</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Not ready for full development? We offer specialized services to help you plan, optimize, 
            and prepare for your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {alternativeServices?.map((service) => (
            <div key={service?.id} className={`bg-gradient-to-br ${getGradientClasses(service?.color)} rounded-2xl p-8 border border-border`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getColorClasses(service?.color)}`}>
                    <Icon name={service?.icon} size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service?.title}</h3>
                    <p className="text-sm text-muted-foreground">{service?.subtitle}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold text-foreground">{service?.duration}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{service?.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="CheckCircle" size={16} className="mr-2 text-secondary" />
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {service?.features?.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <Icon name="Dot" size={16} className="mr-1 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Package" size={16} className="mr-2 text-secondary" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {service?.deliverables?.map((deliverable, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <Icon name="Dot" size={16} className="mr-1 mt-1 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Investment Range</span>
                  <span className="text-lg font-bold text-foreground">{service?.price}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  <Icon name="Info" size={12} className="inline mr-1" />
                  {service?.idealFor}
                </p>
              </div>

              <div className="flex space-x-3">
                <Button variant="default" size="sm" iconName="Calendar" iconPosition="left" className="flex-1">
                  Schedule Discussion
                </Button>
                <Button variant="outline" size="sm" iconName="FileText" iconPosition="left">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Recent Consultation Success</h3>
            <p className="text-muted-foreground">
              See how our consultation services have helped businesses make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                company: 'TechStart Solutions',
                service: 'Strategy Workshop',
                result: 'Saved ₹15L by choosing the right technology stack',
                feedback: 'The workshop helped us avoid costly mistakes and plan our development roadmap effectively.',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                name: 'Rahul Gupta',
                role: 'CTO'
              },
              {
                company: 'RetailMax India',
                service: 'Technical Audit',
                result: '40% performance improvement identified',
                feedback: 'The audit revealed critical bottlenecks we weren\'t aware of. Implementation of recommendations doubled our system speed.',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
                name: 'Priya Sharma',
                role: 'IT Director'
              },
              {
                company: 'FinanceFlow Corp',
                service: 'Strategic Consulting',
                result: 'Successful cloud migration strategy',
                feedback: 'Expert guidance helped us migrate to cloud with zero downtime and 60% cost reduction.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
                name: 'Amit Patel',
                role: 'VP Technology'
              }
            ]?.map((story, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={story?.avatar}
                    alt={story?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{story?.name}</div>
                    <div className="text-sm text-muted-foreground">{story?.role}, {story?.company}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium mb-2">
                    {story?.service}
                  </div>
                  <div className="font-semibold text-foreground text-sm mb-2">{story?.result}</div>
                  <p className="text-sm text-muted-foreground">{story?.feedback}</p>
                </div>
                
                <div className="flex items-center text-warning">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Choose Your Engagement Model</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need full development, strategic guidance, or specialized consulting, 
              we have the right engagement model for your needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" iconName="MessageCircle" iconPosition="left" className="gradient-accent">
                Discuss Your Needs
              </Button>
              <Button variant="outline" iconName="Calendar" iconPosition="left">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeServices;
