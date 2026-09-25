import React, { useEffect, useState } from 'react';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: 'FileCheck' },
    { id: 'services-scope', title: '2. Consulting & Scope', icon: 'Briefcase' },
    { id: 'ip-rights', title: '3. Intellectual Property', icon: 'Award' },
    { id: 'milestones-payment', title: '4. Milestones & Invoicing', icon: 'CreditCard' },
    { id: 'confidentiality', title: '5. Confidentiality & NDA', icon: 'ShieldCheck' },
    { id: 'warranty-liability', title: '6. Warranty & Liability', icon: 'AlertTriangle' },
    { id: 'governing-law', title: '7. Jurisdiction & Law', icon: 'Scale' }
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Terms of Service | MindMesh WorkHub"
        description="Read the Terms of Service for MindMesh Technology Solutions. Understand our consulting agreements, software development milestones, IP rights, and governing legal frameworks."
        keywords="MindMesh terms of service, software development contract, IT consulting terms India, tech agency agreement"
        url="https://mindmesh.co.in/terms-of-service"
        breadcrumbs={[
          { name: "Home", url: "/homepage" },
          { name: "Terms of Service", url: "/terms-of-service" }
        ]}
      />

      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-b border-border/40 overflow-hidden">
          <div className="absolute inset-0 mesh-pattern opacity-20 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                <Icon name="FileText" size={14} />
                <span>Legal Agreement & Terms</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6">
                Terms of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Service</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                These terms govern your access to the MindMesh WorkHub digital platform, engagement in technology consulting services, and delivery of custom software and IoT engineering solutions.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                <span className="flex items-center space-x-1.5 px-3 py-1 bg-card rounded-md border border-border">
                  <Icon name="Calendar" size={14} className="text-primary" />
                  <span>Last Updated: September 2026</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1 bg-card rounded-md border border-border">
                  <Icon name="Building" size={14} className="text-primary" />
                  <span>MindMesh Technology Solutions</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Sticky Navigation */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 bg-card border border-border/70 rounded-2xl p-6 shadow-soft space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center space-x-2">
                  <Icon name="Compass" size={16} className="text-primary" />
                  <span>Section Index</span>
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-all ${
                        activeSection === section.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                      }`}
                    >
                      <Icon name={section.icon} size={16} />
                      <span className="truncate">{section.title}</span>
                    </button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-border/60">
                  <div className="p-4 bg-muted/40 rounded-xl border border-border">
                    <h4 className="text-xs font-bold text-foreground uppercase mb-1">Corporate Inquiries</h4>
                    <p className="text-xs text-muted-foreground mb-3">Questions on master service agreements (MSAs) or custom SLAs?</p>
                    <a
                      href="mailto:contact@mindmesh.co.in"
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>contact@mindmesh.co.in</span>
                      <Icon name="ArrowUpRight" size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Terms Content */}
            <div className="lg:col-span-8 space-y-12 text-foreground/90">
              {/* Section 1 */}
              <section id="acceptance" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="FileCheck" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    By navigating this website, utilizing the interactive Requirement Wizard, or executing a Statement of Work (SOW) with <strong>MindMesh Technology Solutions</strong>, you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service.
                  </p>
                  <p>
                    If you represent a corporate entity, you warrant that you possess the requisite authority to enter into commercial agreements on behalf of that organization.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="services-scope" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="Briefcase" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Consulting &amp; Engineering Scope</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    MindMesh provides high-performance engineering across custom software development, web applications, IoT telemetry, CRM/ERP architecture, and cloud deployment.
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm">
                    <li><strong>Statements of Work (SOW):</strong> Specific deliverables, architectures, and sprint schedules are defined in mutually signed project proposals or SOWs.</li>
                    <li><strong>Agile Change Requests:</strong> Modifications to pre-agreed specifications are evaluated for schedule and commercial impact via mutual written addenda.</li>
                    <li><strong>Client Responsibilities:</strong> The client agrees to furnish timely access to relevant APIs, brand assets, and feedback required to meet sprint timelines.</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="ip-rights" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="Award" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Intellectual Property Rights</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <h4 className="font-semibold text-foreground text-sm mb-2 text-primary">Client Ownership</h4>
                      <p className="text-xs sm:text-sm">
                        Upon full settlement of all milestone fees specified in the SOW, complete ownership of all custom bespoke source code, UI designs, and database schemas created expressly for the client transfers entirely to the client.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <h4 className="font-semibold text-foreground text-sm mb-2 text-secondary">Pre-existing Frameworks</h4>
                      <p className="text-xs sm:text-sm">
                        MindMesh retains proprietary rights in its pre-existing starter kits, reusable utility libraries, and foundational frameworks. The client receives a perpetual, worldwide, royalty-free license to use such embedded components.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="milestones-payment" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="CreditCard" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Milestones, Invoicing &amp; Taxes</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>Commercial terms are structured transparently on a milestone or sprint basis:</p>
                  <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside">
                    <li><strong>Milestone Payments:</strong> Invoices are raised upon completion and mutual verification of defined deliverables.</li>
                    <li><strong>Payment Window:</strong> Payments are due within 15 calendar days from the invoice issuance date unless otherwise specified.</li>
                    <li><strong>Statutory Taxes:</strong> All fees are subject to applicable Goods and Services Tax (GST) in India or local withholding taxes for international engagements.</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section id="confidentiality" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="ShieldCheck" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Confidentiality &amp; Non-Disclosure</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    Both parties acknowledge that they may receive sensitive business, financial, or proprietary technical information during the engagement.
                  </p>
                  <p>
                    MindMesh enforces strict Non-Disclosure Agreements (NDA) across all engineering personnel. Neither party shall disclose confidential information to any third party without explicit prior written authorization.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="warranty-liability" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="AlertTriangle" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. Warranties &amp; Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>90-Day Post-Launch Warranty:</strong> MindMesh provides a complimentary 90-day bug-fix warranty on all custom deliverables to resolve any deviations from agreed acceptance criteria.
                  </p>
                  <p>
                    <strong>Limitation:</strong> In no event shall MindMesh be liable for indirect, incidental, punitive, or consequential damages resulting from third-party cloud outages, unauthorized access to client credentials, or client modifications to source code.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="governing-law" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="Scale" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Governing Law &amp; Jurisdiction</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    These Terms of Service and any dispute arising out of or in connection with them shall be governed by and construed in accordance with the substantive laws of India.
                  </p>
                  <p className="font-medium text-foreground">
                    The courts situated in Bengaluru, Karnataka, India shall have exclusive jurisdiction to settle any disputes or legal proceedings arising under these terms.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
