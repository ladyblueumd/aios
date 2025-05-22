'use client';

import Link from 'next/link';
import Tile from '@/components/Tile';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { serviceCategories } from '@/lib/data';

export default function ServicesPage() {
  const heroAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');
  const servicesAnimation = useStaggeredAnimation(serviceCategories.length, 150);

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