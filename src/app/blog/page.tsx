'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@/components';

const blogPosts = [
  {
    id: 6,
    title: 'The Shifting IT Landscape: How 2025\'s Tech Blasts Will Reshape Your IT Career and Services',
    excerpt: 'The recent technological advancements aren\'t just features; they\'re catalysts for change in the IT industry. Explore how new AI models, developer tools, and hardware will transform IT services and the skills required for IT professionals.',
    date: '2025-05-23',
    readTime: '12 min read',
    category: 'IT Strategy',
    featured: true
  },
  {
    id: 5,
    title: 'The Converging AI Landscape: Key Themes from Google I/O, Microsoft Build, and Anthropic\'s Latest',
    excerpt: 'After a whirlwind of announcements, it\'s time to connect the dots. Synthesizing the overarching trends from Google I/O, Microsoft Build, and Anthropic\'s Claude 4 release - from AI agents to on-device processing.',
    date: '2025-05-23',
    readTime: '10 min read',
    category: 'AI Trends'
  },
  {
    id: 4,
    title: 'NVIDIA\'s New Blackwell RTX PRO GPUs: Powering the Next Wave of AI and Professional Graphics',
    excerpt: 'The demand for AI processing power continues to explode, and Nvidia is at the forefront. Deep dive into the latest RTX PRO series GPUs based on Blackwell architecture and their impact on professional AI development.',
    date: '2025-05-23',
    readTime: '8 min read',
    category: 'Hardware'
  },
  {
    id: 3,
    title: 'Anthropic Unleashes Claude 4: Opus and Sonnet Raise the Bar for AI Coding and Reasoning',
    excerpt: 'Anthropic has made waves with Claude 4 models, Opus and Sonnet. Technical overview of these foundation models, comparing their strengths in complex coding, agentic workflows, and new API features.',
    date: '2025-05-23',
    readTime: '9 min read',
    category: 'AI Development'
  },
  {
    id: 2,
    title: 'Microsoft Build 2025: Building the Future with AI Agents and Next-Gen Dev Tools',
    excerpt: 'Microsoft Build doubled down on AI integration across its ecosystem. Covering significant GitHub Copilot upgrades, agentic frameworks like NLWeb, .NET 10 introduction, and Azure\'s GB200-based supercomputer implications.',
    date: '2025-05-23',
    readTime: '11 min read',
    category: 'Microsoft Technology'
  },
  {
    id: 1,
    title: 'Google I/O 2025: AI Overdrive – What IT Techs and Developers Need to Know',
    excerpt: 'Google\'s latest I/O was a firehose of AI innovation. Cutting through the noise to highlight key announcements relevant to IT professionals: Gemini advancements, Project Astra, and revolutionary development tools.',
    date: '2025-05-23',
    readTime: '10 min read',
    category: 'Google Technology'
  }
];

const categories = [
  'All',
  'AI Trends',
  'IT Strategy', 
  'Hardware',
  'AI Development',
  'Microsoft Technology',
  'Google Technology'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sadie-primary via-sadie-secondary to-emerald-green text-white">
        <div className="container-width">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Tech Insights Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Discover the latest in AI automation, technology solutions, and business optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog/6" className="btn-primary bg-white text-sadie-primary hover:bg-gray-100">
                Read Featured Article
              </Link>
              <Link href="/blog/1" className="btn-outline border-white text-white hover:bg-white hover:text-sadie-primary">
                Explore Tech Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-200 ${
                  category === selectedCategory 
                    ? 'bg-sadie-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-sadie-primary hover:text-white border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'Featured Article' : `Featured ${selectedCategory} Article`}
            </h2>
          </div>

          {filteredPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-sadie-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      Published {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-sadie-primary hover:text-sadie-secondary font-medium"
                    >
                      Read More <Icon name="MdArrowForward" className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-60 bg-gradient-to-br from-sadie-primary to-emerald-green rounded-xl flex items-center justify-center">
                    <Icon name="MdComputer" className="w-20 h-20 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedCategory === 'All' 
                ? 'Stay updated with the latest technology trends and business automation insights.'
                : `Explore our ${selectedCategory.toLowerCase()} articles and insights.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-sadie-primary to-emerald-green flex items-center justify-center">
                  <Icon name="MdArticle" className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-sadie-primary hover:text-sadie-secondary font-medium text-sm inline-flex items-center"
                    >
                      Read More <Icon name="MdArrowForward" className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Show message when no posts match filter */}
          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <div className="text-center py-12">
              <Icon name="MdSearchOff" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                No articles match the selected category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-sadie-secondary to-sadie-primary text-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Get the latest articles, AI automation tips, and technology insights delivered to your inbox.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-sadie-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <p className="text-white/80 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 