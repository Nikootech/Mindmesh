import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearFilters,
  isOpen,
  onToggle 
}) => {
  const filterCategories = [
    {
      key: 'industry',
      label: 'Industry',
      icon: 'Building2',
      options: filters?.industries
    },
    {
      key: 'type',
      label: 'Project Type',
      icon: 'Layers',
      options: filters?.types
    },
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code',
      options: filters?.technologies
    },
    {
      key: 'complexity',
      label: 'Complexity',
      icon: 'BarChart3',
      options: filters?.complexities
    }
  ];

  const handleFilterToggle = (category, value) => {
    const currentFilters = activeFilters?.[category] || [];
    const newFilters = currentFilters?.includes(value)
      ? currentFilters?.filter(f => f !== value)
      : [...currentFilters, value];
    
    onFilterChange(category, newFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters)?.reduce((count, filters) => count + filters?.length, 0);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          className="w-full"
        >
          Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`bg-white rounded-xl shadow-soft border border-gray-100 ${
        isOpen ? 'block' : 'hidden lg:block'
      }`}>
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            </div>
            {getActiveFilterCount() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                iconName="X"
                iconPosition="left"
              >
                Clear All
              </Button>
            )}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="p-6 space-y-6">
          {filterCategories?.map((category) => (
            <div key={category?.key}>
              <div className="flex items-center space-x-2 mb-3">
                <Icon name={category?.icon} size={16} className="text-gray-600" />
                <h4 className="text-sm font-medium text-gray-900">{category?.label}</h4>
              </div>
              
              <div className="space-y-2">
                {category?.options?.map((option) => {
                  const isActive = activeFilters?.[category?.key]?.includes(option) || false;
                  
                  return (
                    <label
                      key={option}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={isActive}
                          onChange={() => handleFilterToggle(category?.key, option)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                          isActive 
                            ? 'bg-primary border-primary' 
                            : 'border-gray-300 group-hover:border-primary'
                        }`}>
                          {isActive && (
                            <Icon name="Check" size={12} className="text-white" />
                          )}
                        </div>
                      </div>
                      <span className={`text-sm transition-colors duration-200 ${
                        isActive ? 'text-primary font-medium' : 'text-gray-700 group-hover:text-primary'
                      }`}>
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Active Filters Summary */}
        {getActiveFilterCount() > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Active Filters</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(activeFilters)?.map(([category, filters]) =>
                filters?.map((filter) => (
                  <span
                    key={`${category}-${filter}`}
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-primary text-white text-xs rounded-full"
                  >
                    <span>{filter}</span>
                    <button
                      onClick={() => handleFilterToggle(category, filter)}
                      className="hover:bg-primary-dark rounded-full p-0.5 transition-colors duration-200"
                    >
                      <Icon name="X" size={10} />
                    </button>
                  </span>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterPanel;
