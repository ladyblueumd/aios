'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  MdMenu, 
  MdClose, 
  MdInfo, 
  MdEmail, 
  MdHome,
  MdBusiness,
  MdWork,
  MdArticle 
} from 'react-icons/md';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: MdHome },
    { name: 'Services', href: '/services', icon: MdBusiness },
    { name: 'Experience', href: '/experience', icon: MdWork },
    { name: 'About', href: '/about', icon: MdInfo },
    { name: 'Blog', href: '/blog', icon: MdArticle },
    { name: 'Contact', href: '/contact', icon: MdEmail },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-sadie-primary to-sadie-secondary shadow-lg sticky top-0 z-50">
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-4">
          
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              {/* Logo placeholder - replace with actual logo */}
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-sadie-primary font-bold text-lg">AI</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-xl">AI/OS</h1>
                <p className="text-white/80 text-xs">AI Automation Platform</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || 
                              (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link flex items-center space-x-2 ${
                    isActive ? 'active' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* System Tray Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/about" 
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              title="About Sadie"
            >
              <MdInfo className="w-5 h-5 text-white" />
            </Link>
            <Link 
              href="/contact" 
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Get Support"
            >
              <MdEmail className="w-5 h-5 text-white" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <MdClose className="w-6 h-6 text-white" />
            ) : (
              <MdMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || 
                                (item.href !== '/' && pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile System Tray */}
              <div className="pt-3 mt-3 border-t border-white/20">
                <div className="flex items-center justify-center space-x-6">
                  <Link 
                    href="/about" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <MdInfo className="w-6 h-6 text-white" />
                    <span className="text-xs text-white/80">About</span>
                  </Link>
                  <Link 
                    href="/contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <MdEmail className="w-6 h-6 text-white" />
                    <span className="text-xs text-white/80">Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;