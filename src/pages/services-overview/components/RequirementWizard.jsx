import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { submitConsultationLead } from '../../../lib/leadService';

const RequirementWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectTypes: ['web-app'],
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
      description: 'SaaS platforms, client portals & high-performance interactive web apps',
      badge: 'Popular'
    },
    {
      value: 'mobile-app',
      label: 'Mobile Application',
      icon: 'Smartphone',
      description: 'Native iOS & Android apps or cross-platform Flutter/React Native solutions',
      badge: null
    },
    {
      value: 'ecommerce',
      label: 'E-commerce Platform',
      icon: 'ShoppingCart',
      description: 'Multi-vendor marketplaces, storefronts & scalable checkout flows',
      badge: null
    },
    {
      value: 'enterprise',
      label: 'Enterprise Solution',
      icon: 'Building2',
      description: 'Custom ERPs, CRMs, internal workforce hubs, and cloud migrations',
      badge: 'Enterprise'
    },
    {
      value: 'ai-ml',
      label: 'AI & Data Integration',
      icon: 'Cpu',
      description: 'Autonomous LLM agents, predictive intelligence & custom data pipelines',
      badge: 'Trending'
    },
    {
      value: 'custom',
      label: 'Custom Software',
      icon: 'Code2',
      description: 'Bespoke microservices, API architecture & distributed system backends',
      badge: null
    }
  ];

  const budgetRanges = [
    { value: '2-5', label: '₹2L - ₹5L', sub: 'Starter MVP' },
    { value: '5-10', label: '₹5L - ₹10L', sub: 'Growth Scale' },
    { value: '10-25', label: '₹10L - ₹25L', sub: 'Enterprise Core' },
    { value: '25-50', label: '₹25L - ₹50L', sub: 'Full Ecosystem' },
    { value: '50+', label: '₹50L+', sub: 'Bespoke Scale' }
  ];

  const timelineOptions = [
    { value: '1-2', label: '1 - 2 Months', sub: 'Fast Track' },
    { value: '3-4', label: '3 - 4 Months', sub: 'Standard MVP' },
    { value: '5-6', label: '5 - 6 Months', sub: 'Production Scale' },
    { value: '6+', label: '6+ Months', sub: 'Multi-Phase' }
  ];

  const featureOptions = [
    { value: 'user-auth', label: 'User Auth & Role Management', icon: 'Shield' },
    { value: 'payment', label: 'Payment Gateway Integration', icon: 'CreditCard' },
    { value: 'admin-panel', label: 'Executive Admin Dashboard', icon: 'LayoutDashboard' },
    { value: 'api-integration', label: 'Third-party API Ecosystem', icon: 'Network' },
    { value: 'real-time', label: 'Real-time Sync & WebSockets', icon: 'Zap' },
    { value: 'analytics', label: 'AI Analytics & Custom Reports', icon: 'BarChart3' },
    { value: 'mobile-responsive', label: 'Mobile-First & PWA Readiness', icon: 'Smartphone' },
    { value: 'seo', label: 'Enterprise Security & Speed', icon: 'Lock' }
  ];

  const steps = [
    { number: 1, title: 'Project Type', icon: 'Layers' },
    { number: 2, title: 'Scope & Budget', icon: 'Sliders' },
    { number: 3, title: 'Contact Info', icon: 'UserCheck' },
    { number: 4, title: 'Blueprint', icon: 'Calculator' }
  ];

  const toggleProjectType = (val) => {
    const current = formData?.projectTypes || ['web-app'];
    if (current.includes(val)) {
      if (current.length > 1) {
        setFormData({ ...formData, projectTypes: current.filter(t => t !== val) });
      }
    } else {
      setFormData({ ...formData, projectTypes: [...current, val] });
    }
  };

  const selectedLabels = projectTypes
    .filter(t => (formData?.projectTypes || ['web-app']).includes(t.value))
    .map(t => t.label);

  const handleNext = async () => {
    if (currentStep < 4) {
      if (currentStep === 2) {
        generateEstimate();
      }
      if (currentStep === 3) {
        generateEstimate();
        setIsSubmitting(true);
        try {
          await submitConsultationLead({
            name: formData?.company || 'Prospective Client',
            email: formData?.email,
            phone: formData?.phone,
            company: formData?.company,
            service: selectedLabels.join(' + '),
            budget: budgetRanges.find(b => b.value === formData?.budget)?.label || formData?.budget,
            timeline: timelineOptions.find(t => t.value === formData?.timeline)?.label || formData?.timeline,
            notes: `Project types: ${selectedLabels.join(', ')}. Features: ${formData?.features?.join(', ') || 'Standard scope'}`
          });
        } catch (err) {
          console.error('Lead submission error:', err);
        } finally {
          setIsSubmitting(false);
        }
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateEstimate = () => {
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

    const types = formData?.projectTypes || ['web-app'];
    const rawSum = types.reduce((acc, t) => acc + (basePrice[t] || 500000), 0);
    const bundleSynergyDiscount = types.length > 1 ? 0.85 : 1.0;
    const base = rawSum * bundleSynergyDiscount;

    const budgetFactor = budgetMultiplier?.[formData?.budget] || 1.0;
    const timelineFactor = timelineMultiplier?.[formData?.timeline] || 1.0;
    const featureFactor = 1 + ((formData?.features?.length || 0) * 0.10);

    const estimatedCost = Math.round(base * budgetFactor * timelineFactor * featureFactor);
    const estimatedTimeline = Math.max(6, Math.round(estimatedCost / 130000));

    setEstimate({
      cost: estimatedCost,
      timeline: estimatedTimeline,
      teamSize: Math.ceil(estimatedCost / 550000) + 2
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            {/* Step Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-1">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                  What type of project are you planning?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Select <strong className="text-primary font-semibold">one or multiple</strong> solution categories that match your vision.
                </p>
              </div>
              <div className="inline-flex items-center space-x-1.5 self-start sm:self-auto bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                <Icon name="CheckCircle2" size={13} />
                <span>{(formData?.projectTypes || []).length} Selected</span>
              </div>
            </div>

            {/* Compact 6-Card Interactive Multi-Select Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {projectTypes.map((type) => {
                const isSelected = (formData?.projectTypes || []).includes(type.value);
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => toggleProjectType(type.value)}
                    className={`group relative text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'border-primary bg-primary/[0.07] ring-2 ring-primary/40 shadow-sm'
                        : 'border-border bg-card hover:border-primary/40 hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center space-x-2.5 min-w-0">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected 
                            ? 'bg-primary text-white shadow-sm' 
                            : 'bg-muted text-foreground group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                          <Icon name={type.icon} size={18} strokeWidth={2} />
                        </div>
                        <div className="min-w-0">
                          <h4 className={`font-bold text-sm truncate ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                            {type.label}
                          </h4>
                          {type.badge && (
                            <span className="inline-block text-[9px] font-black uppercase tracking-wider bg-secondary/15 text-secondary px-1.5 py-0.2 rounded font-mono">
                              {type.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Multi-Select Checkbox Box */}
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center border flex-shrink-0 transition-all ${
                        isSelected 
                          ? 'bg-primary border-primary text-white shadow-sm' 
                          : 'border-border bg-background group-hover:border-primary/50'
                      }`}>
                        {isSelected && <Icon name="Check" size={12} strokeWidth={3} />}
                      </div>
                    </div>

                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug line-clamp-2">
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                Define Scope &amp; Target Budget
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Configuring: <strong className="text-primary">{selectedLabels.join(' + ')}</strong>
              </p>
            </div>

            {/* Budget Range Pills */}
            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Estimated Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {budgetRanges.map((range) => {
                  const isSelected = formData?.budget === range.value;
                  return (
                    <button
                      key={range.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: range.value })}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-primary bg-primary text-white shadow-sm'
                          : 'border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/40'
                      }`}
                    >
                      <div className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-foreground'}`}>
                        {range.label}
                      </div>
                      <div className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {range.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline Pills */}
            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Target Launch Timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timelineOptions.map((timeline) => {
                  const isSelected = formData?.timeline === timeline.value;
                  return (
                    <button
                      key={timeline.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: timeline.value })}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-secondary bg-secondary text-white shadow-sm'
                          : 'border-border bg-card text-foreground hover:border-secondary/40 hover:bg-muted/40'
                      }`}
                    >
                      <div className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-foreground'}`}>
                        {timeline.label}
                      </div>
                      <div className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {timeline.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feature Options Grid */}
            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Key Technical Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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
                      className={`flex items-center space-x-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-primary bg-primary/10 text-foreground ring-1 ring-primary/20 shadow-sm'
                          : 'border-border bg-card text-muted-foreground hover:border-border hover:bg-muted/30 hover:text-foreground'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-md flex items-center justify-center border flex-shrink-0 ${
                        isSelected ? 'bg-primary border-primary text-white' : 'border-border bg-background'
                      }`}>
                        {isSelected && <Icon name="Check" size={11} strokeWidth={3} />}
                      </div>
                      <span className="text-xs font-semibold text-foreground truncate">{feature?.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                Where should we send your preliminary estimate?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Enter your contact info to instantly generate your cost, delivery timeline, and dedicated pod breakdown.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
              <div className="lg:col-span-2 space-y-3">
                <Input
                  label="Company / Startup Name"
                  type="text"
                  value={formData?.company}
                  onChange={(e) => setFormData({ ...formData, company: e?.target?.value })}
                  placeholder="e.g. Acme Tech Solutions"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

              {/* Summary Widget */}
              <div className="bg-muted/40 rounded-xl border border-border p-4 space-y-3 text-xs">
                <div className="font-bold text-foreground uppercase tracking-wider pb-2 border-b border-border/60 flex items-center justify-between">
                  <span>Configuration</span>
                  <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-bold">Summary</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Selected Solution(s):</span>
                    <span className="font-bold text-foreground">{selectedLabels.join(', ')}</span>
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
                </div>
                <div className="pt-2 border-t border-border/60 text-[11px] text-success flex items-center space-x-1.5 font-semibold">
                  <Icon name="ShieldCheck" size={14} />
                  <span>100% Confidential &amp; NDA Covered</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center max-w-xl mx-auto">
              <div className="inline-flex items-center space-x-1.5 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Icon name="CheckCircle2" size={14} />
                <span>Estimate Blueprint Ready</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                Preliminary Delivery &amp; Investment Plan
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Tailored for: <strong className="text-foreground">{selectedLabels.join(' + ')}</strong>
              </p>
            </div>

            {estimate && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="text-center p-4 bg-primary/5 rounded-2xl border border-primary/20 shadow-sm">
                  <Icon name="IndianRupee" size={20} className="text-primary mx-auto mb-1" />
                  <div className="text-2xl sm:text-3xl font-black text-primary mb-0.5">
                    ₹{(estimate?.cost / 100000)?.toFixed(1)}L
                  </div>
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                    Estimated Investment
                  </div>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-2xl border border-secondary/20 shadow-sm">
                  <Icon name="Calendar" size={20} className="text-secondary mx-auto mb-1" />
                  <div className="text-2xl sm:text-3xl font-black text-secondary mb-0.5">
                    {estimate?.timeline} weeks
                  </div>
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                    Project Timeline
                  </div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-2xl border border-accent/20 shadow-sm">
                  <Icon name="Users" size={20} className="text-accent mx-auto mb-1" />
                  <div className="text-2xl sm:text-3xl font-black text-accent mb-0.5">
                    {estimate?.teamSize} experts
                  </div>
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                    Engineering Pod
                  </div>
                </div>
              </div>
            )}

            <div className="bg-muted/30 rounded-xl p-3.5 border border-border text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center space-x-2 text-foreground font-semibold">
                <Icon name="CheckCircle2" size={16} className="text-success flex-shrink-0" />
                <span>Includes architecture blueprint + free 30-min strategy review</span>
              </div>
              <span className="text-xs text-primary font-bold">Bangalore Leadership Pod</span>
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
        return (formData?.projectTypes || []).length > 0;
      case 2:
        return !!formData?.budget && !!formData?.timeline;
      case 3:
        return !!formData?.email && !!formData?.phone;
      default:
        return true;
    }
  };

  return (
    <div className="bg-card/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-border shadow-xl p-5 sm:p-7 max-w-5xl mx-auto overflow-hidden">
      {/* Compact Header & Integrated Stepper */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 mb-5 border-b border-border/70 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
            Project Scope &amp; Estimation Wizard
          </h2>
          <p className="text-xs text-muted-foreground">
            Configure your technical deliverables to generate accurate budget &amp; timelines.
          </p>
        </div>

        {/* Compact Stepper Track */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {steps?.map((step, index) => {
            const isCompleted = currentStep > step?.number;
            const isCurrent = currentStep === step?.number;
            return (
              <React.Fragment key={step?.number}>
                <div 
                  className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-primary text-white shadow-sm ring-2 ring-primary/20'
                      : isCompleted
                      ? 'bg-success/15 text-success'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {isCompleted ? (
                    <Icon name="Check" size={12} strokeWidth={3} />
                  ) : (
                    <span>{step?.number}</span>
                  )}
                  <span className="hidden md:inline">{step?.title}</span>
                </div>
                {index < steps?.length - 1 && (
                  <div className={`w-3 sm:w-4 h-0.5 ${currentStep > index + 1 ? 'bg-primary' : 'bg-border'}`}></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Dynamic Content Container */}
      <div className="mb-6">
        {renderStepContent()}
      </div>

      {/* Compact Wizard Action Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/80">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          iconName="ArrowLeft"
          iconPosition="left"
          className="rounded-xl px-4"
        >
          Previous
        </Button>
        <div className="text-xs font-semibold text-muted-foreground">
          Step <span className="text-foreground font-bold">{currentStep}</span> of {steps?.length}
        </div>
        <Button
          variant="default"
          size="sm"
          onClick={handleNext}
          disabled={!canProceed() || isSubmitting}
          iconName={currentStep === 4 ? "MessageSquare" : "ArrowRight"}
          iconPosition="right"
          className="gradient-accent rounded-xl px-5 shadow-sm"
        >
          {isSubmitting ? "Processing..." : (currentStep === 4 ? "Request Consultation" : "Next Step")}
        </Button>
      </div>
    </div>
  );
};

export default RequirementWizard;
