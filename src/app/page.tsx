import Image from 'next/image';
import Tile from '@/components/Tile';
import { serviceCategories, experienceSections } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section - "Welcome to Sadie OS" */}
      <section className="section-padding bg-gradient-to-br from-sadie-primary via-sadie-secondary to-sadie-accent-fresh">
        <div className="container-width text-center text-white">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                AI/OS
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 max-w-4xl mx-auto text-shadow">
              AI automation management provided by Sadie the Tech Lady Services
            </p>
            <div className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Intelligent AI solutions, automated workflows, and cutting-edge technology management.
            </div>
          </div>
          
          {/* Optional: Professional photo of Sadie */}
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
              {/* Placeholder for professional photo */}
              <span className="text-4xl md:text-5xl font-bold text-white">ST</span>
            </div>
            <p className="mt-4 text-white/70 font-medium">
              Sadie Thornton, CEO & Technical Expert
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - 4 Tiles Grid Layout */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI/OS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-first technology solutions designed to automate and optimize your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Tile
                  title={service.name}
                  description={service.description}
                  icon={service.icon}
                  bgColor={service.color}
                  href="/contact"
                  size="medium"
                  features={service.features.slice(0, 3)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Mixed Grid Layout */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI/OS Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven AI automation and technology deployment experience across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceSections.map((section, index) => {
              // Make the "Full Work History" tile larger
              const isFullHistory = section.id === 'full-history';
              const gridClass = isFullHistory ? 'lg:col-span-2' : '';
              const tileSize = isFullHistory ? 'large' : 'medium';
              
              return (
                <div 
                  key={section.id} 
                  className={`animate-slide-up ${gridClass}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Tile
                    title={section.title}
                    description={section.description}
                    icon={section.icon}
                    bgColor={section.color}
                    href="/contact"
                    size={tileSize}
                    stats={section.stats}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect with Sadie Section - 3 Tiles Grid Layout */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect with AI/OS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know the AI automation expert behind the technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            {/* About Sadie */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Tile
                title="About Sadie"
                subtitle="The Tech Professional"
                description="Learn about my journey, expertise, and passion for solving complex technology challenges."
                icon="MdBusiness"
                bgColor="navy-blue"
                href="/about"
                size="medium"
              />
            </div>
            
            {/* Get Support */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Tile
                title="Get Support"
                subtitle="Ready to Help"
                description="Contact me for technical support, project consultations, or to discuss your technology needs."
                icon="MdBusiness"
                bgColor="deep-sky-blue"
                href="/contact"
                size="medium"
              />
            </div>
            
            {/* Tech Insights Blog */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Tile
                title="Tech Insights Blog"
                subtitle="Industry Knowledge"
                description="Read my latest thoughts on technology trends, best practices, and innovative solutions."
                icon="MdBusiness"
                bgColor="emerald-green"
                href="/contact"
                size="medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-sadie-accent-fresh to-sadie-primary">
        <div className="container-width text-center text-white">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Business with AI/OS?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              From AI strategy to full automation deployment, AI/OS provides intelligent solutions 
              that transform how your business operates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary bg-white text-sadie-primary hover:bg-gray-100"
              >
                Start AI Automation
              </a>
              <a 
                href="/about" 
                className="btn-outline border-white text-white hover:bg-white hover:text-sadie-primary"
              >
                Learn More About AI/OS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}