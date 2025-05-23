'use client';

import Link from 'next/link';
import { MdHome, MdArrowBack, MdSearch } from 'react-icons/md';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-4">
        
        {/* 404 Graphic */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-sadie-primary/20 mb-4">404</div>
          <div className="w-24 h-24 bg-gradient-to-br from-sadie-primary to-emerald-green rounded-full flex items-center justify-center mx-auto">
            <MdSearch className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <MdHome className="w-5 h-5" />
            <span>Return to Homepage</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn-outline w-full flex items-center justify-center space-x-2"
          >
            <MdArrowBack className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h2>
          <div className="space-y-2">
            <Link href="/about" className="block text-sadie-primary hover:text-sadie-secondary transition-colors">
              → About AI/OS
            </Link>
            <Link href="/contact" className="block text-sadie-primary hover:text-sadie-secondary transition-colors">
              → Get Support
            </Link>
            <Link href="#" className="block text-sadie-primary hover:text-sadie-secondary transition-colors">
              → AI/OS Solutions
            </Link>
            <Link href="/contact" className="block text-sadie-primary hover:text-sadie-secondary transition-colors">
              → Contact & Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}