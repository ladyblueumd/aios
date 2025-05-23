// AI/OS Service Portfolio Data Structure
export interface AIService {
  id: string;
  name: string;
  phase: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  features: string[];
  deliverables: string[];
  targetClients: string[];
  pricing: {
    starter?: string;
    professional?: string;
    enterprise?: string;
  };
  duration: string;
  prerequisites?: string[];
}

export interface ServicePhase {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
}

export interface ServiceTier {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: string;
  supportLevel: string;
  deploymentType: string;
}

// Service Phases
export const servicePhases: ServicePhase[] = [
  {
    id: "data-foundation",
    name: "Data Foundation Services",
    description: "Establish robust data infrastructure and knowledge management systems",
    icon: "MdStorage",
    color: "deep-sky-blue",
    order: 1
  },
  {
    id: "model-customization",
    name: "AI Model Customization",
    description: "Fine-tune and optimize AI models for your specific needs",
    icon: "MdPsychology",
    color: "navy-blue",
    order: 2
  },
  {
    id: "agent-ecosystem",
    name: "Agent Ecosystem Design",
    description: "Design and deploy intelligent agent orchestration systems",
    icon: "MdSmartToy",
    color: "emerald-green",
    order: 3
  },
  {
    id: "infrastructure-deployment",
    name: "Infrastructure & Deployment",
    description: "Build scalable AI infrastructure for local and cloud environments",
    icon: "MdCloud",
    color: "orange-peel",
    order: 4
  },
  {
    id: "operations-maintenance",
    name: "Operations & Maintenance",
    description: "Ongoing management, security, and optimization of AI systems",
    icon: "MdSecurity",
    color: "purple",
    order: 5
  }
];

// Service Tiers
export const serviceTiers: ServiceTier[] = [
  {
    id: "starter",
    name: "Starter Tier",
    description: "Perfect for small businesses and personal use",
    features: [
      "Basic data vectorization",
      "Simple agent configuration", 
      "Cloud-based deployment",
      "Remote support",
      "Email support (48hr response)",
      "Monthly progress reports"
    ],
    pricing: "Starting at $2,500/month",
    supportLevel: "Remote Support",
    deploymentType: "Cloud-Based"
  },
  {
    id: "professional",
    name: "Professional Tier",
    description: "Ideal for medium businesses requiring custom solutions",
    features: [
      "Custom model fine-tuning",
      "Multi-agent orchestration",
      "Hybrid cloud/local deployment",
      "On-site consultation",
      "Priority support (24hr response)",
      "Weekly optimization reviews",
      "Custom integration development"
    ],
    pricing: "Starting at $7,500/month",
    supportLevel: "Priority Support + On-site Consultation",
    deploymentType: "Hybrid Cloud/Local"
  },
  {
    id: "enterprise",
    name: "Enterprise Tier",
    description: "Complete enterprise-grade AI infrastructure and governance",
    features: [
      "Full local foundry setup",
      "Custom security frameworks",
      "Dedicated on-site technicians",
      "Complete governance implementation",
      "24/7 monitoring and support",
      "Real-time performance optimization",
      "Executive reporting dashboards",
      "Compliance and audit support"
    ],
    pricing: "Starting at $25,000/month",
    supportLevel: "24/7 Dedicated Support Team",
    deploymentType: "Full Local Infrastructure"
  }
];

// AI Services Portfolio
export const aiServices: AIService[] = [
  // Phase 1: Data Foundation Services
  {
    id: "data-vectorization",
    name: "Data Vectorization & Knowledge Graph Creation",
    phase: "data-foundation",
    category: "File Organization & Data Preparation",
    shortDescription: "Transform your unstructured data into intelligent, searchable knowledge systems",
    fullDescription: "Comprehensive data transformation service that converts your existing files, documents, and databases into vector embeddings and knowledge graphs. We audit all your data sources, clean and preprocess the information, then build semantic search capabilities that make your entire data ecosystem instantly searchable and AI-ready.",
    icon: "MdAccountTree",
    color: "deep-sky-blue",
    features: [
      "Complete data source audit and cataloging",
      "Advanced data cleaning and preprocessing",
      "Document classification with AI-powered metadata tagging",
      "Vector database implementation with semantic search",
      "Knowledge graph construction from your data",
      "Integration with external knowledge sources",
      "Real-time data synchronization pipelines",
      "Quality assurance and validation processes"
    ],
    deliverables: [
      "Data audit report with source inventory",
      "Clean, processed data ready for AI consumption",
      "Fully deployed vector database with search interface",
      "Knowledge graph visualization dashboard",
      "API endpoints for data access",
      "Documentation and training materials"
    ],
    targetClients: ["Small Business", "Medium Business", "Enterprise", "Personal"],
    pricing: {
      starter: "$2,500 - $5,000",
      professional: "$7,500 - $15,000", 
      enterprise: "$25,000 - $50,000"
    },
    duration: "2-6 weeks",
    prerequisites: ["Data access and permissions", "Storage infrastructure"]
  },
  {
    id: "data-pipeline-development",
    name: "Data Pipeline Development",
    phase: "data-foundation",
    category: "Automation & Integration",
    shortDescription: "Automated data ingestion and processing workflows for continuous AI readiness",
    fullDescription: "Build robust, automated data pipelines that continuously ingest, process, and prepare your data for AI consumption. Our pipelines include automated quality checks, version control for your knowledge bases, and real-time synchronization to keep your AI systems always up-to-date with the latest information.",
    icon: "MdTimeline",
    color: "deep-sky-blue",
    features: [
      "Automated data ingestion from multiple sources",
      "Real-time data processing and transformation",
      "Version control for knowledge bases",
      "Data quality monitoring and alerting",
      "Automated backup and recovery systems",
      "Integration with existing business systems",
      "Scalable processing for growing data volumes",
      "Custom data validation rules and workflows"
    ],
    deliverables: [
      "Deployed data pipeline infrastructure",
      "Monitoring dashboard for data flows",
      "Quality assurance reporting system",
      "Version control interface",
      "Integration documentation",
      "Staff training on pipeline management"
    ],
    targetClients: ["Medium Business", "Enterprise"],
    pricing: {
      professional: "$10,000 - $20,000",
      enterprise: "$30,000 - $75,000"
    },
    duration: "3-8 weeks",
    prerequisites: ["Existing data sources", "System integration access"]
  },

  // Phase 2: AI Model Customization
  {
    id: "custom-model-finetuning",
    name: "Custom Model Fine-Tuning Services",
    phase: "model-customization", 
    category: "AI Optimization",
    shortDescription: "Customize foundation AI models with your specific data for superior performance",
    fullDescription: "Advanced AI model customization service that fine-tunes powerful foundation models using your specific data and use cases. We optimize training datasets, implement privacy-preserving methodologies, and create continuous learning pipelines that improve model performance over time while maintaining security and compliance.",
    icon: "MdTune",
    color: "navy-blue",
    features: [
      "Optimal training/validation/test dataset creation",
      "Advanced data augmentation strategies",
      "Privacy-preserving training methodologies",
      "Model performance benchmarking and evaluation",
      "Model compression for deployment efficiency",
      "Continuous learning pipeline setup",
      "A/B testing framework for model versions",
      "Custom evaluation metrics development"
    ],
    deliverables: [
      "Custom fine-tuned AI model",
      "Model performance evaluation report", 
      "Deployment-ready model packages",
      "Continuous learning infrastructure",
      "Model monitoring dashboard",
      "Technical documentation and API guides"
    ],
    targetClients: ["Professional", "Enterprise"],
    pricing: {
      professional: "$15,000 - $35,000",
      enterprise: "$50,000 - $150,000"
    },
    duration: "4-12 weeks",
    prerequisites: ["Quality training data", "GPU infrastructure access"]
  },

  // Phase 3: Agent Ecosystem Design
  {
    id: "ai-agent-orchestration",
    name: "AI Agent Orchestration & Configuration",
    phase: "agent-ecosystem",
    category: "Multi-Agent Systems",
    shortDescription: "Design intelligent multi-agent systems that work together to automate complex workflows",
    fullDescription: "Comprehensive agent ecosystem design that creates specialized AI agents for different business functions and orchestrates their collaboration. We design agent roles, establish communication protocols, and build workflow automation that enables agents to work together seamlessly while integrating with your existing business systems.",
    icon: "MdGroups",
    color: "emerald-green",
    features: [
      "Multi-agent system architecture design",
      "Agent role definition and capability mapping",
      "Inter-agent communication protocols",
      "Workflow automation design and implementation",
      "Microsoft 365 / Google Workspace integration",
      "Third-party API connector configuration",
      "Custom tool development for specialized tasks",
      "Agent performance monitoring and optimization"
    ],
    deliverables: [
      "Multi-agent system architecture documentation",
      "Deployed agent ecosystem with monitoring",
      "Workflow automation interface",
      "Integration with business systems",
      "Agent management dashboard",
      "Training materials for agent interaction"
    ],
    targetClients: ["Professional", "Enterprise"],
    pricing: {
      professional: "$20,000 - $40,000",
      enterprise: "$60,000 - $200,000"
    },
    duration: "6-16 weeks",
    prerequisites: ["Business process mapping", "System integration access"]
  },
  {
    id: "service-integration-planning",
    name: "Service Integration Planning",
    phase: "agent-ecosystem",
    category: "Business Integration",
    shortDescription: "Seamlessly integrate AI agents with your existing business systems and workflows",
    fullDescription: "Strategic service integration that connects your AI agents with existing business systems including Microsoft 365, Google Workspace, CRM systems, and custom applications. We plan and implement integrations that enhance rather than disrupt your current workflows while maximizing the value of your AI investments.",
    icon: "MdIntegrationInstructions",
    color: "emerald-green",
    features: [
      "Business system assessment and mapping",
      "API integration strategy development",
      "Custom connector development",
      "Single sign-on (SSO) implementation",
      "Data synchronization planning",
      "Workflow optimization analysis",
      "Change management planning",
      "User adoption strategy development"
    ],
    deliverables: [
      "Integration strategy document",
      "Custom connectors and APIs",
      "SSO implementation",
      "Testing and validation reports",
      "User training program",
      "Change management documentation"
    ],
    targetClients: ["Medium Business", "Enterprise"],
    pricing: {
      professional: "$12,000 - $25,000",
      enterprise: "$35,000 - $100,000"
    },
    duration: "4-10 weeks",
    prerequisites: ["System access credentials", "IT infrastructure documentation"]
  },

  // Phase 4: Infrastructure & Deployment
  {
    id: "ai-infrastructure-consulting",
    name: "AI Infrastructure Consulting",
    phase: "infrastructure-deployment",
    category: "Technical Architecture",
    shortDescription: "Strategic planning for local and cloud AI infrastructure deployment",
    fullDescription: "Comprehensive infrastructure consulting that analyzes your needs and designs optimal AI deployment strategies. We evaluate local versus cloud options, plan GPU resources, assess costs and benefits, and design scalable architectures that grow with your AI initiatives while optimizing performance and costs.",
    icon: "MdArchitecture",
    color: "orange-peel",
    features: [
      "Local vs cloud strategy analysis",
      "GPU resource planning and optimization",
      "Cost-benefit analysis for deployment scenarios",
      "Scalability planning for growing AI workloads",
      "Performance monitoring strategy",
      "Disaster recovery planning",
      "Security architecture design",
      "Compliance framework development"
    ],
    deliverables: [
      "Infrastructure strategy document",
      "Cost analysis and ROI projections",
      "Architecture diagrams and specifications",
      "Implementation roadmap",
      "Risk assessment and mitigation plan",
      "Vendor recommendations and procurement guidance"
    ],
    targetClients: ["Professional", "Enterprise"],
    pricing: {
      professional: "$8,000 - $15,000",
      enterprise: "$20,000 - $50,000"
    },
    duration: "2-6 weeks",
    prerequisites: ["Current infrastructure audit", "Business requirements documentation"]
  },
  {
    id: "local-foundry-setup",
    name: "Local AI Foundry Setup",
    phase: "infrastructure-deployment",
    category: "Hardware Deployment",
    shortDescription: "Complete on-premises AI infrastructure deployment with GPU clusters and private hosting",
    fullDescription: "Full-service deployment of on-premises AI infrastructure including GPU clusters, private model hosting, and local AI foundries. We handle hardware procurement, installation, configuration, and optimization to give you complete control over your AI operations while ensuring maximum performance and security.",
    icon: "MdDeveloperBoard",
    color: "orange-peel",
    features: [
      "Hardware requirements assessment and procurement",
      "GPU cluster design and installation",
      "Private model hosting infrastructure",
      "Network configuration and optimization",
      "Cooling and power management systems",
      "Security hardening and access controls",
      "Performance monitoring and alerting",
      "Backup and disaster recovery systems"
    ],
    deliverables: [
      "Fully deployed AI foundry infrastructure",
      "Performance monitoring dashboard",
      "Security and access control systems",
      "Backup and recovery procedures",
      "Operations manual and documentation",
      "Staff training on infrastructure management"
    ],
    targetClients: ["Enterprise"],
    pricing: {
      enterprise: "$100,000 - $500,000+"
    },
    duration: "8-20 weeks",
    prerequisites: ["Facility requirements", "Power and cooling infrastructure"]
  },

  // Phase 5: Operations & Maintenance
  {
    id: "ai-system-administration",
    name: "AI System Administration",
    phase: "operations-maintenance",
    category: "Ongoing Support",
    shortDescription: "Comprehensive AI system management with dedicated technical support and optimization",
    fullDescription: "Complete AI system administration service including dedicated technicians, Active Directory integration, performance monitoring, and 24/7 support. We provide ongoing optimization, troubleshooting, incident response, and system maintenance to ensure your AI infrastructure operates at peak performance.",
    icon: "MdSupport",
    color: "purple",
    features: [
      "Dedicated AI technicians for local infrastructure",
      "Active Directory / Entra ID integration",
      "24/7 system monitoring and performance optimization",
      "Proactive troubleshooting and incident response",
      "Regular system updates and maintenance",
      "Performance tuning and optimization",
      "Capacity planning and scaling recommendations",
      "Documentation and knowledge base maintenance"
    ],
    deliverables: [
      "24/7 monitoring and alerting system",
      "Monthly performance and optimization reports",
      "Incident response and resolution documentation",
      "System maintenance schedules and procedures",
      "Knowledge base and troubleshooting guides",
      "Regular system health assessments"
    ],
    targetClients: ["Professional", "Enterprise"],
    pricing: {
      professional: "$5,000 - $12,000/month",
      enterprise: "$15,000 - $50,000/month"
    },
    duration: "Ongoing service contract",
    prerequisites: ["Deployed AI infrastructure", "Administrative access"]
  },
  {
    id: "mcp-security-governance",
    name: "MCP Security & Governance",
    phase: "operations-maintenance",
    category: "Security & Compliance",
    shortDescription: "Model Context Protocol security hardening and comprehensive AI governance frameworks",
    fullDescription: "Advanced security and governance service focused on Model Context Protocol (MCP) security, authentication frameworks, and comprehensive AI governance. We implement enterprise-grade security measures, develop AI usage policies, and ensure compliance with regulatory requirements while maintaining audit trails and monitoring systems.",
    icon: "MdShield",
    color: "purple",
    features: [
      "MCP server security hardening",
      "Authentication and authorization frameworks",
      "Comprehensive audit logging and monitoring",
      "SCCM integration for enterprise environments",
      "AI governance policy development",
      "Risk assessment and mitigation strategies",
      "Compliance monitoring and reporting (GDPR, HIPAA, SOX)",
      "Ethical AI implementation guidelines"
    ],
    deliverables: [
      "Hardened MCP security infrastructure",
      "Authentication and authorization system",
      "Audit logging and monitoring dashboard",
      "AI governance policy documentation",
      "Compliance reporting system",
      "Risk assessment and mitigation plans"
    ],
    targetClients: ["Enterprise"],
    pricing: {
      enterprise: "$25,000 - $75,000 initial + $8,000 - $20,000/month"
    },
    duration: "6-12 weeks initial setup + ongoing",
    prerequisites: ["Existing AI infrastructure", "Compliance requirements documentation"]
  }
];

// Client-Specific Service Packages
export const clientPackages = [
  {
    id: "microsoft-business",
    name: "Microsoft Business Clients",
    description: "Azure AI Integration Package",
    services: [
      "Azure OpenAI Service configuration",
      "Power Platform AI automation",
      "Microsoft 365 Copilot customization", 
      "Azure Active Directory integration"
    ],
    icon: "MdMicrosoft",
    color: "navy-blue"
  },
  {
    id: "google-business",
    name: "Google Business Clients", 
    description: "Google Cloud AI Package",
    services: [
      "Vertex AI platform setup",
      "Google Workspace AI integration",
      "BigQuery ML implementation",
      "Google Cloud Identity management"
    ],
    icon: "MdGoogle",
    color: "emerald-green"
  },
  {
    id: "personal-family",
    name: "Personal/Family Clients",
    description: "Personal AI Assistant Package", 
    services: [
      "Home automation with AI",
      "Personal knowledge management",
      "Family data organization and search",
      "Privacy-focused local AI deployment"
    ],
    icon: "MdHome",
    color: "orange-peel"
  }
];

// Service Delivery Models
export const deliveryModels = [
  {
    id: "consultation",
    name: "Consultation Services",
    description: "Strategic planning and assessment services",
    services: [
      "Initial AI readiness assessment",
      "Custom AI strategy development", 
      "Technology stack recommendations",
      "ROI analysis and business case development"
    ]
  },
  {
    id: "implementation", 
    name: "Implementation Services",
    description: "Full deployment and setup services",
    services: [
      "Full turnkey AI system deployment",
      "Phased rollout with milestone deliverables",
      "Training and knowledge transfer",
      "Change management support"
    ]
  },
  {
    id: "managed",
    name: "Managed Services",
    description: "Ongoing support and optimization",
    services: [
      "Ongoing AI system maintenance",
      "24/7 monitoring and support",
      "Regular performance optimization", 
      "Continuous improvement programs"
    ]
  }
];

// Helper functions
export const getServicesByPhase = (phaseId: string): AIService[] => {
  return aiServices.filter(service => service.phase === phaseId);
};

export const getServiceById = (serviceId: string): AIService | undefined => {
  return aiServices.find(service => service.id === serviceId);
};

export const getPhaseById = (phaseId: string): ServicePhase | undefined => {
  return servicePhases.find(phase => phase.id === phaseId);
}; 