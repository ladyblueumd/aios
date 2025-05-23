// Utility functions for AI/OS website core pages

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Color utilities for tiles
export const getColorClasses = (color: string) => {
  const colorMap = {
    'deep-sky-blue': {
      bg: 'bg-sky-500/20',
      hover: 'hover:bg-sky-500/30',
      text: 'text-sky-900',
      border: 'border-sky-500/30'
    },
    'navy-blue': {
      bg: 'bg-blue-800/20',
      hover: 'hover:bg-blue-800/30',
      text: 'text-blue-900',
      border: 'border-blue-800/30'
    },
    'orange-peel': {
      bg: 'bg-orange-500/20',
      hover: 'hover:bg-orange-500/30',
      text: 'text-orange-900',
      border: 'border-orange-500/30'
    },
    'emerald-green': {
      bg: 'bg-emerald-500/20',
      hover: 'hover:bg-emerald-500/30',
      text: 'text-emerald-900',
      border: 'border-emerald-500/30'
    },
    'purple': {
      bg: 'bg-purple-500/20',
      hover: 'hover:bg-purple-500/30',
      text: 'text-purple-900',
      border: 'border-purple-500/30'
    }
  };
  
  return colorMap[color as keyof typeof colorMap] || colorMap['deep-sky-blue'];
}; 