'use client';

import Link from 'next/link';
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn,
  MdWeb,
  MdCode,
  MdBusiness,
  MdSupport
} from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Agent & Automation', href: '/services/ai-automation' },
      { name: 'Hardware Deployment', href: '/services/hardware-migration' },
      { name: 'Software Administration', href: '/services/software-admin' },
      { name: 'POS Field Services', href: '/services/pos-field-services' },
    ],
    experience: [
      { name: 'POS Customer Showcase', href: '/experience/pos-work-log' },
      { name: 'Financial Projects', href: '/experience/financial-projects' },
      { name: 'Tech Stack', href: '/experience/tech-stack' },
      { name: 'Full Work History', href: '/experience/full-work-log' },
    ],
    company: [
      { name: 'About Sadie', href: '/about' },
      { name: 'Tech Insights Blog', href: '/blog' },
      { name: 'Helpdesk Support', href: '/client/helpdesk' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { name: 'Website', href: '#', icon: MdWeb },
    { name: 'GitHub', href: '#', icon: MdCode },
    { name: 'Helpdesk', href: '/client/helpdesk', icon: MdSupport },
    { name: 'Business', href: '#', icon: MdBusiness },
  ];

  return (
    <footer className="bg-transparent text-sky-500">
      <div className="container-width px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                <span className="text-sky-500 font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-500">AI/OS</h3>
                <p className="text-sky-600 text-sm">AI Automation Platform</p>
              </div>
            </div>
            <p className="text-sky-600 mb-6 max-w-md">
              AI-first automation management and intelligent technology solutions. 
              Serving clients nationwide with cutting-edge AI automation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-sky-600">
              <div className="flex items-center space-x-2">
                <MdLocationOn className="w-4 h-4" />
                <span>Shelburne, VT 05482 (Nationwide Service)</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="w-4 h-4" />
                <span>(802) 266-0866</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail className="w-4 h-4" />
                <span>info@sadiethetechladyservices.net</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-500">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sky-600 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-500">Experience</h4>
            <ul className="space-y-2">
              {footerLinks.experience.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sky-600 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-500">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sky-600 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-sky-500/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          
          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <span className="text-sky-600 text-sm">Follow Us:</span>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full hover:bg-sky-500/10 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-sky-600 hover:text-sky-400" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-sky-600 text-sm">
              © {currentYear} Ultramarine Dreams DBA as Sadie the Tech Lady. All rights reserved.
            </p>
            <p className="text-sky-700 text-xs mt-1">
              Built with Next.js, React & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Tech Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-500/10 rounded-full">
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
            <span className="text-sky-600 text-xs font-medium">
              Powered by AI/OS Automation Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;