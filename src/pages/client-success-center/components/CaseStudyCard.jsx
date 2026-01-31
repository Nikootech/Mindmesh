import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyCard = ({ caseStudy, featured = false }) => {
  const {
    id,
    title,
    client,
    industry,
    projectType,
    duration,
    teamSize,
    technologies,
    challenge,
    solution,
    results,
    testimonial,
    clientLogo,
    projectImage,
    metrics
  } = caseStudy;

  return (
    <div className={`bg-card rounded-xl border border-border overflow-hidden hover-lift transition-all duration-300 ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      {/* Project Image */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <Image 
          src={projectImage} 
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
            <Icon name="Briefcase" size={12} className="mr-1" />
            {projectType}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
          <p className="text-white/80 text-sm">{client} • {industry}</p>
        </div>
      </div>
      <div className="p-6">
        {/* Project Details */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Icon name="Clock" size={14} className="mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Icon name="Users" size={14} className="mr-1" />
            {teamSize} team
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <Icon name="AlertCircle" size={16} className="mr-2 text-warning" />
              Challenge
            </h4>
            <p className="text-muted-foreground text-sm">{challenge}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <Icon name="Lightbulb" size={16} className="mr-2 text-secondary" />
              Solution
            </h4>
            <p className="text-muted-foreground text-sm">{solution}</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
          <div className="grid grid-cols-2 gap-4">
            {metrics?.map((metric, index) => (
              <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                <div className="text-xs text-muted-foreground">{metric?.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        {testimonial && (
          <div className="mb-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <p className="text-muted-foreground text-sm italic mb-3">"{testimonial?.quote}"</p>
            <div className="flex items-center">
              <Image 
                src={testimonial?.avatar} 
                alt={testimonial?.author}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-foreground text-sm">{testimonial?.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial?.position}</div>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button 
          variant="outline" 
          size="sm" 
          fullWidth
          iconName="ExternalLink" 
          iconPosition="right"
          className="hover-lift"
        >
          View Full Case Study
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
