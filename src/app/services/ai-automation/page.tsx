'use client';

import Link from 'next/link';
import Tile from '@/components/Tile';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { 
  MdSmartToy, 
  MdAutoAwesome, 
  MdPsychology, 
  MdIntegrationInstructions,
  MdAnalytics,
  MdSupport,
  MdRocket,
  MdTrendingUp,
  MdCheck,
  MdArrowForward,
  MdBusiness,
  MdCode,
  MdCloud
} from 'react-icons/md';
import { ColorTheme } from '@/lib/types';

interface AIService {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: ColorTheme;
  features: string[];
}

const aiServices: AIService[] = [
  {
    id: 'chatbot-development',
    title: 'Custom AI Chatbot Development',
    description: 'Intelligent conversational AI that understands your business and customers.',
    icon: 'MdPsychology',
    color: 'deep-sky-blue',
    features: [
      'Natural language processing',
      'Multi-platform integration',
      'Custom knowledge base',
      '24/7 automated responses'
    ]
  },
  {
    id: 'process-automation',
    title: 'Intelligent Process Automation',
    description: 'Streamline workflows with AI-powered automation solutions.',
    icon: 'MdAutoAwesome',
    color: 'emerald-green',
    features: [
      'Workflow optimization',
      'Task automation',
      'Decision tree logic',
      'Integration APIs'
    ]
  },
  {
    id: 'data-analysis',
    title: 'AI-Powered Data Analysis',
    description: 'Transform raw data into actionable business insights.',
    icon: 'MdAnalytics',
    color: 'orange-peel',
    features: [
      'Predictive analytics',
      'Real-time reporting',
      'Pattern recognition',
      'Custom dashboards'
    ]
  },
  {
    id: 'system-integration',
    title: 'Seamless AI System Integration',
    description: 'Connect AI solutions with your existing business systems.',
    icon: 'MdIntegrationInstructions',
    color: 'navy-blue',
    features: [
      'API development',
      'Database connectivity',
      'Cloud integration',
      'Legacy system support'
    ]
  }
];

const benefitStats = [
  { label: 'Efficiency Increase', value: '85%' },
  { label: 'Cost Reduction', value: '60%' },
  { label: 'Response Time', value: '< 2s' },
  { label: 'Accuracy Rate', value: '99.2%' }
];

export default function AIAutomationPage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const servicesAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const benefitsAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  
  const servicesTilesAnimation = useStaggeredAnimation<HTMLDivElement>(aiServices.length, 150);

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
                  <span className="text-sky-800">AI Agent & Automation</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className="bg-sky-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-sky-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-sky-500/30 rounded-xl">
                    <MdSmartToy className="w-12 h-12 text-sky-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-sky-900">
                  AI Agent & Automation
                </h1>
                
                <p className="text-xl md:text-2xl text-sky-800 mb-8 max-w-3xl mx-auto">
                  Intelligent AI solutions that automate your business operations and enhance productivity through cutting-edge automation workflows.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
                  >
                    Start Your AI Journey
                  </Link>
                  <Link 
                    href="#services" 
                    className="btn-outline border-sky-600 text-sky-800 hover:bg-sky-600 hover:text-white"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section id="services" className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={servicesAnimation.elementRef} className={`text-center mb-12 ${servicesAnimation.animationClass} transition-all duration-600`}>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
              AI Automation Solutions
            </h2>
            <p className="text-xl text-sky-800 max-w-3xl mx-auto">
              Comprehensive AI services designed to transform your business operations
            </p>
          </div>
          
          <div ref={servicesTilesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`transition-all duration-500 ${
                  servicesTilesAnimation.animatedItems[index] 
                    ? 'metro-tile-revealed' 
                    : 'metro-tile-hidden'
                }`}
                style={{ 
                  transitionDelay: servicesTilesAnimation.isInView ? `${index * 150}ms` : '0ms' 
                }}
              >
                <Tile
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  bgColor={service.color}
                  href="/contact"
                  size="large"
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Stats Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={benefitsAnimation.elementRef} className={`${benefitsAnimation.animationClass} transition-all duration-600`}>
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-emerald-500/30">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                  AI Automation Benefits
                </h2>
                <p className="text-xl text-emerald-800">
                  Measurable results from AI-powered business automation
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {benefitStats.map((stat, index) => (
                <div key={stat.label} className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-500/30">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-emerald-800 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-navy-blue/20 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Business Impact</h3>
                <ul className="space-y-4">
                  {[
                    'Reduce operational costs by up to 60%',
                    'Increase productivity and efficiency',
                    'Improve customer satisfaction scores',
                    'Scale operations without hiring',
                    'Eliminate repetitive manual tasks'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <MdCheck className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-orange-900 mb-6">Technical Advantages</h3>
                <ul className="space-y-4">
                  {[
                    '24/7 automated operations',
                    'Real-time data processing',
                    'Seamless system integration',
                    'Scalable cloud architecture',
                    'Advanced analytics and insights'
                  ].map((advantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <MdRocket className="w-5 h-5 text-orange-900 mt-0.5 flex-shrink-0" />
                      <span className="text-orange-800">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate with AI?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your business operations with intelligent AI automation solutions. 
              Contact us for a free consultation and custom AI strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-sky-600 hover:bg-gray-100"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                href="/about" 
                className="btn-outline border-white text-white hover:bg-white hover:text-sky-600"
              >
                Learn About Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 