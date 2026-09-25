import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareersSection = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyJobTitle, setApplyJobTitle] = useState('');
  const [shareCopied, setShareCopied] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [candidateForm, setCandidateForm] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    notes: ''
  });

  const handleOpenApplyModal = (title) => {
    setApplyJobTitle(title || 'General Application');
    setApplicationSubmitted(false);
    setIsApplyModalOpen(true);
  };

  const handleShareJob = (job) => {
    const shareUrl = `${window.location.origin}/about-universe#careers`;
    const shareText = `Explore career opportunity: ${job?.title} at MindMesh WorkHub - ${shareUrl}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    }
  };

  const handleCandidateSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Job Application: ${applyJobTitle} - ${candidateForm.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${candidateForm.name}\nEmail: ${candidateForm.email}\nPhone: ${candidateForm.phone}\nPortfolio/LinkedIn: ${candidateForm.portfolio}\nPosition: ${applyJobTitle}\n\nNote:\n${candidateForm.notes}`
    );
    // Trigger candidate email client as well as setting confirmed UI state
    window.location.href = `mailto:careers@mindmesh.co.in?cc=paul@mindmesh.co.in&subject=${mailtoSubject}&body=${mailtoBody}`;
    setApplicationSubmitted(true);
  };

  const openPositions = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote / Bangalore",
      experience: "4-6 years",
      description: "Join our frontend team to build cutting-edge web applications using React, Next.js, and modern JavaScript technologies.",
      requirements: [
        "4+ years of experience with React and modern JavaScript",
        "Strong understanding of state management (Redux, Zustand)",
        "Experience with TypeScript and modern build tools",
        "Knowledge of testing frameworks (Jest, React Testing Library)",
        "Excellent problem-solving and communication skills"
      ],
      responsibilities: [
        "Develop and maintain high-quality React applications",
        "Collaborate with designers and backend developers",
        "Participate in code reviews and technical discussions",
        "Mentor junior developers and contribute to team growth",
        "Stay updated with latest frontend technologies and best practices"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "₹50,000 annual learning budget",
        "Flexible work hours and remote work options",
        "Health insurance for family",
        "Stock options and profit sharing"
      ]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "Infrastructure",
      type: "Full-time",
      location: "Remote / Bangalore",
      experience: "3-5 years",
      description: "Help us scale our infrastructure and improve deployment processes using modern DevOps practices and cloud technologies.",
      requirements: [
        "3+ years of experience with AWS/Azure cloud platforms",
        "Strong knowledge of Docker, Kubernetes, and containerization",
        "Experience with CI/CD pipelines and automation tools",
        "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
        "Understanding of monitoring and logging solutions"
      ],
      responsibilities: [
        "Design and maintain scalable cloud infrastructure",
        "Implement and improve CI/CD pipelines",
        "Monitor system performance and ensure high availability",
        "Automate deployment and operational processes",
        "Collaborate with development teams on best practices"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "₹50,000 annual learning budget",
        "Flexible work hours and remote work options",
        "Health insurance for family",
        "Stock options and profit sharing"
      ]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote / Bangalore",
      experience: "2-4 years",
      description: "Create beautiful, user-centered designs that solve real problems and delight our clients and their users.",
      requirements: [
        "2+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio showcasing web and mobile designs",
        "Understanding of user research and usability testing",
        "Knowledge of design systems and component libraries"
      ],
      responsibilities: [
        "Design intuitive user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create and maintain design systems and style guides",
        "Collaborate with developers to ensure design implementation",
        "Present design concepts to clients and stakeholders"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "₹50,000 annual learning budget",
        "Flexible work hours and remote work options",
        "Health insurance for family",
        "Stock options and profit sharing"
      ]
    }
  ];

  const employeeTestimonials = [
    {
      name: "Rajesh Gupta",
      role: "Senior Developer",
      tenure: "2 years",
      quote: "MindMesh gave me the opportunity to work on challenging projects while maintaining a perfect work-life balance. The learning culture here is exceptional.",
      image: "/images/team/rajesh-gupta.jpg"
    },
    {
      name: "Kavya Sharma",
      role: "UX Designer",
      tenure: "1.5 years",
      quote: "The creative freedom and support I get here is amazing. I've grown more in 1.5 years at MindMesh than in my previous 3 years elsewhere.",
      image: "/images/team/kavya-sharma.jpg"
    },
    {
      name: "Amit Patel",
      role: "DevOps Engineer",
      tenure: "3 years",
      quote: "Being part of MindMesh from the early days has been incredible. The company truly values its employees and invests in their growth.",
      image: "/images/team/amit-patel.jpg"
    }
  ];

  const perks = [
    {
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance bonuses and stock options",
      icon: "DollarSign"
    },
    {
      title: "Learning & Development",
      description: "₹50,000 annual budget for courses, conferences, and certifications",
      icon: "BookOpen"
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and quarterly team meetups",
      icon: "Home"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for family",
      icon: "Heart"
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and exploring new technologies",
      icon: "Lightbulb"
    },
    {
      title: "Team Events",
      description: "Regular team outings, hackathons, and celebration events",
      icon: "Users"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Briefcase" size={16} />
            <span>Join Our Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Build Your Career with MindMesh
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a team of passionate professionals who are shaping the future of technology consulting. Grow your skills, work on exciting projects, and make a real impact.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Current Openings</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions?.map((job) => (
              <div
                key={job?.id}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{job?.title}</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Building" size={14} />
                        <span>{job?.department}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={14} />
                        <span>{job?.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={14} />
                        <span>{job?.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {job?.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {job?.description}
                </p>
                
                <Button variant="outline" size="sm" fullWidth iconName="ArrowRight" iconPosition="right">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">What Our Team Says</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {employeeTestimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="mb-4">
                  <Icon name="Quote" size={24} className="text-primary mb-4" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial?.quote}"
                  </p>
                </div>
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial?.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial?.role} • {testimonial?.tenure}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks & Benefits */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Why You'll Love Working Here</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks?.map((perk, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={perk?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{perk?.title}</h4>
                <p className="text-sm text-muted-foreground">{perk?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Us?</h3>
            <p className="text-lg text-muted-foreground">
              Our hiring process is designed to be transparent, efficient, and respectful of your time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="FileText" size={20} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Apply</h4>
              <p className="text-sm text-muted-foreground">Submit your resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Phone" size={20} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Screen</h4>
              <p className="text-sm text-muted-foreground">Initial phone/video screening call</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Code" size={20} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Technical</h4>
              <p className="text-sm text-muted-foreground">Technical assessment and coding challenge</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={20} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Final</h4>
              <p className="text-sm text-muted-foreground">Team interview and culture fit assessment</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="default" 
              size="lg" 
              iconName="Mail" 
              iconPosition="left" 
              className="gradient-accent"
              onClick={() => handleOpenApplyModal('General Engineering & Technical Application')}
            >
              Send Your Application
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Don't see a perfect match? Send us your resume anyway at{' '}
              <a href="mailto:careers@mindmesh.co.in" className="text-primary hover:underline">
                careers@mindmesh.co.in
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selectedJob?.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Icon name="Building" size={14} />
                      <span>{selectedJob?.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{selectedJob?.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{selectedJob?.experience}</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close job details"
                >
                  <Icon name="X" size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Job Description</h4>
                  <p className="text-muted-foreground">{selectedJob?.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedJob?.requirements?.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Responsibilities</h4>
                  <ul className="space-y-2">
                    {selectedJob?.responsibilities?.map((resp, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {selectedJob?.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Star" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 pt-6 border-t border-border">
                  <Button 
                    variant="default" 
                    size="lg" 
                    iconName="Send" 
                    iconPosition="left" 
                    className="gradient-accent"
                    onClick={() => {
                      const title = selectedJob?.title;
                      setSelectedJob(null);
                      handleOpenApplyModal(title);
                    }}
                  >
                    Apply Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    iconName={shareCopied ? "Check" : "Share"} 
                    iconPosition="left"
                    onClick={() => handleShareJob(selectedJob)}
                  >
                    {shareCopied ? 'Link Copied!' : 'Share Job'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Candidate Direct Application Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-lg w-full p-6 border border-border shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <div>
                <h3 className="text-xl font-bold text-foreground">Submit Your Application</h3>
                <p className="text-xs text-primary font-medium mt-0.5">{applyJobTitle}</p>
              </div>
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground"
                aria-label="Close application modal"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={28} />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Application Drafted!</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Your email client has opened pre-filled to <strong className="text-foreground">careers@mindmesh.co.in</strong>. Attach your resume and click send to complete your application.
                </p>
                <Button 
                  variant="default" 
                  fullWidth 
                  onClick={() => setIsApplyModalOpen(false)}
                >
                  Close Window
                </Button>
              </div>
            ) : (
              <form onSubmit={handleCandidateSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Deepika Kannadasan"
                    value={candidateForm.name}
                    onChange={(e) => setCandidateForm({ ...candidateForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={candidateForm.email}
                      onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={candidateForm.phone}
                      onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">LinkedIn / Portfolio URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourname or github.com"
                    value={candidateForm.portfolio}
                    onChange={(e) => setCandidateForm({ ...candidateForm, portfolio: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Cover Note / Brief Introduction</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your experience, key tech stack, and why you want to join MindMesh..."
                    value={candidateForm.notes}
                    onChange={(e) => setCandidateForm({ ...candidateForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <Button 
                    type="submit" 
                    variant="default" 
                    iconName="Send" 
                    iconPosition="left" 
                    className="gradient-accent flex-1"
                  >
                    Submit & Open Email
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      window.location.href = `mailto:careers@mindmesh.co.in?subject=Resume%20Submission%20-%20MindMesh`;
                    }}
                  >
                    Direct Email
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CareersSection;
