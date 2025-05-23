'use client';

import Link from 'next/link';
import { 
  MdHome,
  MdArrowBack,
  MdArrowForward,
  MdApps,
  MdContactMail
} from 'react-icons/md';

interface ServiceBottomNavigationProps {
  currentPage: string;
  currentCategory?: string;
  parentPage?: {
    name: string;
    href: string;
  };
  previousPage?: {
    name: string;
    href: string;
  };
  nextPage?: {
    name: string;
    href: string;
  };
  relatedServices?: Array<{
    name: string;
    href: string;
  }>;
}

export default function ServiceBottomNavigation({
  currentPage,
  currentCategory,
  parentPage,
  previousPage,
  nextPage,
  relatedServices
}: ServiceBottomNavigationProps) {
  return (
    <section className="section-padding bg-gray-50/50 border-t border-gray-200">
      <div className="container-width">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="flex items-center space-x-1 hover:text-sky-600 transition-colors">
              <MdHome className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            {currentCategory && (
              <>
                <span>/</span>
                <Link href={parentPage?.href || '/services'} className="hover:text-sky-600 transition-colors">
                  {currentCategory}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-gray-900 font-medium">{currentPage}</span>
          </nav>
          
          {/* Back to Parent */}
          {parentPage && (
            <div className="flex justify-center">
              <Link 
                href={parentPage.href}
                className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-800 transition-colors font-medium"
              >
                <MdArrowBack className="w-5 h-5" />
                <span>Back to {parentPage.name}</span>
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Previous/Next Navigation */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Page Navigation</h3>
            <div className="space-y-3">
              {previousPage && (
                <Link 
                  href={previousPage.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors"
                >
                  <MdArrowBack className="w-4 h-4" />
                  <span>Previous: {previousPage.name}</span>
                </Link>
              )}
              {nextPage && (
                <Link 
                  href={nextPage.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors"
                >
                  <span>Next: {nextPage.name}</span>
                  <MdArrowForward className="w-4 h-4" />
                </Link>
              )}
              {!previousPage && !nextPage && (
                <p className="text-gray-500 text-sm">No additional pages in this section</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                href="/services"
                className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors"
              >
                <MdApps className="w-4 h-4" />
                <span>All Services</span>
              </Link>
              <Link 
                href="/services/ai-portfolio"
                className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors"
              >
                <span>🎯</span>
                <span>AI Portfolio</span>
              </Link>
              <Link 
                href="/contact"
                className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors"
              >
                <MdContactMail className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Related Services */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
            <div className="space-y-3">
              {relatedServices && relatedServices.length > 0 ? (
                relatedServices.map((service, index) => (
                  <Link 
                    key={index}
                    href={service.href}
                    className="block text-gray-600 hover:text-sky-600 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                ))
              ) : (
                <>
                  <Link 
                    href="/services/hardware-deployment"
                    className="block text-gray-600 hover:text-sky-600 transition-colors text-sm"
                  >
                    Hardware Deployment
                  </Link>
                  <Link 
                    href="/services/software-development"
                    className="block text-gray-600 hover:text-sky-600 transition-colors text-sm"
                  >
                    Software Development
                  </Link>
                  <Link 
                    href="/services/pos-field-services"
                    className="block text-gray-600 hover:text-sky-600 transition-colors text-sm"
                  >
                    POS Field Services
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-sky-500/10 to-emerald-500/10 rounded-xl p-6 border border-sky-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-4">Contact us today to discuss your project requirements and receive a custom quote.</p>
            <Link 
              href="/contact"
              className="btn-primary bg-sky-600 hover:bg-sky-700 text-white"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 