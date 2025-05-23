'use client';

import Link from 'next/link';
import { MdStar, MdCheckCircle } from 'react-icons/md';

interface ServiceTierProps {
  tier: {
    id: string;
    name: string;
    description: string;
    pricing: string;
    features: string[];
    supportLevel: string;
    deploymentType: string;
  };
  isSelected: boolean;
  onSelect: (id: string) => void;
  index: number;
  isAnimated: boolean;
  animationDelay: number;
}

export default function ServiceTierCard({ 
  tier, 
  isSelected, 
  onSelect, 
  index, 
  isAnimated, 
  animationDelay 
}: ServiceTierProps) {
  const isEnterprise = tier.id === 'enterprise';

  return (
    <div 
      className={`transition-all duration-500 ${
        isAnimated ? 'metro-tile-revealed' : 'metro-tile-hidden'
      }`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div 
        className={`bg-white/20 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 cursor-pointer h-full ${
          isSelected 
            ? 'border-emerald-500 shadow-lg scale-105' 
            : 'border-emerald-500/30 hover:border-emerald-500/50'
        } ${isEnterprise ? 'ring-2 ring-gold-400/50' : ''}`}
        onClick={() => onSelect(tier.id)}
      >
        {isEnterprise && (
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
              <MdStar className="w-4 h-4" />
              <span>Most Popular</span>
            </div>
          </div>
        )}

        <h3 className="text-2xl font-bold text-emerald-900 mb-2">{tier.name}</h3>
        <p className="text-emerald-800 mb-4">{tier.description}</p>
        
        <div className="text-3xl font-bold text-emerald-900 mb-6">{tier.pricing}</div>
        
        <div className="space-y-3 mb-6">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <MdCheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span className="text-emerald-800 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm text-emerald-700 mb-6">
          <div><strong>Support:</strong> {tier.supportLevel}</div>
          <div><strong>Deployment:</strong> {tier.deploymentType}</div>
        </div>

        <Link 
          href="#consultation"
          className={`btn-primary w-full text-center ${
            isSelected 
              ? 'bg-emerald-600 hover:bg-emerald-700' 
              : 'bg-emerald-500 hover:bg-emerald-600'
          } text-white`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
