import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const RequirementWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    features: [],
    company: '',
    email: '',
    phone: ''
  });
  const [estimate, setEstimate] = useState(null);

  const projectTypes = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'enterprise', label: 'Enterprise Solution' },
    { value: 'ai-ml', label: 'AI/ML Integration' },
    { value: 'custom', label: 'Custom Development' }
  ];

  const budgetRanges = [
    { value: '2-5', label: '₹2L - ₹5L' },
    { value: '5-10', label: '₹5L - ₹10L' },
    { value: '10-25', label: '₹10L - ₹25L' },
    { value: '25-50', label: '₹25L - ₹50L' },
    { value: '50+', label: '₹50L+' }
  ];

  const timelineOptions = [
    { value: '1-2', label: '1-2 months' },
    { value: '3-4', label: '3-4 months' },
    { value: '5-6', label: '5-6 months' },
    { value: '6+', label: '6+ months' }
  ];

  const featureOptions = [
    { value: 'user-auth', label: 'User Authentication' },
    { value: 'payment', label: 'Payment Integration' },
    { value: 'admin-panel', label: 'Admin Dashboard' },
    { value: 'api-integration', label: 'Third-party APIs' },
    { value: 'real-time', label: 'Real-time Features' },
    { value: 'analytics', label: 'Analytics & Reporting' },
    { value: 'mobile-responsive', label: 'Mobile Responsive' },
    { value: 'seo', label: 'SEO Optimization' }
  ];

  const steps = [
    { number: 1, title: 'Project Type', icon: 'Layers' },
    { number: 2, title: 'Requirements', icon: 'Settings' },
    { number: 3, title: 'Contact Info', icon: 'User' },
    { number: 4, title: 'Estimate', icon: 'Calculator' }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 3) {
      generateEstimate();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateEstimate = () => {
    // Mock estimation logic
    const basePrice = {
      'web-app': 500000,
      'mobile-app': 600000,
      'ecommerce': 800000,
      'enterprise': 1500000,
      'ai-ml': 1200000,
      'custom': 700000
    };

    const budgetMultiplier = {
      '2-5': 0.8,
      '5-10': 1.0,
      '10-25': 1.3,
      '25-50': 1.8,
      '50+': 2.5
    };

    const timelineMultiplier = {
      '1-2': 1.5,
      '3-4': 1.0,
      '5-6': 0.9,
      '6+': 0.8
    };

    const base = basePrice?.[formData?.projectType] || 500000;
    const budgetFactor = budgetMultiplier?.[formData?.budget] || 1.0;
    const timelineFactor = timelineMultiplier?.[formData?.timeline] || 1.0;
    const featureFactor = 1 + (formData?.features?.length * 0.15);

    const estimatedCost = Math.round(base * budgetFactor * timelineFactor * featureFactor);
    const estimatedTimeline = Math.max(8, Math.round(estimatedCost / 100000));

    setEstimate({
      cost: estimatedCost,
      timeline: estimatedTimeline,
      teamSize: Math.ceil(estimatedCost / 500000) + 2
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What type of project are you planning?
              </h3>
              <Select
                label="Project Type"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) => setFormData({ ...formData, projectType: value })}
                placeholder="Select your project type"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Tell us about your requirements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Budget Range"
                  options={budgetRanges}
                  value={formData?.budget}
                  onChange={(value) => setFormData({ ...formData, budget: value })}
                  placeholder="Select budget range"
                />
                <Select
                  label="Timeline"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => setFormData({ ...formData, timeline: value })}
                  placeholder="Select timeline"
                />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Which features do you need?
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {featureOptions?.map((feature) => (
                  <label
                    key={feature?.value}
                    className="flex items-center space-x-2 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors duration-200"
                  >
                    <input
                      type="checkbox"
                      checked={formData?.features?.includes(feature?.value)}
                      onChange={(e) => {
                        if (e?.target?.checked) {
                          setFormData({
                            ...formData,
                            features: [...formData?.features, feature?.value]
                          });
                        } else {
                          setFormData({
                            ...formData,
                            features: formData?.features?.filter(f => f !== feature?.value)
                          });
                        }
                      }}
                      className="rounded border-border"
                    />
                    <span className="text-sm text-foreground">{feature?.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                How can we reach you?
              </h3>
              <div className="space-y-4">
                <Input
                  label="Company Name"
                  type="text"
                  value={formData?.company}
                  onChange={(e) => setFormData({ ...formData, company: e?.target?.value })}
                  placeholder="Your company name"
                />
                <Input
                  label="Email Address"
                  type="email"
                  value={formData?.email}
                  onChange={(e) => setFormData({ ...formData, email: e?.target?.value })}
                  placeholder="your@email.com"
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  value={formData?.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e?.target?.value })}
                  placeholder="+91 88848 67171"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Your Project Estimate
              </h3>
              <p className="text-muted-foreground mb-6">
                Based on your requirements, here's our preliminary estimate
              </p>
            </div>
            {estimate && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <Icon name="IndianRupee" size={32} className="text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">
                    ₹{(estimate?.cost / 100000)?.toFixed(1)}L
                  </div>
                  <div className="text-sm text-muted-foreground">Estimated Investment</div>
                </div>
                <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                  <Icon name="Calendar" size={32} className="text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {estimate?.timeline} weeks
                  </div>
                  <div className="text-sm text-muted-foreground">Project Timeline</div>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <Icon name="Users" size={32} className="text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent mb-1">
                    {estimate?.teamSize} experts
                  </div>
                  <div className="text-sm text-muted-foreground">Team Size</div>
                </div>
              </div>
            )}
            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">What's Next?</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span>We'll send detailed proposal within 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span>Schedule a free consultation call</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span>Meet your dedicated project team</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData?.projectType;
      case 2:
        return formData?.budget && formData?.timeline;
      case 3:
        return formData?.company && formData?.email && formData?.phone;
      default:
        return true;
    }
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-soft p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
          Get Your Project Estimate
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          {steps?.map((step, index) => (
            <div key={step?.number} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step?.number
                    ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                }`}
              >
                <Icon name={step?.icon} size={20} />
              </div>
              <div className="ml-2 hidden sm:block">
                <div className={`text-sm font-medium ${
                  currentStep >= step?.number ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step?.title}
                </div>
              </div>
              {index < steps?.length - 1 && (
                <div className="w-8 h-px bg-border mx-4 hidden sm:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-[400px] mb-8">
        {renderStepContent()}
      </div>
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Step {currentStep} of {steps?.length}
        </div>
        <Button
          variant="default"
          onClick={handleNext}
          disabled={!canProceed()}
          iconName={currentStep === 4 ? "Send" : "ArrowRight"}
          iconPosition="right"
        >
          {currentStep === 4 ? "Send Proposal" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default RequirementWizard;
