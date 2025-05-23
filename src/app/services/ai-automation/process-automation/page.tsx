'use client';

import Link from 'next/link';
import { useScrollAnimationClass } from '@/lib/hooks/useScrollAnimation';
import ServiceBottomNavigation from '@/components/ServiceBottomNavigation';
import { 
  MdAutoAwesome,
  MdTimeline,
  MdIntegrationInstructions,
  MdSettings,
  MdSpeed,
  MdAnalytics,
  MdCheck,
  MdArrowBack,
  MdRocket
} from 'react-icons/md';

export default function ProcessAutomationPage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const featuresAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const processAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const pricingAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');

  const features = [
    {
      icon: 'MdTimeline',
      title: 'Workflow Optimization',
      description: 'Streamline complex business processes with intelligent automation and decision-making capabilities.'
    },
    {
      icon: 'MdSpeed',
      title: 'Task Automation',
      description: 'Eliminate repetitive manual tasks with smart automation that adapts to changing business requirements.'
    },
    {
      icon: 'MdSettings',
      title: 'Decision Tree Logic',
      description: 'Advanced logic systems that handle complex business rules and conditional processing automatically.'
    },
    {
      icon: 'MdAnalytics',
      title: 'Process Analytics',
      description: 'Real-time monitoring and optimization of automated processes with detailed performance insights.'
    },
    {
      icon: 'MdIntegrationInstructions',
      title: 'Integration APIs',
      description: 'Seamless connectivity with existing systems, databases, and third-party applications.'
    },
    {
      icon: 'MdRocket',
      title: 'Scalable Architecture',
      description: 'Future-proof automation solutions that grow with your business and handle increasing complexity.'
    }
  ];

  const automationTypes = [
    {
      category: 'Data Processing',
      description: 'Automated data collection, validation, and transformation workflows',
      examples: [
        'Invoice processing and approval workflows',
        'Customer data validation and enrichment',
        'Report generation and distribution',
        'Database synchronization processes'
      ]
    },
    {
      category: 'Communication Automation',
      description: 'Intelligent communication and notification systems',
      examples: [
        'Email marketing automation',
        'Customer follow-up sequences',
        'Alert and notification systems',
        'Multi-channel messaging workflows'
      ]
    },
    {
      category: 'Business Operations',
      description: 'Core business process automation and optimization',
      examples: [
        'Order processing and fulfillment',
        'Inventory management workflows',
        'Employee onboarding processes',
        'Quality assurance automation'
      ]
    },
    {
      category: 'Financial Processes',
      description: 'Financial workflow automation and compliance',
      examples: [
        'Accounts payable automation',
        'Expense report processing',
        'Budget approval workflows',
        'Compliance monitoring systems'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Process Analysis',
      description: 'Comprehensive analysis of current workflows to identify automation opportunities and optimization potential.',
      duration: '1-2 weeks'
    },
    {
      step: '2', 
      title: 'Solution Design',
      description: 'Custom automation architecture design with integration planning and business rule configuration.',
      duration: '2-3 weeks'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'Automation development, rigorous testing, and validation with your existing systems and workflows.',
      duration: '3-6 weeks'
    },
    {
      step: '4',
      title: 'Deployment & Training',
      description: 'Live deployment with comprehensive team training, documentation, and ongoing optimization support.',
      duration: 'Ongoing'
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic Automation',
      price: '$5,000',
      period: 'one-time + $499/month',
      description: 'Essential process automation for small teams',
      features: [
        'Up to 5 automated workflows',
        'Basic integration capabilities',
        'Email and SMS notifications',
        'Standard reporting dashboard',
        'Email support',
        'Process documentation'
      ],
      color: 'emerald-green',
      recommended: false
    },
    {
      name: 'Professional Automation',
      price: '$15,000',
      period: 'one-time + $1,299/month',
      description: 'Advanced automation for growing businesses',
      features: [
        'Up to 25 automated workflows',
        'Advanced API integrations',
        'Custom decision logic',
        'Real-time analytics and monitoring',
        'Database connectivity',
        'Priority support',
        'Custom training sessions',
        'Performance optimization'
      ],
      color: 'deep-sky-blue',
      recommended: true
    },
    {
      name: 'Enterprise Automation',
      price: '$50,000+',
      period: 'one-time + custom monthly',
      description: 'Enterprise-grade automation platform',
      features: [
        'Unlimited automated workflows',
        'Complex multi-system integrations',
        'AI-powered decision making',
        'Custom analytics platforms',
        'Compliance and audit trails',
        '24/7 dedicated support',
        'On-site training and consulting',
        'Custom development and scaling'
      ],
      color: 'orange-peel',
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      
      {/* Hero Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={heroAnimation.elementRef} className={`${heroAnimation.animationClass} transition-all duration-700`}>
            <div className="text-center max-w-4xl mx-auto">
              
              {/* Breadcrumb */}
              <nav className="mb-8">
                <div className="flex items-center justify-center space-x-2 text-emerald-600">
                  <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link>
                  <span>/</span>
                  <Link href="/services/ai-automation" className="hover:text-emerald-400 transition-colors">AI Automation</Link>
                  <span>/</span>
                  <span className="text-emerald-800">Process Automation</span>
                </div>
              </nav>

              {/* Back Button */}
              <div className="flex justify-center mb-6">
                <Link 
                  href="/services/ai-automation"
                  className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-800 transition-colors"
                >
                  <MdArrowBack className="w-5 h-5" />
                  <span>Back to AI Automation</span>
                </Link>
              </div>

              {/* Hero Content */}
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-emerald-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-emerald-500/30 rounded-xl">
                    <MdAutoAwesome className="w-12 h-12 text-emerald-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-emerald-900">
                  Intelligent Process Automation
                </h1>
                
                <p className="text-xl md:text-2xl text-emerald-800 mb-8 max-w-3xl mx-auto">
                  Streamline workflows with AI-powered automation solutions that eliminate manual tasks 
                  and optimize business operations for maximum efficiency.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Start Automation Project
                  </Link>
                  <Link 
                    href="#features" 
                    className="btn-outline border-emerald-600 text-emerald-800 hover:bg-emerald-600 hover:text-white"
                  >
                    Explore Automation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={featuresAnimation.elementRef} className={`${featuresAnimation.animationClass} transition-all duration-600`}>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                Automation Features & Capabilities
              </h2>
              <p className="text-xl text-emerald-800 max-w-3xl mx-auto">
                Powerful automation technology that transforms how your business operates
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="bg-sky-500/20 backdrop-blur-sm rounded-xl p-6 border border-sky-500/30">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-sky-500/30 rounded-lg mr-4">
                      <MdAutoAwesome className="w-6 h-6 text-sky-900" />
                    </div>
                    <h3 className="text-lg font-bold text-sky-900">{feature.title}</h3>
                  </div>
                  <p className="text-sky-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
              Automation Solutions
            </h2>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto">
              Comprehensive automation across all business functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div key={type.category} className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-orange-900 mb-3">{type.category}</h3>
                <p className="text-orange-800 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start space-x-3">
                      <MdCheck className="w-5 h-5 text-orange-900 mt-0.5 flex-shrink-0" />
                      <span className="text-orange-800">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={processAnimation.elementRef} className={`${processAnimation.animationClass} transition-all duration-600`}>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Automation Development Process
              </h2>
              <p className="text-xl text-blue-800 max-w-3xl mx-auto">
                Our systematic approach ensures successful automation deployment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={step.step} className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center">
                  <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-900">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-blue-800 mb-3">{step.description}</p>
                  <div className="text-sm font-semibold text-blue-900 bg-blue-500/20 rounded-lg px-3 py-1">
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={pricingAnimation.elementRef} className={`${pricingAnimation.animationClass} transition-all duration-600`}>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                Process Automation Pricing
              </h2>
              <p className="text-xl text-purple-800 max-w-3xl mx-auto">
                Flexible automation solutions designed for businesses of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={tier.name} 
                  className={`relative bg-${tier.color}/20 backdrop-blur-sm rounded-xl p-8 border border-${tier.color}/30 ${tier.recommended ? 'ring-2 ring-emerald-500' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{tier.price}</div>
                    <div className="text-gray-700 text-sm">{tier.period}</div>
                    <p className="text-gray-800 mt-3">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <MdCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className={`block w-full text-center btn-primary ${tier.recommended 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-emerald-500 to-sky-500">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Processes?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your business operations with intelligent process automation. 
              Contact us for a free consultation and custom automation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-emerald-600 hover:bg-gray-100"
              >
                Start Automation Project
              </Link>
              <Link 
                href="/services/ai-automation" 
                className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <ServiceBottomNavigation
        currentPage="Process Automation"
        currentCategory="AI Automation"
        parentPage={{
          name: "AI Automation",
          href: "/services/ai-automation"
        }}
        previousPage={{
          name: "Chatbot Development",
          href: "/services/ai-automation/chatbot-development"
        }}
        nextPage={{
          name: "Data Analysis",
          href: "/services/ai-automation/data-analysis"
        }}
        relatedServices={[
          { name: "Chatbot Development", href: "/services/ai-automation/chatbot-development" },
          { name: "Data Analysis", href: "/services/ai-automation/data-analysis" },
          { name: "System Integration", href: "/services/ai-automation/system-integration" }
        ]}
      />
    </div>
  );
} 