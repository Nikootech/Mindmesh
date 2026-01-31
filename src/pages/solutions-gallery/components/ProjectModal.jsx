import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const getComplexityColor = (level) => {
    switch (level) {
      case 'Simple': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Complex': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-2xl z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Folder" size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{project?.title}</h2>
                  <p className="text-gray-600">{project?.client}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                iconName="X"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Project Image */}
            <div className="mb-8">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            {/* Project Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project?.fullDescription}
                </p>

                {/* Challenge Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="AlertTriangle" size={20} className="text-orange-500 mr-2" />
                    Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {project?.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="Lightbulb" size={20} className="text-yellow-500 mr-2" />
                    Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {project?.solution}
                  </p>
                </div>

                {/* Outcomes Section */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="TrendingUp" size={20} className="text-green-500 mr-2" />
                    Measurable Outcomes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project?.outcomes?.map((outcome, index) => (
                      <div key={index} className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                          <span className="text-sm font-medium text-green-800">
                            {outcome?.metric}
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-green-900">{outcome?.value}</p>
                        <p className="text-sm text-green-700">{outcome?.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Details */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Industry</p>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {project?.industry}
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Project Type</p>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                        {project?.type}
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Complexity</p>
                      <span className={`px-3 py-1 text-sm rounded-full ${getComplexityColor(project?.complexity)}`}>
                        {project?.complexity}
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Timeline</p>
                      <p className="text-sm font-medium text-gray-900">{project?.timeline}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Team Size</p>
                      <p className="text-sm font-medium text-gray-900">{project?.teamSize} members</p>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-lg border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                {project?.testimonial && (
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Quote" size={20} className="text-primary" />
                      <h4 className="text-lg font-semibold text-gray-900">Client Feedback</h4>
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{project?.testimonial?.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={project?.testimonial?.avatar}
                        alt={project?.testimonial?.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {project?.testimonial?.author}
                        </p>
                        <p className="text-xs text-gray-600">
                          {project?.testimonial?.position}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  {project?.hasLivePreview && (
                    <Button
                      variant="default"
                      fullWidth
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="gradient-accent"
                    >
                      View Live Project
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
