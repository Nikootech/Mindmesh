import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 mesh-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Users" size={16} />
                <span>Our Story</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                MindMesh: Where Brilliant Minds
                <span className="text-primary"> Mesh Together</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From a small consultancy to an innovative technology partner, MindMesh has grown by staying true to one principle: smart solutions aren't just about code—they're about understanding the human element behind every business challenge.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">25+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="MindMesh team collaboration"
                className="w-full h-96 object-cover"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">ISO 27001 Certified</div>
                  <div className="text-xs text-muted-foreground">Security & Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
