'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useScrollAnimationClass } from '@/lib/hooks/useScrollAnimation';
import { 
  MdLocationOn, 
  MdBusiness,
  MdDateRange,
  MdArrowBack,
  MdWork,
  MdAssessment,
  MdPlace,
  MdGroup
} from 'react-icons/md';

interface WorkOrder {
  id: string;
  serviceDate: string;
  title: string;
  typeOfWork: string;
  city: string;
  state: string;
  company: string;
  rating: number;
  buyerRating: number;
}

export default function GroupedWorkOrderPage() {
  const params = useParams();
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const [groupedOrders, setGroupedOrders] = useState<WorkOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const heroAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');

  const cleanCityName = (city: string, state: string) => {
    const cleaned = city.replace(/^\d+\s+[^,]*,?\s*/, '').trim();
    
    if (!cleaned || cleaned.length < 2) {
      return "Service Location";
    }
    
    if (/\d+/.test(cleaned) && !/(street|st|avenue|ave|road|rd|drive|dr|lane|ln|boulevard|blvd)$/i.test(cleaned)) {
      return "Service Location";
    }
    
    return cleaned;
  };

  useEffect(() => {
    const title = decodeURIComponent(params.title as string);
    
    fetch('/data/processed-work-orders.json')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((wo: WorkOrder) => wo.title === title);
        setWorkOrders(filtered);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading work orders:', error);
        setLoading(false);
      });
  }, [params.title]);

  const getWorkTypeColor = (type: string) => {
    const colors = ['deep-sky-blue', 'navy-blue', 'emerald-green', 'orange-peel'];
    const hash = type.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sky-900 text-lg">Loading Grouped Work Orders...</p>
        </div>
      </div>
    );
  }

  if (error || workOrders.length === 0) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
            <h1 className="text-2xl font-bold text-red-900 mb-4">Work Orders Not Found</h1>
            <p className="text-red-800 mb-6">The grouped work orders you're looking for don't exist or have been removed.</p>
            <Link 
              href="/experience/full-work-log"
              className="btn-primary bg-red-600 hover:bg-red-700 text-white"
            >
              Back to Work Orders
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const firstOrder = workOrders[0];
  const color = getWorkTypeColor(firstOrder.typeOfWork);
  const bgColor = color === 'deep-sky-blue' ? 'bg-sky-500/20' :
                 color === 'navy-blue' ? 'bg-blue-800/20' :
                 color === 'emerald-green' ? 'bg-emerald-500/20' :
                 'bg-orange-500/20';
  const borderColor = color === 'deep-sky-blue' ? 'border-sky-500/30' :
                     color === 'navy-blue' ? 'border-blue-800/30' :
                     color === 'emerald-green' ? 'border-emerald-500/30' :
                     'border-orange-500/30';
  const textColor = color === 'deep-sky-blue' ? 'text-sky-900' :
                   color === 'navy-blue' ? 'text-blue-900' :
                   color === 'emerald-green' ? 'text-emerald-900' :
                   'text-orange-900';
  const buttonColor = color === 'deep-sky-blue' ? 'bg-sky-600 hover:bg-sky-700' :
                     color === 'navy-blue' ? 'bg-blue-700 hover:bg-blue-800' :
                     color === 'emerald-green' ? 'bg-emerald-600 hover:bg-emerald-700' :
                     'bg-orange-600 hover:bg-orange-700';

  const uniqueLocations = Array.from(new Set(workOrders.map(o => `${cleanCityName(o.city, o.state)}, ${o.state}`)));
  const uniqueCompanies = Array.from(new Set(workOrders.map(o => o.company)));
  const uniqueStates = Array.from(new Set(workOrders.map(o => o.state)));

  return (
    <div className="min-h-screen bg-transparent">
      
      {/* Back Button */}
      <div className="container-width pt-8 px-4">
        <Link 
          href="/experience/full-work-log"
          className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-400 transition-colors mb-8"
        >
          <MdArrowBack className="w-5 h-5" />
          <span>Back to Work Orders</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div className="scroll-revealed opacity-100 transition-all duration-700">
            <div className="max-w-6xl mx-auto">
              
              {/* Breadcrumb */}
              <nav className="mb-8 px-4">
                <div className="flex items-center space-x-2 text-sky-600 text-sm">
                  <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/experience" className="hover:text-sky-400 transition-colors">Experience</Link>
                  <span>/</span>
                  <Link href="/experience/full-work-log" className="hover:text-sky-400 transition-colors">Full Work History</Link>
                  <span>/</span>
                  <span className="text-sky-800">Grouped Project</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className={`${bgColor} backdrop-blur-sm rounded-xl p-8 md:p-12 border ${borderColor} mx-4 mb-8`}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-sm px-3 py-1 ${bgColor} rounded-full ${textColor} font-medium border ${borderColor}`}>
                    {firstOrder.typeOfWork}
                  </span>
                  <span className={`text-sm px-3 py-1 bg-white/30 rounded-full ${textColor} font-bold`}>
                    {workOrders.length} Projects
                  </span>
                </div>
                
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${textColor}`}>
                  {firstOrder.title}
                </h1>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <MdGroup className={`w-5 h-5 ${textColor}`} />
                    <div>
                      <div className={`text-sm ${textColor} opacity-70`}>Projects</div>
                      <div className={`${textColor} font-medium`}>{workOrders.length} completed</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdBusiness className={`w-5 h-5 ${textColor}`} />
                    <div>
                      <div className={`text-sm ${textColor} opacity-70`}>Clients</div>
                      <div className={`${textColor} font-medium`}>{uniqueCompanies.length} companies</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MdLocationOn className={`w-5 h-5 ${textColor}`} />
                    <div>
                      <div className={`text-sm ${textColor} opacity-70`}>Locations</div>
                      <div className={`${textColor} font-medium`}>{uniqueStates.length} state{uniqueStates.length !== 1 ? 's' : ''}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <Link 
                    href="/contact"
                    className={`btn-primary ${buttonColor} text-white`}
                  >
                    Request Similar Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Work Orders */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-sky-900 mb-8">Individual Project Details</h2>
            
            <div className="grid gap-6">
              {workOrders.map((order, index) => (
                <div key={order.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-sky-500/30">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-sky-900 mb-2">Client</h3>
                      <p className="text-sky-800">{order.company}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-sky-900 mb-2">Location</h3>
                      <p className="text-sky-800">{cleanCityName(order.city, order.state)}, {order.state}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Link 
                        href={`/experience/full-work-log/${order.id}`}
                        className="btn-outline border-sky-600 text-sky-800 hover:bg-sky-600 hover:text-white text-sm px-4 py-2"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-12">
              <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30">
                <h2 className="text-2xl font-bold text-emerald-900 mb-6">Project Summary</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-900 mb-4">Clients Served</h3>
                    <div className="space-y-2">
                      {uniqueCompanies.map((company, index) => (
                        <div key={index} className="text-emerald-800">{company}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-900 mb-4">Service Locations</h3>
                    <div className="space-y-2">
                      {uniqueLocations.map((location, index) => (
                        <div key={index} className="text-emerald-800">{location}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-sky-500/20 backdrop-blur-sm rounded-xl p-8 border border-sky-500/30">
                <h2 className="text-2xl font-bold text-sky-900 mb-4">
                  Need Similar {firstOrder.typeOfWork} Service?
                </h2>
                <div className="flex justify-center">
                  <Link 
                    href="/contact"
                    className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
                  >
                    Request Quote
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
                Back to Work Orders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 