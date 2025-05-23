'use client';

import Link from 'next/link';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks';
import { 
  MdWork,
  MdArrowForward
} from 'react-icons/md';

export default function ExperiencePage() {
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');
  const tilesAnimation = useStaggeredAnimation<HTMLDivElement>(1, 100);

  const experienceAreas = [
    {
      id: 'full-work-log',
      title: 'Complete Work Portfolio',
      description: 'Interactive showcase of comprehensive project portfolio across multiple states and industries. View detailed project logs, technologies used, and implementation strategies.',
      icon: MdWork,
      href: '/experience/full-work-log',
      stats: 'View Portfolio',
      bgColor: 'bg-sky-500/20',
      borderColor: 'border-sky-500/30',
      textColor: 'text-sky-900',
      iconColor: 'text-sky-600'
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
                  <span className="text-sky-800">Experience</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className="bg-sky-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-sky-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-sky-500/30 rounded-xl">
                    <MdWork className="w-12 h-12 text-sky-900" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-sky-900">
                  Professional Experience
                </h1>
                
                <p className="text-xl md:text-2xl text-sky-800 mb-8 max-w-3xl mx-auto">
                  Explore my comprehensive portfolio of AI/OS platform deployments, technology solutions, and successful project implementations across multiple industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Areas Grid */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div ref={tilesAnimation.elementRef} className="flex justify-center">
            {experienceAreas.map((area, index) => {
              const IconComponent = area.icon;
              
              return (
                <div 
                  key={area.id}
                  className={`transition-all duration-500 max-w-2xl w-full ${
                    tilesAnimation.animatedItems[index] 
                      ? 'metro-tile-revealed' 
                      : 'metro-tile-hidden'
                  }`}
                  style={{ 
                    transitionDelay: tilesAnimation.isInView ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  <Link href={area.href}>
                    <div className={`metro-tile ${area.bgColor} backdrop-blur-sm rounded-xl p-8 border ${area.borderColor} h-80 flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                      
                      {/* Header */}
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className={`p-3 ${area.bgColor} rounded-xl border ${area.borderColor}`}>
                            <IconComponent className={`w-8 h-8 ${area.iconColor}`} />
                          </div>
                          <span className={`text-sm px-3 py-1 ${area.bgColor} rounded-full ${area.textColor} font-medium border ${area.borderColor}`}>
                            {area.stats}
                          </span>
                        </div>
                        
                        <h3 className={`text-2xl font-bold ${area.textColor} mb-4`}>
                          {area.title}
                        </h3>
                        
                        <p className={`${area.textColor} opacity-80 text-base leading-relaxed`}>
                          {area.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${area.textColor} opacity-60`}>
                          View Details
                        </span>
                        <div className={`p-2 ${area.bgColor} rounded-lg border ${area.borderColor}`}>
                          <MdArrowForward className={`w-5 h-5 ${area.iconColor}`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Experience Information */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Background & Expertise */}
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Technical Expertise
                </h3>
                <div className="space-y-3 text-blue-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>AI/OS Platform Development & Deployment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Hardware Integration & Field Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>POS Systems & Payment Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Software Development & Automation</span>
                  </div>
                </div>
              </div>

              {/* Industry Focus */}
              <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  Industry Experience
                </h3>
                <div className="space-y-3 text-purple-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Retail & Restaurant Technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Healthcare & Medical Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Financial Services & Banking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Educational Institutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-emerald-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-emerald-800 mb-8 max-w-2xl mx-auto">
                Leverage my proven experience in AI/OS platform deployments and technology solutions for your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="btn-primary bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Start a Project
                </Link>
                <Link 
                  href="/experience/full-work-log"
                  className="btn-outline border-emerald-600 text-emerald-800 hover:bg-emerald-600 hover:text-white"
                >
                  View Full Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-8 bg-transparent">
        <div className="container-width">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="btn-outline border-sky-600 text-sky-800 hover:bg-sky-600 hover:text-white"
              >
                Back to Home
              </Link>
              <Link 
                href="/experience/full-work-log"
                className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
              >
                View Work Orders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 