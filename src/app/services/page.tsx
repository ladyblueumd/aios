'use client';

import Link from 'next/link';
import Tile from '@/components/Tile';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { serviceCategories } from '@/lib/data';

export default function ServicesPage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const servicesAnimation = useStaggeredAnimation<HTMLDivElement>(serviceCategories.length, 150);

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
                  <span className="text-sky-800">Services</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className="bg-sky-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-sky-500/30">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-sky-900">
                  AI/OS Services
                </h1>
                
                <p className="text-xl md:text-2xl text-sky-800 mb-8 max-w-3xl mx-auto">
                  AI-first technology solutions designed to automate and optimize your business operations
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    href="/about" 
                    className="btn-outline border-sky-600 text-sky-800 hover:bg-sky-600 hover:text-white"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured AI Portfolio */}
      <section className="section-padding bg-gradient-to-r from-emerald-500/10 to-sky-500/10">
        <div className="container-width">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              🎯 Complete AI/OS Service Portfolio
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Comprehensive AI transformation services from data foundation to enterprise-grade operations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Link href="/services/ai-portfolio">
              <div className="bg-gradient-to-r from-sky-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-sky-500/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
                      Enterprise AI Transformation
                    </h3>
                    <p className="text-sky-800 mb-6">
                      Complete 5-phase AI implementation journey with 8+ specialized services, 
                      3 service tiers, and comprehensive support from data foundation to ongoing operations.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center mb-6">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-xl font-bold text-sky-900">5</div>
                        <div className="text-sm text-sky-700">Phases</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-xl font-bold text-emerald-900">8+</div>
                        <div className="text-sm text-emerald-700">Services</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-xl font-bold text-orange-900">3</div>
                        <div className="text-sm text-orange-700">Tiers</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center space-x-2 text-sky-900 font-semibold">
                      <span>Explore Full Portfolio</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-lg font-bold text-sky-900 mb-2">AI-First Solutions</div>
                    <ul className="text-sky-800 text-sm space-y-1">
                      <li>• Data Vectorization & Knowledge Graphs</li>
                      <li>• Custom Model Fine-Tuning</li>
                      <li>• Multi-Agent Orchestration</li>
                      <li>• Local AI Foundry Setup</li>
                      <li>• Enterprise Security & Governance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={servicesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((service, index) => (
              <div 
                key={service.id} 
                className={`transition-all duration-500 ${
                  servicesAnimation.animatedItems[index] 
                    ? 'metro-tile-revealed' 
                    : 'metro-tile-hidden'
                }`}
                style={{ 
                  transitionDelay: servicesAnimation.isInView ? `${index * 150}ms` : '0ms' 
                }}
              >
                <Tile
                  title={service.name}
                  description={service.description}
                  icon={service.icon}
                  bgColor={service.color}
                  href={`/services/${service.id}`}
                  size="large"
                  features={service.features.slice(0, 4)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="container-width text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to discuss how our AI-powered solutions can automate and optimize your operations.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary bg-white text-sky-600 hover:bg-gray-100"
          >
            Start Your AI Journey
          </Link>
        </div>
      </section>
    </div>
  );
} 