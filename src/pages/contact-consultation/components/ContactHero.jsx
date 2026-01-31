import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 mesh-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Free Consultation Available
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Build Something
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Amazing</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
            Get instant project estimates, connect with our experts, and start your digital transformation journey today. 
            Our intelligent consultation system adapts to your specific needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Quick Response</div>
                <div className="text-sm text-muted-foreground">Within 2 hours</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Calculator" size={20} className="text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Instant Estimates</div>
                <div className="text-sm text-muted-foreground">Real-time pricing</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border border-border">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={20} className="text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Expert Matching</div>
                <div className="text-sm text-muted-foreground">Right specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
