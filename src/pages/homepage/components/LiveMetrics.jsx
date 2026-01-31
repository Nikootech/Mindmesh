import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    activeProjects: 47,
    totalClients: 23,
    teamMembers: 15,
    uptime: 99.8
  });

  const [animatedMetrics, setAnimatedMetrics] = useState({
    activeProjects: 0,
    totalClients: 0,
    teamMembers: 0,
    uptime: 0
  });

  useEffect(() => {
    // Animate counters on component mount
    const animateCounter = (key, target, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setAnimatedMetrics(prev => ({
          ...prev,
          [key]: key === 'uptime' ? Number(current?.toFixed(1)) : Math.floor(current)
        }));
      }, 16);
    };

    // Start animations with delays
    setTimeout(() => animateCounter('activeProjects', metrics?.activeProjects), 200);
    setTimeout(() => animateCounter('totalClients', metrics?.totalClients), 400);
    setTimeout(() => animateCounter('teamMembers', metrics?.teamMembers), 600);
    setTimeout(() => animateCounter('uptime', metrics?.uptime), 800);

    // Simulate live updates
    const updateInterval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        activeProjects: prev?.activeProjects + Math.floor(Math.random() * 3) - 1, // Random ±1
        uptime: Math.min(99.9, prev?.uptime + (Math.random() * 0.1 - 0.05)) // Small fluctuation
      }));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(updateInterval);
  }, []);

  const metricCards = [
    {
      id: 1,
      title: "Active Projects",
      value: animatedMetrics?.activeProjects,
      suffix: "",
      description: "Currently managing across 23 clients",
      icon: "Briefcase",
      color: "primary",
      trend: "+3 this week"
    },
    {
      id: 2,
      title: "Happy Clients",
      value: animatedMetrics?.totalClients,
      suffix: "+",
      description: "Trusted partnerships worldwide",
      icon: "Users",
      color: "secondary",
      trend: "+2 this month"
    },
    {
      id: 3,
      title: "Team Members",
      value: animatedMetrics?.teamMembers,
      suffix: "",
      description: "Expert developers & consultants",
      icon: "UserCheck",
      color: "accent",
      trend: "Growing team"
    },
    {
      id: 4,
      title: "System Uptime",
      value: animatedMetrics?.uptime,
      suffix: "%",
      description: "Reliable infrastructure guarantee",
      icon: "Activity",
      color: "success",
      trend: "99.9% SLA"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/5',
        border: 'border-primary/20',
        icon: 'text-primary',
        iconBg: 'bg-primary/10'
      },
      secondary: {
        bg: 'bg-secondary/5',
        border: 'border-secondary/20',
        icon: 'text-secondary',
        iconBg: 'bg-secondary/10'
      },
      accent: {
        bg: 'bg-accent/5',
        border: 'border-accent/20',
        icon: 'text-accent',
        iconBg: 'bg-accent/10'
      },
      success: {
        bg: 'bg-success/5',
        border: 'border-success/20',
        icon: 'text-success',
        iconBg: 'bg-success/10'
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Live Metrics</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real-Time Project{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparency in action. Monitor our current workload, team capacity, and system performance in real-time.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metricCards?.map((metric) => {
            const colors = getColorClasses(metric?.color);
            
            return (
              <div
                key={metric?.id}
                className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-soft hover:-translate-y-1 ${colors?.bg} ${colors?.border} bg-card/50 backdrop-blur-sm`}
              >
                {/* Live Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                </div>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors?.iconBg} flex items-center justify-center mb-4`}>
                  <Icon name={metric?.icon} size={20} className={colors?.icon} />
                </div>
                {/* Metric Value */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-foreground">
                      {metric?.value}
                    </span>
                    <span className="text-lg font-semibold text-muted-foreground">
                      {metric?.suffix}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-semibold text-foreground">
                    {metric?.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {metric?.description}
                </p>
                {/* Trend */}
                <div className="flex items-center space-x-1">
                  <Icon name="TrendingUp" size={12} className="text-success" />
                  <span className="text-xs font-medium text-success">
                    {metric?.trend}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-soft">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Current Activity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Current Activity</h3>
              <p className="text-sm text-muted-foreground">
                12 developers actively coding, 3 client meetings scheduled, 5 deployments in progress
              </p>
            </div>

            {/* Response Time */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                Average 2.3 hours for client queries, 15 minutes for urgent issues
              </p>
            </div>

            {/* Quality Score */}
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality Score</h3>
              <p className="text-sm text-muted-foreground">
                4.9/5 client satisfaction, 98% bug-free deployments, zero security incidents
              </p>
            </div>
          </div>
        </div>

        {/* Live Updates Feed */}
        <div className="mt-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Live Updates</h3>
            <div className="flex items-center space-x-2 text-success">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Real-time</span>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { time: "2 min ago", event: "Project 'E-commerce Platform' milestone completed", type: "success" },
              { time: "8 min ago", event: "New client consultation scheduled for tomorrow", type: "info" },
              { time: "15 min ago", event: "Team standup completed - 12 members present", type: "info" },
              { time: "32 min ago", event: "Security audit passed for FinTech client", type: "success" }
            ]?.map((update, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  update?.type === 'success' ? 'bg-success' : 'bg-primary'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{update?.event}</p>
                  <p className="text-xs text-muted-foreground">{update?.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMetrics;
