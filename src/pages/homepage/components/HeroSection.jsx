import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories = [
    {
      id: 1,
      client: "TechCorp Solutions",
      outcome: "300% efficiency increase",
      description: "Workflow automation transformed their operations",
      metric: "47 hours saved weekly",
      industry: "Technology"
    },
    {
      id: 2,
      client: "RetailMax India",
      outcome: "250% sales growth",
      description: "E-commerce platform drove digital transformation",
      metric: "₹2.5Cr additional revenue",
      industry: "Retail"
    },
    {
      id: 3,
      client: "HealthFirst Clinics",
      outcome: "180% patient satisfaction",
      description: "Digital health platform streamlined patient care",
      metric: "15,000+ patients served",
      industry: "Healthcare"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % successStories?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [successStories?.length]);

  const currentStory = successStories?.[currentStoryIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 mesh-pattern opacity-40"></div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse animation-delay-200"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-pulse animation-delay-400"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Proper Hierarchy: Tag -> Headline -> Description -> CTAs -> Trust Badges */}
          <div className="text-center lg:text-left">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center space-x-2.5 bg-card/90 backdrop-blur-sm border border-border/80 px-4 py-2 rounded-full shadow-sm mb-6 hover:border-primary/40 transition-colors">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-foreground">Live Success:</span>
              <span className="text-xs sm:text-sm font-bold text-primary">{currentStory?.client}</span>
              <span className="text-xs text-muted-foreground hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">{currentStory?.outcome}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Where{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Minds Mesh
                </span>
                ,{' '}
                <span className="relative">
                  Innovation
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>{' '}
                Emerges
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Smart solutions aren't just about code—they're about understanding the human element behind every business challenge. We build the future, one brilliant connection at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/contact-consultation">
                <Button 
                  size="lg" 
                  className="gradient-accent hover-lift"
                  iconName="ArrowRight" 
                  iconPosition="right"
                >
                  Start Your Project
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                iconName="Play" 
                iconPosition="left"
                className="hover-lift"
                onClick={() => {
                  document.getElementById('workhub-preview')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore WorkHub Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span>99.8% Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Dashboard + Client Impact Card */}
          <div className="relative">
            <div className="relative bg-card/50 rounded-3xl p-6 sm:p-8 border border-border shadow-soft">
              {/* WorkHub Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">WorkHub Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-xs text-success">Live</span>
                  </div>
                </div>

                {/* Mock Dashboard Elements */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Briefcase" size={16} className="text-primary" />
                      <span className="text-sm font-medium">Active Projects</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">47</p>
                    <p className="text-xs text-muted-foreground">Across 23 clients</p>
                  </div>

                  <div className="bg-success/5 rounded-xl p-4 border border-success/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="TrendingUp" size={16} className="text-success" />
                      <span className="text-sm font-medium">Efficiency</span>
                    </div>
                    <p className="text-2xl font-bold text-success">98.5%</p>
                    <p className="text-xs text-muted-foreground">Team productivity</p>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Recent Activity</span>
                    <Icon name="MoreHorizontal" size={16} className="text-muted-foreground" />
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { user: "Priya S.", action: "completed UI design review", time: "2 min ago" },
                      { user: "Rahul K.", action: "deployed feature update", time: "15 min ago" },
                      { user: "Team", action: "daily standup completed", time: "1 hour ago" }
                    ]?.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-white">
                            {activity?.user?.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground truncate">
                            <span className="font-medium">{activity?.user}</span> {activity?.action}
                          </p>
                          <p className="text-xs text-muted-foreground">{activity?.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/about-universe">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    fullWidth
                    iconName="ExternalLink" 
                    iconPosition="right"
                    className="text-primary hover:bg-primary/5"
                  >
                    See How We Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Rotating Live Success Story Highlight Card */}
            <div className="mt-4 bg-card rounded-2xl border border-border p-5 shadow-soft hover-lift transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-success uppercase tracking-wider">Live Success Story</span>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full font-medium">
                  {currentStory?.industry}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-foreground">{currentStory?.client}</h4>
                  <p className="text-xl font-black text-primary">{currentStory?.outcome}</p>
                  <p className="text-xs text-muted-foreground">{currentStory?.description}</p>
                </div>
                <div className="text-right pl-4 flex-shrink-0">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-success bg-success/10 px-2.5 py-1 rounded-lg border border-success/20">
                    <Icon name="TrendingUp" size={14} />
                    <span>{currentStory?.metric}</span>
                  </div>
                </div>
              </div>

              {/* Story Indicators */}
              <div className="flex justify-center space-x-1.5 mt-3 pt-2.5 border-t border-border/50">
                {successStories?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index)}
                    aria-label={`Show success story ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentStoryIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -top-3 -right-3 bg-card border border-border rounded-xl px-3 py-1.5 shadow-soft hidden sm:block">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold">Real-time metrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
