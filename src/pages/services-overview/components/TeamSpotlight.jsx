import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamSpotlight = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Full Stack Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["React", "Node.js", "AWS", "System Design"],
      experience: "8+ years",
      certifications: ["AWS Solutions Architect", "Google Cloud Professional"],
      specialization: "Enterprise Web Applications",
      projectsLed: 45,
      clientSatisfaction: "98%"
    },
    {
      id: 2,
      name: "Deepika Kannadasan",
      role: "Mobile Development Lead",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      expertise: ["React Native", "Flutter", "iOS", "Android"],
      experience: "6+ years",
      certifications: ["Google Flutter Certified", "Apple iOS Developer"],
      specialization: "Cross-platform Mobile Apps",
      projectsLed: 32,
      clientSatisfaction: "96%",
      github: "https://github.com/mindmesh-deepika"
    },
    {
      id: 3,
      name: "Rahul Kumar",
      role: "DevOps & Cloud Specialist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
      experience: "7+ years",
      certifications: ["AWS DevOps Professional", "Kubernetes Administrator"],
      specialization: "Scalable Infrastructure",
      projectsLed: 28,
      clientSatisfaction: "99%"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "AI/ML Engineer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      expertise: ["Python", "TensorFlow", "PyTorch", "Data Science"],
      experience: "5+ years",
      certifications: ["Google ML Engineer", "AWS ML Specialty"],
      specialization: "Intelligent Automation",
      projectsLed: 18,
      clientSatisfaction: "97%"
    }
  ];

  return (
    <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our success comes from our people. Meet the certified experts who will bring 
          your vision to life with their deep technical knowledge and proven track record.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers?.map((member) => (
          <div key={member?.id} className="bg-card rounded-xl p-6 border border-border shadow-soft hover:shadow-lift transition-all duration-300 group">
            <div className="text-center mb-4">
              <div className="relative inline-block mb-3">
                <img
                  src={member?.avatar}
                  alt={member?.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center">
                  <Icon name="Check" size={12} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{member?.name}</h3>
              <p className="text-sm text-primary font-medium mb-2 flex items-center justify-center gap-2">
                {member?.role}
                {member?.github && (
                  <a href={member?.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Icon name="Github" size={14} />
                  </a>
                )}
              </p>
              <p className="text-xs text-muted-foreground">{member?.specialization}</p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Experience</span>
                <span className="font-medium text-foreground">{member?.experience}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Projects Led</span>
                <span className="font-medium text-foreground">{member?.projectsLed}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Client Rating</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-warning fill-current" />
                  <span className="font-medium text-foreground">{member?.clientSatisfaction}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-foreground mb-2">Core Expertise</h4>
              <div className="flex flex-wrap gap-1">
                {member?.expertise?.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Certifications</h4>
              <div className="space-y-1">
                {member?.certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Award" size={12} className="text-secondary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 p-6 bg-card rounded-xl border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Want to meet your project team?
        </h3>
        <p className="text-muted-foreground mb-4">
          We'll introduce you to the specific experts who will work on your project during our initial consultation.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Users" size={16} />
          <span>Average team experience: 6.5+ years</span>
          <span className="mx-2">•</span>
          <Icon name="Award" size={16} />
          <span>100+ certifications across the team</span>
        </div>
      </div>
    </div>
  );
};

export default TeamSpotlight;
