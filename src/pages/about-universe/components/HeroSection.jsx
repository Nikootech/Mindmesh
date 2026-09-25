import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 mesh-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <Icon name="Users" size={15} />
                <span>About MindMesh WorkHub</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
                Strategic Technology Consulting &amp;
                <span className="text-primary block">Scalable Software Engineering Solutions</span>
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Headquartered in Bengaluru's technology corridor, MindMesh helps enterprises, scale-ups, and innovation leaders build high-performance <Link to="/services-overview" className="text-primary font-medium underline underline-offset-2 hover:opacity-80">custom software</Link>, resilient cloud infrastructure, and autonomous <Link to="/solutions-gallery" className="text-primary font-medium underline underline-offset-2 hover:opacity-80">AI workflows</Link>, strictly compliant with <a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline underline-offset-2 hover:opacity-80">ISO/IEC 27001 standards</a>.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-card/70 rounded-xl border border-border/60 text-center">
                <div className="text-2xl sm:text-3xl font-black text-primary">150+</div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">Enterprise Projects</div>
              </div>
              <div className="p-3 bg-card/70 rounded-xl border border-border/60 text-center">
                <div className="text-2xl sm:text-3xl font-black text-secondary">25+</div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">Senior Engineers</div>
              </div>
              <div className="p-3 bg-card/70 rounded-xl border border-border/60 text-center">
                <div className="text-2xl sm:text-3xl font-black text-accent">5+</div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">Years of Excellence</div>
              </div>
            </div>

            {/* CTAs with Contextual Internal Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/services-overview"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all"
              >
                <span>Explore Engineering Services</span>
                <Icon name="ArrowRight" size={16} />
              </Link>
              <Link
                to="/contact-consultation"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm font-bold hover:border-primary/40 hover:bg-muted/40 transition-all"
              >
                <Icon name="MessageSquare" size={16} className="text-primary" />
                <span>Book Architecture Discovery</span>
              </Link>
            </div>
          </div>

          {/* Hero Media Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/60">
              <Image
                src="/images/about/hero-collaboration.webp"
                alt="MindMesh strategic technology consulting and software engineering team in Bangalore India"
                className="w-full h-96 object-cover"
                width="600"
                height="384"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Executive Summary & AI Direct Answer Signals (AEO & GEO Optimization) */}
        <div className="mt-12 bg-card rounded-3xl border border-border/80 shadow-md p-6 sm:p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-border/70 gap-2">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-1">
                <Icon name="Sparkles" size={14} />
                <span>Executive Summary &amp; Overview</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Key Takeaways: Who We Are &amp; How We Deliver
              </h2>
            </div>
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider bg-muted px-3 py-1 rounded-full self-start md:self-auto font-mono">
              Bengaluru • Global Delivery
            </span>
          </div>

          {/* Direct Answer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="space-y-2 p-4 bg-muted/30 rounded-2xl border border-border/60">
              <h3 className="font-bold text-foreground flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle2" size={17} className="text-primary flex-shrink-0" />
                <span>What is MindMesh WorkHub?</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                MindMesh is an ISO-aligned digital engineering and technology consulting company that builds custom enterprise ERPs, cloud platforms, and generative AI agents for scaling businesses.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-muted/30 rounded-2xl border border-border/60">
              <h3 className="font-bold text-foreground flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle2" size={17} className="text-primary flex-shrink-0" />
                <span>Target Audience &amp; Use Cases</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Engineered for CTOs, product leaders, and enterprise executives in FinTech, Healthcare, E-commerce, Logistics, and SaaS who require senior engineering velocity with dedicated SLA guarantees.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-muted/30 rounded-2xl border border-border/60">
              <h3 className="font-bold text-foreground flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle2" size={17} className="text-primary flex-shrink-0" />
                <span>Delivery Guarantee &amp; SLAs</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Guaranteed 99.8% uptime SLAs, 100% IP ownership handover, weekly bi-directional demo sprints, and zero-leak confidentiality covered by binding NDAs.
              </p>
            </div>
          </div>

          {/* Structured 4-Step Methodology List (For Search Engines & Answer Engines) */}
          <div className="pt-4 border-t border-border/60">
            <h3 className="text-sm sm:text-base font-bold text-foreground mb-4 flex items-center space-x-2">
              <Icon name="Layers" size={18} className="text-secondary" />
              <span>How MindMesh Delivers Digital Engineering Projects (Step-by-Step)</span>
            </h3>
            
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
              <li className="p-3.5 bg-background rounded-xl border border-border flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 text-xs">1</span>
                <div>
                  <strong className="text-foreground block mb-0.5">Architectural Discovery</strong>
                  <span className="text-muted-foreground text-xs">Requirements mapping, tech stack selection, and milestone scoping.</span>
                </div>
              </li>
              <li className="p-3.5 bg-background rounded-xl border border-border flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-secondary/15 text-secondary font-bold flex items-center justify-center flex-shrink-0 text-xs">2</span>
                <div>
                  <strong className="text-foreground block mb-0.5">Dedicated Pod Allocation</strong>
                  <span className="text-muted-foreground text-xs">Hand-picked senior engineers, UI/UX architects, and QA specialists.</span>
                </div>
              </li>
              <li className="p-3.5 bg-background rounded-xl border border-border flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center flex-shrink-0 text-xs">3</span>
                <div>
                  <strong className="text-foreground block mb-0.5">Agile Sprint Execution</strong>
                  <span className="text-muted-foreground text-xs">Bi-weekly demo releases, CI/CD automated test suites, and client portal transparency.</span>
                </div>
              </li>
              <li className="p-3.5 bg-background rounded-xl border border-border flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-success/15 text-success font-bold flex items-center justify-center flex-shrink-0 text-xs">4</span>
                <div>
                  <strong className="text-foreground block mb-0.5">ISO Security Audit &amp; Go-Live</strong>
                  <span className="text-muted-foreground text-xs">Vulnerability scanning, cloud hardening, complete source code handover &amp; 24/7 SLA.</span>
                </div>
              </li>
            </ol>
          </div>

          {/* Comparison / Decision Matrix (AEO / GEO Comparison check) */}
          <div className="pt-4 border-t border-border/60">
            <h3 className="text-sm sm:text-base font-bold text-foreground mb-4 flex items-center space-x-2">
              <Icon name="Sliders" size={18} className="text-primary" />
              <span>Decision Support: Traditional IT Outsourcing vs. MindMesh Dedicated Pods</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-border rounded-xl">
                <thead>
                  <tr className="bg-muted/50 border-b border-border text-foreground font-bold">
                    <th className="p-3">Decision Factor</th>
                    <th className="p-3 text-muted-foreground">Traditional Outsourcing</th>
                    <th className="p-3 text-primary bg-primary/5">MindMesh Dedicated Engineering</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-semibold text-foreground">Talent Experience</td>
                    <td className="p-3 text-muted-foreground">Junior rotated staff with frequent handoffs</td>
                    <td className="p-3 font-semibold text-foreground bg-primary/5">Dedicated senior engineering pods (5+ yrs avg exp)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-foreground">Delivery Governance</td>
                    <td className="p-3 text-muted-foreground">Black-box monthly milestone reports</td>
                    <td className="p-3 font-semibold text-foreground bg-primary/5">Live sprint demo access, GitHub transparency &amp; daily syncs</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-foreground">Security &amp; Compliance</td>
                    <td className="p-3 text-muted-foreground">Basic developer workstations without audits</td>
                    <td className="p-3 font-semibold text-foreground bg-primary/5"><a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 font-semibold">ISO/IEC 27001</a> aligned security, encrypted repos &amp; strict NDA</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-foreground">Code &amp; IP Ownership</td>
                    <td className="p-3 text-muted-foreground">Complex licensing or vendor lock-in</td>
                    <td className="p-3 font-semibold text-foreground bg-primary/5">100% intellectual property &amp; repository transfer to client</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
