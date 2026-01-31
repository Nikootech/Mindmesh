import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const RecommendationEngine = ({ projects, onRecommendations }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [criteria, setCriteria] = useState({
    industry: '',
    budget: '',
    timeline: '',
    complexity: ''
  });

  const industryOptions = [
    { value: 'FinTech', label: 'FinTech' },
    { value: 'HealthTech', label: 'HealthTech' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Education', label: 'Education' },
    { value: 'Real Estate', label: 'Real Estate' }
  ];

  const budgetOptions = [
    { value: 'small', label: 'Under ₹5L' },
    { value: 'medium', label: '₹5L - ₹20L' },
    { value: 'large', label: '₹20L - ₹50L' },
    { value: 'enterprise', label: 'Above ₹50L' }
  ];

  const timelineOptions = [
    { value: 'quick', label: '1-3 months' },
    { value: 'standard', label: '3-6 months' },
    { value: 'extended', label: '6-12 months' },
    { value: 'long-term', label: '12+ months' }
  ];

  const complexityOptions = [
    { value: 'Simple', label: 'Simple' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Complex', label: 'Complex' }
  ];

  const handleFindSimilar = () => {
    // Filter projects based on criteria
    let recommendations = projects?.filter(project => {
      let score = 0;
      
      if (criteria?.industry && project?.industry === criteria?.industry) score += 3;
      if (criteria?.complexity && project?.complexity === criteria?.complexity) score += 2;
      
      // Budget matching logic (simplified)
      if (criteria?.budget) {
        const budgetMatch = getBudgetMatch(project?.budget, criteria?.budget);
        if (budgetMatch) score += 2;
      }
      
      // Timeline matching logic (simplified)
      if (criteria?.timeline) {
        const timelineMatch = getTimelineMatch(project?.timeline, criteria?.timeline);
        if (timelineMatch) score += 1;
      }
      
      return score > 0;
    });

    // Sort by relevance score and take top 6
    recommendations = recommendations?.sort((a, b) => getProjectScore(b, criteria) - getProjectScore(a, criteria))?.slice(0, 6);

    onRecommendations(recommendations);
  };

  const getBudgetMatch = (projectBudget, selectedBudget) => {
    // Simplified budget matching logic
    const budgetRanges = {
      'small': [0, 500000],
      'medium': [500000, 2000000],
      'large': [2000000, 5000000],
      'enterprise': [5000000, Infinity]
    };
    
    return true; // Simplified for demo
  };

  const getTimelineMatch = (projectTimeline, selectedTimeline) => {
    // Simplified timeline matching logic
    return true; // Simplified for demo
  };

  const getProjectScore = (project, criteria) => {
    let score = 0;
    if (criteria?.industry && project?.industry === criteria?.industry) score += 3;
    if (criteria?.complexity && project?.complexity === criteria?.complexity) score += 2;
    return score;
  };

  const handleReset = () => {
    setCriteria({
      industry: '',
      budget: '',
      timeline: '',
      complexity: ''
    });
    onRecommendations([]);
  };

  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Target" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Find Similar Projects</h3>
            <p className="text-sm text-gray-600">Get personalized project recommendations</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
          iconPosition="right"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>
      {isExpanded && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select
              label="Industry"
              placeholder="Select industry"
              options={industryOptions}
              value={criteria?.industry}
              onChange={(value) => setCriteria(prev => ({ ...prev, industry: value }))}
              className="bg-white"
            />
            
            <Select
              label="Budget Range"
              placeholder="Select budget"
              options={budgetOptions}
              value={criteria?.budget}
              onChange={(value) => setCriteria(prev => ({ ...prev, budget: value }))}
              className="bg-white"
            />
            
            <Select
              label="Timeline"
              placeholder="Select timeline"
              options={timelineOptions}
              value={criteria?.timeline}
              onChange={(value) => setCriteria(prev => ({ ...prev, timeline: value }))}
              className="bg-white"
            />
            
            <Select
              label="Complexity"
              placeholder="Select complexity"
              options={complexityOptions}
              value={criteria?.complexity}
              onChange={(value) => setCriteria(prev => ({ ...prev, complexity: value }))}
              className="bg-white"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="default"
              onClick={handleFindSimilar}
              iconName="Search"
              iconPosition="left"
              className="gradient-accent flex-1 sm:flex-none"
              disabled={!criteria?.industry && !criteria?.budget && !criteria?.timeline && !criteria?.complexity}
            >
              Find Similar Projects
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Reset
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-3">Quick Filters:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'FinTech Projects', criteria: { industry: 'FinTech' } },
                { label: 'E-commerce Solutions', criteria: { industry: 'E-commerce' } },
                { label: 'Quick Wins (1-3 months)', criteria: { timeline: 'quick' } },
                { label: 'Complex Systems', criteria: { complexity: 'Complex' } }
              ]?.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCriteria(prev => ({ ...prev, ...filter?.criteria }));
                    setTimeout(() => handleFindSimilar(), 100);
                  }}
                  className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  {filter?.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationEngine;
