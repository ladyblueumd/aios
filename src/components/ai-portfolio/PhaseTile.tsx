'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { 
  MdStorage, MdPsychology, MdSmartToy, MdCloud, MdSecurity,
  MdArrowForward, MdCheckCircle
} from 'react-icons/md';

const iconMap: { [key: string]: IconType } = {
  MdStorage, MdPsychology, MdSmartToy, MdCloud, MdSecurity
};

interface Service {
  id: string;
  name: string;
  shortDescription: string;
  duration: string;
}

interface PhaseTileProps {
  phase: {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    order: number;
  };
  services: Service[];
  index: number;
  isAnimated: boolean;
  animationDelay: number;
}

export default function PhaseTile({ phase, services, index, isAnimated, animationDelay }: PhaseTileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; border: string; text: string; button: string } } = {
      'deep-sky-blue': {
        bg: 'bg-sky-500/20',
        border: 'border-sky-500/30',
        text: 'text-sky-900',
        button: 'bg-sky-600 hover:bg-sky-700'
      },
      'navy-blue': {
        bg: 'bg-blue-800/20',
        border: 'border-blue-800/30', 
        text: 'text-blue-900',
        button: 'bg-blue-700 hover:bg-blue-800'
      },
      'emerald-green': {
        bg: 'bg-emerald-500/20',
        border: 'border-emerald-500/30',
        text: 'text-emerald-900',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      },
      'orange-peel': {
        bg: 'bg-orange-500/20',
        border: 'border-orange-500/30',
        text: 'text-orange-900',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      'purple': {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30',
        text: 'text-purple-900',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    };
    return colorMap[color] || colorMap['deep-sky-blue'];
  };

  const colors = getColorClasses(phase.color);
  const IconComponent = iconMap[phase.icon];

  return (
    <div 
      className={`transition-all duration-500 ${
        isAnimated ? 'metro-tile-revealed' : 'metro-tile-hidden'
      }`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div 
        className={`${colors.bg} backdrop-blur-sm rounded-xl p-6 border ${colors.border} h-full hover:scale-105 transition-transform duration-300 cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 ${colors.bg} rounded-lg border ${colors.border}`}>
            {IconComponent && <IconComponent className={`w-8 h-8 ${colors.text}`} />}
          </div>
          <span className={`text-xs px-2 py-1 ${colors.bg} rounded-full ${colors.text} font-medium`}>
            Phase {phase.order}
          </span>
        </div>
        
        <h3 className={`text-lg font-bold ${colors.text} mb-2`}>
          {phase.name}
        </h3>
        
        <p className={`${colors.text} opacity-80 text-sm mb-4`}>
          {phase.description}
        </p>

        <div className={`text-xs ${colors.text} opacity-70 mb-4`}>
          {services.length} Service{services.length !== 1 ? 's' : ''} Available
        </div>

        <div className={`flex items-center justify-between ${colors.text}`}>
          <span className="text-sm font-medium">View Services</span>
          <MdArrowForward className="w-4 h-4" />
        </div>
      </div>

      {/* Expanded Services */}
      {isExpanded && (
        <div className="mt-4 space-y-3">
          {services.map((service) => (
            <Link 
              key={service.id}
              href={`/services/ai-portfolio/${service.id}`}
              className={`block ${colors.bg} backdrop-blur-sm rounded-lg p-4 border ${colors.border} hover:scale-102 transition-transform duration-200`}
            >
              <h4 className={`font-semibold ${colors.text} mb-1`}>{service.name}</h4>
              <p className={`text-sm ${colors.text} opacity-80 mb-2`}>{service.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${colors.text} opacity-70`}>{service.duration}</span>
                <MdArrowForward className={`w-4 h-4 ${colors.text}`} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
