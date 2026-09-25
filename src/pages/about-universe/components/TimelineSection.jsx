import React from 'react';
import Icon from '../../../components/AppIcon';

const colorMap = {
  primary: {
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
    dotBorder: "border-blue-500",
    accentBorder: "hover:border-blue-400 dark:hover:border-blue-600",
  },
  secondary: {
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    iconBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400",
    dotBorder: "border-emerald-500",
    accentBorder: "hover:border-emerald-400 dark:hover:border-emerald-600",
  },
  accent: {
    badgeBg: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800",
    iconBg: "bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400",
    dotBorder: "border-orange-500",
    accentBorder: "hover:border-orange-400 dark:hover:border-orange-600",
  }
};

const TimelineSection = () => {
  const milestones = [
    {
      year: "2019",
      tag: "Inception",
      title: "The Beginning",
      description: "Founded by three passionate developers with a vision to bridge the gap between complex technology and real business needs.",
      icon: "Rocket",
      color: "primary"
    },
    {
      year: "2020",
      tag: "Milestone",
      title: "First Major Success",
      description: "Delivered our first enterprise-level project for a leading fintech company, establishing our reputation for quality and reliability.",
      icon: "Trophy",
      color: "secondary"
    },
    {
      year: "2021",
      tag: "Expansion",
      title: "Team Expansion",
      description: "Grew from 3 to 15 team members, bringing in specialists in UI/UX, DevOps, and project management.",
      icon: "Users",
      color: "accent"
    },
    {
      year: "2022",
      tag: "Innovation",
      title: "WorkHub Development",
      description: "Started building our internal workforce management platform, practicing what we preach about digital transformation.",
      icon: "Code",
      color: "primary"
    },
    {
      year: "2023",
      tag: "Achievement",
      title: "Industry Recognition",
      description: "Achieved ISO 27001 certification and recognized as 'Emerging Tech Partner of the Year' by TechIndia Awards.",
      icon: "Award",
      color: "secondary"
    },
    {
      year: "2024",
      tag: "Evolution",
      title: "Innovation Hub",
      description: "Launched our AI-powered project estimation tools and expanded into emerging technologies like blockchain and IoT.",
      icon: "Zap",
      color: "accent"
    },
    {
      year: "2025",
      tag: "Global Footprint",
      title: "Global Reach & AI Ecosystem",
      description: "Expanded our reach into international markets, rolling out proprietary AI-driven workflows and establishing strategic enterprise partnerships.",
      icon: "Cpu",
      color: "primary"
    },
    {
      year: "2026",
      tag: "Next Horizon",
      title: "Sustainable Innovation & Scale",
      description: "Pioneering human-centered intelligent automation, green computing practices, and next-generation cloud architectures worldwide.",
      icon: "TrendingUp",
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Icon name="Compass" size={15} />
            <span>Our Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Our Journey of Innovation
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every milestone represents our commitment to growth, learning, and delivering exceptional value to our clients worldwide.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Continuous Center Timeline Line (Desktop & Tablet) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-emerald-500 to-orange-500 rounded-full opacity-60"></div>

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const style = colorMap[milestone.color] || colorMap.primary;

              return (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Milestone Card (Left 1, Right 1) */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:pr-10 lg:pr-12' : 'md:pl-10 lg:pl-12'
                    }`}
                  >
                    <div
                      className={`group bg-card rounded-2xl p-6 sm:p-8 border border-border/80 shadow-soft hover:shadow-xl transition-all duration-300 hover-lift ${style.accentBorder}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${style.badgeBg}`}
                        >
                          {milestone.tag}
                        </span>
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                            {milestone.year}
                          </span>
                          {/* Mobile-only Icon Badge */}
                          <div
                            className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center ${style.iconBg} shadow-sm`}
                          >
                            <Icon name={milestone.icon} size={18} />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {milestone.title}
                      </h3>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Center Node (Desktop & Tablet) */}
                  <div className="hidden md:flex relative z-10 flex-shrink-0 items-center justify-center">
                    <div
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 ${style.dotBorder} ${style.iconBg} bg-card flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}
                    >
                      <Icon name={milestone.icon} size={24} />
                    </div>
                  </div>

                  {/* Spacer for opposite side to keep center line balanced */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

