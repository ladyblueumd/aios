'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MdArrowBack,
  MdSupport,
  MdPriorityHigh,
  MdEmail,
  MdSubject,
  MdDescription,
  MdSend,
  MdBugReport,
  MdQuestionAnswer,
  MdSettings
} from 'react-icons/md';

export default function HelpdeskPage() {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    priority: 'medium',
    category: 'general',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Helpdesk ticket submitted:', formData);
    // TODO: Implement ticket submission logic
    alert('Support ticket submitted successfully! We\'ll get back to you within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      
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
        style={{ filter: 'brightness(0.2) contrast(1.1)' }}
      >
        <source src="/videos/7020018_Particle_Dot_3840x2160.mp4" type="video/mp4" />
        <source src="/videos/6994947_Cyber_Ai_3840x2160.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-xl mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-sky-500/20 backdrop-blur-sm">
                  <MdSupport className="w-8 h-8 text-sky-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">Helpdesk Support</h1>
                  <p className="text-white/80">Submit a support ticket for assistance</p>
                </div>
              </div>
              <Link 
                href="/client/dashboard"
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
              >
                <MdArrowBack className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
          </div>

          {/* Support Form */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <MdEmail className="inline w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:border-sky-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <MdSubject className="inline w-4 h-4 mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:border-sky-400 focus:outline-none transition-colors"
                    placeholder="Brief description of your issue"
                  />
                </div>
              </div>

              {/* Priority and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <MdPriorityHigh className="inline w-4 h-4 mr-2" />
                    Priority Level
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white backdrop-blur-sm focus:border-sky-400 focus:outline-none transition-colors"
                  >
                    <option value="low" className="bg-gray-800">Low - General inquiry</option>
                    <option value="medium" className="bg-gray-800">Medium - Standard issue</option>
                    <option value="high" className="bg-gray-800">High - Urgent problem</option>
                    <option value="critical" className="bg-gray-800">Critical - System down</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <MdSettings className="inline w-4 h-4 mr-2" />
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white backdrop-blur-sm focus:border-sky-400 focus:outline-none transition-colors"
                  >
                    <option value="general" className="bg-gray-800">General Support</option>
                    <option value="technical" className="bg-gray-800">Technical Issue</option>
                    <option value="billing" className="bg-gray-800">Billing Question</option>
                    <option value="feature" className="bg-gray-800">Feature Request</option>
                    <option value="bug" className="bg-gray-800">Bug Report</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  <MdDescription className="inline w-4 h-4 mr-2" />
                  Detailed Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:border-sky-400 focus:outline-none transition-colors resize-none"
                  placeholder="Please provide a detailed description of your issue, including any error messages, steps to reproduce, or relevant information..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-sky-500/30 hover:bg-sky-500/50 border border-sky-400/30 px-8 py-3 text-white font-medium transition-all duration-300"
                >
                  <MdSend className="w-5 h-5" />
                  <span>Submit Ticket</span>
                </button>
              </div>
            </form>
          </div>

          {/* Quick Help */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-xl mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Quick Help</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-white/5 border border-white/10">
                <MdQuestionAnswer className="w-6 h-6 text-sky-400" />
                <div>
                  <div className="text-white font-medium">FAQ</div>
                  <div className="text-white/70 text-sm">Common questions</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 border border-white/10">
                <MdBugReport className="w-6 h-6 text-orange-400" />
                <div>
                  <div className="text-white font-medium">Bug Reports</div>
                  <div className="text-white/70 text-sm">Report issues</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 border border-white/10">
                <MdSupport className="w-6 h-6 text-emerald-400" />
                <div>
                  <div className="text-white font-medium">Live Chat</div>
                  <div className="text-white/70 text-sm">Instant support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 