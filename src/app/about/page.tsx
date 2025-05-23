'use client';

import Link from 'next/link';
import { Icon } from '@/components';

const achievements = [
  {
    number: '994+',
    label: 'AI Projects Completed',
    description: 'Successful AI-enhanced deployments'
  },
  {
    number: '25+',
    label: 'States Covered',
    description: 'Nationwide AI automation coverage'
  },
  {
    number: '4.9/5',
    label: 'Client Rating',
    description: 'Consistently high satisfaction'
  },
  {
    number: '5+',
    label: 'Years AI Experience',
    description: 'In AI automation and intelligent systems'
  }
];

const timeline = [
  {
    year: '2012',
    title: 'Started in Technology',
    description: 'Began career in IT support and field services, developing foundational skills in hardware troubleshooting and customer service.'
  },
  {
    year: '2015',
    title: 'Field Service Specialization',
    description: 'Focused on point-of-sale systems and retail technology, becoming certified in major POS platforms.'
  },
  {
    year: '2018',
    title: 'Expanded Services',
    description: 'Added network infrastructure, server deployments, and software development to service offerings.'
  },
  {
    year: '2021',
    title: 'ThorntonTech LLC Founded',
    description: 'Established independent consultancy focusing on comprehensive technology solutions for businesses.'
  },
  {
    year: '2024',
    title: 'AI/OS Platform Launch',
    description: 'Launched AI/OS platform focusing on AI automation management and intelligent business solutions.'
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

const certifications = [
  'CompTIA A+ Certified',
  'Network+ Certified',
  'Microsoft Certified Professional',
  'AWS Cloud Practitioner',
  'AI/ML Fundamentals Certified',
  'PCI DSS Compliance Certified',
  'OSHA 10-Hour Safety Certified'
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
              <p className="text-lg mb-8 text-white/80 leading-relaxed">
                With over 12 years of hands-on experience in field services, AI automation, 
                and intelligent technology consulting, I&apos;ve helped hundreds of businesses 
                transform their operations with cutting-edge AI solutions.
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
                {/* Professional photo placeholder */}
                <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-2xl border-4 border-white/30 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">ST</span>
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
              Proven track record of delivering AI automation results across diverse industries and locations.
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

      {/* Journey Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My AI Technology Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From early IT support to AI automation leadership - 
              a path driven by curiosity and commitment to intelligent solutions.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-sadie-primary to-emerald-green hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                    <div className="card">
                      <div className="text-sadie-primary font-bold text-lg mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-white border-4 border-sadie-primary rounded-full"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
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

      {/* Certifications & Education */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon name="MdSchool" className="w-8 h-8 mr-3 text-sadie-primary" />
                Education & AI Certifications
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Continuous learning in AI, automation, and professional development to stay current 
                with evolving AI landscapes and intelligent system best practices.
              </p>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MdCheck" className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon name="MdWork" className="w-8 h-8 mr-3 text-sadie-primary" />
                AI/OS Philosophy
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    AI Should Augment, Not Replace
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I believe AI should enhance human capabilities and business operations, 
                    not replace them. Every AI solution I implement is designed to work 
                    alongside your team for maximum effectiveness.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Intelligent Automation for Real Results
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Behind every AI automation are real business challenges that need real solutions. 
                    I prioritize understanding your unique workflows and building intelligent 
                    systems that truly serve your business goals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Smart Implementation Over Complexity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I&apos;d rather deliver smart, effective AI solutions that work reliably 
                    than complex systems that complicate your operations. Every client 
                    deserves AI that just works.
                  </p>
                </div>
              </div>
            </div>
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
