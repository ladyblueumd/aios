'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useScrollAnimationClass } from '@/lib/hooks/useScrollAnimation';
import { 
  MdLocationOn, 
  MdBusiness,
  MdDateRange,
  MdStar,
  MdArrowBack,
  MdWork,
  MdFlag,
  MdThumbUp,
  MdAssessment,
  MdPlace
} from 'react-icons/md';

interface WorkOrder {
  id: string;
  serviceDate: string;
  title: string;
  typeOfWork: string;
  city: string;
  state: string;
  country: string;
  company: string;
  rating: number;
  buyerRating: number;
}

export default function WorkOrderDetailPage() {
  const params = useParams();
  const [workOrder, setWorkOrder] = useState<WorkOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const heroAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');
  const detailsAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');

  useEffect(() => {
    fetch('/data/processed-work-orders.json')
      .then(res => res.json())
      .then(data => {
        const order = data.find((wo: WorkOrder) => wo.id === params.id);
        if (order) {
          setWorkOrder(order);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading work order:', error);
        setError(true);
        setLoading(false);
      });
  }, [params.id]);

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
          <p className="text-sky-900 text-lg">Loading Work Order Details...</p>
        </div>
      </div>
    );
  }

  if (error || !workOrder) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/30">
            <h1 className="text-2xl font-bold text-red-900 mb-4">Work Order Not Found</h1>
            <p className="text-red-800 mb-6">The work order you're looking for doesn't exist or has been removed.</p>
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

  const color = getWorkTypeColor(workOrder.typeOfWork);
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
            <div className="max-w-4xl mx-auto">
              
              {/* Breadcrumb */}
              <nav className="mb-8 px-4">
                <div className="flex items-center space-x-2 text-sky-600 text-sm">
                  <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/experience" className="hover:text-sky-400 transition-colors">Experience</Link>
                  <span>/</span>
                  <Link href="/experience/full-work-log" className="hover:text-sky-400 transition-colors">Full Work History</Link>
                  <span>/</span>
                  <span className="text-sky-800">{workOrder.id}</span>
                </div>
              </nav>

              {/* Hero Content */}
              <div className={`${bgColor} backdrop-blur-sm rounded-xl p-8 md:p-12 border ${borderColor} mx-4`}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-sm px-3 py-1 ${bgColor} rounded-full ${textColor} font-medium border ${borderColor}`}>
                    {workOrder.typeOfWork}
                  </span>
                  <span className={`text-sm ${textColor} opacity-70 font-mono`}>
                    ID: {workOrder.id}
                  </span>
                </div>
                
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${textColor}`}>
                  {workOrder.title}
                </h1>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className={`text-xl font-semibold ${textColor} mb-4`}>Client Information</h2>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MdBusiness className={`w-5 h-5 ${textColor}`} />
                        <span className={`${textColor} font-medium`}>{workOrder.company}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MdLocationOn className={`w-5 h-5 ${textColor}`} />
                        <span className={`${textColor}`}>{workOrder.city}, {workOrder.state}, {workOrder.country}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MdDateRange className={`w-5 h-5 ${textColor}`} />
                        <span className={`${textColor}`}>{formatDate(workOrder.serviceDate)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className={`text-xl font-semibold ${textColor} mb-4`}>Performance Ratings</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <MdStar className={`w-5 h-5 ${textColor}`} />
                          <span className={`${textColor}`}>Service Rating</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-2xl font-bold ${textColor}`}>{workOrder.rating}</span>
                          <span className={`${textColor} opacity-70`}>/ 5.0</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <MdThumbUp className={`w-5 h-5 ${textColor}`} />
                          <span className={`${textColor}`}>Client Rating</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-2xl font-bold ${textColor}`}>{workOrder.buyerRating}</span>
                          <span className={`${textColor} opacity-70`}>/ 5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
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

      {/* Detailed Information */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div className="scroll-revealed opacity-100 transition-all duration-600">
            <div className="max-w-4xl mx-auto px-4">
              
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Project Details */}
                <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/30">
                  <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center space-x-3">
                    <MdAssessment className="w-6 h-6" />
                    <span>Project Details</span>
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Service Type</h3>
                      <p className="text-emerald-800">{workOrder.typeOfWork}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Project Title</h3>
                      <p className="text-emerald-800">{workOrder.title}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Service Date</h3>
                      <p className="text-emerald-800">{formatDate(workOrder.serviceDate)}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Work Order ID</h3>
                      <p className="text-emerald-800 font-mono">{workOrder.id}</p>
                    </div>
                  </div>
                </div>

                {/* Location & Client */}
                <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
                  <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center space-x-3">
                    <MdPlace className="w-6 h-6" />
                    <span>Location & Client</span>
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-orange-900 mb-2">Client Company</h3>
                      <p className="text-orange-800">{workOrder.company}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-orange-900 mb-2">Service Location</h3>
                      <p className="text-orange-800">{workOrder.city}, {workOrder.state}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-orange-900 mb-2">Country</h3>
                      <p className="text-orange-800">{workOrder.country}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-orange-900 mb-2">Performance Score</h3>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-900">{workOrder.rating}</div>
                          <div className="text-xs text-orange-800">Service</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-900">{workOrder.buyerRating}</div>
                          <div className="text-xs text-orange-800">Client</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Order Summary */}
              <div className="mt-12">
                <div className="bg-slate-500/20 backdrop-blur-sm rounded-xl p-8 border border-slate-500/30">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                    <MdWork className="w-6 h-6" />
                    <span>Work Order Summary</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900">{workOrder.typeOfWork}</div>
                      <div className="text-slate-800 text-sm mt-1">Service Category</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900">{workOrder.state}</div>
                      <div className="text-slate-800 text-sm mt-1">State Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900">
                        {workOrder.rating > 0 ? workOrder.rating : workOrder.buyerRating > 0 ? workOrder.buyerRating : 'N/A'}
                      </div>
                      <div className="text-slate-800 text-sm mt-1">Performance Rating</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-slate-600/10 rounded-lg border border-slate-600/20">
                    <h3 className="font-semibold text-slate-900 mb-2">Professional Expertise Applied:</h3>
                    <p className="text-slate-800 leading-relaxed">
                      As part of my comprehensive technology consulting services, this {workOrder.typeOfWork.toLowerCase()} project for {workOrder.company} demonstrates my commitment to delivering high-quality, AI-enhanced solutions. 
                      Each project is executed with precision, leveraging cutting-edge technology and best practices to ensure optimal results for clients nationwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <div className="bg-sky-500/20 backdrop-blur-sm rounded-xl p-8 border border-sky-500/30">
                  <h2 className="text-2xl font-bold text-sky-900 mb-4">
                    Need Similar Service?
                  </h2>
                  <p className="text-sky-800 mb-6 max-w-2xl mx-auto">
                    Based on this {workOrder.typeOfWork} project in {workOrder.state}, I can provide similar AI-enhanced technology solutions for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact"
                      className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
                    >
                      Request Quote
                    </Link>
                    <Link 
                      href="/experience/full-work-log"
                      className="btn-outline border-sky-600 text-sky-800 hover:bg-sky-600 hover:text-white"
                    >
                      View More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 