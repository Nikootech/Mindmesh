import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);

  const contactMethods = [
    {
      id: 'consultation',
      title: 'Free Consultation Call',
      description: 'Book a 30-minute discovery call to discuss your project requirements and get expert advice.',
      icon: 'Calendar',
      color: 'primary',
      action: 'Book Now',
      availability: 'Available today',
      features: ['Project scoping', 'Technology recommendations', 'Timeline estimation', 'Next steps planning']
    },
    {
      id: 'technical',
      title: 'Technical Discussion',
      description: 'Deep-dive technical session for complex projects requiring detailed architecture planning.',
      icon: 'Code',
      color: 'secondary',
      action: 'Schedule',
      availability: 'Within 24 hours',
      features: ['Architecture review', 'Technology stack planning', 'Integration possibilities', 'Performance considerations']
    },
    {
      id: 'emergency',
      title: 'Emergency Support',
      description: 'Urgent support for existing clients facing critical issues or time-sensitive requirements.',
      icon: 'AlertTriangle',
      color: 'error',
      action: 'Contact Now',
      availability: 'Immediate response',
      features: ['24/7 availability', 'Critical issue resolution', 'Emergency deployment', 'Hotfix support']
    },
    {
      id: 'workshop',
      title: 'Strategy Workshop',
      description: 'Collaborative workshop to align your team and define comprehensive digital transformation roadmap.',
      icon: 'Users',
      color: 'accent',
      action: 'Plan Workshop',
      availability: 'Next week',
      features: ['Team alignment', 'Strategy development', 'Roadmap creation', 'Stakeholder buy-in']
    }
  ];

  const experts = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Lead Solution Architect',
      expertise: ['Web Development', 'System Architecture', 'Cloud Solutions'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      availability: 'Available now',
      rating: 4.9,
      projects: 150,
      specialization: 'Enterprise solutions and scalable architectures'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Mobile App Specialist',
      expertise: ['React Native', 'Flutter', 'iOS/Android'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      availability: 'Available in 2 hours',
      rating: 4.8,
      projects: 120,
      specialization: 'Cross-platform mobile applications'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Digital Transformation Lead',
      expertise: ['Process Automation', 'Legacy Migration', 'Change Management'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      availability: 'Available tomorrow',
      rating: 4.9,
      projects: 200,
      specialization: 'End-to-end digital transformation'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'SaaS Product Manager',
      expertise: ['Product Strategy', 'SaaS Architecture', 'User Experience'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      availability: 'Available now',
      rating: 4.7,
      projects: 80,
      specialization: 'Custom SaaS platforms and product development'
    }
  ];

  const officeLocations = [
    {
      city: 'Bangalore',
      address: 'Manyata Mahogany, F2, 9&10 FLR\nManyata-Techpar, Arabic College\nBangalore, Karnataka 560045',
      phone: '+91 88848 67171',
      hours: 'Mon-Fri: 9:00 AM - 7:00 PM',
      timezone: 'IST (GMT+5:30)',
      mapUrl: 'https://www.google.com/maps?q=13.0500,77.6100&z=14&output=embed'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      error: 'bg-error/10 text-error border-error/20',
      accent: 'bg-accent/10 text-accent border-accent/20'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Multiple Ways to Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the consultation method that works best for your project needs and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods?.map((method) => (
            <div key={method?.id} className="bg-card rounded-xl p-6 border border-border hover-lift">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(method?.color)}`}>
                <Icon name={method?.icon} size={24} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{method?.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method?.description}</p>
              
              <div className="space-y-2 mb-4">
                {method?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center text-xs text-muted-foreground">
                    <Icon name="Check" size={12} className="mr-2 text-secondary" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>{method?.availability}</span>
                <Icon name="Clock" size={12} />
              </div>
              
              <Button variant="outline" size="sm" fullWidth>
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Expert Team */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Meet Our Experts</h3>
            <p className="text-muted-foreground">
              Connect with the right specialist for your project type and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts?.map((expert) => (
              <div 
                key={expert?.id} 
                className={`bg-card rounded-xl p-6 border cursor-pointer transition-all duration-200 ${
                  selectedExpert === expert?.id 
                    ? 'border-primary shadow-lg' 
                    : 'border-border hover:border-primary/50 hover-lift'
                }`}
                onClick={() => setSelectedExpert(selectedExpert === expert?.id ? null : expert?.id)}
              >
                <div className="text-center mb-4">
                  <img
                    src={expert?.avatar}
                    alt={expert?.name}
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold text-foreground">{expert?.name}</h4>
                  <p className="text-sm text-muted-foreground">{expert?.role}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center">
                      <Icon name="Star" size={12} className="text-warning mr-1" />
                      <span className="text-foreground font-medium">{expert?.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="text-foreground font-medium">{expert?.projects}+</span>
                  </div>
                  
                  <div className="text-xs">
                    <span className="text-muted-foreground">Expertise:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {expert?.expertise?.map((skill, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    <span className="text-secondary">{expert?.availability}</span>
                  </div>
                </div>

                {selectedExpert === expert?.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">{expert?.specialization}</p>
                    <Button variant="default" size="sm" fullWidth iconName="MessageCircle" iconPosition="left">
                      Connect with {expert?.name?.split(' ')?.[0]}
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Visit Our Offices</h3>
            <p className="text-muted-foreground">
              Meet us in person at our Mumbai or Delhi locations for detailed project discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {officeLocations?.map((office, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden border border-border">
                <div className="h-48 relative">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={`${office?.city} Office Location`}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={office?.mapUrl}
                    className="border-0"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground">{office?.city} Office</h4>
                    <div className="flex items-center text-secondary text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      Open Now
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={16} className="text-muted-foreground mt-1" />
                      <div>
                        <p className="text-sm text-foreground whitespace-pre-line">{office?.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-muted-foreground" />
                      <p className="text-sm text-foreground">{office?.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <p className="text-sm text-foreground">{office?.hours}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Globe" size={16} className="text-muted-foreground" />
                      <p className="text-sm text-foreground">{office?.timezone}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-6">
                    <Button variant="outline" size="sm" iconName="Navigation" iconPosition="left">
                      Get Directions
                    </Button>
                    <Button variant="default" size="sm" iconName="Calendar" iconPosition="left">
                      Schedule Visit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
