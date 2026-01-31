import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const stats = [
    { number: "150+", label: "Successful Projects", icon: "Trophy" },
    { number: "98%", label: "Client Satisfaction", icon: "Heart" },
    { number: "45+", label: "Happy Clients", icon: "Users" },
    { number: "24/7", label: "Support Available", icon: "Clock" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 mesh-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="Award" size={16} className="mr-2" />
            Client Success Stories
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Where Success Stories
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Come to Life
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Discover how we've transformed businesses across industries with innovative solutions, 
            measurable results, and partnerships that last beyond project delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-consultation">
              <Button 
                variant="default" 
                size="lg" 
                iconName="ArrowRight" 
                iconPosition="right"
                className="gradient-accent hover-lift"
              >
                Start Your Success Story
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              iconName="Play" 
              iconPosition="left"
              className="hover-lift"
            >
              Watch Client Testimonials
            </Button>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 text-center hover-lift border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat?.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
