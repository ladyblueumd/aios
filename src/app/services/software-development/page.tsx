'use client';

import Link from 'next/link';
import Tile from '@/components/Tile';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { 
  MdCode, 
  MdWeb, 
  MdIntegrationInstructions, 
  MdCloud,
  MdStorage,
  MdSecurity,
  MdSpeed,
  MdSupport,
  MdCheck,
  MdRocket,
  MdAnalytics,
  MdApi
} from 'react-icons/md';
import { ColorTheme } from '@/lib/types';

interface SoftwareService {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: ColorTheme;
  features: string[];
}

const softwareServices: SoftwareService[] = [
  {
    id: 'web-development',
    title: 'AI-Powered Web Application Development',
    description: 'Modern web applications enhanced with AI capabilities and intelligent features.',
    icon: 'MdWeb',
    color: 'emerald-green',
    features: [
      'Next.js & React development',
      'AI integration & chatbots',
      'Responsive design',
      'Performance optimization'
    ]
  },
  {
    id: 'database-design',
    title: 'Intelligent Database Design & Management',
    description: 'Smart database solutions with AI-driven optimization and automated management.',
    icon: 'MdStorage',
    color: 'navy-blue',
    features: [
      'Database architecture design',
      'AI query optimization',
      'Automated backups',
      'Performance monitoring'
    ]
  },
  {
    id: 'system-administration',
    title: 'AI-Enhanced System Administration',
    description: 'Intelligent system management with automated monitoring and maintenance.',
    icon: 'MdSupport',
    color: 'deep-sky-blue',
    features: [
      'Automated system monitoring',
      'Predictive maintenance',
      'Security management',
      'Performance optimization'
    ]
  },
  {
    id: 'api-development',
    title: 'Smart Software Integration Services',
    description: 'AI-powered API development and seamless software integration solutions.',
    icon: 'MdIntegrationInstructions',
    color: 'orange-peel',
    features: [
      'RESTful API development',
      'Third-party integrations',
      'Microservices architecture',
      'AI service orchestration'
    ]
  }
];

const developmentStats = [
  { label: 'Applications Built', value: '200+' },
  { label: 'API Integrations', value: '150+' },
  { label: 'Database Systems', value: '75+' },
  { label: 'Uptime Achieved', value: '99.9%' }
];

export default function SoftwareDevelopmentPage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const servicesAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const benefitsAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const servicesTilesAnimation = useStaggeredAnimation<HTMLDivElement>(softwareServices.length, 150);

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
                  <span className="text-emerald-800">AI Software Development & Administration</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-emerald-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-emerald-500/30 rounded-xl">
                    <MdCode className="w-12 h-12 text-emerald-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-emerald-900">
                  AI Software Development & Administration
                </h1>
                
                <p className="text-xl md:text-2xl text-emerald-800 mb-8 max-w-3xl mx-auto">
                  Next-generation software solutions powered by AI, with intelligent system administration and automated technical support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    href="#services" 
                    className="btn-outline border-emerald-600 text-emerald-800 hover:bg-emerald-600 hover:text-white"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Services Grid */}
      <section id="services" className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={servicesAnimation.elementRef} className={`text-center mb-12 ${servicesAnimation.animationClass} transition-all duration-600`}>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Software Development Solutions
            </h2>
            <p className="text-xl text-emerald-800 max-w-3xl mx-auto">
              AI-enhanced software development and system administration services
            </p>
          </div>
          
          <div ref={servicesTilesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softwareServices.map((service, index) => (
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

      {/* Development Stats & Benefits */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={benefitsAnimation.elementRef} className={`${benefitsAnimation.animationClass} transition-all duration-600`}>
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="bg-sky-500/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-sky-500/30">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
                  Development Excellence
                </h2>
                <p className="text-xl text-sky-800">
                  Proven results from AI-enhanced software development
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {developmentStats.map((stat, index) => (
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

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-navy-blue/20 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Development Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'AI-powered code optimization',
                    'Automated testing and deployment',
                    'Intelligent error detection',
                    'Performance monitoring',
                    'Scalable architecture design'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <MdCheck className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-orange-900 mb-6">Technical Excellence</h3>
                <ul className="space-y-4">
                  {[
                    'Modern tech stack implementation',
                    'API-first development approach',
                    'Cloud-native architecture',
                    'Security-first design',
                    '24/7 system monitoring'
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
      <section className="section-padding bg-gradient-to-r from-emerald-500 to-sky-500">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build with AI?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your software development with AI-enhanced solutions. 
              Contact us for intelligent development and system administration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-emerald-600 hover:bg-gray-100"
              >
                Start Your Project
              </Link>
              <Link 
                href="/about" 
                className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600"
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 