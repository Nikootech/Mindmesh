import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickActions = [
    {
      title: "Start Your Project",
      description: "Get a custom quote and project timeline",
      icon: "Rocket",
      color: "primary",
      link: "/contact",
      cta: "Get Quote"
    },
    {
      title: "Explore Services",
      description: "Discover our full range of solutions",
      icon: "Layers",
      color: "secondary",
      link: "/services",
      cta: "View Services"
    },
    {
      title: "See Our Work",
      description: "Browse case studies and success stories",
      icon: "Eye",
      color: "accent",
      link: "/solutions",
      cta: "View Portfolio"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/5',
        border: 'border-primary/20',
        icon: 'text-primary',
        iconBg: 'bg-primary/10',
        button: 'bg-primary hover:bg-primary/90'
      },
      secondary: {
        bg: 'bg-secondary/5',
        border: 'border-secondary/20',
        icon: 'text-secondary',
        iconBg: 'bg-secondary/10',
        button: 'bg-secondary hover:bg-secondary/90'
      },
      accent: {
        bg: 'bg-accent/5',
        border: 'border-accent/20',
        icon: 'text-accent',
        iconBg: 'bg-accent/10',
        button: 'bg-accent hover:bg-accent/90'
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Ready to Transform?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Your success is our code. Join 50+ businesses who've transformed their operations 
            with our smart solutions and transparent approach.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button 
                size="xl"
                className="gradient-accent hover-lift text-lg px-8 py-4"
                iconName="ArrowRight" 
                iconPosition="right"
              >
                Start Your Project Today
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="xl"
              className="hover-lift text-lg px-8 py-4"
              iconName="Calendar" 
              iconPosition="left"
            >
              Schedule Free Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span>100% Secure & Confidential</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>24-hour Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-secondary" />
              <span>99.8% Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {quickActions?.map((action, index) => {
            const colors = getColorClasses(action?.color);
            
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-soft hover:-translate-y-2 ${colors?.bg} ${colors?.border} bg-card/50`}
              >
                <div className={`w-16 h-16 rounded-2xl ${colors?.iconBg} flex items-center justify-center mb-6`}>
                  <Icon name={action?.icon} size={24} className={colors?.icon} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {action?.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {action?.description}
                </p>
                <Link to={action?.link}>
                  <Button 
                    variant="outline"
                    className={`w-full ${colors?.button} text-white border-0 hover:scale-105 transition-transform`}
                    iconName="ArrowRight" 
                    iconPosition="right"
                  >
                    {action?.cta}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card/80 rounded-2xl border border-border p-8 shadow-soft">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Mail" size={24} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with Tech Insights
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Get weekly insights on digital transformation, industry trends, and exclusive tips 
              from our team of experts. No spam, just valuable content.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                  className="flex-1"
                  aria-label="Email address for newsletter"
                />
                <Button 
                  type="submit"
                  className="gradient-accent"
                  iconName="Send" 
                  iconPosition="right"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-success">
                <Icon name="CheckCircle" size={20} />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Icon name="Phone" size={20} className="text-primary" />
            </div>
            <h4 className="font-semibold text-foreground">Call Us</h4>
            <p className="text-muted-foreground">+91 88848 67171</p>
            <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM IST</p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
              <Icon name="Mail" size={20} className="text-secondary" />
            </div>
            <h4 className="font-semibold text-foreground">Email Us</h4>
            <p className="text-muted-foreground">Deepika@mindmesh.co.in</p>
            <p className="text-sm text-muted-foreground">24-hour response time</p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
              <Icon name="MapPin" size={20} className="text-accent" />
            </div>
            <h4 className="font-semibold text-foreground">Visit Us</h4>
            <p className="text-muted-foreground">Bangalore, Karnataka</p>
            <p className="text-sm text-muted-foreground">India's Silicon Valley</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
