import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: `MindMesh transformed our entire e-commerce platform in just 4 months. The team's expertise in React and Node.js helped us achieve a 300% increase in conversion rates. Their attention to detail and proactive communication made the entire process seamless.`,
      author: "Priya Sharma",
      position: "CTO, ShopEase India",
      company: "ShopEase",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      projectType: "E-commerce Platform",
      results: ["300% conversion increase", "50% faster load times", "99.9% uptime achieved"]
    },
    {
      id: 2,
      quote: `Working with MindMesh was a game-changer for our startup. They didn't just build our MVP; they became strategic partners who understood our vision. The React Native app they developed has over 100K downloads and 4.8-star rating.`,
      author: "Rajesh Kumar",
      position: "Founder & CEO, FitTrack",
      company: "FitTrack",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      projectType: "Mobile App Development",
      results: ["100K+ downloads", "4.8-star rating", "₹2M funding raised"]
    },
    {
      id: 3,
      quote: `The enterprise migration project was complex, but MindMesh handled it flawlessly. Zero downtime during the transition, and our system performance improved by 200%. Their DevOps expertise is unmatched in the industry.`,
      author: "Anita Desai",
      position: "IT Director, TechCorp Solutions",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      projectType: "Enterprise Migration",
      results: ["Zero downtime", "200% performance boost", "40% cost reduction"]
    },
    {
      id: 4,
      quote: `MindMesh's AI integration transformed our customer service. The chatbot they developed handles 80% of queries automatically, and customer satisfaction increased by 45%. ROI was achieved within 6 months.`,
      author: "Vikram Singh",
      position: "Head of Operations, ServicePro",
      company: "ServicePro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      projectType: "AI Integration",
      results: ["80% query automation", "45% satisfaction increase", "6-month ROI"]
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Client Testimonials
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients who've experienced the MindMesh difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Image 
                  src={currentTestimonial?.avatar}
                  alt={currentTestimonial?.author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-foreground text-lg">{currentTestimonial?.author}</h3>
                  <p className="text-muted-foreground">{currentTestimonial?.position}</p>
                  <p className="text-primary font-medium text-sm">{currentTestimonial?.company}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
              "{currentTestimonial?.quote}"
            </blockquote>

            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {currentTestimonial?.projectType}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  iconName="ChevronLeft"
                  onClick={prevTestimonial}
                  className="w-10 h-10"
                />
                <span className="text-sm text-muted-foreground px-3">
                  {activeTestimonial + 1} of {testimonials?.length}
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  iconName="ChevronRight"
                  onClick={nextTestimonial}
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {currentTestimonial?.results?.map((result, index) => (
              <div key={index} className="bg-card rounded-lg p-6 text-center border border-border">
                <Icon name="TrendingUp" size={24} className="text-secondary mx-auto mb-3" />
                <p className="font-semibold text-foreground">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeTestimonial 
                  ? 'bg-primary scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
