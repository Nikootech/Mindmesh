import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ClientPortalSection = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const demoCredentials = {
    client: { email: "demo.client@shopeasy.com", password: "ClientDemo2024" },
    manager: { email: "project.manager@mindmesh.co.in", password: "ManagerDemo2024" }
  };

  const portalFeatures = [
    {
      icon: "BarChart3",
      title: "Real-time Progress Tracking",
      description: "Monitor project milestones, task completion, and timeline progress with live updates"
    },
    {
      icon: "MessageSquare",
      title: "Direct Communication",
      description: "Chat directly with your project team, share feedback, and get instant responses"
    },
    {
      icon: "FileText",
      title: "Document Management",
      description: "Access project documents, specifications, and deliverables in one secure location"
    },
    {
      icon: "Calendar",
      title: "Meeting Scheduler",
      description: "Schedule meetings, view upcoming calls, and access meeting recordings"
    },
    {
      icon: "CreditCard",
      title: "Invoice & Billing",
      description: "View invoices, payment history, and manage billing information transparently"
    },
    {
      icon: "Shield",
      title: "Secure Access",
      description: "Bank-grade security with role-based access and encrypted data transmission"
    }
  ];

  const handleInputChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleDemoLogin = (userType) => {
    setLoginForm(demoCredentials?.[userType]);
    setShowDemo(true);
  };

  const handleLogin = (e) => {
    e?.preventDefault();
    // Mock login validation
    const isValidClient = loginForm?.email === demoCredentials?.client?.email && 
                         loginForm?.password === demoCredentials?.client?.password;
    const isValidManager = loginForm?.email === demoCredentials?.manager?.email && 
                          loginForm?.password === demoCredentials?.manager?.password;
    
    if (isValidClient || isValidManager) {
      alert(`Demo login successful! Welcome to the ${isValidClient ? 'Client' : 'Project Manager'} Portal.`);
      setShowDemo(true);
    } else {
      alert('Invalid credentials. Please use the demo credentials provided below.');
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-6">
            <Icon name="Monitor" size={16} className="mr-2" />
            Client Portal Access
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Project Collaboration
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience complete transparency with our client portal. Track progress, 
            communicate with your team, and stay informed every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Portal Features */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Portal Features</h3>
            <div className="space-y-6">
              {portalFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature?.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Login Demo */}
          <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
            <div className="text-center mb-6">
              <Icon name="Lock" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Client Portal Demo</h3>
              <p className="text-muted-foreground text-sm">
                Experience our client portal with demo credentials
              </p>
            </div>

            {!showDemo ? (
              <>
                <form onSubmit={handleLogin} className="space-y-4 mb-6">
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={loginForm?.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                  
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={loginForm?.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                  />
                  
                  <Button 
                    type="submit"
                    variant="default" 
                    size="lg" 
                    fullWidth
                    iconName="LogIn" 
                    iconPosition="right"
                    className="gradient-accent"
                  >
                    Access Portal
                  </Button>
                </form>

                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Try demo access with these credentials:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground text-sm">Client Access</span>
                        <Button 
                          variant="outline" 
                          size="xs"
                          onClick={() => handleDemoLogin('client')}
                        >
                          Use Demo
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <div>Email: {demoCredentials?.client?.email}</div>
                        <div>Password: {demoCredentials?.client?.password}</div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground text-sm">Manager Access</span>
                        <Button 
                          variant="outline" 
                          size="xs"
                          onClick={() => handleDemoLogin('manager')}
                        >
                          Use Demo
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <div>Email: {demoCredentials?.manager?.email}</div>
                        <div>Password: {demoCredentials?.manager?.password}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-secondary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Demo Access Granted!</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  You would now be redirected to the full client portal dashboard with all features available.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setShowDemo(false)}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Portal Benefits */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Clients Love Our Portal
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete transparency and control over your project, with tools designed 
              to enhance collaboration and ensure success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" size={32} className="text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Complete Transparency</h4>
              <p className="text-muted-foreground text-sm">
                See exactly what's happening with your project at all times
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-secondary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Faster Communication</h4>
              <p className="text-muted-foreground text-sm">
                Direct access to your team eliminates delays and miscommunication
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Better Outcomes</h4>
              <p className="text-muted-foreground text-sm">
                Active collaboration leads to solutions that exceed expectations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalSection;
