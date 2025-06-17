'use client';

import Image from 'next/image';
import Tile from '@/components/Tile';
import { serviceCategories, experienceSections } from '@/lib/data';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';

export default function HomePage() {
  // Scroll animation hooks for each section
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const servicesAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const experienceAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const ctaAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  
  // Staggered animations for tiles
  const servicesTilesAnimation = useStaggeredAnimation<HTMLDivElement>(serviceCategories.length, 150);
  const experienceTilesAnimation = useStaggeredAnimation<HTMLDivElement>(experienceSections.length, 120);

  // Function to determine the correct href for each service
  const getServiceHref = (serviceId: string): string => {
    switch (serviceId) {
      case 'ai-automation':
        return '/services/ai-automation';
      case 'hardware-deployment':
        return '/services/hardware-deployment';
      case 'software-development':
        return '/services/software-development';
      case 'pos-field-services':
        return '/services/pos-field-services';
      default:
        return '/contact';
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative z-10">
      
      {/* Hero Section - "Welcome to Sadie OS" */}
      <section className="section-padding bg-transparent">
        <div className="container-width text-center">
          <div ref={heroAnimation.elementRef} className={`${heroAnimation.animationClass} transition-all duration-700`}>
            <div className="p-8 md:p-12 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-sky-500 text-shadow-lg">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  AI/OS
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-sky-600 max-w-4xl mx-auto text-shadow">
                AI automation management provided by Sadie the Tech Lady Services
              </p>
              <div className="text-lg md:text-xl text-sky-700 max-w-3xl mx-auto leading-relaxed">
                Intelligent AI solutions, automated workflows, and cutting-edge technology management.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 4 Tiles Grid Layout */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="container-width">
          <div ref={servicesAnimation.elementRef} className={`text-center mb-12 ${servicesAnimation.animationClass} transition-all duration-600`}>
            <div className="bg-emerald-500/20 backdrop-blur-sm p-8 max-w-4xl mx-auto border border-emerald-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">
                Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
                From hardware deployment to software development - complete technology solutions for your business
              </p>
            </div>
          </div>
          
          <div ref={servicesTilesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((service, index) => (
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
                  title={service.name}
                  description={service.description}
                  icon={service.icon}
                  bgColor={service.color}
                  href={getServiceHref(service.id)}
                  size="medium"
                  features={service.features.slice(0, 3)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Spotlight Section - Direct Links to Subpages */}
      <section className="section-padding bg-gradient-to-br from-emerald-50/50 to-sky-50/50 backdrop-blur-sm">
        <div className="container-width">
          <div className="text-center mb-12">
            <div className="bg-sky-500/20 backdrop-blur-sm p-8 max-w-4xl mx-auto border border-sky-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-sky-600 mb-4">
                AI Automation Specialists
              </h2>
              <p className="text-xl text-sky-700 max-w-3xl mx-auto">
                Jump directly to specialized AI solutions tailored for your specific business needs
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Tile
              title="AI Chatbot Development"
              description="Intelligent conversational AI that understands your business and customers."
              icon="MdPsychology"
              bgColor="deep-sky-blue"
              href="/services/ai-automation/chatbot-development"
              size="medium"
              features={[
                "Natural language processing",
                "Multi-platform integration", 
                "Custom knowledge base"
              ]}
            />
            
            <Tile
              title="Process Automation"
              description="Streamline workflows with AI-powered automation solutions."
              icon="MdAutoAwesome"
              bgColor="emerald-green"
              href="/services/ai-automation/process-automation"
              size="medium"
              features={[
                "Workflow optimization",
                "Task automation",
                "Decision tree logic"
              ]}
            />
            
            <Tile
              title="Data Analysis"
              description="Transform raw data into actionable business insights."
              icon="MdAnalytics"
              bgColor="orange-peel"
              href="/services/ai-automation/data-analysis"
              size="medium"
              features={[
                "Predictive analytics",
                "Real-time reporting",
                "Pattern recognition"
              ]}
            />
            
            <Tile
              title="System Integration"
              description="Connect AI solutions with your existing business systems."
              icon="MdIntegrationInstructions"
              bgColor="navy-blue"
              href="/services/ai-automation/system-integration"
              size="medium"
              features={[
                "API development",
                "Database connectivity",
                "Cloud integration"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience Section - Portfolio Tile */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={experienceTilesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceSections.map((section, index) => {
              // Make the "Full Work History" tile full width
              const isFullHistory = section.id === 'full-history';
              const gridClass = isFullHistory ? 'col-span-1 md:col-span-2 lg:col-span-3' : '';
              const tileSize = isFullHistory ? 'large' : 'medium';
              
              return (
                <div 
                  key={section.id} 
                  className={`transition-all duration-500 ${gridClass} ${
                    experienceTilesAnimation.animatedItems[index] 
                      ? 'metro-tile-revealed' 
                      : 'metro-tile-hidden'
                  }`}
                  style={{ 
                    transitionDelay: experienceTilesAnimation.isInView ? `${index * 120}ms` : '0ms' 
                  }}
                >
                  <Tile
                    title={section.title}
                    description={section.description}
                    icon={section.icon}
                    bgColor={section.color}
                    href={isFullHistory ? "/experience" : "/contact"}
                    size={tileSize}
                    stats={section.stats}
                    centerText={isFullHistory}
                    hideIcon={isFullHistory}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-sadie-accent-fresh to-sadie-primary">
        <div className="container-width text-center text-white">
          <div ref={ctaAnimation.elementRef} className={`${ctaAnimation.animationClass} transition-all duration-700`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Business with AI/OS?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              From AI strategy to full automation deployment, AI/OS provides intelligent solutions 
              that transform how your business operates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary bg-white text-sadie-primary hover:bg-gray-100"
              >
                Start AI Automation
              </a>
              <a 
                href="/about" 
                className="btn-outline border-white text-white hover:bg-white hover:text-sadie-primary"
              >
                Learn More About AI/OS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}