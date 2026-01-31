import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-soft hover:shadow-lift transition-all duration-300 overflow-hidden group">
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <img
          src={caseStudy?.image}
          alt={caseStudy?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${caseStudy?.categoryColor}`}>
            {caseStudy?.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Icon name="TrendingUp" size={14} className="text-success" />
            <span className="text-xs font-medium text-success">{caseStudy?.improvement}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {caseStudy?.title}
          </h3>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icon name="Calendar" size={14} />
            <span className="text-xs">{caseStudy?.duration}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {caseStudy?.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy?.technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-b border-border">
          {caseStudy?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-primary">{metric?.value}</div>
              <div className="text-xs text-muted-foreground">{metric?.label}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={caseStudy?.client?.logo}
              alt={caseStudy?.client?.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="text-sm font-medium text-foreground">{caseStudy?.client?.name}</div>
              <div className="text-xs text-muted-foreground">{caseStudy?.client?.industry}</div>
            </div>
          </div>
          <Link to="/client-success-center">
            <Button variant="ghost" size="sm" iconName="ExternalLink" iconPosition="right">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
