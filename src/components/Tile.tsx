'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { 
  MdSmartToy, 
  MdStorage, 
  MdCode, 
  MdStore, 
  MdReceipt, 
  MdAccountBalance, 
  MdBuild, 
  MdLocationOn,
  MdWifi,
  MdBusiness,
  MdCheck,
  MdArrowForward,
  MdOpenInNew,
  MdRocket,
  MdSchool,
  MdWork,
  MdStar,
  MdEmail,
  MdPhone,
  MdTrendingUp,
  MdPeople,
  MdLightbulb,
  MdSchedule,
  MdSend,
  MdBusinessCenter,
  MdSupport,
  MdAccessTime,
  MdArticle,
  MdDateRange,
  MdPerson,
  MdSecurity,
  MdInfo,
  MdMap,
  MdList,
  MdAnalytics,
  MdPayment,
  MdRestaurant,
  MdMonitor,
  MdSpeed,
  MdCloud,
  MdIntegrationInstructions,
  MdWeb,
  MdDeveloperBoard,
  MdMonetizationOn,
  MdShield,
  MdBackup,
  MdNetworkCheck,
  MdVerifiedUser,
  MdCloudSync,
  MdMonitorHeart,
  MdPsychology,
  MdAutoAwesome
} from 'react-icons/md';
import { getColorClasses } from '@/lib/utils';
import { TileProps } from '@/lib/types';

interface ExtendedTileProps extends TileProps {
  children?: ReactNode;
  stats?: { label: string; value: string }[];
  description?: string;
  features?: string[];
  onClick?: () => void;
  external?: boolean;
}

// Icon mapping for string to component conversion
const iconMap: { [key: string]: IconType } = {
  'MdSmartToy': MdSmartToy,
  'MdStorage': MdStorage,
  'MdCode': MdCode,
  'MdStore': MdStore,
  'MdReceipt': MdReceipt,
  'MdAccountBalance': MdAccountBalance,
  'MdBuild': MdBuild,
  'MdLocationOn': MdLocationOn,
  'MdWifi': MdWifi,
  'MdBusiness': MdBusiness,
  'MdCheck': MdCheck,
  'MdArrowForward': MdArrowForward,
  'MdOpenInNew': MdOpenInNew,
  'MdRocket': MdRocket,
  'MdSchool': MdSchool,
  'MdWork': MdWork,
  'MdStar': MdStar,
  'MdEmail': MdEmail,
  'MdPhone': MdPhone,

  'MdTrendingUp': MdTrendingUp,
  'MdPeople': MdPeople,
  'MdLightbulb': MdLightbulb,
  'MdSchedule': MdSchedule,
  'MdSend': MdSend,
  'MdBusinessCenter': MdBusinessCenter,
  'MdSupport': MdSupport,
  'MdAccessTime': MdAccessTime,
  'MdArticle': MdArticle,
  'MdDateRange': MdDateRange,
  'MdPerson': MdPerson,
  'MdSecurity': MdSecurity,
  'MdInfo': MdInfo,
  'MdMap': MdMap,
  'MdList': MdList,
  'MdAnalytics': MdAnalytics,
  'MdPayment': MdPayment,
  'MdRestaurant': MdRestaurant,
  'MdMonitor': MdMonitor,
  'MdSpeed': MdSpeed,
  'MdCloud': MdCloud,
  'MdIntegrationInstructions': MdIntegrationInstructions,
  'MdWeb': MdWeb,
  'MdDeveloperBoard': MdDeveloperBoard,
  'MdMonetizationOn': MdMonetizationOn,
  'MdShield': MdShield,
  'MdBackup': MdBackup,
  'MdNetworkCheck': MdNetworkCheck,
  'MdVerifiedUser': MdVerifiedUser,
  'MdCloudSync': MdCloudSync,
  'MdMonitorHeart': MdMonitorHeart,
  'MdPsychology': MdPsychology,
  'MdAutoAwesome': MdAutoAwesome,
};

const Tile = ({ 
  title, 
  subtitle, 
  description,
  icon: iconName, 
  bgColor, 
  href, 
  size = 'medium',
  className = '',
  children,
  stats,
  features,
  onClick,
  external = false
}: ExtendedTileProps) => {
  
  // Get the actual icon component from the string name
  const IconComponent = iconMap[iconName] || MdBusiness;
  
  const colorClasses = getColorClasses(bgColor);
  
  // Size configurations
  const sizeClasses = {
    small: 'h-32 w-full',
    medium: 'h-40 w-full md:h-48',
    large: 'h-48 w-full md:h-64 lg:h-80'
  };

  const iconSizes = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const textSizes = {
    small: {
      title: 'text-lg',
      subtitle: 'text-xs'
    },
    medium: {
      title: 'text-xl md:text-2xl',
      subtitle: 'text-sm'
    },
    large: {
      title: 'text-2xl md:text-3xl lg:text-4xl',
      subtitle: 'text-base'
    }
  };

  const content = (
    <div className={`
      metro-tile
      ${colorClasses.bg} 
      ${colorClasses.hover}
      ${sizeClasses[size]}
      ${className}
      relative flex flex-col justify-between p-4 md:p-6
      group
    `}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4">
          <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-white/20" />
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 backdrop-blur-sm">
              <IconComponent className={`${iconSizes[size]} text-white`} />
            </div>
            
            {/* Title and Subtitle */}
            <div className="flex-1">
              <h3 className={`${textSizes[size].title} metro-title font-semibold leading-tight`}>
                {title}
              </h3>
              {subtitle && (
                <p className={`${textSizes[size].subtitle} metro-subtitle mt-1`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          {/* External Link Indicator */}
          {external && (
            <MdOpenInNew className="w-4 h-4 text-white/70" />
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-white/90 text-sm mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="text-white/80 text-xs space-y-1 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <MdCheck className="w-3 h-3 text-white/70" />
                <span>{feature}</span>
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-white/60">+{features.length - 3} more...</li>
            )}
          </ul>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-auto">
            <div className="grid grid-cols-2 gap-3">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-white font-bold text-lg md:text-xl">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Children */}
        {children && (
          <div className="mt-auto">
            {children}
          </div>
        )}
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Click Indicator */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <MdArrowForward className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );

  // Render as button if onClick provided
  if (onClick) {
    return (
      <button onClick={onClick} className="w-full h-full text-left">
        {content}
      </button>
    );
  }

  // Render as link if href provided
  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
          {content}
        </a>
      );
    }
    
    return (
      <Link href={href} className="w-full h-full block">
        {content}
      </Link>
    );
  }

  // Render as static element
  return content;
};

export default Tile;
