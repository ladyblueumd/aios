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
      bg: 'bg-deep-sky-blue',
      hover: 'hover:bg-blue-600',
      text: 'text-white',
      border: 'border-deep-sky-blue'
    },
    'navy-blue': {
      bg: 'bg-navy-blue',
      hover: 'hover:bg-blue-800',
      text: 'text-white',
      border: 'border-navy-blue'
    },
    'orange-peel': {
      bg: 'bg-orange-peel',
      hover: 'hover:bg-orange-600',
      text: 'text-white',
      border: 'border-orange-peel'
    },
    'emerald-green': {
      bg: 'bg-emerald-green',
      hover: 'hover:bg-green-600',
      text: 'text-white',
      border: 'border-emerald-green'
    }
  };
  
  return colorMap[color as keyof typeof colorMap] || colorMap['deep-sky-blue'];
}; 