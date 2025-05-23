'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MdArrowBack,
  MdLightbulb,
  MdCategory,
  MdEmail,
  MdSubject,
  MdDescription,
  MdSend,
  MdThumbUp,
  MdAdd,
  MdTrendingUp,
  MdAutoAwesome,
  MdSpeed,
  MdSecurity
} from 'react-icons/md';

export default function FeatureRequestsPage() {
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    category: 'enhancement',
    priority: 'medium',
    description: '',
    useCase: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feature request submitted:', formData);
    // TODO: Implement feature request submission logic
    alert('Feature request submitted successfully! Our development team will review it.');
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
        <div className="w-full max-w-4xl">
          
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-xl mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-emerald-500/20 backdrop-blur-sm">
                  <MdLightbulb className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">Feature Requests</h1>
                  <p className="text-white/80">Suggest new features and improvements</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Feature Request Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <MdAdd className="w-6 h-6 mr-2" />
                  Submit New Feature Request
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Title and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        <MdSubject className="inline w-4 h-4 mr-2" />
                        Feature Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-colors"
                        placeholder="Brief, descriptive title"
                      />
                    </div>

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
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Category and Priority Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        <MdCategory className="inline w-4 h-4 mr-2" />
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-colors"
                      >
                        <option value="enhancement" className="bg-gray-800">Enhancement</option>
                        <option value="new-feature" className="bg-gray-800">New Feature</option>
                        <option value="performance" className="bg-gray-800">Performance</option>
                        <option value="ui-ux" className="bg-gray-800">UI/UX Improvement</option>
                        <option value="integration" className="bg-gray-800">Integration</option>
                        <option value="security" className="bg-gray-800">Security</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        <MdTrendingUp className="inline w-4 h-4 mr-2" />
                        Priority
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-colors"
                      >
                        <option value="low" className="bg-gray-800">Low - Nice to have</option>
                        <option value="medium" className="bg-gray-800">Medium - Would be useful</option>
                        <option value="high" className="bg-gray-800">High - Important improvement</option>
                        <option value="critical" className="bg-gray-800">Critical - Essential feature</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      <MdDescription className="inline w-4 h-4 mr-2" />
                      Feature Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                      placeholder="Describe the feature in detail. What should it do? How should it work?"
                    />
                  </div>

                  {/* Use Case */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      <MdAutoAwesome className="inline w-4 h-4 mr-2" />
                      Use Case & Benefits
                    </label>
                    <textarea
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                      placeholder="Explain how this feature would be used and what benefits it would provide..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center space-x-2 bg-emerald-500/30 hover:bg-emerald-500/50 border border-emerald-400/30 px-8 py-3 text-white font-medium transition-all duration-300"
                    >
                      <MdSend className="w-5 h-5" />
                      <span>Submit Request</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Popular Requests Sidebar */}
            <div className="space-y-6">
              
              {/* Top Requested Features */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <MdThumbUp className="w-5 h-5 mr-2" />
                  Top Requests
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Real-time Collaboration', votes: 47, category: 'Feature' },
                    { title: 'Mobile App Support', votes: 34, category: 'Platform' },
                    { title: 'Advanced Analytics', votes: 28, category: 'Enhancement' },
                    { title: 'API Webhooks', votes: 23, category: 'Integration' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 border border-white/10">
                      <div>
                        <div className="text-white text-sm font-medium">{feature.title}</div>
                        <div className="text-white/70 text-xs">{feature.category}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MdThumbUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">{feature.votes}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-4">Popular Categories</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Performance', icon: MdSpeed, color: 'text-sky-400' },
                    { name: 'UI/UX', icon: MdAutoAwesome, color: 'text-purple-400' },
                    { name: 'Security', icon: MdSecurity, color: 'text-red-400' },
                    { name: 'Integration', icon: MdCategory, color: 'text-emerald-400' }
                  ].map((category, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 text-white/80 hover:text-white transition-colors">
                      <category.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="text-sm">{category.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 