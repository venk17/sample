import React from 'react';
import ServiceLayout from '../../components/Layout/ServiceLayout'; // Default import
import { 
  BarChart, TrendingUp, Target, PieChart, 
  Database, LineChart, Search, Filter,
  Users, Globe, Shield, Zap
} from 'lucide-react';

const BusinessMarketIntelligence = () => {
  const serviceData = {
    title: "Business & Market Intelligence",
    subtitle: "Transform raw data into actionable insights that drive strategic decisions and competitive advantage",
    description: "Our Business & Market Intelligence service provides comprehensive data analysis, market research, and strategic insights to help organizations make informed decisions, identify growth opportunities, and stay ahead of market trends through advanced analytics and predictive modeling.",
    icon: BarChart,
    iconColor: 'blue',
    
    stats: [
      { value: "3.5x", label: "Average ROI", description: "For clients using our intelligence" },
      { value: "95%", label: "Accuracy Rate", description: "In market predictions" },
      { value: "40%", label: "Cost Reduction", description: "In decision-making processes" },
      { value: "2-4 Weeks", label: "Time to Insights", description: "Rapid deployment" }
    ],
    
    features: [
      {
        title: "Competitive Intelligence",
        description: "Comprehensive analysis of competitors, market positioning, and strategic moves",
        icon: Target // Just pass the component, not JSX
      },
      {
        title: "Market Trend Analysis",
        description: "Identify emerging trends and predict future market developments",
        icon: TrendingUp
      },
      {
        title: "Predictive Analytics",
        description: "Advanced modeling to forecast market changes and business outcomes",
        icon: LineChart
      },
      {
        title: "Customer Insights",
        description: "Deep understanding of customer behavior, preferences, and needs",
        icon: Users
      },
      {
        title: "Data Visualization",
        description: "Interactive dashboards and reports for clear insight communication",
        icon: PieChart
      },
      {
        title: "Real-time Monitoring",
        description: "Continuous tracking of market signals and business metrics",
        icon: Database
      }
    ],
    
    sections: [
      {
        title: "Strategic Market Analysis",
        content: "We provide in-depth market analysis that goes beyond surface-level data, delivering strategic insights that inform critical business decisions.",
        icon: Search,
        points: [
          "Comprehensive market sizing and segmentation",
          "Competitor benchmarking and SWOT analysis",
          "Trend identification and forecasting",
          "Market entry strategy development",
          "Risk assessment and mitigation planning",
          "Pricing strategy optimization"
        ]
      },
      {
        title: "Data-Driven Decision Making",
        content: "Transform your organization's decision-making process with data-backed insights and predictive analytics.",
        icon: Filter,
        points: [
          "Custom KPI and metric development",
          "Predictive modeling and scenario planning",
          "Real-time dashboard implementation",
          "Executive reporting and insights delivery",
          "Data governance and quality assurance",
          "Performance tracking and optimization"
        ]
      }
    ],
    
    processSteps: [
      {
        title: "Discovery & Assessment",
        description: "Understand your business objectives, current data landscape, and intelligence needs",
        icon: Search,
        duration: "1-2 Weeks"
      },
      {
        title: "Data Collection & Integration",
        description: "Gather and integrate data from multiple sources including internal systems and market data",
        icon: Database,
        duration: "2-3 Weeks"
      },
      {
        title: "Analysis & Insight Generation",
        description: "Apply advanced analytics to uncover patterns, trends, and actionable insights",
        icon: BarChart,
        duration: "3-4 Weeks"
      },
      {
        title: "Implementation & Training",
        description: "Deploy intelligence solutions and train your team on ongoing usage",
        icon: TrendingUp,
        duration: "2 Weeks"
      }
    ],
    
    caseStudies: [
      {
        title: "Retail Market Expansion Strategy",
        industry: "Retail & E-commerce",
        description: "Helped a retail chain identify optimal locations and product mix using demographic and spending pattern analysis",
        result: "40% increase in new store success rate"
      },
      {
        title: "Competitive Benchmarking",
        industry: "Financial Services",
        description: "Provided comprehensive competitive intelligence for a fintech company entering new markets",
        result: "Reduced market entry risk by 60%"
      },
      {
        title: "Customer Segmentation",
        industry: "Healthcare",
        description: "Developed advanced customer segmentation models for a healthcare provider",
        result: "35% increase in campaign effectiveness"
      }
    ],
    
    testimonials: [
      {
        name: "Sarah Chen",
        position: "Chief Strategy Officer",
        company: "Global Retail Corp",
        quote: "The market intelligence provided was instrumental in our Asia-Pacific expansion. The insights were actionable and accurate, helping us avoid costly mistakes."
      },
      {
        name: "Raj Patel",
        position: "Head of Business Development",
        company: "FinTech Innovations",
        quote: "Their predictive analytics helped us identify market opportunities we had completely missed. The ROI was exceptional - 4x return within 6 months."
      }
    ],
    
    faqs: [
      {
        question: "How long does it take to implement a business intelligence solution?",
        answer: "Implementation typically takes 6-8 weeks, depending on complexity and data availability. We start delivering preliminary insights within the first 2 weeks."
      },
      {
        question: "What data sources do you work with?",
        answer: "We work with internal data (CRM, ERP, sales systems), market data providers, social media analytics, web analytics, government databases, and proprietary research data."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer monthly intelligence updates, dashboard maintenance, and quarterly strategy reviews to ensure your insights remain current and actionable."
      }
    ]
  };

  return <ServiceLayout data={serviceData} />;
};

export default BusinessMarketIntelligence;