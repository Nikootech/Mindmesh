import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTransparency = () => {
  const pricingFactors = [
    {
      icon: "Layers",
      title: "Project Complexity",
      description: "Simple websites start lower, complex enterprise systems require more investment",
      impact: "2x - 5x multiplier"
    },
    {
      icon: "Users",
      title: "Team Size Required",
      description: "Larger projects need bigger teams with specialized expertise",
      impact: "₹50K - ₹200K per expert"
    },
    {
      icon: "Clock",
      title: "Timeline Requirements",
      description: "Rush projects require additional resources and premium pricing",
      impact: "20% - 40% premium"
    },
    {
      icon: "Shield",
      title: "Security & Compliance",
      description: "Banking, healthcare, and enterprise security add complexity",
      impact: "₹100K - ₹500K additional"
    }
  ];

  const projectRanges = [
    {
      type: "Startup MVP",
      range: "₹2L - ₹8L",
      timeline: "6-12 weeks",
      description: "Perfect for validating your idea with core features",
      features: ["Core functionality", "Basic UI/UX", "Mobile responsive", "Basic analytics"]
    },
    {
      type: "Business Application",
      range: "₹8L - ₹25L",
      timeline: "3-6 months",
      description: "Comprehensive solutions for growing businesses",
      features: ["Advanced features", "Custom integrations", "Admin panels", "Performance optimization"]
    },
    {
      type: "Enterprise Solution",
      range: "₹25L - ₹1Cr+",
      timeline: "6-18 months",
      description: "Large-scale systems with complex requirements",
      features: ["Microservices", "High availability", "Advanced security", "Custom workflows"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Transparent Pricing</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We believe in honest pricing. Here's how we calculate project costs and what factors 
          influence the final investment required for your success.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {projectRanges?.map((range, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-soft">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">{range?.type}</h3>
              <div className="text-2xl font-bold text-primary mb-1">{range?.range}</div>
              <div className="text-sm text-muted-foreground">{range?.timeline}</div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 text-center">
              {range?.description}
            </p>

            <div className="space-y-2">
              {range?.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
          What Affects Project Cost?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingFactors?.map((factor, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={factor?.icon} size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{factor?.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{factor?.description}</p>
                  <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                    {factor?.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center bg-card rounded-xl p-8 border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Get Your Project Estimate
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Every project is unique. Share your requirements and get a detailed estimate 
          within 24 hours, including timeline, team composition, and investment breakdown.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" iconName="Calculator" iconPosition="left">
            Get Instant Estimate
          </Button>
          <Button variant="outline" size="lg" iconName="MessageCircle" iconPosition="left">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingTransparency;
