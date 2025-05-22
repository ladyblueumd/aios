'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';

const contactMethods = [
  {
    icon: 'MdEmail',
    title: 'Email',
    value: 'info@sadiethetechladyservices.net',
    description: 'Best for detailed project discussions',
    action: 'mailto:info@sadiethetechladyservices.net'
  },
  {
    icon: 'MdPhone',
    title: 'Phone',
    value: '(802) 266-0866',
    description: 'For urgent support or quick questions',
    action: 'tel:+18022660866'
  },
  {
    icon: 'MdLocationOn',
    title: 'Location',
    value: 'Shelburne, VT 05482',
    description: 'Serving clients nationwide',
    action: null
  },
  {
    icon: 'MdAccessTime',
    title: 'Response Time',
    value: '< 24 Hours',
    description: 'Typical response for new inquiries',
    action: null
  }
];

const projectTypes = [
  {
    icon: 'MdRocket',
    title: 'AI Agents & Automation',
    description: 'Intelligent AI solutions to automate your business operations'
  },
  {
    icon: 'MdBusinessCenter',
    title: 'AI-Enhanced Infrastructure',
    description: 'Smart hardware deployment with AI optimization'
  },
  {
    icon: 'MdSupport',
    title: 'AI Support Systems',
    description: 'Intelligent maintenance and automated troubleshooting'
  }
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just show success. In production, you'd send to an API endpoint
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sadie-primary to-emerald-green text-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Let&apos;s Automate Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Ready to transform your operations with AI automation? 
              Let&apos;s discuss how AI/OS can revolutionize your business.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Whether you need AI agents, intelligent automation, AI-enhanced hardware deployment, 
                              or smart field services, let&apos;s explore the possibilities together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                {method.action ? (
                  <a 
                    href={method.action}
                    className="block card group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-sadie-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sadie-primary group-hover:scale-110 transition-all duration-300">
                      <Icon name={method.icon} className="w-8 h-8 text-sadie-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-sadie-primary">
                      {method.title}
                    </h3>
                    <div className="text-lg font-medium text-sadie-primary mb-2 text-center break-words">
                      {method.value}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                  </a>
                ) : (
                  <div className="card h-full">
                    <div className="w-16 h-16 bg-sadie-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={method.icon} className="w-8 h-8 text-sadie-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <div className="text-lg font-medium text-sadie-primary mb-2 text-center break-words">
                      {method.value}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Project Inquiry Form
              </h2>
              <p className="text-xl text-gray-600">
                Tell me about your project and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Form */}
              <div className="lg:col-span-2">
                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-emerald-green/10 border border-emerald-green/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-green rounded-full flex items-center justify-center">
                        <Icon name="MdCheck" className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-green">Message Sent Successfully!</h3>
                        <p className="text-emerald-green/80 text-sm">I&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="form-label">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectType" className="form-label">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select project type</option>
                      <option value="ai-automation">AI Agent & Automation</option>
                      <option value="hardware-deployment">Hardware Deployment & Migration</option>
                      <option value="software-development">Software Development</option>
                      <option value="pos-services">POS Field Services</option>
                      <option value="technical-consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="form-label">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                        <option value="discuss">Let&apos;s discuss</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="form-label">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Please describe your project, challenges you're facing, and what you hope to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Icon name="MdSend" className="w-5 h-5" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Project Types */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    What I Can Help With
                  </h3>
                  <div className="space-y-6">
                    {projectTypes.map((type, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-sadie-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={type.icon} className="w-5 h-5 text-sadie-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {type.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href="/about" 
                      className="block text-sadie-primary hover:text-sadie-secondary transition-colors"
                    >
                      → Learn About AI/OS
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block text-sadie-primary hover:text-sadie-secondary transition-colors"
                    >
                      → Contact Support
                    </Link>
                    <Link 
                      href="/about" 
                      className="block text-sadie-primary hover:text-sadie-secondary transition-colors"
                    >
                      → Learn About Sadie
                    </Link>
                  </div>
                </div>

                {/* Emergency Support */}
                <div className="card bg-red-50 border-red-200">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">
                    Need Emergency Support?
                  </h3>
                  <p className="text-red-700 text-sm mb-4">
                    For urgent technical issues affecting your business operations.
                  </p>
                  <a 
                    href="tel:+18022660866"
                    className="btn-primary bg-red-600 hover:bg-red-700 text-white text-center block"
                  >
                    Call Now: (802) 266-0866
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How quickly can you start my project?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  For most projects, I can begin within 1-2 weeks of signing the agreement. 
                  Emergency support is available within 24 hours for urgent technical issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you work with clients outside of Nashville?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! I serve clients nationwide. I&apos;ve completed projects in 25+ states 
                  and can provide remote support or travel to your location as needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What&apos;s included in your ongoing support?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All projects include initial support and training. Extended support plans 
                  are available for ongoing maintenance, updates, and technical assistance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do you ensure project success?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I use a proven methodology including detailed planning, regular communication, 
                  testing phases, and comprehensive documentation to ensure every project meets 
                  your requirements and timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}