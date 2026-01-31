import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-soft hover:shadow-lift transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service?.iconBg}`}>
              <Icon name={service?.icon} size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{service?.title}</h3>
              <p className="text-sm text-muted-foreground">{service?.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              {service?.projectCount}+ Projects
            </span>
            <button
              onClick={() => onToggle(service?.id)}
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
              aria-label={isExpanded ? "Collapse service details" : "Expand service details"}
            >
              <Icon 
                name={isExpanded ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-muted-foreground" 
              />
            </button>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {service?.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {service?.technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={16} />
              <span>{service?.timeline}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={16} />
              <span>{service?.teamSize}</span>
            </div>
          </div>
          <div className="text-primary font-semibold">
            Starting from ₹{service?.startingPrice}
          </div>
        </div>

        {isExpanded && (
          <div className="border-t border-border pt-4 mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Our Process</h4>
              <div className="space-y-2">
                {service?.process?.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-primary">{index + 1}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Key Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service?.deliverables?.map((deliverable, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {service?.teamMembers?.map((member, index) => (
                    <img
                      key={index}
                      src={member?.avatar}
                      alt={member?.name}
                      className="w-8 h-8 rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Expert Team</span>
              </div>
              <Link to="/contact-consultation">
                <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
