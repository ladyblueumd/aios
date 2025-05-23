'use client';

import Link from 'next/link';
import Tile from '@/components/Tile';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { 
  MdStore, 
  MdPayment, 
  MdRestaurant, 
  MdMonitor,
  MdSupport,
  MdSecurity,
  MdAnalytics,
  MdLocationOn,
  MdCheck,
  MdRocket,
  MdTrendingUp,
  MdVerifiedUser
} from 'react-icons/md';
import { ColorTheme } from '@/lib/types';

interface POSService {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: ColorTheme;
  features: string[];
}

const posServices: POSService[] = [
  {
    id: 'pos-installation',
    title: 'AI-Enhanced POS System Installation',
    description: 'Smart point-of-sale installations with AI-powered configuration and optimization.',
    icon: 'MdStore',
    color: 'orange-peel',
    features: [
      'Intelligent system setup',
      'AI payment optimization',
      'Multi-location deployment',
      'Performance monitoring'
    ]
  },
  {
    id: 'payment-processing',
    title: 'Intelligent Payment Processing Optimization',
    description: 'AI-driven payment processing with fraud detection and transaction optimization.',
    icon: 'MdPayment',
    color: 'emerald-green',
    features: [
      'Fraud detection AI',
      'Transaction optimization',
      'Multi-payment support',
      'Real-time analytics'
    ]
  },
  {
    id: 'hardware-troubleshooting',
    title: 'Predictive Hardware Troubleshooting',
    description: 'AI-powered diagnostics and predictive maintenance for POS hardware systems.',
    icon: 'MdMonitor',
    color: 'deep-sky-blue',
    features: [
      'Predictive failure analysis',
      'Remote diagnostics',
      'Automated maintenance',
      '24/7 monitoring'
    ]
  },
  {
    id: 'staff-training',
    title: 'AI-Powered Staff Training Systems',
    description: 'Intelligent training programs with AI-driven personalized learning paths.',
    icon: 'MdSupport',
    color: 'navy-blue',
    features: [
      'Personalized training AI',
      'Performance tracking',
      'Interactive tutorials',
      'Competency assessment'
    ]
  }
];

const posStats = [
  { label: 'POS Systems Deployed', value: '300+' },
  { label: 'Transaction Success Rate', value: '99.8%' },
  { label: 'Staff Training Hours', value: '1,200+' },
  { label: 'Customer Satisfaction', value: '4.9/5' }
];

export default function POSFieldServicesPage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const servicesAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const benefitsAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const servicesTilesAnimation = useStaggeredAnimation<HTMLDivElement>(posServices.length, 150);

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
                  <span className="text-orange-800">AI-Powered POS & Field Services</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-orange-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-orange-500/30 rounded-xl">
                    <MdStore className="w-12 h-12 text-orange-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-orange-900">
                  AI-Powered POS & Field Services
                </h1>
                
                <p className="text-xl md:text-2xl text-orange-800 mb-8 max-w-3xl mx-auto">
                  Revolutionary point-of-sale and field service solutions enhanced with AI for predictive maintenance and intelligent operations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Optimize Your POS
                  </Link>
                  <Link 
                    href="#services" 
                    className="btn-outline border-orange-600 text-orange-800 hover:bg-orange-600 hover:text-white"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POS Services Grid */}
      <section id="services" className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={servicesAnimation.elementRef} className={`text-center mb-12 ${servicesAnimation.animationClass} transition-all duration-600`}>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
              POS & Field Service Solutions
            </h2>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto">
              AI-enhanced point-of-sale and field service solutions for retail and restaurant environments
            </p>
          </div>
          
          <div ref={servicesTilesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posServices.map((service, index) => (
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

      {/* POS Stats & Benefits */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={benefitsAnimation.elementRef} className={`${benefitsAnimation.animationClass} transition-all duration-600`}>
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-emerald-500/30">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                  POS Excellence
                </h2>
                <p className="text-xl text-emerald-800">
                  Proven results from AI-enhanced POS and field service solutions
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {posStats.map((stat, index) => (
                <div key={stat.label} className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-500/30">
                  <div className="text-3xl md:text-4xl font-bold text-orange-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-orange-800 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Business Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'Increased transaction efficiency',
                    'Reduced payment processing errors',
                    'Enhanced customer experience',
                    'Predictive maintenance savings',
                    'Staff productivity improvements'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <MdCheck className="w-5 h-5 text-emerald-900 mt-0.5 flex-shrink-0" />
                      <span className="text-emerald-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-blue/20 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Technical Excellence</h3>
                <ul className="space-y-4">
                  {[
                    'AI-powered fraud detection',
                    'Real-time system monitoring',
                    'Multi-location synchronization',
                    'Advanced analytics reporting',
                    'Seamless hardware integration'
                  ].map((advantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <MdRocket className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-emerald-500">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize with AI?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your POS and field operations with AI-enhanced solutions. 
              Contact us for intelligent system optimization and predictive maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-orange-600 hover:bg-gray-100"
              >
                Optimize Your POS
              </Link>
              <Link 
                href="/about" 
                className="btn-outline border-white text-white hover:bg-white hover:text-orange-600"
              >
                Learn About Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 