import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const IndustryMetricsSection = () => {
  const [activeIndustry, setActiveIndustry] = useState('ecommerce');

  const industries = {
    ecommerce: {
      name: "E-commerce",
      icon: "ShoppingCart",
      description: "Transforming online retail experiences with cutting-edge technology",
      projects: 25,
      avgImprovement: "250%",
      metrics: [
        { label: "Conversion Rate Increase", value: "300%", icon: "TrendingUp" },
        { label: "Page Load Speed Improvement", value: "65%", icon: "Zap" },
        { label: "Mobile Traffic Growth", value: "180%", icon: "Smartphone" },
        { label: "Customer Retention", value: "45%", icon: "Users" }
      ],
      caseStudies: [
        "ShopEase India - ₹50L to ₹2Cr monthly revenue",
        "FashionHub - 400% mobile conversion boost",
        "TechMart - 99.9% uptime achievement"
      ]
    },
    saas: {
      name: "SaaS Platforms",
      icon: "Cloud",
      description: "Building scalable software solutions that grow with your business",
      projects: 18,
      avgImprovement: "320%",
      metrics: [
        { label: "User Engagement Increase", value: "280%", icon: "Activity" },
        { label: "System Performance", value: "400%", icon: "Gauge" },
        { label: "Feature Adoption Rate", value: "75%", icon: "Target" },
        { label: "Customer Satisfaction", value: "95%", icon: "Heart" }
      ],
      caseStudies: [
        "ProjectFlow - 10K to 100K active users",
        "DataSync - 500% processing speed increase",
        "TeamCollab - 95% user satisfaction score"
      ]
    },
    fintech: {
      name: "FinTech",
      icon: "CreditCard",
      description: "Secure, compliant financial technology solutions",
      projects: 12,
      avgImprovement: "200%",
      metrics: [
        { label: "Transaction Processing", value: "500%", icon: "ArrowUpDown" },
        { label: "Security Compliance", value: "100%", icon: "Shield" },
        { label: "User Onboarding Speed", value: "80%", icon: "UserPlus" },
        { label: "Cost Reduction", value: "40%", icon: "DollarSign" }
      ],
      caseStudies: [
        "PaySecure - PCI DSS compliance achieved",
        "LendFast - 3-minute loan approvals",
        "CryptoWallet - Bank-grade security"
      ]
    },
    healthcare: {
      name: "Healthcare",
      icon: "Heart",
      description: "HIPAA-compliant healthcare solutions improving patient outcomes",
      projects: 8,
      avgImprovement: "180%",
      metrics: [
        { label: "Patient Satisfaction", value: "92%", icon: "Smile" },
        { label: "Appointment Efficiency", value: "60%", icon: "Calendar" },
        { label: "Data Security Score", value: "99%", icon: "Lock" },
        { label: "Staff Productivity", value: "35%", icon: "Users" }
      ],
      caseStudies: [
        "MediCare Plus - 50% appointment no-shows reduction",
        "HealthTrack - HIPAA compliance certification",
        "PatientPortal - 92% satisfaction rating"
      ]
    }
  };

  const currentIndustry = industries?.[activeIndustry];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="BarChart3" size={16} className="mr-2" />
            Industry Success Metrics
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Measurable Results Across Industries
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise spans multiple industries, delivering consistent results 
            and measurable improvements for every client
          </p>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(industries)?.map(([key, industry]) => (
            <button
              key={key}
              onClick={() => setActiveIndustry(key)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeIndustry === key
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border'
              }`}
            >
              <Icon name={industry?.icon} size={20} className="mr-2" />
              {industry?.name}
            </button>
          ))}
        </div>

        {/* Industry Content */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Industry Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Icon name={currentIndustry?.icon} size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{currentIndustry?.name}</h3>
                  <p className="text-muted-foreground">{currentIndustry?.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">{currentIndustry?.projects}</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">{currentIndustry?.avgImprovement}</div>
                  <div className="text-sm text-muted-foreground">Avg Improvement</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Notable Success Stories:</h4>
                <ul className="space-y-3">
                  {currentIndustry?.caseStudies?.map((study, index) => (
                    <li key={index} className="flex items-start">
                      <Icon name="CheckCircle" size={16} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{study}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {currentIndustry?.metrics?.map((metric, index) => (
                <div key={index} className="bg-background rounded-xl p-6 text-center hover-lift border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={metric?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{metric?.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{metric?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ready to Achieve Similar Results in {currentIndustry?.name}?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help you achieve measurable improvements in your industry
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center mx-auto">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryMetricsSection;
