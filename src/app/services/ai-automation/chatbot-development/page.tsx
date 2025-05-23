'use client';

import Link from 'next/link';
import { useScrollAnimationClass } from '@/lib/hooks/useScrollAnimation';
import { 
  MdPsychology,
  MdChat,
  MdIntegrationInstructions,
  MdSettings,
  MdCode,
  MdAnalytics,
  MdCheck,
  MdArrowBack,
  MdRocket
} from 'react-icons/md';

export default function ChatbotDevelopmentPage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const featuresAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const processAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const pricingAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');

  const features = [
    {
      icon: 'MdPsychology',
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and sentiment for human-like conversations.'
    },
    {
      icon: 'MdIntegrationInstructions',
      title: 'Multi-Platform Integration',
      description: 'Seamless deployment across websites, mobile apps, WhatsApp, Slack, and social media platforms.'
    },
    {
      icon: 'MdSettings',
      title: 'Custom Knowledge Base',
      description: 'Tailored training on your business data, documents, and frequently asked questions.'
    },
    {
      icon: 'MdAnalytics',
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting on conversation patterns, user satisfaction, and performance metrics.'
    },
    {
      icon: 'MdCode',
      title: 'API & Webhook Support',
      description: 'Connect to your existing systems for order processing, appointment booking, and data retrieval.'
    },
    {
      icon: 'MdRocket',
      title: 'Continuous Learning',
      description: 'AI that improves over time through machine learning and regular training updates.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Strategy',
      description: 'We analyze your business needs, customer touchpoints, and define chatbot objectives and success metrics.',
      duration: '1-2 weeks'
    },
    {
      step: '2', 
      title: 'Design & Development',
      description: 'Custom chatbot development with your brand voice, conversation flows, and integration requirements.',
      duration: '2-4 weeks'
    },
    {
      step: '3',
      title: 'Training & Testing',
      description: 'Comprehensive testing, knowledge base training, and conversation flow optimization before launch.',
      duration: '1-2 weeks'
    },
    {
      step: '4',
      title: 'Deployment & Support',
      description: 'Live deployment with monitoring, ongoing optimization, and 24/7 technical support.',
      duration: 'Ongoing'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter Bot',
      price: '$2,500',
      period: 'one-time + $299/month',
      description: 'Perfect for small businesses and basic customer support',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP and intent recognition',
        'Web widget integration',
        'FAQ knowledge base (up to 100 Q&As)',
        'Email support',
        'Basic analytics dashboard'
      ],
      color: 'emerald-green',
      recommended: false
    },
    {
      name: 'Professional Bot',
      price: '$7,500',
      period: 'one-time + $799/month',
      description: 'Advanced AI for growing businesses with complex needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP and machine learning',
        'Multi-platform integration',
        'Custom knowledge base (unlimited)',
        'API integrations (CRM, booking systems)',
        'Priority support',
        'Advanced analytics and reporting',
        'A/B testing capabilities'
      ],
      color: 'deep-sky-blue',
      recommended: true
    },
    {
      name: 'Enterprise Bot',
      price: '$25,000+',
      period: 'one-time + custom monthly',
      description: 'Enterprise-grade AI with unlimited customization',
      features: [
        'Unlimited conversations',
        'Custom AI model development',
        'Omnichannel deployment',
        'Advanced integrations (ERP, databases)',
        'White-label solutions',
        '24/7 dedicated support',
        'Custom analytics platforms',
        'Compliance and security audits'
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
                <div className="flex items-center justify-center space-x-2 text-sky-600">
                  <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link>
                  <span>/</span>
                  <Link href="/services/ai-automation" className="hover:text-sky-400 transition-colors">AI Automation</Link>
                  <span>/</span>
                  <span className="text-sky-800">Chatbot Development</span>
                </div>
              </nav>

              {/* Back Button */}
              <div className="flex justify-center mb-6">
                <Link 
                  href="/services/ai-automation"
                  className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-800 transition-colors"
                >
                  <MdArrowBack className="w-5 h-5" />
                  <span>Back to AI Automation</span>
                </Link>
              </div>

              {/* Hero Content */}
              <div className="bg-sky-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-sky-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-sky-500/30 rounded-xl">
                    <MdPsychology className="w-12 h-12 text-sky-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-sky-900">
                  Custom AI Chatbot Development
                </h1>
                
                <p className="text-xl md:text-2xl text-sky-800 mb-8 max-w-3xl mx-auto">
                  Intelligent conversational AI that understands your business and customers, 
                  providing 24/7 automated support with human-like interactions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
                  >
                    Start Chatbot Project
                  </Link>
                  <Link 
                    href="#features" 
                    className="btn-outline border-sky-600 text-sky-800 hover:bg-sky-600 hover:text-white"
                  >
                    See Features
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
              <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
                Chatbot Features & Capabilities
              </h2>
              <p className="text-xl text-sky-800 max-w-3xl mx-auto">
                Advanced AI technology that delivers exceptional customer experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-emerald-500/30 rounded-lg mr-4">
                      <MdPsychology className="w-6 h-6 text-emerald-900" />
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

      {/* Process Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={processAnimation.elementRef} className={`${processAnimation.animationClass} transition-all duration-600`}>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
                Development Process
              </h2>
              <p className="text-xl text-orange-800 max-w-3xl mx-auto">
                Our proven methodology ensures successful chatbot deployment
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={pricingAnimation.elementRef} className={`${pricingAnimation.animationClass} transition-all duration-600`}>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Chatbot Development Pricing
              </h2>
              <p className="text-xl text-blue-800 max-w-3xl mx-auto">
                Choose the perfect chatbot solution for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={tier.name} 
                  className={`relative bg-${tier.color}/20 backdrop-blur-sm rounded-xl p-8 border border-${tier.color}/30 ${tier.recommended ? 'ring-2 ring-sky-500' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      ? 'bg-sky-600 hover:bg-sky-700 text-white' 
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
      <section className="section-padding bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your customer service with intelligent conversational AI. 
              Contact us for a free consultation and custom chatbot strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-sky-600 hover:bg-gray-100"
              >
                Start Chatbot Project
              </Link>
              <Link 
                href="/services/ai-automation" 
                className="btn-outline border-white text-white hover:bg-white hover:text-sky-600"
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