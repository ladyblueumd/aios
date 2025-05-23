'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { 
  servicePhases, 
  serviceTiers, 
  clientPackages, 
  deliveryModels,
  getServicesByPhase 
} from '@/lib/ai-services-data';
import { 
  MdBusiness, MdPerson, MdHome, MdChat, MdCalendarToday,
  MdCheckCircle
} from 'react-icons/md';
import PhaseTile from '@/components/ai-portfolio/PhaseTile';
import ServiceTierCard from '@/components/ai-portfolio/ServiceTierCard';
import { IconType } from 'react-icons';

const iconMap: { [key: string]: IconType } = {
  MdBusiness, MdPerson, MdHome
};

export default function AIPortfolioPage() {
  const [selectedTier, setSelectedTier] = useState('professional');
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const phasesAnimation = useStaggeredAnimation<HTMLDivElement>(servicePhases.length, 150);
  const tiersAnimation = useStaggeredAnimation<HTMLDivElement>(serviceTiers.length, 200);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; border: string; text: string; button: string } } = {
      'deep-sky-blue': {
        bg: 'bg-sky-500/20',
        border: 'border-sky-500/30',
        text: 'text-sky-900',
        button: 'bg-sky-600 hover:bg-sky-700'
      },
      'navy-blue': {
        bg: 'bg-blue-800/20',
        border: 'border-blue-800/30', 
        text: 'text-blue-900',
        button: 'bg-blue-700 hover:bg-blue-800'
      },
      'emerald-green': {
        bg: 'bg-emerald-500/20',
        border: 'border-emerald-500/30',
        text: 'text-emerald-900',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      },
      'orange-peel': {
        bg: 'bg-orange-500/20',
        border: 'border-orange-500/30',
        text: 'text-orange-900',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      'purple': {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30',
        text: 'text-purple-900',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    };
    return colorMap[color] || colorMap['deep-sky-blue'];
  };

  return (
    <div className="min-h-screen bg-transparent">
      
      {/* Hero Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div ref={heroAnimation.elementRef} className={`${heroAnimation.animationClass} transition-all duration-700`}>
            <div className="text-center max-w-6xl mx-auto">
              
              {/* Breadcrumb */}
              <nav className="mb-8">
                <div className="flex items-center justify-center space-x-2 text-sky-600">
                  <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link>
                  <span>/</span>
                  <span className="text-sky-800">AI/OS Service Portfolio</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className="bg-gradient-to-r from-sky-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-sky-500/30">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-900 to-emerald-900 bg-clip-text text-transparent">
                  🎯 AI/OS Service Portfolio
                </h1>
                
                <p className="text-xl md:text-2xl text-sky-800 mb-8 max-w-4xl mx-auto">
                  Comprehensive AI transformation services from data foundation to enterprise-grade AI operations
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-sky-900">5 Phases</div>
                    <div className="text-sky-700">Complete AI transformation</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-900">8+ Services</div>
                    <div className="text-emerald-700">Specialized AI solutions</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-900">3 Tiers</div>
                    <div className="text-orange-700">Flexible service levels</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="#chatbot" 
                    className="btn-primary bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center space-x-2"
                  >
                    <MdChat className="w-5 h-5" />
                    <span>Chat About Services</span>
                  </Link>
                  <Link 
                    href="#consultation" 
                    className="btn-outline border-emerald-600 text-emerald-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center space-x-2"
                  >
                    <MdCalendarToday className="w-5 h-5" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Phases Overview */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
              Complete AI Transformation Journey
            </h2>
            <p className="text-xl text-sky-700 max-w-3xl mx-auto">
              From data foundation to ongoing operations, we guide you through every phase of AI implementation
            </p>
          </div>

          <div ref={phasesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {servicePhases.map((phase, index) => {
              const services = getServicesByPhase(phase.id);
              
              return (
                <PhaseTile
                  key={phase.id}
                  phase={phase}
                  services={services}
                  index={index}
                  isAnimated={phasesAnimation.animatedItems[index]}
                  animationDelay={phasesAnimation.isInView ? index * 150 : 0}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="section-padding bg-gradient-to-r from-emerald-500/10 to-sky-500/10">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              Service Tier Structure
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Choose the service level that matches your needs and scale as you grow
            </p>
          </div>

          <div ref={tiersAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <ServiceTierCard
                key={tier.id}
                tier={tier}
                isSelected={selectedTier === tier.id}
                onSelect={setSelectedTier}
                index={index}
                isAnimated={tiersAnimation.animatedItems[index]}
                animationDelay={tiersAnimation.isInView ? index * 200 : 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client-Specific Packages */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
              Client-Specific Service Packages
            </h2>
            <p className="text-xl text-sky-700 max-w-3xl mx-auto">
              Specialized packages tailored for your technology ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientPackages.map((package_item, index) => {
              const colors = getColorClasses(package_item.color);
              const IconComponent = iconMap[package_item.icon];
              
              return (
                <div 
                  key={package_item.id}
                  className={`${colors.bg} backdrop-blur-sm rounded-xl p-8 border ${colors.border} hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {IconComponent && <IconComponent className={`w-8 h-8 ${colors.text}`} />}
                    <h3 className={`text-xl font-bold ${colors.text}`}>{package_item.name}</h3>
                  </div>
                  
                  <p className={`${colors.text} opacity-80 mb-6`}>{package_item.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {package_item.services.map((service, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <MdCheckCircle className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                        <span className={`${colors.text} text-sm`}>{service}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="#consultation"
                    className={`btn-primary w-full text-center ${colors.button} text-white`}
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chatbot Section Placeholder */}
      <section id="chatbot" className="section-padding bg-gradient-to-r from-sky-500/10 to-purple-500/10">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
              💬 AI Services Consultant
            </h2>
            <p className="text-xl text-sky-700 max-w-3xl mx-auto">
              Get instant answers about our AI services and discover the perfect solution for your needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-sky-500/30">
              <div className="text-center">
                <MdChat className="w-16 h-16 text-sky-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-sky-900 mb-4">
                  AI Services Chatbot Coming Soon
                </h3>
                <p className="text-sky-800 mb-6">
                  Our intelligent chatbot will help you navigate our service portfolio, answer detailed questions, 
                  and collect your requirements for a personalized consultation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sky-900">Chatbot Features:</h4>
                    <ul className="space-y-1 text-sm text-sky-800">
                      <li>• Service-specific Q&A</li>
                      <li>• Pricing information</li>
                      <li>• Timeline estimates</li>
                      <li>• Requirements gathering</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sky-900">Consultation Booking:</h4>
                    <ul className="space-y-1 text-sm text-sky-800">
                      <li>• Demographics collection</li>
                      <li>• Business needs assessment</li>
                      <li>• Calendar integration</li>
                      <li>• Pre-meeting preparation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <section id="consultation" className="section-padding bg-gradient-to-r from-emerald-500 to-sky-500">
        <div className="container-width text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Book a consultation to discuss your AI transformation journey. We&apos;ll assess your needs, 
            recommend the right services, and create a custom implementation plan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
              <p className="text-white/80">No cost initial assessment of your AI readiness and opportunities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Custom Strategy</h3>
              <p className="text-white/80">Tailored AI implementation plan based on your specific needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
              <p className="text-white/80">Direct access to our AI specialists and implementation team</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-primary bg-white text-emerald-600 hover:bg-gray-100 flex items-center justify-center space-x-2"
            >
              <MdCalendarToday className="w-5 h-5" />
              <span>Book Consultation</span>
            </Link>
            <Link 
              href="/contact" 
              className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600 flex items-center justify-center space-x-2"
            >
              <MdChat className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 