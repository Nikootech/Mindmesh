import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqCategories = [
    {
      title: 'Project Planning & Pricing',
      faqs: [
        {
          question: 'How do you determine project pricing?',
          answer: `Our pricing is based on several factors including project complexity, required features, timeline, and technology stack. We provide transparent pricing with detailed breakdowns:\n\n• **Discovery Phase**: Requirements analysis and planning\n• **Development Phase**: Core feature development\n• **Testing Phase**: Quality assurance and bug fixes\n• **Deployment Phase**: Launch and go-live support\n• **Maintenance**: Ongoing support and updates\n\nWe offer fixed-price projects for well-defined requirements and time & material pricing for evolving projects.`
        },
        {
          question: 'What information do you need to provide an accurate estimate?',
          answer: `To provide the most accurate estimate, we need:\n\n• **Project Overview**: Goals, target audience, and business objectives\n• **Feature Requirements**: Detailed list of required functionality\n• **Design Preferences**: UI/UX expectations and brand guidelines\n• **Technical Requirements**: Integration needs, performance expectations\n• **Timeline**: Preferred launch date and any critical milestones\n• **Budget Range**: Approximate investment range you're comfortable with\n\nThe more details you provide, the more accurate our estimate will be.`
        },
        {
          question: 'Do you work with startups and small businesses?',
          answer: `Absolutely! We work with businesses of all sizes, from early-stage startups to large enterprises. We understand that startups have unique needs:\n\n• **Flexible Payment Terms**: Milestone-based payments\n• **MVP Development**: Focus on core features first\n• **Scalable Architecture**: Built to grow with your business\n• **Cost-Effective Solutions**: Maximum value within budget constraints\n• **Startup Mentorship**: Business and technical guidance\n\nWe've helped 200+ startups launch their digital products successfully.`
        },
        {
          question: 'What happens if my requirements change during development?',
          answer: `We understand that requirements can evolve, especially for innovative projects. Our approach:\n\n• **Agile Methodology**: Built-in flexibility for changes\n• **Change Request Process**: Formal evaluation of impact and cost\n• **Transparent Communication**: Regular updates and discussions\n• **Scope Management**: Clear documentation of approved changes\n• **Budget Protection**: No surprise costs, all changes pre-approved\n\nMinor changes are often accommodated within the original scope, while major changes are evaluated for timeline and cost impact.`
        }
      ]
    },
    {
      title: 'Development Process & Timeline',
      faqs: [
        {
          question: 'How long does a typical project take?',
          answer: `Project timelines vary based on complexity and scope:\n\n• **Simple Website**: 4-8 weeks\n• **Web Application**: 8-16 weeks\n• **Mobile App**: 12-20 weeks\n• **Enterprise Solution**: 20-40 weeks\n• **Digital Transformation**: 6-18 months\n\nFactors affecting timeline:\n• Feature complexity and number\n• Third-party integrations required\n• Custom design requirements\n• Client feedback and approval cycles\n• Testing and quality assurance needs`
        },
        {
          question: 'What is your development methodology?',
          answer: `We follow Agile development methodology with these key practices:\n\n• **Sprint Planning**: 2-week development cycles\n• **Daily Standups**: Team coordination and progress tracking\n• **Sprint Reviews**: Regular client demonstrations\n• **Retrospectives**: Continuous process improvement\n• **Continuous Integration**: Automated testing and deployment\n\nThis approach ensures transparency, flexibility, and high-quality deliverables while keeping you involved throughout the process.`
        },
        {
          question: 'How do you ensure project quality?',
          answer: `Quality is our top priority. Our quality assurance process includes:\n\n• **Code Reviews**: Peer review of all code changes\n• **Automated Testing**: Unit, integration, and end-to-end tests\n• **Manual Testing**: Comprehensive functional and usability testing\n• **Performance Testing**: Load testing and optimization\n• **Security Audits**: Vulnerability assessments and fixes\n• **Cross-browser Testing**: Compatibility across all major browsers\n• **Mobile Responsiveness**: Testing on various devices and screen sizes`
        },
        {
          question: 'Can I track project progress in real-time?',
          answer: `Yes! We provide complete transparency through:\n\n• **Client Portal**: Real-time access to project status\n• **Task Tracking**: Detailed progress on individual features\n• **Time Logging**: Transparent time tracking for all activities\n• **Document Sharing**: Access to all project documentation\n• **Communication Hub**: Centralized messaging and feedback\n• **Demo Environments**: Regular access to work-in-progress\n• **Weekly Reports**: Detailed progress summaries and next steps`
        }
      ]
    },
    {
      title: 'Technology & Support',
      faqs: [
        {
          question: 'What technologies do you specialize in?',
          answer: `We work with modern, proven technologies:\n\n**Frontend**: React, Next.js, Vue.js, Angular, TypeScript\n**Backend**: Node.js, Python, PHP, .NET, Java\n**Mobile**: React Native, Flutter, iOS (Swift), Android (Kotlin)\n**Databases**: PostgreSQL, MySQL, MongoDB, Redis\n**Cloud**: AWS, Google Cloud, Azure, Digital Ocean\n**DevOps**: Docker, Kubernetes, CI/CD pipelines\n\nWe choose the best technology stack based on your specific requirements, scalability needs, and long-term goals.`
        },
        {
          question: 'Do you provide ongoing support after launch?',
          answer: `Yes, we offer comprehensive post-launch support:\n\n• **Bug Fixes**: 90-day warranty on all development work\n• **Technical Support**: Ongoing maintenance and updates\n• **Performance Monitoring**: Proactive system health checks\n• **Security Updates**: Regular security patches and updates\n• **Feature Enhancements**: Continuous improvement and new features\n• **Training**: Team training on system usage and management\n• **Documentation**: Comprehensive technical and user documentation`
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer: `Absolutely! We have extensive experience with system integrations:\n\n• **CRM Systems**: Salesforce, HubSpot, Zoho, custom CRMs\n• **ERP Solutions**: SAP, Oracle, Microsoft Dynamics\n• **Payment Gateways**: Stripe, PayPal, Razorpay, custom solutions\n• **APIs**: REST, GraphQL, SOAP, and custom API development\n• **Databases**: Migration and synchronization between systems\n• **Third-party Services**: Social media, analytics, marketing tools\n\nWe ensure seamless data flow and maintain system integrity throughout the integration process.`
        },
        {
          question: 'What about data security and compliance?',
          answer: `Security is paramount in all our projects:\n\n• **Data Encryption**: End-to-end encryption for sensitive data\n• **Secure Authentication**: Multi-factor authentication and OAuth\n• **Compliance**: GDPR, HIPAA, SOC 2, and industry-specific standards\n• **Regular Audits**: Security assessments and penetration testing\n• **Secure Hosting**: Enterprise-grade hosting with security monitoring\n• **Backup & Recovery**: Automated backups and disaster recovery plans\n• **Access Controls**: Role-based permissions and audit trails`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const globalIndex = faqCategories?.slice(0, categoryIndex)?.reduce((sum, cat) => sum + cat?.faqs?.length, 0) + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? -1 : globalIndex);
  };

  const getGlobalIndex = (categoryIndex, faqIndex) => {
    return faqCategories?.slice(0, categoryIndex)?.reduce((sum, cat) => sum + cat?.faqs?.length, 0) + faqIndex;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our consultation process, development methodology, and services.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-border">
                <h3 className="text-lg font-semibold text-foreground flex items-center">
                  <Icon name="HelpCircle" size={20} className="mr-3 text-primary" />
                  {category?.title}
                </h3>
              </div>

              <div className="divide-y divide-border">
                {category?.faqs?.map((faq, faqIndex) => {
                  const globalIndex = getGlobalIndex(categoryIndex, faqIndex);
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-muted/30 transition-colors duration-200 focus:outline-none focus:bg-muted/30"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-foreground font-medium pr-4">{faq?.question}</h4>
                          <Icon 
                            name={isOpen ? "ChevronUp" : "ChevronDown"} 
                            size={20} 
                            className="text-muted-foreground flex-shrink-0 transition-transform duration-200"
                          />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                            {faq?.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get personalized answers to your specific project questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="MessageSquare" size={20} />
                <span>Start Live Chat</span>
              </button>
              
              <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Mail" size={20} />
                <span>Send Email</span>
              </button>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              <Icon name="Clock" size={16} className="inline mr-2" />
              Average response time: 2 hours during business hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
