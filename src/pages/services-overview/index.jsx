import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import CategorySection from './components/CategorySection';
import ProcessOverview from './components/ProcessOverview';
import CaseStudyCard from './components/CaseStudyCard';
import PricingTransparency from './components/PricingTransparency';
import TeamSpotlight from './components/TeamSpotlight';
import RequirementWizard from './components/RequirementWizard';
import Footer from '../../components/ui/Footer';

const ServicesOverview = () => {
  const [expandedServices, setExpandedServices] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const serviceCategories = [
    {
      id: 'core-development',
      title: 'Core Development',
      description: 'Foundation technologies that power modern digital experiences with scalable architecture and cutting-edge frameworks.',
      icon: 'Code',
      iconBg: 'bg-gradient-to-br from-primary to-primary/80',
      services: [
        {
          id: 'web-development',
          title: 'Web Application Development',
          subtitle: 'Modern, scalable web solutions',
          description: 'Custom web applications built with React, Next.js, and modern frameworks. From simple websites to complex enterprise platforms with real-time features and seamless user experiences.',
          technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
          timeline: '6-16 weeks',
          teamSize: '3-5 experts',
          startingPrice: '3,50,000',
          projectCount: 127,
          icon: 'Globe',
          iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
          process: [
            'Requirements analysis and technical planning',
            'UI/UX design and user journey mapping',
            'Frontend development with responsive design',
            'Backend API development and database design',
            'Testing, deployment, and performance optimization'
          ],
          deliverables: [
            'Fully responsive web application',
            'Admin dashboard and content management',
            'API documentation and integration guides',
            'Performance monitoring and analytics setup'
          ],
          teamMembers: [
            { name: 'Arjun Sharma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' },
            { name: 'Deepika Kannadasan', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face' },
            { name: 'Rahul Kumar', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face' }
          ]
        },
        {
          id: 'mobile-development',
          title: 'Mobile App Development',
          subtitle: 'Native & cross-platform solutions',
          description: 'iOS and Android applications using React Native and Flutter. Native performance with cross-platform efficiency, including offline capabilities and push notifications.',
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
          timeline: '8-20 weeks',
          teamSize: '3-6 experts',
          startingPrice: '4,50,000',
          projectCount: 89,
          icon: 'Smartphone',
          iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
          process: [
            'Platform strategy and technical architecture',
            'Native UI/UX design for iOS and Android',
            'Cross-platform development and optimization',
            'App store submission and approval process',
            'Post-launch monitoring and updates'
          ],
          deliverables: [
            'Native iOS and Android applications',
            'App store listings and marketing assets',
            'Push notification system integration',
            'Analytics and crash reporting setup'
          ],
          teamMembers: [
            { name: 'Deepika Kannadasan', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face' },
            { name: 'Sneha Gupta', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face' },
            { name: 'Arjun Sharma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' }
          ]
        },
        {
          id: 'cloud-solutions',
          title: 'Cloud Infrastructure',
          subtitle: 'Scalable cloud architecture',
          description: 'AWS, Google Cloud, and Azure solutions with auto-scaling, monitoring, and security. From simple hosting to complex microservices architecture.',
          technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Monitoring'],
          timeline: '4-12 weeks',
          teamSize: '2-4 experts',
          startingPrice: '2,50,000',
          projectCount: 156,
          icon: 'Cloud',
          iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
          process: [
            'Infrastructure assessment and planning',
            'Cloud architecture design and security setup',
            'Migration strategy and implementation',
            'Monitoring and alerting configuration',
            'Performance optimization and cost management'
          ],
          deliverables: [
            'Scalable cloud infrastructure setup',
            'CI/CD pipeline configuration',
            'Monitoring and logging systems',
            'Security and backup strategies'
          ],
          teamMembers: [
            { name: 'Rahul Kumar', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
            { name: 'Arjun Sharma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' }
          ]
        }
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Modernize your business processes with intelligent automation, seamless integrations, and data-driven insights.',
      icon: 'Zap',
      iconBg: 'bg-gradient-to-br from-secondary to-secondary/80',
      services: [
        {
          id: 'process-automation',
          title: 'Process Automation',
          subtitle: 'Intelligent workflow optimization',
          description: 'Automate repetitive tasks and complex workflows using AI and machine learning. Reduce manual effort by 70% while improving accuracy and compliance.',
          technologies: ['Python', 'RPA Tools', 'AI/ML', 'Workflow Engines', 'APIs'],
          timeline: '6-14 weeks',
          teamSize: '3-5 experts',
          startingPrice: '4,00,000',
          projectCount: 73,
          icon: 'Zap',
          iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600',
          process: [
            'Process mapping and automation opportunity analysis',
            'Workflow design and automation logic development',
            'Integration with existing systems and databases',
            'Testing and validation with real business scenarios',
            'Deployment and team training for new processes'
          ],
          deliverables: [
            'Automated workflow systems',
            'Integration with existing tools',
            'Performance monitoring dashboards',
            'Training materials and documentation'
          ],
          teamMembers: [
            { name: 'Sneha Gupta', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face' },
            { name: 'Arjun Sharma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' }
          ]
        },
        {
          id: 'system-integration',
          title: 'System Integration',
          subtitle: 'Seamless data flow across platforms',
          description: 'Connect disparate systems, databases, and third-party services. Create unified data flows and eliminate information silos across your organization.',
          technologies: ['REST APIs', 'GraphQL', 'Message Queues', 'ETL Tools', 'Webhooks'],
          timeline: '4-10 weeks',
          teamSize: '2-4 experts',
          startingPrice: '3,00,000',
          projectCount: 94,
          icon: 'Link',
          iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600',
          process: [
            'System audit and integration requirements analysis',
            'API design and data mapping strategies',
            'Integration development and testing',
            'Data migration and synchronization setup',
            'Monitoring and maintenance protocols'
          ],
          deliverables: [
            'Custom API integrations',
            'Data synchronization systems',
            'Real-time monitoring dashboards',
            'Integration documentation and guides'
          ],
          teamMembers: [
            { name: 'Rahul Kumar', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face' },
            { name: 'Deepika Kannadasn', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face' }
          ]
        }
      ]
    },
    {
      id: 'innovation-labs',
      title: 'Innovation Labs',
      description: 'Cutting-edge solutions using artificial intelligence, machine learning, and custom SaaS platforms to give you competitive advantage.',
      icon: 'Lightbulb',
      iconBg: 'bg-gradient-to-br from-accent to-accent/80',
      services: [
        {
          id: 'ai-ml-solutions',
          title: 'AI/ML Solutions',
          subtitle: 'Intelligent automation & insights',
          description: 'Custom AI models for predictive analytics, natural language processing, computer vision, and intelligent automation. Transform your data into competitive advantage.',
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Data Science'],
          timeline: '8-16 weeks',
          teamSize: '3-6 experts',
          startingPrice: '6,00,000',
          projectCount: 42,
          icon: 'Brain',
          iconBg: 'bg-gradient-to-br from-pink-500 to-pink-600',
          process: [
            'Data assessment and AI opportunity identification',
            'Model development and training with your data',
            'Integration with existing systems and workflows',
            'Performance testing and accuracy validation',
            'Deployment and continuous learning setup'
          ],
          deliverables: [
            'Custom AI/ML models and algorithms',
            'Data processing and analysis pipelines',
            'Prediction and recommendation systems',
            'Model monitoring and retraining protocols'
          ],
          teamMembers: [
            { name: 'Sneha Gupta', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face' },
            { name: 'Arjun Sharma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' }
          ]
        },
        {
          id: 'custom-saas',
          title: 'Custom SaaS Development',
          subtitle: 'Build your own software platform',
          description: 'Multi-tenant SaaS platforms with subscription management, user analytics, and scalable architecture. Turn your business idea into a profitable software service.',
          technologies: ['React', 'Node.js', 'Multi-tenancy', 'Payment APIs', 'Analytics'],
          timeline: '12-24 weeks',
          teamSize: '4-8 experts',
          startingPrice: '8,00,000',
          projectCount: 28,
          icon: 'Layers',
          iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
          process: [
            'SaaS architecture and multi-tenancy design',
            'Core platform development and user management',
            'Subscription and billing system integration',
            'Analytics and reporting dashboard creation',
            'Launch strategy and scaling optimization'
          ],
          deliverables: [
            'Complete SaaS platform with user management',
            'Subscription and billing system',
            'Admin dashboard and analytics',
            'API documentation and developer tools'
          ],
          teamMembers: [
            { name: 'Arjun Sharma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' },
            { name: 'Deepika Kannadasan', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face' },
            { name: 'Rahul Kumar', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face' },
            { name: 'Sneha Gupta', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face' }
          ]
        }
      ]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      description: 'Modernized legacy e-commerce system with microservices architecture, resulting in 300% performance improvement and 45% increase in conversion rates.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      category: 'Web Development',
      categoryColor: 'bg-blue-100 text-blue-800',
      client: {
        name: 'RetailMax Solutions',
        industry: 'E-commerce',
        logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop'
      },
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      duration: '16 weeks',
      improvement: '+300% Speed',
      metrics: [
        { value: '300%', label: 'Performance' },
        { value: '45%', label: 'Conversion' },
        { value: '₹2.5Cr', label: 'Revenue Impact' }
      ]
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'Built comprehensive patient management system with telemedicine capabilities, serving 50,000+ patients across 15 hospitals.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      category: 'Enterprise Solution',
      categoryColor: 'bg-green-100 text-green-800',
      client: {
        name: 'MediCare Network',
        industry: 'Healthcare',
        logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=50&h=50&fit=crop'
      },
      technologies: ['React', 'Python', 'PostgreSQL', 'WebRTC'],
      duration: '20 weeks',
      improvement: '+85% Efficiency',
      metrics: [
        { value: '50K+', label: 'Patients' },
        { value: '15', label: 'Hospitals' },
        { value: '85%', label: 'Efficiency' }
      ]
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Platform',
      description: 'Developed machine learning platform for predictive analytics, helping clients reduce operational costs by 40% through intelligent insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      category: 'AI/ML Solution',
      categoryColor: 'bg-purple-100 text-purple-800',
      client: {
        name: 'DataInsights Corp',
        industry: 'Analytics',
        logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop'
      },
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      duration: '14 weeks',
      improvement: '+40% Cost Savings',
      metrics: [
        { value: '40%', label: 'Cost Reduction' },
        { value: '95%', label: 'Accuracy' },
        { value: '24/7', label: 'Monitoring' }
      ]
    },
    {
      id: 4,
      title: 'Mobile Banking Application',
      description: 'Secure mobile banking app with biometric authentication and real-time transactions, serving 100,000+ active users daily.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      category: 'Mobile Development',
      categoryColor: 'bg-orange-100 text-orange-800',
      client: {
        name: 'SecureBank Digital',
        industry: 'Banking',
        logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=50&h=50&fit=crop'
      },
      technologies: ['React Native', 'Node.js', 'Blockchain', 'AWS'],
      duration: '18 weeks',
      improvement: '+200% User Growth',
      metrics: [
        { value: '100K+', label: 'Daily Users' },
        { value: '99.9%', label: 'Uptime' },
        { value: '4.8★', label: 'App Rating' }
      ]
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Mobile Development', label: 'Mobile Development' },
    { value: 'Enterprise Solution', label: 'Enterprise Solutions' },
    { value: 'AI/ML Solution', label: 'AI/ML Solutions' }
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies?.filter(study => study?.category === activeFilter);

  const handleToggleService = (serviceId) => {
    setExpandedServices(prev => 
      prev?.includes(serviceId) 
        ? prev?.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Software & Web Solutions | IoT, CRM, Finance, HR"
        description="MindMesh provides expert Software Development, Web Applications, IoT Solutions, and custom CRM/ERP systems for Finance and HR industries. Transform your business with us."
        keywords="software development, web development company, IoT solutions, CRM software, finance software, HR management systems, MindMesh, digital transformation"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
          <div className="absolute inset-0 mesh-pattern opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Complete Service Ecosystem
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
                Smart Solutions for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Business & Tech
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
                From concept to deployment, we deliver comprehensive digital solutions that transform your business challenges into competitive advantages. Expert teams, proven processes, transparent pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-accent" iconName="ArrowRight" iconPosition="right">
                  Explore Ecosystem
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" iconName="MessageCircle" iconPosition="left">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { label: 'Projects Delivered', value: '500+' },
                { label: 'Client Satisfaction', value: '98%' },
                { label: 'Expert Teams', value: '15+' },
                { label: 'Support SLA', value: '99.9%' }
              ]?.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
                  <div className="text-sm text-muted-foreground">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {serviceCategories?.map((category) => (
              <CategorySection
                key={category?.id}
                category={category}
                expandedServices={expandedServices}
                onToggleService={handleToggleService}
              />
            ))}
          </div>
        </section>

        {/* Requirements Wizard */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RequirementWizard />
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProcessOverview />
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingTransparency />
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-6">
                <Icon name="Target" size={16} className="mr-2" />
                Proven Results
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Case Studies & Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real projects, real results. See how we've helped businesses across various industries achieve their digital goals.
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {filterOptions?.map((option) => (
                  <button
                    key={option?.value}
                    onClick={() => setActiveFilter(option?.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeFilter === option?.value
                        ? 'bg-primary text-white shadow-soft'
                        : 'bg-card text-muted-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    {option?.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredCaseStudies?.map((study) => (
                <CaseStudyCard key={study?.id} caseStudy={study} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Spotlight */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TeamSpotlight />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join 500+ businesses that have transformed their digital journey with MindMesh. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="xl" className="gradient-accent" iconName="Rocket" iconPosition="right">
                  Start Your Project Now
                </Button>
              </Link>
              <Button size="xl" variant="outline" iconName="Calendar" iconPosition="left">
                Schedule Technology Audit
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesOverview;
