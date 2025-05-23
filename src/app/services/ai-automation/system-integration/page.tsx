'use client';

import Link from 'next/link';
import { useScrollAnimationClass } from '@/lib/hooks/useScrollAnimation';
import ServiceBottomNavigation from '@/components/ServiceBottomNavigation';
import { 
  MdIntegrationInstructions,
  MdApi,
  MdCloud,
  MdStorage,
  MdSecurity,
  MdSpeed,
  MdCheck,
  MdArrowBack,
  MdRocket
} from 'react-icons/md';

export default function SystemIntegrationPage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const featuresAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const servicesAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const pricingAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');

  const features = [
    {
      icon: 'MdApi',
      title: 'API Development',
      description: 'Custom API development and integration for seamless data exchange between systems.'
    },
    {
      icon: 'MdStorage',
      title: 'Database Connectivity',
      description: 'Secure connections to multiple database types with real-time synchronization capabilities.'
    },
    {
      icon: 'MdCloud',
      title: 'Cloud Integration',
      description: 'Native integration with major cloud platforms including AWS, Azure, and Google Cloud.'
    },
    {
      icon: 'MdSecurity',
      title: 'Legacy System Support',
      description: 'Modernize and connect legacy systems without disrupting existing operations.'
    },
    {
      icon: 'MdSpeed',
      title: 'Real-Time Processing',
      description: 'High-performance integration solutions with minimal latency and maximum throughput.'
    },
    {
      icon: 'MdRocket',
      title: 'Scalable Architecture',
      description: 'Future-proof integration patterns that scale with your business growth.'
    }
  ];

  const integrationServices = [
    {
      category: 'Enterprise Systems',
      description: 'Connect and modernize your core business systems',
      icon: 'MdStorage',
      color: 'blue',
      services: [
        'ERP system integration',
        'CRM platform connectivity',
        'HRMS and payroll systems',
        'Financial management tools',
        'Supply chain management',
        'Business intelligence platforms'
      ]
    },
    {
      category: 'Cloud & SaaS',
      description: 'Seamless cloud platform and SaaS application integration',
      icon: 'MdCloud',
      color: 'emerald',
      services: [
        'Multi-cloud connectivity',
        'SaaS application integration',
        'Hybrid cloud architectures',
        'Cloud migration support',
        'Serverless integrations',
        'Container orchestration'
      ]
    },
    {
      category: 'Data & Analytics',
      description: 'Comprehensive data integration and analytics connectivity',
      icon: 'MdApi',
      color: 'orange',
      services: [
        'Data warehouse integration',
        'Analytics platform connectivity',
        'Real-time data streaming',
        'ETL/ELT pipeline development',
        'Data lake implementations',
        'Business intelligence tools'
      ]
    },
    {
      category: 'Communication & Collaboration',
      description: 'Integration with communication and productivity tools',
      icon: 'MdIntegrationInstructions',
      color: 'purple',
      services: [
        'Email system integration',
        'Messaging platform connectivity',
        'Video conferencing APIs',
        'Document management systems',
        'Collaboration tool integration',
        'Notification and alerting systems'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'System Assessment',
      description: 'Comprehensive analysis of existing systems, data flows, and integration requirements.',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Architecture Design',
      description: 'Custom integration architecture design with security, scalability, and performance considerations.',
      duration: '2-3 weeks'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'Integration development with comprehensive testing, validation, and security auditing.',
      duration: '4-8 weeks'
    },
    {
      step: '4',
      title: 'Deployment & Monitoring',
      description: 'Live deployment with monitoring, documentation, and ongoing maintenance support.',
      duration: 'Ongoing'
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic Integration',
      price: '$8,000',
      period: 'one-time + $799/month',
      description: 'Essential system connectivity for small businesses',
      features: [
        'Up to 3 system integrations',
        'Standard API development',
        'Basic authentication and security',
        'Documentation and training',
        'Email support',
        'Monthly health checks'
      ],
      color: 'emerald-green',
      recommended: false
    },
    {
      name: 'Professional Integration',
      price: '$25,000',
      period: 'one-time + $2,499/month',
      description: 'Advanced integration solutions for growing enterprises',
      features: [
        'Up to 10 system integrations',
        'Custom API and middleware development',
        'Advanced security and encryption',
        'Real-time monitoring dashboard',
        'Database connectivity',
        'Priority support',
        'Performance optimization',
        'Quarterly architecture reviews'
      ],
      color: 'deep-sky-blue',
      recommended: true
    },
    {
      name: 'Enterprise Integration',
      price: '$75,000+',
      period: 'one-time + custom monthly',
      description: 'Enterprise-grade integration platform',
      features: [
        'Unlimited system integrations',
        'Complex workflow orchestration',
        'Enterprise security and compliance',
        'Custom integration platform',
        'High availability and disaster recovery',
        '24/7 dedicated support',
        'On-site integration consulting',
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
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
                  <span>/</span>
                  <Link href="/services/ai-automation" className="hover:text-blue-400 transition-colors">AI Automation</Link>
                  <span>/</span>
                  <span className="text-blue-800">System Integration</span>
                </div>
              </nav>

              {/* Back Button */}
              <div className="flex justify-center mb-6">
                <Link 
                  href="/services/ai-automation"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <MdArrowBack className="w-5 h-5" />
                  <span>Back to AI Automation</span>
                </Link>
              </div>

              {/* Hero Content */}
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-blue-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-blue-500/30 rounded-xl">
                    <MdIntegrationInstructions className="w-12 h-12 text-blue-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-900">
                  Seamless AI System Integration
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-3xl mx-auto">
                  Connect AI solutions with your existing business systems through secure, 
                  scalable integration architectures that enhance performance and productivity.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Start Integration Project
                  </Link>
                  <Link 
                    href="#features" 
                    className="btn-outline border-blue-600 text-blue-800 hover:bg-blue-600 hover:text-white"
                  >
                    Explore Integration
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
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Integration Features & Capabilities
              </h2>
              <p className="text-xl text-blue-800 max-w-3xl mx-auto">
                Advanced integration technology that connects your entire business ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-emerald-500/30 rounded-lg mr-4">
                      <MdIntegrationInstructions className="w-6 h-6 text-emerald-900" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-900">{feature.title}</h3>
                  </div>
                  <p className="text-emerald-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Services Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={servicesAnimation.elementRef} className={`${servicesAnimation.animationClass} transition-all duration-600`}>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                Integration Services
              </h2>
              <p className="text-xl text-purple-800 max-w-3xl mx-auto">
                Comprehensive integration solutions across all business platforms and technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {integrationServices.map((service, index) => (
                <div key={service.category} className={`bg-${service.color}-500/20 backdrop-blur-sm rounded-xl p-8 border border-${service.color}-500/30`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-${service.color}-500/30 rounded-lg mr-4`}>
                      <MdIntegrationInstructions className={`w-6 h-6 text-${service.color}-900`} />
                    </div>
                    <h3 className={`text-2xl font-bold text-${service.color}-900`}>{service.category}</h3>
                  </div>
                  <p className={`text-${service.color}-800 mb-6`}>{service.description}</p>
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <MdCheck className={`w-5 h-5 text-${service.color}-900 mt-0.5 flex-shrink-0`} />
                        <span className={`text-${service.color}-800`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
              Integration Development Process
            </h2>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto">
              Our proven methodology ensures successful system integration deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={step.step} className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 text-center">
                <div className="w-12 h-12 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-orange-900">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-orange-900 mb-2">{step.title}</h3>
                <p className="text-orange-800 mb-3">{step.description}</p>
                <div className="text-sm font-semibold text-orange-900 bg-orange-500/20 rounded-lg px-3 py-1">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={pricingAnimation.elementRef} className={`${pricingAnimation.animationClass} transition-all duration-600`}>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                System Integration Pricing
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Flexible integration solutions designed for businesses of all complexities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={tier.name} 
                  className={`relative bg-${tier.color}/20 backdrop-blur-sm rounded-xl p-8 border border-${tier.color}/30 ${tier.recommended ? 'ring-2 ring-blue-500' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
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
      <section className="section-padding bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect Your Systems?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your business with seamless system integration and AI connectivity. 
              Contact us for a free consultation and custom integration strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Integration Project
              </Link>
              <Link 
                href="/services/ai-automation" 
                className="btn-outline border-white text-white hover:bg-white hover:text-blue-600"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <ServiceBottomNavigation
        currentPage="System Integration"
        currentCategory="AI Automation"
        parentPage={{
          name: "AI Automation",
          href: "/services/ai-automation"
        }}
        previousPage={{
          name: "Data Analysis",
          href: "/services/ai-automation/data-analysis"
        }}
        relatedServices={[
          { name: "Chatbot Development", href: "/services/ai-automation/chatbot-development" },
          { name: "Process Automation", href: "/services/ai-automation/process-automation" },
          { name: "Data Analysis", href: "/services/ai-automation/data-analysis" }
        ]}
      />
    </div>
  );
} 