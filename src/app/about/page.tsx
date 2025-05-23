'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components';

const achievements = [
  {
    number: '994+',
    label: 'Projects Completed',
    description: 'Successful technology deployments'
  },
  {
    number: '25+',
    label: 'States Covered',
    description: 'Nationwide coverage'
  },
  {
    number: '4.9/5',
    label: 'Client Rating',
    description: 'Consistently high satisfaction'
  },
  {
    number: '16+',
    label: 'Years of IT Experience',
    description: 'In technology and computer systems'
  }
];

const values = [
  {
    icon: 'MdCheck',
    title: 'AI-First Reliability',
    description: 'Consistent, AI-powered solutions you can count on for mission-critical automation projects.'
  },
  {
    icon: 'MdTrendingUp',
    title: 'Intelligent Excellence',
    description: 'Commitment to delivering cutting-edge AI solutions that exceed expectations and drive results.'
  },
  {
    icon: 'MdPeople',
    title: 'AI-Human Partnership',
    description: 'Building long-term relationships where AI enhances human capabilities and business success.'
  },
  {
    icon: 'MdLightbulb',
    title: 'Continuous AI Innovation',
    description: 'Staying ahead of AI trends to provide the most advanced automation solutions available.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sadie-primary via-sadie-secondary to-emerald-green text-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
                Meet Sadie Thornton
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-white/90 leading-relaxed">
                AI Automation Expert & Founder of AI/OS
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-white text-sadie-primary hover:bg-gray-100">
                  Get In Touch
                </Link>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sadie-primary">
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Professional photo */}
                <div className="w-80 h-80 rounded-2xl border-4 border-white/30 overflow-hidden bg-white/10 backdrop-blur-sm">
                  <Image
                    src="/images/profounderpic.png"
                    alt="Sadie Thornton - AI Automation Expert & Founder of AI/OS"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-green rounded-full flex items-center justify-center">
                  <Icon name="MdRocket" className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-peel rounded-full flex items-center justify-center">
                  <Icon name="MdLightbulb" className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI/OS By the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering technology solutions across diverse industries and locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sadie-primary to-emerald-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {achievement.number.replace(/[^0-9]/g, '').charAt(0)}
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {achievement.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI/OS Core Values & Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI-first principles that guide every automation project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sadie-primary to-emerald-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gradient-to-r from-sadie-secondary to-sadie-primary text-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Automate Your Business with AI/OS
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Ready to transform your business operations with intelligent automation? 
              I&apos;d love to hear about your challenges and explore how AI/OS can help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MdLocationOn" className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold mb-1">Based in Shelburne, VT</div>
                <div className="text-white/80">AI automation services nationwide</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MdEmail" className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold mb-1">Email</div>
                <div className="text-white/80">info@sadiethetechladyservices.net</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MdPhone" className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold mb-1">Phone</div>
                <div className="text-white/80">(802) 266-0866</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-sadie-primary hover:bg-gray-100">
                Start AI Automation
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sadie-primary">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
