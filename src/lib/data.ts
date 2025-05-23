// Data processing functions for AI/OS platform
import { WorkOrder, ServiceCategory, ExperienceSection, TechSkill } from './types';

// IMPORTANT: This file should only export serializable data
// Icons are exported as strings and converted to components in client components

// Sample processed work order data structure
export const sampleWorkOrders: WorkOrder[] = [
  {
    id: "WO001",
    serviceDate: "2024-03-15",
    title: "POS System Installation and Configuration",
    typeOfWork: "Point of Sale",
    city: "Nashville",
    state: "TN",
    country: "USA",
    company: "Major Restaurant Chain",
    rating: 5.0,
    buyerRating: 4.9
  },
  {
    id: "WO002", 
    serviceDate: "2024-03-18",
    title: "Network Infrastructure Deployment",
    typeOfWork: "Networking",
    city: "Memphis",
    state: "TN",
    country: "USA",
    company: "Corporate Office",
    rating: 4.8,
    buyerRating: 5.0
  },
  // More sample data would be loaded from the actual CSV processing
];

// Service categories for the homepage tiles
export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai-automation",
    name: "AI Agent & Automation",
    description: "Intelligent AI solutions that automate your business operations and enhance productivity through cutting-edge automation workflows.",
    icon: "MdSmartToy",
    color: "deep-sky-blue",
    features: [
      "Custom AI chatbot development",
      "Intelligent process automation",
      "AI-powered data analysis and reporting",
      "Seamless AI system integration",
      "24/7 automated AI support solutions"
    ],
    callToAction: "Automate with AI"
  },
  {
    id: "hardware-deployment",
    name: "AI-Enhanced Hardware Deployment",
    description: "Smart hardware installations and migrations powered by AI optimization for maximum efficiency and minimal downtime.",
    icon: "MdStorage",
    color: "navy-blue",
    features: [
      "AI-optimized server deployment",
      "Intelligent data center migrations",
      "Smart workstation deployments",
      "AI-driven hardware lifecycle management",
      "Automated performance optimization"
    ],
    callToAction: "Deploy Intelligently"
  },
  {
    id: "software-development",
    name: "AI Software Development & Administration",
    description: "Next-generation software solutions powered by AI, with intelligent system administration and automated technical support.",
    icon: "MdCode",
    color: "emerald-green",
    features: [
      "AI-powered web application development",
      "Intelligent database design and management",
      "AI-enhanced system administration",
      "Smart software integration services",
      "AI-driven technical consulting"
    ],
    callToAction: "Build with AI"
  },
  {
    id: "pos-field-services",
    name: "AI-Powered POS & Field Services",
    description: "Revolutionary point-of-sale and field service solutions enhanced with AI for predictive maintenance and intelligent operations.",
    icon: "MdStore",
    color: "orange-peel",
    features: [
      "AI-enhanced POS system installation",
      "Intelligent payment processing optimization",
      "Predictive hardware troubleshooting",
      "AI-powered staff training systems",
      "Smart multi-location deployment coordination"
    ],
    callToAction: "Optimize with AI"
  }
];

// Experience sections for the homepage
export const experienceSections: ExperienceSection[] = [
  {
    id: "pos-showcase",
    title: "AI-Enhanced POS Solutions",
    description: "Revolutionary AI-powered POS implementations for major retail and restaurant chains nationwide.",
    icon: "MdReceipt",
    color: "orange-peel",
    stats: [
      { label: "AI POS Installations", value: "300+" },
      { label: "Restaurant Chains", value: "25+" },
      { label: "Retail Locations", value: "150+" }
    ]
  },
  {
    id: "financial-projects", 
    title: "AI Financial Technology Projects",
    description: "Trusted by financial institutions for AI-driven infrastructure and intelligent security implementations.",
    icon: "MdAccountBalance",
    color: "navy-blue",
    stats: [
      { label: "Banks Served", value: "12+" },
      { label: "AI Systems Deployed", value: "50+" },
      { label: "Smart Security Systems", value: "75+" }
    ]
  },
  {
    id: "tech-stack",
    title: "AI/OS Technology Stack", 
    description: "Comprehensive AI expertise across machine learning, automation, and emerging intelligent technologies.",
    icon: "MdBuild",
    color: "emerald-green",
    stats: [
      { label: "AI Technologies", value: "100+" },
      { label: "AI Certifications", value: "15+" },
      { label: "Years AI Experience", value: "5+" }
    ]
  },
  {
    id: "full-history",
    title: "Complete AI/OS Portfolio",
    description: "Interactive showcase of 994 AI-enhanced projects and automation deployments across multiple states and industries.",
    icon: "MdLocationOn",
    color: "deep-sky-blue",
    stats: [
      { label: "AI Projects Completed", value: "994" },
      { label: "States Covered", value: "25+" },
      { label: "Client Satisfaction", value: "4.9/5" }
    ]
  }
];

export const techSkills: TechSkill[] = [
  {
    category: "Hardware & Infrastructure",
    icon: "MdStorage",
    description: "Physical hardware installation, configuration, and maintenance",
    skills: [
      "Server Installation & Configuration",
      "Network Equipment Deployment", 
      "Desktop/Laptop Support",
      "CCTV & Security Systems",
      "Low Voltage Cabling",
      "Rack & Patch Panel Installation",
      "Hardware Diagnostics & Repair"
    ]
  },
  {
    category: "Point of Sale Systems",
    icon: "MdStore", 
    description: "Retail and restaurant POS system expertise",
    skills: [
      "POS Terminal Installation",
      "Payment Processing Setup",
      "Self-Checkout Systems",
      "Kiosk Configuration",
      "Cash Drawer & Receipt Printer Setup",
      "Card Reader Integration",
      "POS Software Configuration"
    ]
  },
  {
    category: "Networking & Connectivity",
    icon: "MdWifi",
    description: "Network infrastructure and connectivity solutions",
    skills: [
      "Wireless Network Setup",
      "Ethernet Cable Installation",
      "Router & Switch Configuration",
      "VPN Setup & Management",
      "Network Troubleshooting",
      "Satellite Internet Installation",
      "Network Security Implementation"
    ]
  },
  {
    category: "Software & Development",
    icon: "MdCode",
    description: "Software development and system administration",
    skills: [
      "Web Application Development",
      "Database Design & Management",
      "API Integration",
      "Cloud Services Configuration",
      "System Administration",
      "Automation Scripting",
      "Software Testing & QA"
    ]
  },
  {
    category: "Emerging Technologies",
    icon: "MdSmartToy",
    description: "AI, automation, and cutting-edge technology implementation",
    skills: [
      "AI Chatbot Development",
      "Process Automation",
      "IoT Device Integration", 
      "Machine Learning Implementation",
      "Data Analytics & Reporting",
      "Digital Transformation Consulting",
      "Technology Strategy Planning"
    ]
  }
];

// Function to load and process work order data
export const loadWorkOrderData = async (): Promise<WorkOrder[]> => {
  try {
    // In production, this would load from the processed JSON file
    const response = await fetch('/data/processed-work-orders.json');
    if (!response.ok) {
      // Fallback to sample data if file not found
      console.log('Using sample work order data');
      return sampleWorkOrders;
    }
    const data = await response.json();
    return data.map((order: any) => ({
      ...order,
      company: order.company || 'Business Client'
    }));
  } catch (error) {
    console.error('Error loading work order data:', error);
    return sampleWorkOrders;
  }
};

// Function to get service category by ID
export const getServiceCategory = (id: string): ServiceCategory | undefined => {
  return serviceCategories.find(category => category.id === id);
};

// Function to get experience section by ID  
export const getExperienceSection = (id: string): ExperienceSection | undefined => {
  return experienceSections.find(section => section.id === id);
};

// Mock geocoding function (would integrate with real geocoding service)
export const geocodeLocation = async (city: string, state: string): Promise<{ lat: number; lng: number } | null> => {
  // Mock coordinates for common cities (would use real geocoding API)
  const mockCoordinates: { [key: string]: { lat: number; lng: number } } = {
    'Nashville, TN': { lat: 36.1627, lng: -86.7816 },
    'Memphis, TN': { lat: 35.1495, lng: -90.0490 },
    'Atlanta, GA': { lat: 33.7490, lng: -84.3880 },
    'Birmingham, AL': { lat: 33.5186, lng: -86.8104 },
    'Louisville, KY': { lat: 38.2527, lng: -85.7585 },
    'Knoxville, TN': { lat: 35.9606, lng: -83.9207 },
    'Chattanooga, TN': { lat: 35.0456, lng: -85.3097 },
  };
  
  const key = `${city}, ${state}`;
  return mockCoordinates[key] || null;
};