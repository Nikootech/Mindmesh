import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WorkHubPreview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: 'BarChart3',
      description: 'Real-time project overview and team metrics'
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: 'Briefcase',
      description: 'Comprehensive project management and collaboration'
    },
    {
      id: 'team',
      name: 'Team Hub',
      icon: 'Users',
      description: 'Employee directory and performance tracking'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: 'TrendingUp',
      description: 'Advanced insights and predictive analytics'
    }
  ];

  const mockData = {
    dashboard: {
      stats: [
        { label: 'Active Projects', value: '47', change: '+3', icon: 'Briefcase' },
        { label: 'Team Productivity', value: '98.5%', change: '+2.1%', icon: 'TrendingUp' },
        { label: 'Client Satisfaction', value: '4.9/5', change: '+0.2', icon: 'Star' },
        { label: 'Revenue This Month', value: '₹12.5L', change: '+18%', icon: 'DollarSign' }
      ],
      activities: [
        { user: 'Priya S.', action: 'completed UI design review', time: '2 min ago', avatar: 'PS' },
        { user: 'Rahul K.', action: 'deployed feature update', time: '15 min ago', avatar: 'RK' },
        { user: 'Anita M.', action: 'client meeting scheduled', time: '32 min ago', avatar: 'AM' },
        { user: 'Dev Team', action: 'daily standup completed', time: '1 hour ago', avatar: 'DT' }
      ]
    },
    projects: {
      projects: [
        { name: 'E-commerce Platform', client: 'RetailMax', progress: 85, status: 'On Track', team: 5 },
        { name: 'Mobile Banking App', client: 'FinanceFlow', progress: 92, status: 'Review', team: 4 },
        { name: 'Healthcare Portal', client: 'HealthFirst', progress: 67, status: 'In Progress', team: 6 },
        { name: 'IoT Dashboard', client: 'GreenEnergy', progress: 45, status: 'Planning', team: 3 }
      ]
    },
    team: {
      members: [
        { name: 'Priya Sharma', role: 'Senior Developer', status: 'Active', projects: 3, avatar: 'PS' },
        { name: 'Rahul Kumar', role: 'DevOps Engineer', status: 'Active', projects: 2, avatar: 'RK' },
        { name: 'Anita Mehta', role: 'Project Manager', status: 'Meeting', projects: 5, avatar: 'AM' },
        { name: 'Vikram Singh', role: 'UI/UX Designer', status: 'Active', projects: 4, avatar: 'VS' }
      ]
    },
    analytics: {
      metrics: [
        { title: 'Project Velocity', value: '12.3', unit: 'points/sprint', trend: 'up' },
        { title: 'Code Quality', value: '94%', unit: 'coverage', trend: 'up' },
        { title: 'Client Response Time', value: '2.1', unit: 'hours avg', trend: 'down' },
        { title: 'Team Utilization', value: '87%', unit: 'capacity', trend: 'up' }
      ]
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {mockData?.dashboard?.stats?.map((stat, index) => (
                <div key={index} className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Icon name={stat?.icon} size={16} className="text-primary" />
                    <span className="text-xs text-success font-medium">{stat?.change}</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground">{stat?.label}</div>
                </div>
              ))}
            </div>
            {/* Recent Activity */}
            <div className="bg-muted/20 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-foreground mb-3">Recent Activity</h4>
              <div className="space-y-3">
                {mockData?.dashboard?.activities?.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-white">{activity?.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground">
                        <span className="font-medium">{activity?.user}</span> {activity?.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity?.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-4">
            {mockData?.projects?.projects?.map((project, index) => (
              <div key={index} className="bg-muted/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{project?.name}</h4>
                    <p className="text-xs text-muted-foreground">{project?.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-foreground">{project?.progress}%</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      project?.status === 'On Track' ? 'bg-success/10 text-success' :
                      project?.status === 'Review' ? 'bg-warning/10 text-warning' :
                      project?.status === 'In Progress'? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      {project?.status}
                    </div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project?.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{project?.team} members</span>
                  </div>
                  <button className="text-xs text-primary hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'team':
        return (
          <div className="space-y-3">
            {mockData?.team?.members?.map((member, index) => (
              <div key={index} className="bg-muted/20 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">{member?.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground">{member?.name}</h4>
                    <p className="text-xs text-muted-foreground">{member?.role}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full mb-1 ${
                      member?.status === 'Active' ? 'bg-success/10 text-success' :
                      member?.status === 'Meeting'? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                    }`}>
                      {member?.status}
                    </div>
                    <p className="text-xs text-muted-foreground">{member?.projects} projects</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'analytics':
        return (
          <div className="grid grid-cols-2 gap-4">
            {mockData?.analytics?.metrics?.map((metric, index) => (
              <div key={index} className="bg-muted/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-medium text-muted-foreground">{metric?.title}</h4>
                  <Icon 
                    name={metric?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                    size={12} 
                    className={metric?.trend === 'up' ? 'text-success' : 'text-error'} 
                  />
                </div>
                <div className="text-lg font-bold text-foreground mb-1">{metric?.value}</div>
                <div className="text-xs text-muted-foreground">{metric?.unit}</div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Eye" size={16} />
              <span>See How We Work</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Experience{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WorkHub
              </span>{' '}
              Transparency
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get a glimpse into our internal platform that powers project management, team collaboration, 
              and client transparency. This is the same system we use daily to deliver exceptional results.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: 'Shield', text: 'Real-time project visibility and progress tracking' },
                { icon: 'Users', text: 'Seamless team collaboration and communication' },
                { icon: 'BarChart3', text: 'Advanced analytics and performance insights' },
                { icon: 'Clock', text: 'Automated time tracking and productivity metrics' }
              ]?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={feature?.icon} size={16} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature?.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  size="lg"
                  iconName="Calendar" 
                  iconPosition="left"
                  className="gradient-accent"
                >
                  Schedule Demo
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download" 
                iconPosition="left"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Preview */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-soft overflow-hidden">
              {/* Tab Navigation */}
              <div className="border-b border-border bg-muted/20">
                <div className="flex overflow-x-auto">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab?.id
                          ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                      }`}
                    >
                      <Icon name={tab?.icon} size={16} />
                      <span>{tab?.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {tabs?.find(tab => tab?.id === activeTab)?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tabs?.find(tab => tab?.id === activeTab)?.description}
                  </p>
                </div>

                <div className="min-h-[300px]">
                  {renderTabContent()}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-3 py-1 rounded-full text-xs font-medium">
              Live Demo
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-soft">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-foreground">Real-time updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHubPreview;
