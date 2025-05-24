'use client';

import Link from 'next/link';
import { 
  MdHome, 
  MdBusiness, 
  MdWork, 
  MdInfo, 
  MdArticle, 
  MdEmail,
  MdSmartToy,
  MdDashboard,
  MdSupport,
  MdBugReport,
  MdMap,
  MdArrowForward,
  MdOpenInNew
} from 'react-icons/md';

interface PageInfo {
  path: string;
  title: string;
  description: string;
  linksTo: string[];
  linkedFrom: string[];
  icon?: any;
  status: 'active' | 'placeholder' | 'dynamic';
}

export default function SitemapPage() {
  const siteStructure: PageInfo[] = [
    // Main Pages
    {
      path: '/',
      title: 'Home',
      description: 'Main landing page with hero section and service overview',
      linksTo: ['/services', '/about', '/contact', '/client', '/experience', '/blog'],
      linkedFrom: ['All pages (header)', '/not-found', '/client'],
      icon: MdHome,
      status: 'active'
    },
    {
      path: '/about',
      title: 'About',
      description: 'Information about AI/OS platform and Sadie',
      linksTo: ['/contact', '/services'],
      linkedFrom: ['Header navigation', '/not-found', 'Service pages'],
      icon: MdInfo,
      status: 'active'
    },
    {
      path: '/contact',
      title: 'Contact',
      description: 'Contact form and information',
      linksTo: ['/'],
      linkedFrom: ['Header navigation', 'All service pages', '/client', '/blog posts'],
      icon: MdEmail,
      status: 'active'
    },
    {
      path: '/blog',
      title: 'Blog',
      description: 'Blog listing page with featured posts',
      linksTo: ['/blog/1', '/blog/5', '/blog/6'],
      linkedFrom: ['Header navigation'],
      icon: MdArticle,
      status: 'active'
    },
    {
      path: '/experience',
      title: 'Experience',
      description: 'Work experience and portfolio showcase',
      linksTo: ['/experience/full-work-log', '/experience/full-work-log/[id]', '/experience/full-work-log/group/[title]'],
      linkedFrom: ['Header navigation'],
      icon: MdWork,
      status: 'active'
    },

    // Blog Posts
    {
      path: '/blog/1',
      title: 'Blog Post 1',
      description: 'Individual blog post',
      linksTo: ['/blog', '/contact'],
      linkedFrom: ['/blog'],
      status: 'active'
    },
    {
      path: '/blog/5',
      title: 'Blog Post 5',
      description: 'Individual blog post',
      linksTo: ['/blog', '/contact'],
      linkedFrom: ['/blog'],
      status: 'active'
    },
    {
      path: '/blog/6',
      title: 'Blog Post 6',
      description: 'Individual blog post',
      linksTo: ['/blog', '/contact'],
      linkedFrom: ['/blog'],
      status: 'active'
    },

    // Experience Pages
    {
      path: '/experience/full-work-log',
      title: 'Full Work Log',
      description: 'Complete work history and project log',
      linksTo: ['/experience/full-work-log/[id]', '/experience/full-work-log/group/[title]'],
      linkedFrom: ['/experience'],
      status: 'active'
    },
    {
      path: '/experience/full-work-log/[id]',
      title: 'Work Log Entry (Dynamic)',
      description: 'Individual work log entry by ID',
      linksTo: ['/experience/full-work-log'],
      linkedFrom: ['/experience/full-work-log'],
      status: 'dynamic'
    },
    {
      path: '/experience/full-work-log/group/[title]',
      title: 'Work Log Group (Dynamic)',
      description: 'Grouped work log entries by title',
      linksTo: ['/experience/full-work-log'],
      linkedFrom: ['/experience/full-work-log'],
      status: 'dynamic'
    },

    // Services Section
    {
      path: '/services',
      title: 'Services Overview',
      description: 'Main services page with all service categories',
      linksTo: ['/services/ai-automation', '/services/ai-portfolio', '/services/hardware-deployment', '/services/software-development', '/services/pos-field-services', '/contact'],
      linkedFrom: ['Header navigation', '/', 'All service pages'],
      icon: MdBusiness,
      status: 'active'
    },
    {
      path: '/services/ai-automation',
      title: 'AI Automation Services',
      description: 'AI automation solutions and sub-services',
      linksTo: ['/services/ai-automation/chatbot-development', '/services/ai-automation/data-analysis', '/services/ai-automation/process-automation', '/services/ai-automation/system-integration', '/contact'],
      linkedFrom: ['/services'],
      status: 'active'
    },
    {
      path: '/services/ai-portfolio',
      title: 'AI Portfolio',
      description: 'Showcase of AI projects and solutions',
      linksTo: ['/services/ai-portfolio/[serviceId]', '/contact'],
      linkedFrom: ['/services', 'Service navigation'],
      status: 'active'
    },
    {
      path: '/services/hardware-deployment',
      title: 'Hardware Deployment',
      description: 'Hardware deployment and installation services',
      linksTo: ['/contact', '/about'],
      linkedFrom: ['/services'],
      status: 'active'
    },
    {
      path: '/services/software-development',
      title: 'Software Development',
      description: 'Custom software development services',
      linksTo: ['/contact', '/about'],
      linkedFrom: ['/services'],
      status: 'active'
    },
    {
      path: '/services/pos-field-services',
      title: 'POS Field Services',
      description: 'Point of sale system field services',
      linksTo: ['/contact', '/about'],
      linkedFrom: ['/services'],
      status: 'active'
    },

    // AI Automation Sub-services
    {
      path: '/services/ai-automation/chatbot-development',
      title: 'Chatbot Development',
      description: 'AI chatbot development and implementation',
      linksTo: ['/services/ai-automation', '/contact'],
      linkedFrom: ['/services/ai-automation'],
      status: 'active'
    },
    {
      path: '/services/ai-automation/data-analysis',
      title: 'Data Analysis',
      description: 'AI-powered data analysis solutions',
      linksTo: ['/services/ai-automation', '/contact'],
      linkedFrom: ['/services/ai-automation'],
      status: 'active'
    },
    {
      path: '/services/ai-automation/process-automation',
      title: 'Process Automation',
      description: 'Business process automation solutions',
      linksTo: ['/services/ai-automation', '/contact'],
      linkedFrom: ['/services/ai-automation'],
      status: 'active'
    },
    {
      path: '/services/ai-automation/system-integration',
      title: 'System Integration',
      description: 'AI system integration services',
      linksTo: ['/services/ai-automation', '/contact'],
      linkedFrom: ['/services/ai-automation'],
      status: 'active'
    },

    // Dynamic Service Pages
    {
      path: '/services/ai-portfolio/[serviceId]',
      title: 'AI Portfolio Item (Dynamic)',
      description: 'Individual AI portfolio project details',
      linksTo: ['/services/ai-portfolio', '/contact'],
      linkedFrom: ['/services/ai-portfolio'],
      status: 'dynamic'
    },

    // Client Portal
    {
      path: '/client',
      title: 'Client Portal Login',
      description: 'Client authentication and portal access',
      linksTo: ['/client/dashboard', '/', '/contact'],
      linkedFrom: ['Header navigation'],
      icon: MdSmartToy,
      status: 'active'
    },
    {
      path: '/client/dashboard',
      title: 'Client Dashboard',
      description: 'Main client dashboard with AI/OS interface',
      linksTo: ['/client/helpdesk', '/client/feature-requests'],
      linkedFrom: ['/client', '/client/helpdesk', '/client/feature-requests'],
      icon: MdDashboard,
      status: 'active'
    },
    {
      path: '/client/helpdesk',
      title: 'Client Helpdesk',
      description: 'Client support and help system',
      linksTo: ['/client/dashboard'],
      linkedFrom: ['Header navigation (help icon)', '/client/dashboard'],
      icon: MdSupport,
      status: 'active'
    },
    {
      path: '/client/feature-requests',
      title: 'Feature Requests',
      description: 'Client feature request submission system',
      linksTo: ['/client/dashboard'],
      linkedFrom: ['/client/dashboard'],
      icon: MdBugReport,
      status: 'active'
    },

    // Special Pages
    {
      path: '/sitemap',
      title: 'Site Map',
      description: 'Complete site navigation and link structure (this page)',
      linksTo: ['All pages (for reference)'],
      linkedFrom: [],
      icon: MdMap,
      status: 'active'
    },
    {
      path: '/not-found',
      title: '404 Not Found',
      description: 'Error page for missing routes',
      linksTo: ['/', '/about', '/contact'],
      linkedFrom: ['Invalid URLs'],
      status: 'active'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'dynamic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'placeholder': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const mainPages = siteStructure.filter(page => 
    ['/', '/about', '/contact', '/blog', '/experience', '/services', '/client'].includes(page.path)
  );

  const servicePages = siteStructure.filter(page => 
    page.path.startsWith('/services') && page.path !== '/services'
  );

  const clientPages = siteStructure.filter(page => 
    page.path.startsWith('/client') && page.path !== '/client'
  );

  const blogPages = siteStructure.filter(page => 
    page.path.startsWith('/blog') && page.path !== '/blog'
  );

  const experiencePages = siteStructure.filter(page => 
    page.path.startsWith('/experience') && page.path !== '/experience'
  );

  const specialPages = siteStructure.filter(page => 
    ['/sitemap', '/not-found'].includes(page.path)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <MdMap className="text-blue-600" />
                AI/OS Site Map
              </h1>
              <p className="text-gray-600 mt-2">Complete navigation structure and link logic</p>
            </div>
            <Link 
              href="/" 
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              <MdHome className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Legend */}
        <div className="bg-white p-6 mb-8 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Legend</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm border bg-green-100 text-green-800 border-green-200">Active</span>
              <span className="text-sm text-gray-600">Fully implemented pages</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm border bg-blue-100 text-blue-800 border-blue-200">Dynamic</span>
              <span className="text-sm text-gray-600">Pages with dynamic routes [param]</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-sm border bg-yellow-100 text-yellow-800 border-yellow-200">Placeholder</span>
              <span className="text-sm text-gray-600">Pages that need implementation</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Navigation Pages</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainPages.map((page) => {
              const Icon = page.icon || MdArrowForward;
              return (
                <div key={page.path} className="bg-white p-6 shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{page.title}</h3>
                        <code className="text-sm text-gray-500">{page.path}</code>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs border ${getStatusColor(page.status)}`}>
                      {page.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{page.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Links To:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {page.linksTo.slice(0, 3).map((link, idx) => (
                          <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1">
                            {link}
                          </span>
                        ))}
                        {page.linksTo.length > 3 && (
                          <span className="text-xs text-gray-500">+{page.linksTo.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wide">Linked From:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {page.linkedFrom.slice(0, 2).map((link, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1">
                            {link}
                          </span>
                        ))}
                        {page.linkedFrom.length > 2 && (
                          <span className="text-xs text-gray-500">+{page.linkedFrom.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Section</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((page) => (
              <div key={page.path} className="bg-white p-4 shadow-sm border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{page.title}</h3>
                    <code className="text-xs text-gray-500">{page.path}</code>
                  </div>
                  <span className={`px-2 py-1 text-xs border ${getStatusColor(page.status)}`}>
                    {page.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{page.description}</p>
                <div className="text-xs text-gray-500">
                  Links to: {page.linksTo.length} pages • Linked from: {page.linkedFrom.length} pages
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Portal Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Portal Section</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {clientPages.map((page) => (
              <div key={page.path} className="bg-white p-4 shadow-sm border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{page.title}</h3>
                    <code className="text-xs text-gray-500">{page.path}</code>
                  </div>
                  <span className={`px-2 py-1 text-xs border ${getStatusColor(page.status)}`}>
                    {page.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{page.description}</p>
                <div className="text-xs text-gray-500">
                  Links to: {page.linksTo.length} pages • Linked from: {page.linkedFrom.length} pages
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Sections */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Blog Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Blog Section</h2>
            <div className="space-y-3">
              {blogPages.map((page) => (
                <div key={page.path} className="bg-white p-3 shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{page.title}</h3>
                      <code className="text-xs text-gray-500">{page.path}</code>
                    </div>
                    <span className={`px-2 py-1 text-xs border ${getStatusColor(page.status)}`}>
                      {page.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Experience Section</h2>
            <div className="space-y-3">
              {experiencePages.map((page) => (
                <div key={page.path} className="bg-white p-3 shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{page.title}</h3>
                      <code className="text-xs text-gray-500">{page.path}</code>
                    </div>
                    <span className={`px-2 py-1 text-xs border ${getStatusColor(page.status)}`}>
                      {page.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Special Pages */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Special Pages</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {specialPages.map((page) => (
              <div key={page.path} className="bg-white p-4 shadow-sm border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{page.title}</h3>
                    <code className="text-xs text-gray-500">{page.path}</code>
                  </div>
                  <span className={`px-2 py-1 text-xs border ${getStatusColor(page.status)}`}>
                    {page.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{page.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Summary */}
        <section className="mt-12 bg-blue-50 p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Navigation Summary</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-900">Total Pages</h3>
              <p className="text-2xl font-bold text-blue-600">{siteStructure.length}</p>
            </div>
            <div className="bg-white p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-900">Active Pages</h3>
              <p className="text-2xl font-bold text-green-600">
                {siteStructure.filter(p => p.status === 'active').length}
              </p>
            </div>
            <div className="bg-white p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-900">Dynamic Routes</h3>
              <p className="text-2xl font-bold text-blue-600">
                {siteStructure.filter(p => p.status === 'dynamic').length}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 