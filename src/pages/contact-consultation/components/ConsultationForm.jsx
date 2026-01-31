import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    timeline: '',
    description: '',
    features: [],
    priority: 'medium',
    hasExistingSystem: false,
    teamSize: '',
    preferredContact: 'email'
  });
  const [estimate, setEstimate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development', description: 'Custom websites and web applications' },
    { value: 'mobile-app', label: 'Mobile App Development', description: 'iOS and Android applications' },
    { value: 'digital-transformation', label: 'Digital Transformation', description: 'Complete business digitization' },
    { value: 'custom-saas', label: 'Custom SaaS Solution', description: 'Software as a Service platforms' },
    { value: 'ecommerce', label: 'E-commerce Platform', description: 'Online stores and marketplaces' },
    { value: 'enterprise-software', label: 'Enterprise Software', description: 'Large-scale business solutions' }
  ];

  const budgetRanges = [
    { value: '50000-200000', label: '₹50,000 - ₹2,00,000', description: 'Small to medium projects' },
    { value: '200000-500000', label: '₹2,00,000 - ₹5,00,000', description: 'Medium to large projects' },
    { value: '500000-1000000', label: '₹5,00,000 - ₹10,00,000', description: 'Large enterprise projects' },
    { value: '1000000+', label: '₹10,00,000+', description: 'Enterprise-scale solutions' },
    { value: 'discuss', label: 'Let\'s Discuss', description: 'Custom pricing based on requirements' }
  ];

  const timelineOptions = [
    { value: '1-3-months', label: '1-3 Months', description: 'Quick turnaround projects' },
    { value: '3-6-months', label: '3-6 Months', description: 'Standard development timeline' },
    { value: '6-12-months', label: '6-12 Months', description: 'Complex, feature-rich projects' },
    { value: '12-months+', label: '12+ Months', description: 'Enterprise-scale implementations' },
    { value: 'flexible', label: 'Flexible Timeline', description: 'We can work with your schedule' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Standard Priority', description: 'Normal development pace' },
    { value: 'medium', label: 'High Priority', description: 'Faster delivery with dedicated team' },
    { value: 'high', label: 'Urgent Priority', description: 'Rush delivery with premium support' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email', description: 'Detailed written communication' },
    { value: 'phone', label: 'Phone Call', description: 'Direct voice conversation' },
    { value: 'video', label: 'Video Call', description: 'Face-to-face discussion' },
    { value: 'meeting', label: 'In-Person Meeting', description: 'Office visit in Mumbai/Delhi' }
  ];

  const getFeaturesByProjectType = (type) => {
    const features = {
      'web-development': [
        'Responsive Design', 'Content Management System', 'E-commerce Integration', 
        'User Authentication', 'Payment Gateway', 'Analytics Integration', 
        'SEO Optimization', 'Multi-language Support'
      ],
      'mobile-app': [
        'Cross-platform Development', 'Push Notifications', 'Offline Functionality',
        'Social Media Integration', 'In-app Purchases', 'Location Services',
        'Camera Integration', 'Real-time Chat'
      ],
      'digital-transformation': [
        'Process Automation', 'Data Migration', 'System Integration',
        'Cloud Migration', 'Legacy System Modernization', 'Workflow Optimization',
        'Digital Analytics', 'Change Management'
      ],
      'custom-saas': [
        'Multi-tenant Architecture', 'Subscription Management', 'API Development',
        'Third-party Integrations', 'Advanced Analytics', 'White-label Solution',
        'Scalable Infrastructure', 'Security Compliance'
      ],
      'ecommerce': [
        'Product Catalog Management', 'Shopping Cart', 'Payment Processing',
        'Inventory Management', 'Order Tracking', 'Customer Reviews',
        'Discount System', 'Multi-vendor Support'
      ],
      'enterprise-software': [
        'Custom Workflows', 'Role-based Access', 'Advanced Reporting',
        'System Integration', 'Scalable Architecture', 'Security Features',
        'Performance Optimization', 'Maintenance Support'
      ]
    };
    return features?.[type] || [];
  };

  const calculateEstimate = () => {
    if (!formData?.projectType || !formData?.budget || !formData?.timeline) return null;

    const baseEstimates = {
      'web-development': { min: 60000, max: 300000, duration: '2-4 months' },
      'mobile-app': { min: 150000, max: 600000, duration: '3-6 months' },
      'digital-transformation': { min: 300000, max: 1500000, duration: '6-12 months' },
      'custom-saas': { min: 400000, max: 2000000, duration: '6-18 months' },
      'ecommerce': { min: 100000, max: 500000, duration: '2-5 months' },
      'enterprise-software': { min: 500000, max: 2500000, duration: '8-18 months' }
    };

    const base = baseEstimates?.[formData?.projectType];
    if (!base) return null;

    let multiplier = 1;
    if (formData?.features?.length > 4) multiplier += 0.3;
    if (formData?.priority === 'high') multiplier += 0.2;
    if (formData?.hasExistingSystem) multiplier += 0.15;

    return {
      min: Math.round(base?.min * multiplier),
      max: Math.round(base?.max * multiplier),
      duration: base?.duration,
      features: formData?.features?.length,
      complexity: formData?.features?.length > 4 ? 'High' : formData?.features?.length > 2 ? 'Medium' : 'Low'
    };
  };

  useEffect(() => {
    if (formData?.projectType && formData?.budget && formData?.timeline) {
      setEstimate(calculateEstimate());
    }
  }, [formData?.projectType, formData?.budget, formData?.timeline, formData?.features, formData?.priority, formData?.hasExistingSystem]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev?.features?.includes(feature)
        ? prev?.features?.filter(f => f !== feature)
        : [...prev?.features, feature]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Thank you! Your consultation request has been submitted. We\'ll contact you within 2 hours.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Project Details</h3>
              <p className="text-muted-foreground">Tell us about your project vision</p>
            </div>
            <Select
              label="Project Type"
              description="What type of solution are you looking for?"
              options={projectTypes}
              value={formData?.projectType}
              onChange={(value) => handleInputChange('projectType', value)}
              required
              searchable
            />
            <Input
              label="Project Description"
              type="textarea"
              placeholder="Describe your project goals, target audience, and key requirements..."
              value={formData?.description}
              onChange={(e) => handleInputChange('description', e?.target?.value)}
              required
              className="min-h-32"
            />
            {formData?.projectType && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Key Features Required
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {getFeaturesByProjectType(formData?.projectType)?.map((feature) => (
                    <Checkbox
                      key={feature}
                      label={feature}
                      checked={formData?.features?.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Budget & Timeline</h3>
              <p className="text-muted-foreground">Help us understand your project scope</p>
            </div>
            <Select
              label="Budget Range"
              description="What's your approximate budget for this project?"
              options={budgetRanges}
              value={formData?.budget}
              onChange={(value) => handleInputChange('budget', value)}
              required
            />
            <Select
              label="Preferred Timeline"
              description="When would you like to complete this project?"
              options={timelineOptions}
              value={formData?.timeline}
              onChange={(value) => handleInputChange('timeline', value)}
              required
            />
            <Select
              label="Project Priority"
              description="How urgent is this project for your business?"
              options={priorityOptions}
              value={formData?.priority}
              onChange={(value) => handleInputChange('priority', value)}
              required
            />
            <div className="space-y-4">
              <Checkbox
                label="I have an existing system that needs integration"
                description="This may affect timeline and complexity"
                checked={formData?.hasExistingSystem}
                onChange={(e) => handleInputChange('hasExistingSystem', e?.target?.checked)}
              />

              <Input
                label="Team Size (Optional)"
                type="number"
                placeholder="How many people will be working with our team?"
                value={formData?.teamSize}
                onChange={(e) => handleInputChange('teamSize', e?.target?.value)}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Contact Information</h3>
              <p className="text-muted-foreground">How can we reach you?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Your full name"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                required
              />

              <Input
                label="Company Name"
                type="text"
                placeholder="Your company or organization"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 88848 67171"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
              />
            </div>
            <Select
              label="Preferred Contact Method"
              description="How would you like us to reach out to you?"
              options={contactMethods}
              value={formData?.preferredContact}
              onChange={(value) => handleInputChange('preferredContact', value)}
              required
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Review & Submit</h3>
              <p className="text-muted-foreground">Confirm your details and get instant estimate</p>
            </div>
            {estimate && (
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Calculator" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Instant Project Estimate</h4>
                    <p className="text-sm text-muted-foreground">Based on your requirements</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">₹{estimate?.min?.toLocaleString('en-IN')}</div>
                    <div className="text-xs text-muted-foreground">Starting From</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-secondary">₹{estimate?.max?.toLocaleString('en-IN')}</div>
                    <div className="text-xs text-muted-foreground">Up To</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-accent">{estimate?.duration}</div>
                    <div className="text-xs text-muted-foreground">Timeline</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{estimate?.complexity}</div>
                    <div className="text-xs text-muted-foreground">Complexity</div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <p className="text-sm text-warning-foreground">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    This is a preliminary estimate. Final pricing will be provided after detailed consultation.
                  </p>
                </div>
              </div>
            )}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4">Project Summary</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project Type:</span>
                  <span className="text-foreground font-medium">
                    {projectTypes?.find(p => p?.value === formData?.projectType)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Budget Range:</span>
                  <span className="text-foreground font-medium">
                    {budgetRanges?.find(b => b?.value === formData?.budget)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timeline:</span>
                  <span className="text-foreground font-medium">
                    {timelineOptions?.find(t => t?.value === formData?.timeline)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Features:</span>
                  <span className="text-foreground font-medium">{formData?.features?.length} selected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contact:</span>
                  <span className="text-foreground font-medium">{formData?.email}</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-muted/30 px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Step {currentStep} of 4</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / 4) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  iconName="ChevronRight"
                  iconPosition="right"
                  disabled={
                    (currentStep === 1 && (!formData?.projectType || !formData?.description)) ||
                    (currentStep === 2 && (!formData?.budget || !formData?.timeline)) ||
                    (currentStep === 3 && (!formData?.name || !formData?.email))
                  }
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="gradient-accent"
                >
                  Submit Consultation Request
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
