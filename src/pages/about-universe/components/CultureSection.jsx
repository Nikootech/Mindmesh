import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CultureSection = () => {
  const cultureValues = [
    {
      title: "Human-Centered Innovation",
      description: "We believe the best technology serves people, not the other way around. Every solution we build starts with understanding human needs.",
      icon: "Heart",
      example: "When building WorkHub, we spent weeks shadowing our own team to understand their daily workflows before writing a single line of code."
    },
    {
      title: "Transparent Collaboration",
      description: "Open communication and honest feedback create the foundation for exceptional results and lasting relationships.",
      icon: "MessageSquare",
      example: "Our weekly \'No BS\' meetings where anyone can raise concerns or suggest improvements have led to our most innovative solutions."
    },
    {
      title: "Continuous Learning",
      description: "In a rapidly evolving tech landscape, curiosity and adaptability are our competitive advantages.",
      icon: "BookOpen",
      example: "Every team member gets 4 hours per week for learning new technologies, with company-sponsored certifications and conference attendance."
    },
    {
      title: "Quality Over Quantity",
      description: "We\'d rather deliver one exceptional project than ten mediocre ones. Excellence is non-negotiable.",
      icon: "Award",
      example: "Our code review process includes not just functionality checks, but also performance, security, and maintainability assessments."
    }
  ];

  const workLifeBalance = [
    {
      title: "Flexible Work Hours",
      description: "Core hours from 10 AM to 4 PM, with flexibility for personal schedules and peak productivity times.",
      icon: "Clock"
    },
    {
      title: "Remote-First Culture",
      description: "Work from anywhere policy with quarterly team meetups for collaboration and bonding.",
      icon: "Home"
    },
    {
      title: "Learning & Development",
      description: "₹50,000 annual learning budget per employee for courses, conferences, and certifications.",
      icon: "GraduationCap"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs for the entire family.",
      icon: "Shield"
    }
  ];

  const teamQuotes = [
    {
      quote: "At MindMesh, I'm not just a developer—I'm a problem solver, a mentor, and a continuous learner. The culture here pushes me to be my best self.",
      author: "Rahul Kumar",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The transparency and trust here is incredible. I can experiment with new design approaches knowing the team will provide honest, constructive feedback.",
      author: "Sneha Reddy",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Working at MindMesh feels like being part of a family that happens to build amazing software together. The support system is unmatched.",
      author: "Anita Joshi",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Culture Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Culture & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't just words on a wall—they're the principles that guide every decision, every project, and every interaction at MindMesh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {cultureValues?.map((value, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={value?.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value?.title}</h3>
                  <p className="text-muted-foreground mb-4">{value?.description}</p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground italic">
                      <Icon name="Quote" size={16} className="inline mr-2" />
                      {value?.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work-Life Balance */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Work-Life Balance That Actually Works
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that happy, well-rested people do their best work. Here's how we make that happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workLifeBalance?.map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit?.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{benefit?.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Quotes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              What Our Team Says
            </h3>
            <p className="text-lg text-muted-foreground">
              Authentic voices from the people who make MindMesh special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamQuotes?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 border border-border">
                <div className="mb-4">
                  <Icon name="Quote" size={24} className="text-primary mb-4" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial?.quote}"
                  </p>
                </div>
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial?.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial?.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Behind the Scenes at MindMesh
              </h3>
              <p className="text-muted-foreground mb-6">
                From brainstorming sessions to code reviews, from team lunches to hackathons—get a glimpse into our daily life and the moments that make us who we are.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Coffee" size={20} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Daily standup meetings over coffee and snacks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Gamepad2" size={20} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Friday game nights and team building activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Lightbulb" size={20} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Monthly innovation days for experimental projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Quarterly team retreats and knowledge sharing sessions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team collaboration at MindMesh"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
