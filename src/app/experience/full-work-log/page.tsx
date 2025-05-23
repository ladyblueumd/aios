'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useScrollAnimationClass, useStaggeredAnimation } from '@/lib/hooks/useScrollAnimation';
import { 
  MdLocationOn, 
  MdBusiness,
  MdDateRange,
  MdSearch,
  MdFilterList,
  MdClear,
  MdWork,
  MdTrendingUp
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

interface GroupedWorkOrder {
  title: string;
  typeOfWork: string;
  count: number;
  workOrders: WorkOrder[];
  earliestDate: string;
  latestDate: string;
  locations: string[];
  companies: string[];
  id: string; // Use first work order ID for routing
}

export default function FullWorkLogPage() {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
  const [groupedOrders, setGroupedOrders] = useState<GroupedWorkOrder[]>([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(50); // Show 50 items initially
  const [loadingMore, setLoadingMore] = useState(false);

  const heroAnimation = useScrollAnimationClass('scroll-hidden', 'scroll-revealed');

  const groupWorkOrdersByTitle = (orders: WorkOrder[]): GroupedWorkOrder[] => {
    const grouped = orders.reduce((acc, order) => {
      const title = order.title;
      if (!acc[title]) {
        acc[title] = [];
      }
      acc[title].push(order);
      return acc;
    }, {} as Record<string, WorkOrder[]>);

    const groupedOrders = Object.entries(grouped).map(([title, orders]) => {
      const sortedOrders = orders.sort((a, b) => new Date(a.serviceDate).getTime() - new Date(b.serviceDate).getTime());
      const uniqueLocations = Array.from(new Set(orders.map(o => `${cleanCityName(o.city, o.state)}, ${o.state}`)));
      const uniqueCompanies = Array.from(new Set(orders.map(o => o.company)));
      
      return {
        title,
        typeOfWork: orders[0].typeOfWork, // Use the most common or first type
        count: orders.length,
        workOrders: sortedOrders,
        earliestDate: sortedOrders[0].serviceDate,
        latestDate: sortedOrders[sortedOrders.length - 1].serviceDate,
        locations: uniqueLocations,
        companies: uniqueCompanies,
        id: sortedOrders[0].id
      };
    });

    // Sort: grouped work orders (count > 1) first by highest count, then individual orders (count = 1) by most recent date
    return groupedOrders.sort((a, b) => {
      // If both are grouped (count > 1), sort by count descending
      if (a.count > 1 && b.count > 1) {
        return b.count - a.count;
      }
      
      // If both are individual (count = 1), sort by most recent date
      if (a.count === 1 && b.count === 1) {
        return new Date(b.latestDate).getTime() - new Date(a.latestDate).getTime();
      }
      
      // Grouped orders (count > 1) always come before individual orders (count = 1)
      if (a.count > 1 && b.count === 1) {
        return -1;
      }
      
      if (a.count === 1 && b.count > 1) {
        return 1;
      }
      
      // Fallback to date sorting
      return new Date(b.latestDate).getTime() - new Date(a.latestDate).getTime();
    });
  };

  useEffect(() => {
    fetch('/data/processed-work-orders.json')
      .then(res => res.json())
      .then(data => {
        setWorkOrders(data);
        setGroupedOrders(groupWorkOrdersByTitle(data));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading work orders:', error);
        setLoading(false);
      });
  }, []);

  const filteredOrders = useMemo(() => {
    return groupedOrders.filter(group => {
      const matchesSearch = search === '' || 
        group.title.toLowerCase().includes(search.toLowerCase()) ||
        group.companies.some(company => company.toLowerCase().includes(search.toLowerCase())) ||
        group.locations.some(location => location.toLowerCase().includes(search.toLowerCase()));
      
      const matchesType = typeFilter === '' || group.typeOfWork === typeFilter;
      const matchesState = stateFilter === '' || 
        group.workOrders.some(order => order.state === stateFilter);
      
      return matchesSearch && matchesType && matchesState;
    });
  }, [groupedOrders, search, typeFilter, stateFilter]);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(50);
  }, [search, typeFilter, stateFilter]);

  const displayedOrders = useMemo(() => {
    return filteredOrders.slice(0, displayCount);
  }, [filteredOrders, displayCount]);

  const hasMoreItems = filteredOrders.length > displayCount;

  const tilesAnimation = useStaggeredAnimation(Math.min(displayedOrders.length, 20), 50);

  const handleLoadMore = () => {
    setLoadingMore(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setDisplayCount(prev => prev + 50);
      setLoadingMore(false);
    }, 500);
  };

  const uniqueTypes = Array.from(new Set(workOrders.map(order => order.typeOfWork))).sort();
  const uniqueStates = Array.from(new Set(workOrders.map(order => order.state))).sort();

  const getWorkTypeColor = (type: string) => {
    const colors = ['deep-sky-blue', 'navy-blue', 'emerald-green', 'orange-peel'];
    const hash = type.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const cleanCityName = (city: string, state: string) => {
    // Remove any street addresses or numbers at the beginning
    // Keep only the city name for privacy
    const cleaned = city.replace(/^\d+\s+[^,]*,?\s*/, '').trim();
    
    // If the entire field was just an address (cleaned becomes empty), 
    // return "Service Location" for privacy
    if (!cleaned || cleaned.length < 2) {
      return "Service Location";
    }
    
    // If it looks like it still contains address parts (has numbers in the middle),
    // try to extract just the city part or return generic location
    if (/\d+/.test(cleaned) && !/(street|st|avenue|ave|road|rd|drive|dr|lane|ln|boulevard|blvd)$/i.test(cleaned)) {
      return "Service Location";
    }
    
    return cleaned;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sky-900 text-lg">Loading Work Orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      
      {/* Hero Section */}
      <section className="section-padding bg-transparent">
        <div className="container-width">
          <div className="scroll-revealed opacity-100 transition-all duration-700">
            <div className="text-center max-w-4xl mx-auto">
              
              {/* Breadcrumb */}
              <nav className="mb-8">
                <div className="flex items-center justify-center space-x-2 text-sky-600">
                  <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/experience" className="hover:text-sky-400 transition-colors">Experience</Link>
                  <span>/</span>
                  <span className="text-sky-800">Full Work History</span>
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
                  Sadie the Tech Lady Services Past Projects
                </h1>
                
                <p className="text-xl md:text-2xl text-sky-800 mb-8 max-w-3xl mx-auto">
                  Nationwide Professional Consultating Firm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-transparent">
        <div className="container-width">
          <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-800 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-emerald-500/30 rounded-lg text-emerald-900 placeholder-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-800 hover:text-emerald-600"
                  >
                    <MdClear className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Type Filter */}
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-emerald-500/30 rounded-lg text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">All Types</option>
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* State Filter */}
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-emerald-500/30 rounded-lg text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">All States</option>
                {uniqueStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearch('');
                  setTypeFilter('');
                  setStateFilter('');
                }}
                className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MdClear className="w-5 h-5" />
                <span>Clear All</span>
              </button>
            </div>
            
            <div className="mt-4 text-emerald-800 text-sm">
              Showing {displayedOrders.length} project group{displayedOrders.length !== 1 ? 's' : ''} ({displayedOrders.reduce((total, group) => total + group.count, 0)} total projects) of {filteredOrders.length} group{filteredOrders.length !== 1 ? 's' : ''} ({filteredOrders.reduce((total, group) => total + group.count, 0)} total projects)
              {filteredOrders.length !== groupedOrders.length && (
                <span className="ml-2 opacity-75">
                  (filtered from {groupedOrders.length} total groups)
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Work Orders Grid */}
      <section className="pb-16 bg-transparent">
        <div className="container-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedOrders.map((group, index) => {
              const color = getWorkTypeColor(group.typeOfWork);
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
              
              return (
                <Link 
                  key={group.id} 
                  href={group.count === 1 ? `/experience/full-work-log/${group.id}` : `/experience/full-work-log/group/${encodeURIComponent(group.title)}`}
                  className="metro-tile-revealed opacity-100 transition-all duration-500 block"
                  style={{ 
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className={`metro-tile ${bgColor} backdrop-blur-sm rounded-xl p-6 border ${borderColor} h-64 flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                      
                      {/* Header */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs px-2 py-1 ${bgColor} rounded-full ${textColor} font-medium`}>
                            {group.typeOfWork}
                          </span>
                          {group.count > 1 && (
                            <span className={`text-xs px-2 py-1 bg-white/30 rounded-full ${textColor} font-bold`}>
                              {group.count} projects
                            </span>
                          )}
                        </div>
                        
                        <h3 className={`text-lg font-bold ${textColor} mb-2 line-clamp-2 leading-tight`}>
                          {group.title}
                        </h3>
                        
                        <p className={`${textColor} opacity-80 text-sm mb-3 font-medium`}>
                          {group.count === 1 ? group.companies[0] : `${group.companies.length} client${group.companies.length !== 1 ? 's' : ''}`}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MdLocationOn className={`w-4 h-4 ${textColor} opacity-70`} />
                          <span className={`text-sm ${textColor} opacity-80`}>
                            {group.count === 1 ? group.locations[0] : `${group.locations.length} location${group.locations.length !== 1 ? 's' : ''}`}
                          </span>
                        </div>
                      </div>
                    </div>
                </Link>
              );
            })}
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-500/20 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto border border-gray-500/30">
                <MdSearch className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Projects Found</h3>
                <p className="text-gray-700">Try adjusting your search criteria or filters.</p>
              </div>
            </div>
          )}

          {/* Load More Button */}
          {hasMoreItems && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="btn-primary bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 text-lg flex items-center justify-center space-x-3 mx-auto min-w-[200px]"
              >
                {loadingMore ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>Load More Projects</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-sm">
                      +{Math.min(50, filteredOrders.length - displayCount)}
                    </span>
                  </>
                )}
              </button>
              <p className="text-sky-700 text-sm mt-3">
                Showing {displayedOrders.length} of {filteredOrders.length} project groups
              </p>
            </div>
          )}
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
                href="/experience"
                className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
              >
                Back to Experience
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 