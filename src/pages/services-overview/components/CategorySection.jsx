import React from 'react';
import Icon from '../../../components/AppIcon';
import ServiceCard from './ServiceCard';

const CategorySection = ({ category, expandedServices, onToggleService }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <div className={`w-16 h-16 rounded-2xl ${category?.iconBg} flex items-center justify-center mx-auto mb-4`}>
          <Icon name={category?.icon} size={32} className="text-white" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">{category?.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {category?.description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {category?.services?.map((service) => (
          <ServiceCard
            key={service?.id}
            service={service}
            isExpanded={expandedServices?.includes(service?.id)}
            onToggle={onToggleService}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
