import React from 'react';
import Icon from '../../../components/AppIcon';

const SatisfactionSurveySection = () => {
  const surveyData = {
    totalResponses: 127,
    responseRate: "94%",
    averageRating: 4.8,
    lastUpdated: "December 2024"
  };

  const ratingBreakdown = [
    { stars: 5, percentage: 78, count: 99 },
    { stars: 4, percentage: 16, count: 20 },
    { stars: 3, percentage: 4, count: 5 },
    { stars: 2, percentage: 1, count: 2 },
    { stars: 1, percentage: 1, count: 1 }
  ];

  const feedbackThemes = [
    {
      theme: "Technical Expertise",
      score: 4.9,
      icon: "Code",
      highlights: [
        "Deep knowledge of modern technologies",
        "Excellent problem-solving skills",
        "Proactive technical recommendations"
      ]
    },
    {
      theme: "Communication",
      score: 4.8,
      icon: "MessageCircle",
      highlights: [
        "Regular project updates",
        "Clear technical explanations",
        "Responsive to queries and concerns"
      ]
    },
    {
      theme: "Project Delivery",
      score: 4.7,
      icon: "Clock",
      highlights: [
        "On-time delivery consistently",
        "Quality exceeds expectations",
        "Smooth deployment process"
      ]
    },
    {
      theme: "Value for Money",
      score: 4.6,
      icon: "DollarSign",
      highlights: [
        "Competitive pricing structure",
        "No hidden costs or surprises",
        "ROI achieved within expected timeframe"
      ]
    }
  ];

  const testimonialHighlights = [
    {
      quote: "The best tech partner we\'ve worked with. Their expertise and dedication are unmatched.",
      author: "Startup Founder",
      rating: 5
    },
    {
      quote: "Delivered our complex enterprise migration flawlessly. Zero downtime, amazing results.",
      author: "IT Director",
      rating: 5
    },
    {
      quote: "Not just developers, but true business partners who understand our goals.",
      author: "Product Manager",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)]?.map((_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={16} 
        className={i < rating ? "text-warning fill-current" : "text-muted-foreground/30"} 
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-warning/10 rounded-full text-warning text-sm font-medium mb-6">
            <Icon name="Star" size={16} className="mr-2" />
            Client Satisfaction Survey
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Feedback & Ratings
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in complete transparency. Here's what our clients really think 
            about working with MindMesh, based on our latest satisfaction survey.
          </p>
        </div>

        {/* Survey Overview */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="text-6xl font-bold text-primary mr-4">{surveyData?.averageRating}</div>
                <div>
                  <div className="flex items-center mb-2">
                    {renderStars(Math.floor(surveyData?.averageRating))}
                  </div>
                  <div className="text-sm text-muted-foreground">out of 5 stars</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-foreground mb-1">{surveyData?.totalResponses}</div>
                  <div className="text-sm text-muted-foreground">Total Responses</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-1">{surveyData?.responseRate}</div>
                  <div className="text-sm text-muted-foreground">Response Rate</div>
                </div>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div>
              <h3 className="font-bold text-foreground mb-6">Rating Distribution</h3>
              <div className="space-y-3">
                {ratingBreakdown?.map((rating, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm font-medium text-foreground">{rating?.stars}</span>
                      <Icon name="Star" size={14} className="text-warning fill-current" />
                    </div>
                    
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-warning rounded-full h-2 transition-all duration-500"
                        style={{ width: `${rating?.percentage}%` }}
                      ></div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground w-12 text-right">
                      {rating?.percentage}%
                    </div>
                    
                    <div className="text-sm text-muted-foreground w-8 text-right">
                      ({rating?.count})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Themes */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Detailed Feedback Analysis
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feedbackThemes?.map((theme, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={theme?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{theme?.score}</div>
                    <div className="flex items-center">
                      {renderStars(Math.floor(theme?.score))}
                    </div>
                  </div>
                </div>
                
                <h4 className="font-bold text-foreground mb-3">{theme?.theme}</h4>
                
                <ul className="space-y-2">
                  {theme?.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Highlights */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Recent Client Feedback
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialHighlights?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial?.rating)}
                </div>
                <blockquote className="text-muted-foreground italic mb-4">
                  "{testimonial?.quote}"
                </blockquote>
                <div className="text-sm font-medium text-foreground">
                  — {testimonial?.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Survey CTA */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl p-8 shadow-soft border border-border max-w-2xl mx-auto">
            <Icon name="MessageSquare" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">
              Share Your Experience
            </h3>
            <p className="text-muted-foreground mb-6">
              Worked with us? We'd love to hear about your experience. Your feedback 
              helps us improve and helps other businesses make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center">
                <Icon name="Star" size={20} className="mr-2" />
                Leave a Review
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-colors duration-200 flex items-center justify-center">
                <Icon name="Download" size={20} className="mr-2" />
                Download Full Report
              </button>
            </div>
          </div>
        </div>

        {/* Survey Metadata */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Survey data last updated: {surveyData?.lastUpdated} • 
            Response rate: {surveyData?.responseRate} • 
            Total responses: {surveyData?.totalResponses}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionSurveySection;
