import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const VisionSection = () => {
  const leadershipTeam = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      vision: "To build technology that amplifies human potential rather than replacing it. Our future is about creating solutions that make people more productive, creative, and fulfilled in their work."
    },
    {
      name: "Deepika Kannadasan",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      vision: "The next decade will be defined by intelligent automation and human-AI collaboration. We're positioning MindMesh to be at the forefront of this transformation, helping businesses navigate this new landscape."
    }
  ];

  const futureGoals = [
    {
      title: "Global Expansion",
      description: "Establish offices in 3 international markets by 2026, bringing our human-centered approach to technology consulting worldwide.",
      icon: "Globe",
      timeline: "2024-2026",
      color: "primary"
    },
    {
      title: "AI-Powered Solutions",
      description: "Integrate advanced AI capabilities into all our service offerings, making intelligent automation accessible to businesses of all sizes.",
      icon: "Brain",
      timeline: "2024-2025",
      color: "secondary"
    },
    {
      title: "Open Source Contributions",
      description: "Launch 5 major open-source projects that benefit the global developer community and showcase our technical expertise.",
      icon: "Code",
      timeline: "2024-2027",
      color: "accent"
    },
    {
      title: "Sustainable Technology",
      description: "Achieve carbon-neutral operations and help clients build environmentally responsible technology solutions.",
      icon: "Leaf",
      timeline: "2025-2026",
      color: "secondary"
    }
  ];

  const coreValues = [
    {
      title: "Innovation with Purpose",
      description: "We don't innovate for the sake of innovation. Every solution we create must solve a real problem and add genuine value.",
      icon: "Lightbulb"
    },
    {
      title: "Human-First Technology",
      description: "Technology should serve people, not the other way around. We design with empathy and build with humanity in mind.",
      icon: "Heart"
    },
    {
      title: "Transparent Partnership",
      description: "Our clients are partners, not just customers. We believe in open communication, honest feedback, and shared success.",
      icon: "Handshake"
    },
    {
      title: "Continuous Growth",
      description: "We're committed to learning, evolving, and pushing boundaries—both as individuals and as an organization.",
      icon: "TrendingUp"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Telescope" size={16} />
            <span>Our Vision</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shaping the Future of Technology Consulting
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our vision extends beyond just delivering projects. We're building a future where technology truly serves humanity, where innovation is accessible to all, and where every solution makes the world a little bit better.
          </p>
        </div>

        {/* Leadership Vision */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Leadership Vision</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam?.map((leader, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Image
                      src={leader?.image}
                      alt={leader?.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Quote" size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">{leader?.name}</h4>
                    <p className="text-primary font-medium mb-4">{leader?.role}</p>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{leader?.vision}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Our Roadmap to the Future</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {futureGoals?.map((goal, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-${goal?.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={goal?.icon} size={24} className={`text-${goal?.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-semibold text-foreground">{goal?.title}</h4>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {goal?.timeline}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{goal?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Values That Guide Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues?.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{value?.title}</h4>
                <p className="text-sm text-muted-foreground">{value?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-soft border border-border">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Join Us in Building the Future
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a talented professional looking for your next challenge, or a business ready to transform through technology, we'd love to connect with you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact-consultation">
                <Button variant="default" size="lg" iconName="MessageCircle" iconPosition="left" className="gradient-accent">
                  Start Your Project
                </Button>
              </Link>
              <Button variant="outline" size="lg" iconName="Users" iconPosition="left">
                View Open Positions
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">2030</div>
                  <div className="text-sm text-muted-foreground">Vision Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Projects Goal</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Global Offices</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
              "At MindMesh, we believe that the future belongs to organizations that can seamlessly blend human creativity with technological capability. We're not just building software—we're crafting the tools that will empower the next generation of innovators, entrepreneurs, and change-makers."
            </blockquote>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">The MindMesh Team</div>
                <div className="text-sm text-muted-foreground">Building the future, together</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
