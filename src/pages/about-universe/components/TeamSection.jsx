import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "Founder & CEO",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Visionary leader with 8+ years in tech consulting. Passionate about building solutions that make a real difference in businesses.",
      expertise: ["Strategic Planning", "Client Relations", "Team Leadership"],
      certifications: ["PMP", "AWS Solutions Architect"],
      interests: ["Mountain Trekking", "Photography", "Tech Podcasts"],
      linkedin: "#",
      email: "arjun@mindmesh.co.in"
    },
    {
      id: 2,
      name: "Deepika Kannadasan",
      role: "CTO & Co-founder",
      department: "Technology",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Full-stack architect who loves turning complex problems into elegant solutions. Expert in scalable system design.",
      expertise: ["System Architecture", "Cloud Computing", "DevOps"],
      certifications: ["Google Cloud Architect", "Kubernetes Certified"],
      interests: ["Open Source", "AI Research", "Classical Music"],
      linkedin: "#",
      github: "https://github.com/mindmesh-deepika",
      email: "Deepika@mindmesh.co.in"
    },
    {
      id: 3,
      name: "Rahul Kumar",
      role: "Lead Developer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "React specialist with a keen eye for performance optimization. Believes in writing code that tells a story.",
      expertise: ["React/Next.js", "Performance Optimization", "UI/UX"],
      certifications: ["React Advanced", "Web Performance"],
      interests: ["Gaming", "Cooking", "Travel"],
      linkedin: "#",
      email: "rahul@mindmesh.co.in"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Design Lead",
      department: "Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Creative problem-solver who transforms user needs into beautiful, intuitive experiences. Design thinking advocate.",
      expertise: ["UI/UX Design", "Design Systems", "User Research"],
      certifications: ["Google UX Design", "Adobe Certified"],
      interests: ["Art Galleries", "Yoga", "Sustainable Living"],
      linkedin: "#",
      email: "sneha@mindmesh.co.in"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "DevOps Engineer",
      department: "Infrastructure",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Infrastructure wizard who ensures our systems run smoothly 24/7. Automation enthusiast and security advocate.",
      expertise: ["AWS/Azure", "Docker/Kubernetes", "CI/CD"],
      certifications: ["AWS DevOps Pro", "Docker Certified"],
      interests: ["Cycling", "Home Automation", "Sci-Fi Movies"],
      linkedin: "#",
      email: "vikram@mindmesh.co.in"
    },
    {
      id: 6,
      name: "Anita Joshi",
      role: "Project Manager",
      department: "Operations",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Agile champion who keeps projects on track and teams motivated. Expert in stakeholder management and process optimization.",
      expertise: ["Agile/Scrum", "Stakeholder Management", "Process Optimization"],
      certifications: ["Certified Scrum Master", "PMP"],
      interests: ["Reading", "Team Sports", "Volunteering"],
      linkedin: "#",
      email: "anita@mindmesh.co.in"
    }
  ];

  const departments = ["All", "Leadership", "Technology", "Engineering", "Design", "Infrastructure", "Operations"];
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredMembers = selectedDepartment === "All" 
    ? teamMembers 
    : teamMembers?.filter(member => member?.department === selectedDepartment);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Amazing Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            The brilliant minds behind MindMesh's success. Each team member brings unique expertise and passion to create exceptional solutions.
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {departments?.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDepartment === dept
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers?.map((member) => (
            <div
              key={member?.id}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              <div className="text-center mb-4">
                <div className="relative inline-block mb-4">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-1">{member?.name}</h3>
                <p className="text-primary font-medium mb-2">{member?.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member?.bio}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member?.expertise?.slice(0, 2)?.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                    {member?.expertise?.length > 2 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{member?.expertise?.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                      <Icon name="Linkedin" size={16} className="text-muted-foreground" />
                    </button>
                    {member?.github && (
                      <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                        <Icon name="Github" size={16} className="text-muted-foreground" />
                      </button>
                    )}
                    <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                      <Icon name="Mail" size={16} className="text-muted-foreground" />
                    </button>
                  </div>
                  <button className="text-primary text-sm font-medium group-hover:underline">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Retention Rate</div>
          </div>
        </div>
      </div>
      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={selectedMember?.image}
                    alt={selectedMember?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{selectedMember?.name}</h3>
                    <p className="text-primary font-medium">{selectedMember?.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon name="X" size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">About</h4>
                  <p className="text-muted-foreground">{selectedMember?.bio}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.expertise?.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.certifications?.map((cert, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.interests?.map((interest, index) => (
                      <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4 border-t border-border">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    <Icon name="Linkedin" size={16} />
                    <span>LinkedIn</span>
                  </button>
                  {selectedMember?.github && (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                      <Icon name="Github" size={16} />
                      <span>GitHub</span>
                    </button>
                  )}
                  <button className="flex items-center space-x-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors">
                    <Icon name="Mail" size={16} />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
