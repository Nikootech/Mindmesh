import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WorkHubStorySection = () => {
  const workHubFeatures = [
    {
      title: "Project Management",
      description: "Streamlined project tracking with real-time collaboration and client transparency.",
      icon: "FolderOpen",
      benefit: "40% faster project delivery"
    },
    {
      title: "Time Tracking",
      description: "Smart attendance system with productivity analytics and automated reporting.",
      icon: "Clock",
      benefit: "25% improvement in time accuracy"
    },
    {
      title: "Team Collaboration",
      description: "Integrated chat, video calls, and document sharing for seamless teamwork.",
      icon: "Users",
      benefit: "60% reduction in email overhead"
    },
    {
      title: "Analytics Dashboard",
      description: "Data-driven insights for better decision making and performance optimization.",
      icon: "BarChart3",
      benefit: "Real-time business intelligence"
    }
  ];

  const developmentPhases = [
    {
      phase: "Research & Discovery",
      duration: "3 months",
      description: "Studied existing tools, interviewed team members, and identified pain points in our current workflow.",
      icon: "Search"
    },
    {
      phase: "Design & Prototyping",
      duration: "2 months",
      description: "Created user-centered designs with extensive prototyping and usability testing with our own team.",
      icon: "Palette"
    },
    {
      phase: "Development & Testing",
      duration: "8 months",
      description: "Built the platform using React, Node.js, and modern DevOps practices with continuous integration.",
      icon: "Code"
    },
    {
      phase: "Launch & Iteration",
      duration: "Ongoing",
      description: "Deployed internally first, gathered feedback, and continuously improved based on real usage data.",
      icon: "Rocket"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Zap" size={16} />
            <span>WorkHub Story</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why We Built WorkHub
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in practicing what we preach. When we couldn't find a workforce management platform that truly understood how modern tech teams work, we decided to build our own.
          </p>
        </div>

        {/* The Problem */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">The Problem We Faced</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="X" size={12} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Fragmented Tools</h4>
                  <p className="text-sm text-muted-foreground">Using 8+ different tools for project management, time tracking, and team communication.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="X" size={12} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Data Silos</h4>
                  <p className="text-sm text-muted-foreground">Important information scattered across platforms, making reporting and analysis difficult.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="X" size={12} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Poor User Experience</h4>
                  <p className="text-sm text-muted-foreground">Clunky interfaces that slowed down our team instead of empowering them.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="X" size={12} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Limited Customization</h4>
                  <p className="text-sm text-muted-foreground">Generic solutions that didn't adapt to our unique workflows and client needs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Team working on multiple tools"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Development Journey */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Our Development Journey</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentPhases?.map((phase, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={phase?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-sm text-primary font-medium mb-2">{phase?.duration}</div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{phase?.phase}</h4>
                <p className="text-sm text-muted-foreground">{phase?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WorkHub Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">What WorkHub Delivers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {workHubFeatures?.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{feature?.title}</h4>
                    <p className="text-muted-foreground mb-4">{feature?.description}</p>
                    <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      <Icon name="TrendingUp" size={14} />
                      <span>{feature?.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">The Impact on Our Business</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              WorkHub didn't just solve our internal challenges—it transformed how we work and deliver value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Faster Project Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Reduced Communication Overhead</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Team Satisfaction Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Transparency</div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Quote" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground italic mb-4">
                  "Building WorkHub was one of the best decisions we made. It not only solved our internal challenges but also gave us deep insights into workforce management that we now bring to our client projects."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
                    alt="Arjun Sharma"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Arjun Sharma</div>
                    <div className="text-sm text-muted-foreground">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHubStorySection;
