import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getComplexityColor = (level) => {
    switch (level) {
      case 'Simple': return 'bg-emerald-100 text-emerald-900';
      case 'Medium': return 'bg-amber-100 text-amber-900';
      case 'Complex': return 'bg-red-100 text-red-900';
      default: return 'bg-gray-100 text-gray-900';
    }
  };

  const getProjectTypeIcon = (type) => {
    switch (type) {
      case 'MVP Development': return 'Rocket';
      case 'Digital Transformation': return 'Zap';
      case 'System Migration': return 'ArrowRightLeft';
      default: return 'Code';
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-soft hover:shadow-lift transition-all duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Overlay */}
        <div 
          aria-hidden={!isHovered}
          className={`absolute inset-0 bg-primary/95 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-center text-white">
            <Icon name="Eye" size={32} className="mx-auto mb-2" />
            <p className="text-sm font-semibold tracking-wide text-white">View Details</p>
          </div>
        </div>

        {/* Complexity Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getComplexityColor(project?.complexity)}`}>
            {project?.complexity}
          </span>
        </div>

        {/* Live Preview Badge */}
        {project?.hasLivePreview && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-800 text-white flex items-center space-x-1 shadow-sm">
              <Icon name="Globe" size={12} />
              <span>Live</span>
            </span>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
              {project?.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{project?.client}</p>
          </div>
          <div className="ml-3">
            <Icon 
              name={getProjectTypeIcon(project?.type)} 
              size={20} 
              className="text-primary" 
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Industry & Type Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
            {project?.industry}
          </span>
          <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
            {project?.type}
          </span>
        </div>

        {/* Technology Stack */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-1">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {tech}
              </span>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                +{project?.technologies?.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-center">
            <p className="text-xs text-gray-500">Timeline</p>
            <p className="text-sm font-semibold text-gray-900">{project?.timeline}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Team Size</p>
            <p className="text-sm font-semibold text-gray-900">{project?.teamSize}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Impact</p>
            <p className="text-sm font-semibold text-primary">{project?.impact}</p>
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onViewDetails(project)}
          className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300"
        >
          View Case Study
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
