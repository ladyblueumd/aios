'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MdSmartToy,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff
} from 'react-icons/md';

export default function ClientLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, redirect to dashboard
    window.location.href = '/client/dashboard';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.3) contrast(1.2)' }}
      >
        <source src="/videos/7020018_Particle_Dot_3840x2160.mp4" type="video/mp4" />
        <source src="/videos/6994947_Cyber_Ai_3840x2160.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Container - Only visible element */}
      <div className="relative z-20 bg-white/10 backdrop-blur-lg border border-white/20 p-8 w-full max-w-md shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm">
              <MdSmartToy className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">AI/OS Client Portal</h1>
          <p className="text-white/80">Access your automation dashboard</p>
          <p className="text-gray-600 text-sm">
            You&apos;re in control of your technology destiny.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail className="h-5 w-5 text-white/60" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdLock className="h-5 w-5 text-white/60" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <MdVisibilityOff className="h-5 w-5 text-white/60 hover:text-white/80" />
                ) : (
                  <MdVisibility className="h-5 w-5 text-white/60 hover:text-white/80" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-white/10 border-white/20 text-sky-600 focus:ring-white/50"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <button type="button" className="text-white/80 hover:text-white transition-colors">
                Forgot password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:scale-105 shadow-lg"
          >
            Access AI/OS Dashboard
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-4">
          <div className="text-white/60 text-sm">
            Don't have an account?{' '}
            <Link href="/contact" className="text-white hover:text-white/80 font-medium">
              Contact for Access
            </Link>
          </div>
          
          <div className="border-t border-white/20 pt-4">
            <Link 
              href="/" 
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              ← Back to Main Site
            </Link>
            <span className="text-white/40 mx-2">|</span>
            <Link 
              href="/client/dashboard" 
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Demo Dashboard →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 