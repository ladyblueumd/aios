'use client';

import Link from 'next/link';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { 
  MdWork,
  MdBusiness,
  MdSettings,
  MdTrendingUp,
  MdLocationOn,
  MdStar,
  MdArrowForward
} from 'react-icons/md';

export default function ExperiencePage() {
  const heroAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');
  const tilesAnimation = useStaggeredAnimation(4, 100);

  const experienceAreas = [
    {
      id: 'full-work-log',
      title: 'Complete Work Portfolio',
      description: 'Interactive showcase of 994+ AI-enhanced projects across multiple states and industries',
      icon: MdWork,
      href: '/experience/full-work-log',
      stats: '994+ Projects',
      bgColor: 'bg-sky-500/20',
      borderColor: 'border-sky-500/30',
      textColor: 'text-sky-900',
      iconColor: 'text-sky-600'
    },
    {
      id: 'client-testimonials',
      title: 'Client Success Stories',
      description: 'Real testimonials and case studies from satisfied clients across various industries',
      icon: MdStar,
      href: '#testimonials',
      stats: '5.0★ Average',
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-900',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'service-areas',
      title: 'Geographic Coverage',
      description: 'Extensive service coverage across multiple states with local expertise and support',
      icon: MdLocationOn,
      href: '#coverage',
      stats: '15+ States',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-900',
      iconColor: 'text-orange-600'
    },
    {
      id: 'growth-metrics',
      title: 'Performance Analytics',
      description: 'Data-driven insights into project success rates, efficiency metrics, and growth trends',
      icon: MdTrendingUp,
      href: '#analytics',
      stats: '98% Success Rate',
      bgColor: 'bg-blue-800/20',
      borderColor: 'border-blue-800/30',
      textColor: 'text-blue-900',
      iconColor: 'text-blue-600'
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
          <div ref={tilesAnimation.elementRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienceAreas.map((area, index) => {
              const IconComponent = area.icon;
              
              return (
                <div 
                  key={area.id}
                  className={`transition-all duration-500 ${
                    tilesAnimation.animatedItems[index] 
                      ? 'metro-tile-revealed' 
                      : 'metro-tile-hidden'
                  }`}
                  style={{ 
                    transitionDelay: tilesAnimation.isInView ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  {area.href.startsWith('#') ? (
                    <div className={`metro-tile ${area.bgColor} backdrop-blur-sm rounded-xl p-8 border ${area.borderColor} h-80 flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-not-allowed opacity-75`}>
                      
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
                          Coming Soon
                        </span>
                        <div className={`p-2 ${area.bgColor} rounded-lg border ${area.borderColor} opacity-50`}>
                          <MdArrowForward className={`w-5 h-5 ${area.iconColor}`} />
                        </div>
                      </div>
                    </div>
                  ) : (
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
                  )}
                </div>
              );
            })}
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
    </div>
  );
} 