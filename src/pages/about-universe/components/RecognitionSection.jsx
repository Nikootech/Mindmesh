import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecognitionSection = () => {
  const certifications = [
    {
      title: "ISO 27001:2013",
      description: "Information Security Management System certification ensuring the highest standards of data protection and security.",
      icon: "Shield",
      issuer: "BSI Group",
      year: "2023",
      impact: "Guarantees enterprise-level security for all client projects"
    },
    {
      title: "AWS Partner Network",
      description: "Advanced Consulting Partner status with proven expertise in cloud architecture and migration services.",
      icon: "Cloud",
      issuer: "Amazon Web Services",
      year: "2022",
      impact: "Enables cost-effective and scalable cloud solutions"
    },
    {
      title: "Google Cloud Partner",
      description: "Certified partner with expertise in Google Cloud Platform services and solutions.",
      icon: "Zap",
      issuer: "Google Cloud",
      year: "2023",
      impact: "Provides access to cutting-edge AI and ML capabilities"
    },
    {
      title: "Microsoft Gold Partner",
      description: "Gold competency in Application Development and Cloud Platform solutions.",
      icon: "Award",
      issuer: "Microsoft",
      year: "2022",
      impact: "Ensures seamless integration with Microsoft ecosystem"
    }
  ];

  const awards = [
    {
      title: "Emerging Tech Partner of the Year",
      organization: "TechIndia Awards 2023",
      description: "Recognized for innovative solutions and exceptional client service in the technology consulting space.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Best Workplace for Innovation",
      organization: "StartupIndia Recognition 2023",
      description: "Acknowledged for creating an environment that fosters creativity and technological innovation.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Client Choice Award",
      organization: "Business Excellence Awards 2022",
      description: "Voted by clients for outstanding project delivery and customer satisfaction.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const mediaFeatures = [
    {
      title: "The Future of Workforce Management",
      publication: "TechCrunch India",
      date: "March 2024",
      description: "How MindMesh\'s WorkHub is revolutionizing internal team management for tech companies.",
      link: "#"
    },
    {
      title: "Building Human-Centered Technology",
      publication: "YourStory",
      date: "January 2024",
      description: "An in-depth look at MindMesh\'s philosophy of putting people first in technology solutions.",
      link: "#"
    },
    {
      title: "Small Team, Big Impact",
      publication: "Inc42",
      date: "November 2023",
      description: "How a 25-person consultancy is competing with industry giants through innovation and quality.",
      link: "#"
    }
  ];

  const clientLogos = [
    {
      name: "TechCorp Solutions",
      logo: "https://via.placeholder.com/120x60/1E40AF/FFFFFF?text=TechCorp"
    },
    {
      name: "InnovateLabs",
      logo: "https://via.placeholder.com/120x60/10B981/FFFFFF?text=InnovateLabs"
    },
    {
      name: "DataFlow Systems",
      logo: "https://via.placeholder.com/120x60/EA580C/FFFFFF?text=DataFlow"
    },
    {
      name: "CloudFirst Inc",
      logo: "https://via.placeholder.com/120x60/6366F1/FFFFFF?text=CloudFirst"
    },
    {
      name: "NextGen Fintech",
      logo: "https://via.placeholder.com/120x60/8B5CF6/FFFFFF?text=NextGen"
    },
    {
      name: "SmartRetail Co",
      logo: "https://via.placeholder.com/120x60/F59E0B/FFFFFF?text=SmartRetail"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Trophy" size={16} />
            <span>Recognition & Trust</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industry Recognition & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is recognized by industry leaders, clients, and certification bodies worldwide.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={cert?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-foreground">{cert?.title}</h4>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {cert?.year}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-3">{cert?.issuer}</p>
                    <p className="text-muted-foreground mb-4">{cert?.description}</p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <Icon name="CheckCircle" size={14} className="inline mr-2 text-secondary" />
                        <strong>Client Impact:</strong> {cert?.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {awards?.map((award, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="relative h-48">
                  <Image
                    src={award?.image}
                    alt={award?.title}
                    width="300"
                    height="192"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Trophy" size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{award?.title}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{award?.organization}</p>
                  <p className="text-sm text-muted-foreground">{award?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Featured In Media</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures?.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Newspaper" size={20} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{feature?.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{feature?.publication}</span>
                      <span>•</span>
                      <span>{feature?.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{feature?.description}</p>
                <a
                  href={feature?.link}
                  className="inline-flex items-center space-x-2 text-primary text-sm font-medium hover:underline"
                >
                  <span>Read Article</span>
                  <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Trusted by Leading Companies</h3>
            <p className="text-lg text-muted-foreground">
              We're proud to work with innovative companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos?.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client?.logo}
                  alt={client?.name}
                  width="120"
                  height="60"
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Repeat Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
