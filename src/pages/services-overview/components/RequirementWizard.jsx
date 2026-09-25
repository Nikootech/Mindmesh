import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { submitConsultationLead } from '../../../lib/leadService';

const RequirementWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: 'web-app',
    budget: '5-10',
    timeline: '3-4',
    features: ['user-auth', 'admin-panel'],
    company: '',
    email: '',
    phone: ''
  });
  const [estimate, setEstimate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    {
      value: 'web-app',
      label: 'Web Application',
      icon: 'Globe',
      description: 'SaaS platforms, client portals & interactive web apps',
      popular: true
    },
    {
      value: 'mobile-app',
      label: 'Mobile Application',
      icon: 'Smartphone',
      description: 'Native iOS & Android apps or high-performance cross-platform',
      popular: false
    },
    {
      value: 'ecommerce',
      label: 'E-commerce Platform',
      icon: 'ShoppingCart',
      description: 'Multi-vendor marketplaces, storefronts & custom checkouts',
      popular: false
    },
    {
      value: 'enterprise',
      label: 'Enterprise Solution',
      icon: 'Building2',
      description: 'Custom ERPs, CRMs, internal workflows & cloud migration',
      popular: true
    },
    {
      value: 'ai-ml',
      label: 'AI & Data Integration',
      icon: 'Cpu',
      description: 'LLM agents, predictive models & automated data intelligence',
      popular: false
    },
    {
      value: 'custom',
      label: 'Custom Software',
      icon: 'Code2',
      description: 'Bespoke microservices, API engineering & complex backends',
      popular: false
    }
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
    { value: 'user-auth', label: 'User Authentication', icon: 'Shield' },
    { value: 'payment', label: 'Payment Integration', icon: 'CreditCard' },
    { value: 'admin-panel', label: 'Admin Dashboard', icon: 'LayoutDashboard' },
    { value: 'api-integration', label: 'Third-party APIs', icon: 'Network' },
    { value: 'real-time', label: 'Real-time Features', icon: 'Zap' },
    { value: 'analytics', label: 'Analytics & Reporting', icon: 'BarChart3' },
    { value: 'mobile-responsive', label: 'Mobile Responsive', icon: 'Smartphone' },
    { value: 'seo', label: 'SEO Optimization', icon: 'Search' }
  ];

  const steps = [
    { number: 1, title: 'Project Type', icon: 'Layers' },
    { number: 2, title: 'Requirements', icon: 'Settings' },
    { number: 3, title: 'Contact Info', icon: 'User' },
    { number: 4, title: 'Estimate', icon: 'Calculator' }
  ];

  const handleNext = async () => {
    if (currentStep < 4) {
      if (currentStep === 3) {
        generateEstimate();
      }
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 4) {
      setIsSubmitting(true);
      try {
        await submitConsultationLead({
          name: formData.company || 'Requirement Wizard Lead',
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          features: formData.features,
          description: `Requirement Wizard Proposal: ${formData.features?.length || 0} features selected.`
        }, estimate);

        alert("Thank you! Your project proposal has been submitted. Our engineering team will review it and email you within 2 hours.");
      } catch (err) {
        console.error(err);
        alert("Thank you! Your proposal details have been received.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateEstimate = () => {
    // Estimation logic
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
    const featureFactor = 1 + ((formData?.features?.length || 0) * 0.12);

    const estimatedCost = Math.round(base * budgetFactor * timelineFactor * featureFactor);
    const estimatedTimeline = Math.max(6, Math.round(estimatedCost / 120000));

    setEstimate({
      cost: estimatedCost,
      timeline: estimatedTimeline,
      teamSize: Math.ceil(estimatedCost / 500000) + 2
    });
  };

  const selectedTypeObj = projectTypes.find(t => t.value === formData?.projectType) || projectTypes[0];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                What type of project are you planning?
              </h3>
              <p className="text-sm text-muted-foreground">
                Select a project category below to tailor your technology stack, timeline, and accurate investment estimate.
              </p>
            </div>

            {/* Interactive 6-Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type) => {
                const isSelected = formData?.projectType === type.value;
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: type.value })}
                    className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between ${
                      isSelected
                        ? 'border-primary bg-primary/5 shadow-md ring-2 ring-primary/20'
                        : 'border-border/80 bg-card hover:border-primary/40 hover:bg-muted/30 shadow-sm'
                    }`}
                  >
                    {type.popular && (
                      <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20">
                        Popular
                      </span>
                    )}

                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 transition-colors ${
                        isSelected ? 'bg-primary text-white shadow-sm' : 'bg-muted text-foreground'
                      }`}>
                        <Icon name={type.icon} size={22} />
                      </div>
                      <h4 className="font-bold text-foreground text-base mb-1.5">
                        {type.label}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs font-semibold">
                      <span className={isSelected ? 'text-primary font-bold' : 'text-muted-foreground'}>
                        {isSelected ? 'Selected' : 'Choose Plan'}
                      </span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        isSelected ? 'bg-primary border-primary text-white' : 'border-border bg-background'
                      }`}>
                        {isSelected && <Icon name="Check" size={12} strokeWidth={3} />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Define Your Budget & Requirements
              </h3>
              <p className="text-sm text-muted-foreground">
                Help us size the resources, infrastructure, and delivery roadmap for your {selectedTypeObj?.label}.
              </p>
            </div>

            {/* Budget Range Pills */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2.5">
                Estimated Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {budgetRanges.map((range) => {
                  const isSelected = formData?.budget === range.value;
                  return (
                    <button
                      key={range.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: range.value })}
                      className={`px-3 py-3 rounded-xl border text-sm font-semibold transition-all ${
                        isSelected
                          ? 'border-primary bg-primary text-white shadow-md'
                          : 'border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/40'
                      }`}
                    >
                      {range.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline Pills */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2.5">
                Target Launch Timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timelineOptions.map((timeline) => {
                  const isSelected = formData?.timeline === timeline.value;
                  return (
                    <button
                      key={timeline.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: timeline.value })}
                      className={`px-3 py-3 rounded-xl border text-sm font-semibold transition-all ${
                        isSelected
                          ? 'border-primary bg-primary text-white shadow-md'
                          : 'border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/40'
                      }`}
                    >
                      {timeline.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feature Options Grid */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2.5">
                Key Features Required (Select all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {featureOptions?.map((feature) => {
                  const isSelected = formData?.features?.includes(feature?.value);
                  return (
                    <button
                      key={feature?.value}
                      type="button"
                      onClick={() => {
                        if (isSelected) {
                          setFormData({
                            ...formData,
                            features: formData?.features?.filter(f => f !== feature?.value)
                          });
                        } else {
                          setFormData({
                            ...formData,
                            features: [...formData?.features, feature?.value]
                          });
                        }
                      }}
                      className={`flex items-center space-x-2.5 p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-primary bg-primary/5 text-foreground ring-1 ring-primary/20 shadow-sm'
                          : 'border-border bg-card text-muted-foreground hover:border-border/80 hover:bg-muted/30'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border flex-shrink-0 ${
                        isSelected ? 'bg-primary border-primary text-white' : 'border-border'
                      }`}>
                        {isSelected && <Icon name="Check" size={11} strokeWidth={3} />}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{feature?.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Where should we send your estimate?
              </h3>
              <p className="text-sm text-muted-foreground">
                Enter your details to generate your preliminary budget, timeline, and team allocation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Form Inputs */}
              <div className="lg:col-span-2 space-y-4">
                <Input
                  label="Company / Startup Name"
                  type="text"
                  value={formData?.company}
                  onChange={(e) => setFormData({ ...formData, company: e?.target?.value })}
                  placeholder="e.g. Acme Tech Solutions"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Business Email Address"
                    type="email"
                    value={formData?.email}
                    onChange={(e) => setFormData({ ...formData, email: e?.target?.value })}
                    placeholder="name@company.com"
                    required
                  />
                  <Input
                    label="Contact Phone / WhatsApp"
                    type="tel"
                    value={formData?.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e?.target?.value })}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              {/* Live Configuration Summary Card */}
              <div className="bg-muted/40 rounded-2xl border border-border p-5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Configuration Summary
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project:</span>
                    <span className="font-bold text-foreground">{selectedTypeObj?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-bold text-primary">
                      {budgetRanges.find(b => b.value === formData?.budget)?.label || 'Not set'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-bold text-secondary">
                      {timelineOptions.find(t => t.value === formData?.timeline)?.label || 'Not set'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Features:</span>
                    <span className="font-semibold text-foreground">
                      {formData?.features?.length || 0} selected
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 text-xs text-muted-foreground space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-success">
                    <Icon name="ShieldCheck" size={14} />
                    <span className="font-medium">100% Confidential & NDA Protected</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>Instant breakdown on next screen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
                <Icon name="CheckCircle2" size={16} />
                <span>Estimate Ready</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
                Your Preliminary Project Estimate
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Based on your selected requirements for <strong>{selectedTypeObj?.label}</strong>, here is our preliminary delivery plan.
              </p>
            </div>

            {estimate && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/20 shadow-sm">
                  <Icon name="IndianRupee" size={32} className="text-primary mx-auto mb-2" />
                  <div className="text-3xl font-black text-primary mb-1">
                    ₹{(estimate?.cost / 100000)?.toFixed(1)}L
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Estimated Investment
                  </div>
                </div>
                <div className="text-center p-6 bg-secondary/5 rounded-2xl border border-secondary/20 shadow-sm">
                  <Icon name="Calendar" size={32} className="text-secondary mx-auto mb-2" />
                  <div className="text-3xl font-black text-secondary mb-1">
                    {estimate?.timeline} weeks
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Project Timeline
                  </div>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-2xl border border-accent/20 shadow-sm">
                  <Icon name="Users" size={32} className="text-accent mx-auto mb-2" />
                  <div className="text-3xl font-black text-accent mb-1">
                    {estimate?.teamSize} experts
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Dedicated Team Size
                  </div>
                </div>
              </div>
            )}

            <div className="bg-muted/30 rounded-2xl p-6 border border-border">
              <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-3">
                Included Deliverables & Next Steps
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span>Comprehensive architectural blueprint</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span>Free 30-min technical consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span>Detailed milestone-based quote</span>
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
        return !!formData?.projectType;
      case 2:
        return !!formData?.budget && !!formData?.timeline;
      case 3:
        return !!formData?.email && !!formData?.phone;
      default:
        return true;
    }
  };

  return (
    <div className="bg-card rounded-3xl border border-border shadow-soft p-6 sm:p-10 max-w-5xl mx-auto">
      {/* Wizard Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6 text-center tracking-tight">
          Get Your Project Estimate
        </h2>

        {/* Stepper Navigation */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4">
          {steps?.map((step, index) => (
            <div key={step?.number} className="flex items-center">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                  currentStep >= step?.number
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <Icon name={step?.icon} size={18} />
              </div>
              <div className="ml-2 hidden md:block">
                <div className={`text-xs sm:text-sm font-semibold ${
                  currentStep >= step?.number ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step?.title}
                </div>
              </div>
              {index < steps?.length - 1 && (
                <div className="w-6 sm:w-12 h-0.5 bg-border mx-2 sm:mx-3"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Content Container */}
      <div className="mb-8">
        {renderStepContent()}
      </div>

      {/* Wizard Action Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-border/80">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Previous
        </Button>
        <div className="text-xs sm:text-sm font-medium text-muted-foreground">
          Step {currentStep} of {steps?.length}
        </div>
        <Button
          variant="default"
          onClick={handleNext}
          disabled={!canProceed() || isSubmitting}
          iconName={currentStep === 4 ? "Send" : "ArrowRight"}
          iconPosition="right"
          className="gradient-accent"
        >
          {isSubmitting ? "Sending..." : (currentStep === 4 ? "Send Proposal" : "Next")}
        </Button>
      </div>
    </div>
  );
};

export default RequirementWizard;
