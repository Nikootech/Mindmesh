import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: '1. Overview & Scope', icon: 'Shield' },
    { id: 'data-collection', title: '2. Information We Collect', icon: 'Database' },
    { id: 'data-usage', title: '3. How We Use Information', icon: 'Cpu' },
    { id: 'data-sharing', title: '4. Data Sharing & Disclosure', icon: 'Share2' },
    { id: 'data-security', title: '5. Security & Retention', icon: 'Lock' },
    { id: 'your-rights', title: '6. Your Rights & Choices', icon: 'UserCheck' },
    { id: 'grievance', title: '7. Grievance Officer & Contact', icon: 'Mail' }
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
        title="Privacy Policy | MindMesh WorkHub"
        description="Review MindMesh Technology Solutions' Privacy Policy. Learn how we collect, protect, and process enterprise data in compliance with India's DPDPA 2023 and global privacy standards."
        keywords="MindMesh privacy policy, data protection India, DPDPA compliance, enterprise data security"
        url="https://mindmesh.co.in/privacy-policy"
        breadcrumbs={[
          { name: "Home", url: "/homepage" },
          { name: "Privacy Policy", url: "/privacy-policy" }
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
                <Icon name="ShieldCheck" size={14} />
                <span>Data Protection & Privacy</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6">
                Privacy
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At MindMesh Technology Solutions, we are committed to safeguarding your privacy and upholding the highest standards of data security in compliance with India's Digital Personal Data Protection Act (DPDPA 2023) and international regulations.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                <span className="flex items-center space-x-1.5 px-3 py-1 bg-card rounded-md border border-border">
                  <Icon name="Calendar" size={14} className="text-primary" />
                  <span>Effective Date: September 2026</span>
                </span>
                <span className="flex items-center space-x-1.5 px-3 py-1 bg-card rounded-md border border-border">
                  <Icon name="Globe" size={14} className="text-primary" />
                  <span>Jurisdiction: Bengaluru, Karnataka, India</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Sticky Table of Contents */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 bg-card border border-border/70 rounded-2xl p-6 shadow-soft space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center space-x-2">
                  <Icon name="List" size={16} className="text-primary" />
                  <span>Contents Navigation</span>
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
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <h4 className="text-xs font-bold text-primary uppercase mb-1">Need Clarification?</h4>
                    <p className="text-xs text-muted-foreground mb-3">Our dedicated Data Protection team is available to assist.</p>
                    <a
                      href="mailto:info@mindmesh.co.in"
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>info@mindmesh.co.in</span>
                      <Icon name="ArrowUpRight" size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Policy Content */}
            <div className="lg:col-span-8 space-y-12 text-foreground/90">
              {/* Section 1 */}
              <section id="overview" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="Shield" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Overview & Scope</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    MindMesh Technology Solutions ("MindMesh", "we", "our", or "us") operates the website <strong className="text-foreground">https://mindmesh.co.in</strong> and provides strategic technology consulting, custom software development, IoT systems engineering, and enterprise digital transformation services.
                  </p>
                  <p>
                    This Privacy Policy articulates our principles and practices concerning the collection, storage, utilization, processing, and protection of personal data and business information provided by users, clients, and partners.
                  </p>
                  <div className="bg-muted/40 p-4 rounded-xl border-l-4 border-primary">
                    <p className="text-xs sm:text-sm text-foreground">
                      <strong>Legal Grounding:</strong> This policy is formulated in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act (DPDPA), 2023 of India.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="data-collection" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="Database" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Information We Collect</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>We collect information only to the extent necessary to deliver our services, prepare project proposals, and maintain business communications:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center space-x-2">
                        <Icon name="User" size={16} className="text-primary" />
                        <span>Directly Provided Data</span>
                      </h4>
                      <ul className="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
                        <li>Full Name and Job Title</li>
                        <li>Corporate & Personal Email Addresses</li>
                        <li>Phone & WhatsApp Contact Numbers</li>
                        <li>Company Name & Industry Domain</li>
                        <li>Project Scopes, Budgets & Timelines</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center space-x-2">
                        <Icon name="Activity" size={16} className="text-primary" />
                        <span>Technical & Telemetry Data</span>
                      </h4>
                      <ul className="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
                        <li>IP Address and Geographic Region</li>
                        <li>Browser Architecture & Device OS</li>
                        <li>Visited URLs & Duration of Sessions</li>
                        <li>Referring Website / Campaign Sources</li>
                        <li>Essential Session & Security Cookies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="data-usage" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="Cpu" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>Your data is processed strictly for legitimate business operations:</p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start space-x-3">
                      <Icon name="CheckCircle2" size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Consultation & Quoting:</strong> Evaluating project requirements to generate architectural estimates and proposals.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="CheckCircle2" size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Communication & Support:</strong> Responding to inquiries via email or phone within committed response SLAs.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="CheckCircle2" size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Service Delivery:</strong> Managing software sprint deliverables, client portals, and milestone sign-offs.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Icon name="CheckCircle2" size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span><strong>Platform Security:</strong> Monitoring traffic anomalies, mitigating denial-of-service, and preventing fraud.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section id="data-sharing" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="Share2" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Data Sharing & Third-Party Disclosure</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p className="font-semibold text-foreground">
                    MindMesh does not sell, rent, or lease your personal or business data to third-party advertisers or data brokers under any circumstances.
                  </p>
                  <p>Data is shared solely with trusted infrastructure service providers strictly required for platform operation:</p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="p-3 bg-muted/30 rounded-lg flex items-center justify-between">
                      <span className="font-medium text-foreground">Mail & Communication Servers:</span>
                      <span className="text-muted-foreground">mail.mindmesh.co.in / cPanel Exim</span>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg flex items-center justify-between">
                      <span className="font-medium text-foreground">Cloud Hosting Infrastructure:</span>
                      <span className="text-muted-foreground">Certified Tier-4 Data Centers (AWS / cPanel)</span>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg flex items-center justify-between">
                      <span className="font-medium text-foreground">Statutory / Legal Mandates:</span>
                      <span className="text-muted-foreground">Only upon lawful order by Indian law enforcement</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="data-security" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="Lock" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Data Security & Retention</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    We deploy multi-layered defense mechanisms to protect data against unauthorized interception, alteration, or disclosure:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3.5 bg-card border border-border rounded-xl">
                      <div className="font-bold text-foreground mb-1">End-to-End SSL/TLS</div>
                      <p>All data transmitted between your browser and our servers is secured using 256-bit encryption.</p>
                    </div>
                    <div className="p-3.5 bg-card border border-border rounded-xl">
                      <div className="font-bold text-foreground mb-1">Role-Based Access Control</div>
                      <p>Access to client inquiry records is limited strictly to authorized engineering leads.</p>
                    </div>
                    <div className="p-3.5 bg-card border border-border rounded-xl">
                      <div className="font-bold text-foreground mb-1">Sanitized Header Injection</div>
                      <p>All input fields are filtered against CRLF and SQL injection attack vectors.</p>
                    </div>
                    <div className="p-3.5 bg-card border border-border rounded-xl">
                      <div className="font-bold text-foreground mb-1">Retention Limitations</div>
                      <p>Consultation records are stored only as long as necessary to service the ongoing engagement.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="your-rights" className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name="UserCheck" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">6. Your Rights & Choices</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>Under India's DPDPA and international privacy guidelines, you hold clear rights concerning your data:</p>
                  <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm">
                    <li><strong>Right to Access:</strong> Request a summary of the personal information we maintain regarding your profile.</li>
                    <li><strong>Right to Correction:</strong> Request prompt rectification of incomplete or inaccurate records.</li>
                    <li><strong>Right to Erasure:</strong> Request the deletion of your consultation data if no active project engagement exists.</li>
                    <li><strong>Right to Withdraw Consent:</strong> Opt out of communications or newsletter subscriptions at any time with 1 click.</li>
                  </ul>
                </div>
              </section>

              {/* Section 7 */}
              <section id="grievance" className="bg-gradient-to-br from-card to-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                    <Icon name="Building2" size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">7. Grievance Officer & Contact Details</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    In accordance with the Information Technology Act and DPDPA, any inquiries, complaints, or grievance escalations regarding data privacy should be addressed to our appointed Grievance Officer:
                  </p>
                  
                  <div className="p-5 bg-card border border-border/80 rounded-xl space-y-2.5 text-xs sm:text-sm">
                    <div className="text-foreground font-bold text-base">MindMesh Technology Solutions</div>
                    <div><strong>Grievance Officer:</strong> Deepika Kannadasan</div>
                    <div><strong>Designation:</strong> Data Protection &amp; Governance Lead</div>
                    <div><strong>Email:</strong> <a href="mailto:Deepika@mindmesh.co.in" className="text-primary hover:underline font-semibold">Deepika@mindmesh.co.in</a> / <a href="mailto:contact@mindmesh.co.in" className="text-primary hover:underline font-semibold">contact@mindmesh.co.in</a></div>
                    <div><strong>Phone:</strong> <a href="tel:+918884867171" className="text-primary hover:underline font-semibold">+91 88848 67171</a></div>
                    <div><strong>Corporate Office:</strong> Manyata Mahogany, F2, 9&amp;10 FLR, Manyata-Techpark, Arabic College, Bangalore, Karnataka 560045, India.</div>
                  </div>
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

export default PrivacyPolicy;
