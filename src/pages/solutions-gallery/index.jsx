import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterPanel from './components/FilterPanel';
import ProjectModal from './components/ProjectModal';
import RecommendationEngine from './components/RecommendationEngine';
import ComplexityScale from './components/ComplexityScale';
import Footer from '../../components/ui/Footer';

const SolutionsGallery = () => {
  const [activeFilters, setActiveFilters] = useState({
    industry: [],
    type: [],
    technology: [],
    complexity: []
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: 'Digital Banking Platform',
      client: 'SecureBank Ltd.',
      industry: 'FinTech',
      type: 'Digital Transformation',
      complexity: 'Complex',
      timeline: '12 months',
      teamSize: '12',
      impact: '+150% efficiency',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description: 'Complete digital transformation of traditional banking operations with modern web and mobile applications.',
      fullDescription: `A comprehensive digital banking platform that revolutionized how SecureBank serves its customers. The project involved building a complete ecosystem including customer-facing web and mobile applications, internal banking tools, and administrative dashboards. The platform handles millions of transactions daily with 99.9% uptime and enterprise-grade security.`,
      challenge: `SecureBank was struggling with outdated legacy systems that couldn't handle modern banking demands. Customer satisfaction was declining due to slow transaction processing, limited digital services, and poor user experience. The existing infrastructure was also becoming a security risk and compliance nightmare.`,
      solution: `We designed and implemented a modern, cloud-native banking platform using microservices architecture. The solution included real-time transaction processing, advanced security features, mobile-first design, and seamless integration with existing core banking systems. We also implemented AI-powered fraud detection and personalized financial insights.`,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'GraphQL'],
      hasLivePreview: false,
      outcomes: [
        { metric: 'Transaction Speed', value: '3x faster', description: 'Average processing time reduced from 45s to 15s' },
        { metric: 'Customer Satisfaction', value: '92%', description: 'Up from 67% before digital transformation' },
        { metric: 'Operational Cost', value: '-40%', description: 'Reduced manual processing and infrastructure costs' },
        { metric: 'Mobile Adoption', value: '85%', description: 'Of customers now use mobile banking regularly' }
      ],
      testimonial: {
        quote: 'MindMesh transformed our entire banking operation. The new platform exceeded our expectations in every way.',
        author: 'Rajesh Kumar',
        position: 'CTO, SecureBank Ltd.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      client: 'MediCare Hospitals',
      industry: 'HealthTech',
      type: 'System Migration',
      complexity: 'Complex',
      timeline: '8 months',
      teamSize: '10',
      impact: '+200% productivity',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, and billing integration.',
      fullDescription: `A complete healthcare management ecosystem that digitized MediCare's operations across 15 hospital locations. The system manages patient records, appointment scheduling, inventory management, billing, and staff coordination in a unified platform.`,
      challenge: `MediCare was using multiple disconnected systems for different operations, leading to data silos, inefficient workflows, and poor patient experience. Manual processes were causing delays and errors in critical healthcare delivery.`,
      solution: `We developed an integrated healthcare management platform with role-based access for doctors, nurses, administrators, and patients. The system includes electronic health records (EHR), telemedicine capabilities, automated billing, and real-time analytics dashboard.`,
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Redis', 'WebRTC', 'AWS'],
      hasLivePreview: false,
      outcomes: [
        { metric: 'Patient Wait Time', value: '-60%', description: 'Reduced from 45 minutes to 18 minutes average' },
        { metric: 'Administrative Efficiency', value: '+200%', description: 'Automated 80% of manual processes' },
        { metric: 'Data Accuracy', value: '99.8%', description: 'Eliminated manual data entry errors' },
        { metric: 'Patient Satisfaction', value: '94%', description: 'Improved from 72% with better service delivery' }
      ],
      testimonial: {
        quote: 'The system has revolutionized how we deliver healthcare. Our staff can now focus on patients instead of paperwork.',
        author: 'Dr. Priya Sharma',
        position: 'Chief Medical Officer, MediCare',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    },
    {
      id: 3,
      title: 'E-commerce Marketplace',
      client: 'ShopEasy India',
      industry: 'E-commerce',
      type: 'MVP Development',
      complexity: 'Medium',
      timeline: '6 months',
      teamSize: '8',
      impact: '₹50Cr+ GMV',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      description: 'Multi-vendor e-commerce platform with advanced search, payment integration, and seller dashboard.',
      fullDescription: `A comprehensive multi-vendor e-commerce marketplace that connects thousands of sellers with millions of customers across India. The platform handles everything from product listings to payment processing and order fulfillment.`,
      challenge: `ShopEasy needed to compete with established e-commerce giants while providing unique value to both sellers and buyers. They required a scalable platform that could handle high traffic volumes and complex marketplace operations.`,
      solution: `We built a modern e-commerce platform with advanced search capabilities, AI-powered recommendations, multiple payment options, and comprehensive seller tools. The platform includes real-time inventory management, automated order processing, and detailed analytics.`,
      technologies: ['React', 'Node.js', 'MongoDB', 'Elasticsearch', 'Redis', 'Stripe', 'AWS'],
      hasLivePreview: true,
      outcomes: [
        { metric: 'Monthly GMV', value: '₹50Cr+', description: 'Gross Merchandise Value within first year' },
        { metric: 'Active Sellers', value: '25,000+', description: 'Registered and active sellers on platform' },
        { metric: 'Conversion Rate', value: '4.2%', description: 'Above industry average of 2.8%' },
        { metric: 'Page Load Speed', value: '1.8s', description: 'Optimized for mobile and desktop performance' }
      ],
      testimonial: {
        quote: 'MindMesh delivered a world-class e-commerce platform that helped us achieve profitability within 8 months.',
        author: 'Amit Patel',
        position: 'Founder & CEO, ShopEasy India',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    },
    {
      id: 4,
      title: 'Manufacturing ERP System',
      client: 'TechManufacturing Co.',
      industry: 'Manufacturing',
      type: 'Digital Transformation',
      complexity: 'Complex',
      timeline: '14 months',
      teamSize: '15',
      impact: '+180% efficiency',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'Enterprise resource planning system for manufacturing operations with IoT integration and real-time monitoring.',
      fullDescription: `A comprehensive ERP system that digitized TechManufacturing's entire operation from supply chain management to quality control. The system integrates with IoT sensors for real-time monitoring and predictive maintenance.`,
      challenge: `TechManufacturing was losing competitive edge due to inefficient manual processes, lack of real-time visibility into operations, and inability to predict maintenance needs. This resulted in frequent downtime and quality issues.`,
      solution: `We implemented a complete ERP solution with modules for production planning, inventory management, quality control, and maintenance scheduling. The system includes IoT integration for real-time machine monitoring and AI-powered predictive analytics.`,
      technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'InfluxDB', 'Docker', 'Kubernetes', 'IoT Sensors'],
      hasLivePreview: false,
      outcomes: [
        { metric: 'Production Efficiency', value: '+180%', description: 'Optimized workflows and reduced waste' },
        { metric: 'Downtime Reduction', value: '-75%', description: 'Predictive maintenance prevented failures' },
        { metric: 'Quality Improvement', value: '99.2%', description: 'Defect rate reduced from 8% to 0.8%' },
        { metric: 'Cost Savings', value: '₹2.5Cr', description: 'Annual savings from operational improvements' }
      ],
      testimonial: {
        quote: 'The ERP system transformed our manufacturing process. We now have complete visibility and control over our operations.',
        author: 'Suresh Reddy',
        position: 'Operations Director, TechManufacturing',
        avatar: 'https://randomuser.me/api/portraits/men/55.jpg'
      }
    },
    {
      id: 5,
      title: 'EdTech Learning Platform',
      client: 'LearnSmart Academy',
      industry: 'Education',
      type: 'MVP Development',
      complexity: 'Medium',
      timeline: '5 months',
      teamSize: '6',
      impact: '100K+ students',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      description: 'Interactive online learning platform with video streaming, assessments, and progress tracking.',
      fullDescription: `A comprehensive online learning platform that enables LearnSmart Academy to deliver high-quality education to students across India. The platform includes interactive video lessons, real-time assessments, and detailed progress tracking.`,
      challenge: `LearnSmart needed to transition from traditional classroom teaching to online education while maintaining engagement and learning outcomes. They required a platform that could handle thousands of concurrent users and provide interactive learning experiences.`,
      solution: `We developed a modern learning management system with adaptive video streaming, interactive quizzes, virtual classrooms, and AI-powered personalized learning paths. The platform includes mobile apps for students and comprehensive analytics for educators.`,
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS CloudFront', 'React Native'],
      hasLivePreview: true,
      outcomes: [
        { metric: 'Student Enrollment', value: '100K+', description: 'Active students on the platform' },
        { metric: 'Course Completion', value: '87%', description: 'Above industry average of 65%' },
        { metric: 'Student Satisfaction', value: '4.8/5', description: 'Based on platform reviews and feedback' },
        { metric: 'Teacher Productivity', value: '+150%', description: 'Automated grading and progress tracking' }
     ],
      testimonial: {
        quote: 'The platform helped us reach students nationwide and maintain high-quality education during challenging times.',
        author: 'Dr. Meera Joshi',
        position: 'Academic Director, LearnSmart Academy',
        avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
      }
    },
    {
      id: 6,
      title: 'Real Estate CRM',
      client: 'PropertyPro Realty',
      industry: 'Real Estate',
      type: 'System Migration',
      complexity: 'Simple',
      timeline: '3 months',
      teamSize: '4',
      impact: '+120% leads',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      description: 'Customer relationship management system for real estate with lead tracking and automated follow-ups.',
      fullDescription: `A specialized CRM system designed for real estate professionals to manage leads, properties, and client relationships effectively. The system automates many manual processes and provides insights for better decision making.`,
      challenge: `PropertyPro was losing potential clients due to poor lead management and lack of systematic follow-up processes. Their agents were spending too much time on administrative tasks instead of closing deals.`,
      solution: `We built a comprehensive CRM with automated lead capture, intelligent lead scoring, automated follow-up sequences, and integrated communication tools. The system includes property management features and detailed sales analytics.`,
      technologies: ['React', 'Node.js', 'MySQL', 'Twilio', 'SendGrid', 'Google Maps API'],
      hasLivePreview: false,
      outcomes: [
        { metric: 'Lead Conversion', value: '+120%', description: 'Improved from 12% to 26.4%' },
        { metric: 'Response Time', value: '5 minutes', description: 'Automated responses to new leads' },
        { metric: 'Agent Productivity', value: '+80%', description: 'More time for client interactions' },
        { metric: 'Customer Satisfaction', value: '91%', description: 'Improved service delivery and follow-up' }
      ],
      testimonial: {
        quote: 'Our sales have doubled since implementing the CRM. We never miss a lead anymore.',
        author: 'Vikram Singh',
        position: 'Sales Manager, PropertyPro Realty',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
      }
    }
  ];

  // Filter options
  const filters = {
    industries: [...new Set(projects.map(p => p.industry))],
    types: [...new Set(projects.map(p => p.type))],
    technologies: [...new Set(projects.flatMap(p => p.technologies))],
    complexities: [...new Set(projects.map(p => p.complexity))]
  };

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.client?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()))
      );
    }

    // Apply category filters
    Object.entries(activeFilters)?.forEach(([category, values]) => {
      if (values?.length > 0) {
        filtered = filtered?.filter(project => {
          switch (category) {
            case 'industry':
              return values?.includes(project?.industry);
            case 'type':
              return values?.includes(project?.type);
            case 'technology':
              return project?.technologies?.some(tech => values?.includes(tech));
            case 'complexity':
              return values?.includes(project?.complexity);
            default:
              return true;
          }
        });
      }
    });

    // Apply sorting
    switch (sortBy) {
      case 'recent':
        return filtered?.sort((a, b) => b?.id - a?.id);
      case 'complexity':
        const complexityOrder = { 'Simple': 1, 'Medium': 2, 'Complex': 3 };
        return filtered?.sort((a, b) => complexityOrder?.[b?.complexity] - complexityOrder?.[a?.complexity]);
      case 'timeline':
        return filtered?.sort((a, b) => {
          const getMonths = (timeline) => parseInt(timeline?.split(' ')?.[0]);
          return getMonths(a?.timeline) - getMonths(b?.timeline);
        });
      default:
        return filtered;
    }
  }, [projects, activeFilters, searchQuery, sortBy]);

  const displayProjects = showRecommendations && recommendations?.length > 0 
    ? recommendations 
    : filteredProjects;

  const handleFilterChange = (category, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      industry: [],
      type: [],
      technology: [],
      complexity: []
    });
    setSearchQuery('');
    setShowRecommendations(false);
    setRecommendations([]);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleRecommendations = (recommendedProjects) => {
    setRecommendations(recommendedProjects);
    setShowRecommendations(recommendedProjects?.length > 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Solutions Gallery | Project Portfolio"
        description="Explore our diverse portfolio of successful projects across industries, from simple websites to complex enterprise systems."
      />

      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Folder" size={16} />
              <span>Solutions Gallery</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Project
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our diverse portfolio of successful projects across industries. 
              From simple websites to complex enterprise systems, discover solutions that drive real business results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Recommendation Engine */}
          <div className="mb-8">
            <RecommendationEngine 
              projects={projects}
              onRecommendations={handleRecommendations}
            />
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or clients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e?.target?.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="recent">Most Recent</option>
                <option value="complexity">By Complexity</option>
                <option value="timeline">By Timeline</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  aria-label="Switch to grid view"
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Icon name="Grid3X3" size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  aria-label="Switch to list view"
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Icon name="List" size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <FilterPanel
                filters={filters}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
              />
            </div>

            {/* Projects Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {showRecommendations ? 'Recommended Projects' : 'All Projects'}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Showing {displayProjects?.length} of {projects?.length} projects
                  </p>
                </div>
                
                {showRecommendations && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setShowRecommendations(false);
                      setRecommendations([]);
                    }}
                    iconName="X"
                    iconPosition="left"
                  >
                    Clear Recommendations
                  </Button>
                )}
              </div>

              {/* Projects Display */}
              {displayProjects?.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {displayProjects?.map((project) => (
                    <ProjectCard
                      key={project?.id}
                      project={project}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={24} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search terms to find relevant projects.
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    iconName="RotateCcw"
                    iconPosition="left"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Complexity Scale */}
          <div className="mt-16">
            <ComplexityScale />
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar success with your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-consultation">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-gray-50"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services-overview">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
      <Footer />
    </div>
  );
};

export default SolutionsGallery;
