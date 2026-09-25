import React, { useEffect, useState } from 'react';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CookiePolicy = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    functional: true,
    marketing: false
  });
  const [savedNotification, setSavedNotification] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const saved = localStorage.getItem('mindmesh_cookie_prefs');
      if (saved) {
        setPreferences(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const handleToggle = (key) => {
    if (key === 'necessary') return; // Cannot disable essential cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem('mindmesh_cookie_prefs', JSON.stringify(preferences));
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 3500);
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Cookie Policy & Settings | MindMesh WorkHub"
        description="Learn how MindMesh WorkHub uses cookies and manage your privacy preferences for essential, analytics, and functional cookies."
        keywords="MindMesh cookies, cookie policy, cookie settings, privacy preferences"
        url="https://mindmesh.co.in/cookie-policy"
        breadcrumbs={[
          { name: "Home", url: "/homepage" },
          { name: "Cookie Settings", url: "/cookie-policy" }
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
                <Icon name="Cookie" size={14} />
                <span>Cookies &amp; Local Storage</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6">
                Cookie
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Settings</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We use cookies and browser storage technologies to enhance navigation, analyze site performance, and remember your project wizard calculations. You can customize your preferences at any time below.
              </p>
              <div className="flex items-center space-x-2 text-xs font-medium text-muted-foreground">
                <Icon name="ShieldCheck" size={16} className="text-success" />
                <span>Zero third-party advertising tracking scripts.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          {/* Interactive Cookie Preference Center */}
          <section className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-soft relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/80">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Interactive Preference Manager</h2>
                <p className="text-sm text-muted-foreground mt-1">Select which category of cookies you consent to use during your session.</p>
              </div>
              <Button
                variant="default"
                onClick={handleSave}
                iconName="Check"
                iconPosition="left"
                className="gradient-accent flex-shrink-0"
              >
                Save Preferences
              </Button>
            </div>

            {savedNotification && (
              <div className="my-4 p-4 bg-success/10 border border-success/30 rounded-xl flex items-center space-x-3 text-success text-sm font-medium animate-fadeIn">
                <Icon name="CheckCircle" size={18} />
                <span>Your cookie preferences have been saved successfully!</span>
              </div>
            )}

            <div className="divide-y divide-border/60 mt-4">
              {/* Category 1 */}
              <div className="py-5 flex items-start justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-foreground">Strictly Necessary Cookies</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-muted text-muted-foreground rounded-full">Always Active</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Required for core website security, session validation, form submission anti-tamper guards, and basic navigation functionality. These cannot be disabled.
                  </p>
                </div>
                <div className="w-12 h-6 bg-primary/40 rounded-full flex items-center p-1 cursor-not-allowed opacity-80 flex-shrink-0">
                  <div className="w-4 h-4 bg-primary rounded-full transform translate-x-6"></div>
                </div>
              </div>

              {/* Category 2 */}
              <div className="py-5 flex items-start justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-foreground">Performance &amp; Analytics Cookies</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Helps us aggregate anonymous visitor counts, identify sluggish page loads, and understand which service categories receive the most interest.
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors flex-shrink-0 ${
                    preferences.analytics ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label="Toggle analytics cookies"
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    preferences.analytics ? 'transform translate-x-6' : 'transform translate-x-0'
                  }`}></div>
                </button>
              </div>

              {/* Category 3 */}
              <div className="py-5 flex items-start justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-foreground">Functional &amp; Estimate Cookies</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Enables enhanced features such as remembering your selections in the Requirement Wizard so you don't lose your project estimate when browsing.
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('functional')}
                  className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors flex-shrink-0 ${
                    preferences.functional ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label="Toggle functional cookies"
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    preferences.functional ? 'transform translate-x-6' : 'transform translate-x-0'
                  }`}></div>
                </button>
              </div>

              {/* Category 4 */}
              <div className="py-5 flex items-start justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-foreground">Marketing &amp; Personalization</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Used to measure conversion effectiveness on marketing landing pages. We do not use cross-site tracking or sell advertising space.
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors flex-shrink-0 ${
                    preferences.marketing ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label="Toggle marketing cookies"
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    preferences.marketing ? 'transform translate-x-6' : 'transform translate-x-0'
                  }`}></div>
                </button>
              </div>
            </div>
          </section>

          {/* Educational Content */}
          <div className="space-y-8 text-foreground/90">
            <section className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
                <Icon name="Info" size={20} className="text-primary" />
                <span>What are Cookies?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Cookies are small text files placed on your browser or device by websites you visit. They are widely used to make websites function properly, provide secure authenticated sessions, and deliver business insights to the operators.
              </p>
            </section>

            <section className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-soft space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
                <Icon name="Sliders" size={20} className="text-primary" />
                <span>Controlling Cookies Through Your Browser</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                In addition to our preference manager above, you can block or remove cookies through your browser settings. Consult your browser's documentation for instructions:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-semibold">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/40 rounded-xl text-center hover:bg-muted transition-colors">
                  Google Chrome
                </a>
                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/40 rounded-xl text-center hover:bg-muted transition-colors">
                  Mozilla Firefox
                </a>
                <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/40 rounded-xl text-center hover:bg-muted transition-colors">
                  Apple Safari
                </a>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted/40 rounded-xl text-center hover:bg-muted transition-colors">
                  Microsoft Edge
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
