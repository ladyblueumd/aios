'use client';

import Link from 'next/link';
import Tile from '@/components/Tile';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { 
  MdStorage, 
  MdDeveloperBoard, 
  MdCloud, 
  MdNetworkCheck,
  MdMonitor,
  MdSecurity,
  MdSpeed,
  MdBackup,
  MdCheck,
  MdRocket,
  MdVerifiedUser,
  MdCloudSync
} from 'react-icons/md';

const hardwareServices = [
  {
    id: 'server-deployment',
    title: 'AI-Optimized Server Deployment',
    description: 'Smart server installations with AI-driven configuration optimization.',
    icon: 'MdStorage',
    color: 'navy-blue',
    features: [
      'Automated server provisioning',
      'AI performance optimization',
      'Scalable architecture design',
      'Zero-downtime migrations'
    ]
  },
  {
    id: 'data-center',
    title: 'Intelligent Data Center Migrations',
    description: 'Seamless data center transitions powered by AI planning and automation.',
    icon: 'MdCloud',
    color: 'deep-sky-blue',
    features: [
      'AI migration planning',
      'Risk assessment automation',
      'Real-time monitoring',
      'Rollback protection'
    ]
  },
  {
    id: 'workstation-deployment',
    title: 'Smart Workstation Deployments',
    description: 'Intelligent workstation setup with automated configuration management.',
    icon: 'MdMonitor',
    color: 'emerald-green',
    features: [
      'Automated OS deployment',
      'Software provisioning',
      'Security configuration',
      'Remote management setup'
    ]
  },
  {
    id: 'lifecycle-management',
    title: 'AI-Driven Hardware Lifecycle Management',
    description: 'Predictive maintenance and intelligent hardware lifecycle optimization.',
    icon: 'MdDeveloperBoard',
    color: 'orange-peel',
    features: [
      'Predictive failure analysis',
      'Performance monitoring',
      'Automated maintenance',
      'Cost optimization'
    ]
  }
];

const deploymentStats = [
  { label: 'Servers Deployed', value: '500+' },
  { label: 'Uptime Achieved', value: '99.9%' },
  { label: 'Migration Time Saved', value: '75%' },
  { label: 'Zero-Downtime Deployments', value: '98%' }
];

export default function HardwareDeploymentPage() {
  const heroAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');
  const servicesAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');
  const benefitsAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');
  
  const servicesTilesAnimation = useStaggeredAnimation(hardwareServices.length, 150);

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
                  <span className="text-blue-800">AI-Enhanced Hardware Deployment</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className="bg-blue-800/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-blue-800/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-blue-800/30 rounded-xl">
                    <MdStorage className="w-12 h-12 text-blue-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-900">
                  AI-Enhanced Hardware Deployment
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-3xl mx-auto">
                  Smart hardware installations and migrations powered by AI optimization for maximum efficiency and minimal downtime.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-blue-700 hover:bg-blue-800 text-white"
                  >
                    Start Smart Deployment
                  </Link>
                  <Link 
                    href="#services" 
                    className="btn-outline border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Services Grid */}
      <section id="services" className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={servicesAnimation.elementRef} className={`text-center mb-12 ${servicesAnimation.animationClass} transition-all duration-600`}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Hardware Deployment Solutions
            </h2>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              AI-powered hardware infrastructure solutions for enterprise environments
            </p>
          </div>
          
          <div ref={servicesTilesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hardwareServices.map((service, index) => (
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

      {/* Deployment Stats & Benefits */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={benefitsAnimation.elementRef} className={`${benefitsAnimation.animationClass} transition-all duration-600`}>
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-emerald-500/30">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                  Deployment Excellence
                </h2>
                <p className="text-xl text-emerald-800">
                  Proven results from AI-enhanced hardware deployments
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {deploymentStats.map((stat, index) => (
                <div key={stat.label} className="bg-blue-800/20 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-800/30">
                  <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-800 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Infrastructure Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'AI-optimized performance configurations',
                    'Automated deployment workflows',
                    'Predictive maintenance scheduling',
                    'Scalable architecture design',
                    'Enhanced security implementations'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <MdCheck className="w-5 h-5 text-emerald-900 mt-0.5 flex-shrink-0" />
                      <span className="text-emerald-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-orange-900 mb-6">Technical Excellence</h3>
                <ul className="space-y-4">
                  {[
                    'Zero-downtime migration strategies',
                    'Real-time monitoring systems',
                    'Automated backup configurations',
                    'Performance optimization algorithms',
                    '24/7 intelligent monitoring'
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
      <section className="section-padding bg-gradient-to-r from-blue-800 to-emerald-500">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Smart Hardware Deployment?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Transform your infrastructure with AI-enhanced hardware deployment solutions. 
              Contact us for intelligent deployment planning and execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-white text-blue-700 hover:bg-gray-100"
              >
                Plan Your Deployment
              </Link>
              <Link 
                href="/about" 
                className="btn-outline border-white text-white hover:bg-white hover:text-blue-700"
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