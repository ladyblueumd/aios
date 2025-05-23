'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useScrollAnimationClass } from '@/lib/hooks/useScrollAnimation';
import { getServiceById, getPhaseById, serviceTiers } from '@/lib/ai-services-data';
import { 
  MdArrowBack, MdCheckCircle, MdAccessTime, MdBusiness,
  MdStar, MdWarning, MdCalendarToday, MdChat,
  MdAccountTree, MdTimeline, MdTune, MdGroups, MdIntegrationInstructions,
  MdArchitecture, MdDeveloperBoard, MdSupport, MdShield
} from 'react-icons/md';

const iconMap: { [key: string]: any } = {
  MdAccountTree, MdTimeline, MdTune, MdGroups, MdIntegrationInstructions,
  MdArchitecture, MdDeveloperBoard, MdSupport, MdShield
};

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  
  const service = getServiceById(serviceId);
  const phase = service ? getPhaseById(service.phase) : null;
  
  const heroAnimation = useScrollAnimationClass<HTMLDivElement>('scroll-hidden', 'scroll-revealed');

  if (!service || !phase) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
            <h1 className="text-2xl font-bold text-red-900 mb-4">Service Not Found</h1>
            <p className="text-red-800 mb-6">The service you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/services/ai-portfolio"
              className="btn-primary bg-red-600 hover:bg-red-700 text-white"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

  const colors = getColorClasses(service.color);
  const IconComponent = iconMap[service.icon];

  return (
    <div className="min-h-screen bg-transparent">
      
      {/* Back Button */}
      <div className="container-width pt-8 px-4">
        <Link 
          href="/services/ai-portfolio"
          className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-400 transition-colors mb-8"
        >
          <MdArrowBack className="w-5 h-5" />
          <span>Back to AI Services Portfolio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div ref={heroAnimation.elementRef} className={`${heroAnimation.animationClass} transition-all duration-700`}>
            <div className="max-w-6xl mx-auto">
              
              {/* Breadcrumb */}
              <nav className="mb-8 px-4">
                <div className="flex items-center space-x-2 text-sky-600 text-sm">
                  <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link>
                  <span>/</span>
                  <Link href="/services/ai-portfolio" className="hover:text-sky-400 transition-colors">AI Portfolio</Link>
                  <span>/</span>
                  <span className="text-sky-800">{service.name}</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className={`${colors.bg} backdrop-blur-sm rounded-xl p-8 md:p-12 border ${colors.border} mx-4`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    {IconComponent && (
                      <div className={`p-3 ${colors.bg} rounded-lg border ${colors.border}`}>
                        <IconComponent className={`w-8 h-8 ${colors.text}`} />
                      </div>
                    )}
                    <div>
                      <span className={`text-sm px-3 py-1 ${colors.bg} rounded-full ${colors.text} font-medium border ${colors.border}`}>
                        {phase.name} - Phase {phase.order}
                      </span>
                    </div>
                  </div>
                  <span className={`text-sm ${colors.text} opacity-70`}>
                    {service.category}
                  </span>
                </div>
                
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${colors.text}`}>
                  {service.name}
                </h1>
                
                <p className={`text-xl ${colors.text} opacity-90 mb-8 max-w-4xl`}>
                  {service.fullDescription}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <MdAccessTime className={`w-5 h-5 ${colors.text}`} />
                    <div>
                      <div className={`text-sm ${colors.text} opacity-70`}>Duration</div>
                      <div className={`${colors.text} font-medium`}>{service.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdBusiness className={`w-5 h-5 ${colors.text}`} />
                    <div>
                      <div className={`text-sm ${colors.text} opacity-70`}>Target Clients</div>
                      <div className={`${colors.text} font-medium`}>{service.targetClients.join(', ')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdStar className={`w-5 h-5 ${colors.text}`} />
                    <div>
                      <div className={`text-sm ${colors.text} opacity-70`}>Service Level</div>
                      <div className={`${colors.text} font-medium`}>Professional Grade</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#consultation"
                    className={`btn-primary ${colors.button} text-white flex items-center justify-center space-x-2`}
                  >
                    <MdCalendarToday className="w-5 h-5" />
                    <span>Book Consultation</span>
                  </Link>
                  <Link 
                    href="#chatbot"
                    className={`btn-outline border-current ${colors.text} hover:bg-current hover:text-white flex items-center justify-center space-x-2`}
                  >
                    <MdChat className="w-5 h-5" />
                    <span>Ask Questions</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div className="max-w-6xl mx-auto px-4">
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              
              {/* Features & Capabilities */}
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30">
                <h2 className="text-2xl font-bold text-emerald-900 mb-6">Features & Capabilities</h2>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <MdCheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-emerald-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">What You&apos;ll Receive</h2>
                <div className="space-y-3">
                  {service.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <MdCheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-sky-900 mb-8 text-center">Service Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceTiers.map((tier) => {
                  const tierPricing = service.pricing[tier.id as keyof typeof service.pricing];
                  if (!tierPricing) return null;
                  
                  return (
                    <div 
                      key={tier.id}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30"
                    >
                      <h3 className="text-xl font-bold text-emerald-900 mb-2">{tier.name}</h3>
                      <div className="text-2xl font-bold text-emerald-900 mb-4">{tierPricing}</div>
                      <p className="text-emerald-800 text-sm mb-4">{tier.description}</p>
                      <div className="text-sm text-emerald-700">
                        <div><strong>Support:</strong> {tier.supportLevel}</div>
                        <div><strong>Deployment:</strong> {tier.deploymentType}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Prerequisites */}
            {service.prerequisites && service.prerequisites.length > 0 && (
              <div className="mb-12">
                <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <MdWarning className="w-6 h-6 text-orange-600" />
                    <h2 className="text-2xl font-bold text-orange-900">Prerequisites</h2>
                  </div>
                  <p className="text-orange-800 mb-4">
                    The following requirements should be in place before starting this service:
                  </p>
                  <div className="space-y-2">
                    {service.prerequisites.map((prerequisite, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <MdCheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-orange-800">{prerequisite}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center">
              <div className={`${colors.bg} backdrop-blur-sm rounded-xl p-8 border ${colors.border}`}>
                <h2 className={`text-2xl font-bold ${colors.text} mb-4`}>
                  Ready to Get Started with {service.name}?
                </h2>
                <p className={`${colors.text} opacity-90 mb-6 max-w-2xl mx-auto`}>
                  Contact us today to discuss your specific needs and get a customized implementation plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className={`btn-primary ${colors.button} text-white`}
                  >
                    Schedule Consultation
                  </Link>
                  <Link 
                    href="/services/ai-portfolio"
                    className={`btn-outline border-current ${colors.text} hover:bg-current hover:text-white`}
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-8 bg-transparent">
        <div className="container-width">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="btn-outline border-sky-600 text-sky-800 hover:bg-sky-600 hover:text-white"
              >
                Back to Home
              </Link>
              <Link 
                href="/services/ai-portfolio"
                className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
              >
                Back to AI Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 