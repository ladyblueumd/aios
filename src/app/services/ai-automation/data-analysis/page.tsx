'use client';

import Link from 'next/link';
import { useScrollAnimationClass } from '@/lib/hooks/useScrollAnimation';
import { 
  MdAnalytics,
  MdInsights,
  MdTrendingUp,
  MdDataUsage,
  MdVisibility,
  MdSpeed,
  MdCheck,
  MdArrowBack,
  MdRocket
} from 'react-icons/md';

export default function DataAnalysisPage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const featuresAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const solutionsAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const pricingAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');

  const features = [
    {
      icon: 'MdInsights',
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models that forecast trends, customer behavior, and business outcomes.'
    },
    {
      icon: 'MdSpeed',
      title: 'Real-Time Reporting',
      description: 'Live dashboards and automated reports that provide instant insights into your business performance.'
    },
    {
      icon: 'MdTrendingUp',
      title: 'Pattern Recognition',
      description: 'AI algorithms that identify hidden patterns, anomalies, and opportunities in your data.'
    },
    {
      icon: 'MdVisibility',
      title: 'Custom Dashboards',
      description: 'Tailored visualization platforms that present complex data in clear, actionable formats.'
    },
    {
      icon: 'MdDataUsage',
      title: 'Data Integration',
      description: 'Seamless connection to multiple data sources for comprehensive business intelligence.'
    },
    {
      icon: 'MdRocket',
      title: 'Automated Insights',
      description: 'AI-powered analysis that automatically generates insights and recommendations.'
    }
  ];

  const solutions = [
    {
      category: 'Business Intelligence',
      description: 'Comprehensive BI solutions for data-driven decision making',
      color: 'blue',
      applications: [
        'Sales performance analytics',
        'Customer behavior analysis',
        'Market trend identification',
        'Competitive intelligence',
        'Revenue optimization insights'
      ]
    },
    {
      category: 'Operational Analytics',
      description: 'Monitor and optimize business operations in real-time',
      color: 'emerald',
      applications: [
        'Supply chain optimization',
        'Quality control monitoring',
        'Resource utilization tracking',
        'Process efficiency analysis',
        'Cost reduction identification'
      ]
    },
    {
      category: 'Financial Analytics',
      description: 'Advanced financial analysis and forecasting capabilities',
      color: 'orange',
      applications: [
        'Financial forecasting models',
        'Risk assessment analytics',
        'Budget vs. actual analysis',
        'Cash flow optimization',
        'Investment performance tracking'
      ]
    },
    {
      category: 'Customer Analytics',
      description: 'Deep insights into customer preferences and behavior',
      color: 'purple',
      applications: [
        'Customer segmentation',
        'Churn prediction models',
        'Lifetime value calculation',
        'Personalization engines',
        'Satisfaction measurement'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Analytics Starter',
      price: '$3,500',
      period: 'one-time + $599/month',
      description: 'Essential analytics for small to medium businesses',
      features: [
        'Up to 5 data sources',
        'Standard reporting dashboard',
        'Basic predictive models',
        'Monthly insights reports',
        'Email support',
        'Data visualization tools'
      ],
      color: 'emerald-green',
      recommended: false
    },
    {
      name: 'Analytics Professional',
      price: '$12,000',
      period: 'one-time + $1,599/month',
      description: 'Advanced analytics for growing enterprises',
      features: [
        'Unlimited data sources',
        'Custom dashboard development',
        'Advanced ML models',
        'Real-time analytics',
        'API integrations',
        'Priority support',
        'Weekly strategy sessions',
        'Custom reporting formats'
      ],
      color: 'deep-sky-blue',
      recommended: true
    },
    {
      name: 'Analytics Enterprise',
      price: '$35,000+',
      period: 'one-time + custom monthly',
      description: 'Enterprise-grade analytics platform',
      features: [
        'Custom AI model development',
        'Multi-tenant analytics platform',
        'Advanced security and compliance',
        'Dedicated analytics team',
        'On-premise deployment options',
        '24/7 dedicated support',
        'Executive reporting suites',
        'Custom training programs'
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
                <div className="flex items-center justify-center space-x-2 text-orange-600">
                  <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-orange-400 transition-colors">Services</Link>
                  <span>/</span>
                  <Link href="/services/ai-automation" className="hover:text-orange-400 transition-colors">AI Automation</Link>
                  <span>/</span>
                  <span className="text-orange-800">Data Analysis</span>
                </div>
              </nav>

              {/* Back Button */}
              <div className="flex justify-center mb-6">
                <Link 
                  href="/services/ai-automation"
                  className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-800 transition-colors"
                >
                  <MdArrowBack className="w-5 h-5" />
                  <span>Back to AI Automation</span>
                </Link>
              </div>

              {/* Hero Content */}
              <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-orange-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-orange-500/30 rounded-xl">
                    <MdAnalytics className="w-12 h-12 text-orange-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-orange-900">
                  AI-Powered Data Analysis
                </h1>
                
                <p className="text-xl md:text-2xl text-orange-800 mb-8 max-w-3xl mx-auto">
                  Transform raw data into actionable business insights with advanced AI analytics, 
                  predictive modeling, and intelligent reporting solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Start Analytics Project
                  </Link>
                  <Link 
                    href="#features" 
                    className="btn-outline border-orange-600 text-orange-800 hover:bg-orange-600 hover:text-white"
                  >
                    Explore Analytics
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
              <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-orange-800 max-w-3xl mx-auto">
                Cutting-edge AI technology that unlocks the hidden value in your data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/30 rounded-lg mr-4">
                      <MdAnalytics className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900">{feature.title}</h3>
                  </div>
                  <p className="text-blue-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={solutionsAnimation.elementRef} className={`${solutionsAnimation.animationClass} transition-all duration-600`}>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                Analytics Solutions
              </h2>
              <p className="text-xl text-emerald-800 max-w-3xl mx-auto">
                Comprehensive analytics across all business functions and industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={solution.category} className={`bg-${solution.color}-500/20 backdrop-blur-sm rounded-xl p-8 border border-${solution.color}-500/30`}>
                  <h3 className={`text-2xl font-bold text-${solution.color}-900 mb-3`}>{solution.category}</h3>
                  <p className={`text-${solution.color}-800 mb-6`}>{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-start space-x-3">
                        <MdCheck className={`w-5 h-5 text-${solution.color}-900 mt-0.5 flex-shrink-0`} />
                        <span className={`text-${solution.color}-800`}>{application}</span>
                      </li>
                    ))}
                  </ul>
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
                Data Analytics Pricing
              </h2>
              <p className="text-xl text-purple-800 max-w-3xl mx-auto">
                Scalable analytics solutions for businesses of every size
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={tier.name} 
                  className={`relative bg-${tier.color}/20 backdrop-blur-sm rounded-xl p-8 border border-${tier.color}/30 ${tier.recommended ? 'ring-2 ring-orange-500' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      ? 'bg-orange-600 hover:bg-orange-700 text-white' 
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
      <section className="section-padding bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock Your Data Insights?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your data into competitive advantages with AI-powered analytics. 
              Contact us for a free consultation and custom analytics strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-orange-600 hover:bg-gray-100"
              >
                Start Analytics Project
              </Link>
              <Link 
                href="/services/ai-automation" 
                className="btn-outline border-white text-white hover:bg-white hover:text-orange-600"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 