import React from 'react';
import Image from '../../../components/AppImage';

const ClientLogos = () => {
  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
      industry: "Technology",
      testimonial: "MindMesh transformed our workflow efficiency by 300%. Their WorkHub platform is revolutionary."
    },
    {
      id: 2,
      name: "RetailMax India",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop&crop=center",
      industry: "Retail",
      testimonial: "The e-commerce platform they built generated ₹2.5Cr additional revenue in just 6 months."
    },
    {
      id: 3,
      name: "HealthFirst Clinics",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop&crop=center",
      industry: "Healthcare",
      testimonial: "Patient satisfaction increased by 180% with their digital health platform."
    },
    {
      id: 4,
      name: "FinanceFlow Bank",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop&crop=center",
      industry: "Banking",
      testimonial: "Zero security incidents since implementing their cybersecurity framework."
    },
    {
      id: 5,
      name: "EduTech Academy",
      logo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=200&h=100&fit=crop&crop=center",
      industry: "Education",
      testimonial: "Their learning management system serves 25,000+ students seamlessly."
    },
    {
      id: 6,
      name: "GreenEnergy Corp",
      logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=100&fit=crop&crop=center",
      industry: "Energy",
      testimonial: "IoT solutions reduced operational costs by 40% across all facilities."
    },
    {
      id: 7,
      name: "LogiTrans Solutions",
      logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=100&fit=crop&crop=center",
      industry: "Logistics",
      testimonial: "Real-time tracking system improved delivery efficiency by 250%."
    },
    {
      id: 8,
      name: "FoodieHub Network",
      logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=100&fit=crop&crop=center",
      industry: "Food & Beverage",
      testimonial: "Mobile app increased customer engagement by 400% within 3 months."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Trusted By</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powering Success Across{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, we've helped businesses across diverse sectors achieve their digital transformation goals.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients?.map((client) => (
            <div
              key={client?.id}
              className="group relative bg-card/50 rounded-xl border border-border p-6 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              {/* Logo */}
              <div className="aspect-[2/1] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={client?.logo}
                  alt={`${client?.name} logo`}
                  width="200"
                  height="100"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Client Info */}
              <div className="text-center">
                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                  {client?.name}
                </h3>
                <p className="text-xs text-muted-foreground">{client?.industry}</p>
              </div>

              {/* Hover Testimonial */}
              <div className="absolute inset-0 bg-card/95 rounded-xl border border-border p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-lg">"</span>
                  </div>
                  <p className="text-xs text-foreground leading-relaxed mb-2">
                    {client?.testimonial}
                  </p>
                  <p className="text-xs font-medium text-primary">{client?.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl border border-border/50 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Testimonial Highlight */}
        <div className="mt-16 bg-card/80 rounded-2xl border border-border p-8 shadow-soft">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-primary text-3xl">"</span>
            </div>
            
            <blockquote className="text-xl text-foreground leading-relaxed mb-6">
              "MindMesh doesn't just deliver projects—they become your technology partner. Their WorkHub platform 
              gave us insights into our own processes we never had before. The transparency and communication 
              throughout our project was exceptional."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">RS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Rajesh Sharma</div>
                <div className="text-sm text-muted-foreground">CTO, TechCorp Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
