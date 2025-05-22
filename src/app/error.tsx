'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { MdError, MdRefresh, MdHome, MdBugReport } from 'react-icons/md';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-4">
        
        {/* Error Graphic */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MdError className="w-12 h-12 text-red-500" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We encountered an unexpected error. This has been logged and 
          our team will investigate the issue.
        </p>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <h3 className="font-semibold text-red-900 mb-2">Error Details:</h3>
            <code className="text-red-700 text-sm break-all">
              {error.message}
            </code>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <button 
            onClick={reset}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <MdRefresh className="w-5 h-5" />
            <span>Try Again</span>
          </button>
          
          <Link 
            href="/"
            className="btn-outline w-full flex items-center justify-center space-x-2"
          >
            <MdHome className="w-5 h-5" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Support Information */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Need Help?
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MdBugReport className="w-4 h-4" />
              <span>Error ID: {error.digest || 'Unknown'}</span>
            </div>
            <Link 
              href="/contact" 
              className="block text-sadie-primary hover:text-sadie-secondary transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}