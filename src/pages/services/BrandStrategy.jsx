import React from 'react';
import ServiceLayout from '../../components/Layout/ServiceLayout';
import { 
  Target, Award, Heart, Star, Eye, Palette,
  TrendingUp, Users, Globe, MessageSquare, Crown,
  Search, Building
} from 'lucide-react';

const BrandStrategy = () => {
  const serviceData = {
    title: "Brand Strategy & Premium Positioning",
    subtitle: "Elevate your brand to command premium value and build lasting customer loyalty",
    description: "We craft compelling brand narratives and strategic positioning that differentiates you in competitive markets, builds emotional connections with customers, and drives premium pricing power through authentic storytelling and consistent brand experiences.",
    icon: Target,
    iconColor: 'purple',
    
    stats: [
      { value: "70%", label: "Brand Recall", description: "Average increase in customer recognition" },
      { value: "3.2x", label: "Price Premium", description: "Average price increase achieved" },
      { value: "45%", label: "Customer Loyalty", description: "Increase in repeat business" },
      { value: "8-12 Weeks", label: "Strategy Development", description: "Complete brand transformation" }
    ],
    
    features: [
      {
        title: "Brand Positioning",
        description: "Define your unique market position and value proposition",
        icon: Target
      },
      {
        title: "Brand Identity",
        description: "Develop cohesive visual and verbal identity systems",
        icon: Palette
      },
      {
        title: "Brand Architecture",
        description: "Structure your brand portfolio for maximum impact",
        icon: Crown
      },
      {
        title: "Brand Voice & Messaging",
        description: "Create compelling narratives and communication frameworks",
        icon: MessageSquare
      },
      {
        title: "Customer Experience Design",
        description: "Design seamless brand experiences across all touchpoints",
        icon: Heart
      },
      {
        title: "Brand Equity Measurement",
        description: "Track and optimize brand performance metrics",
        icon: TrendingUp
      }
    ],
    
    sections: [
      {
        title: "Strategic Brand Development",
        content: "We develop comprehensive brand strategies that align with your business objectives and resonate with your target audience.",
        icon: Target,
        points: [
          "Market positioning and differentiation strategy",
          "Target audience profiling and segmentation",
          "Brand promise and value proposition development",
          "Competitive brand landscape analysis",
          "Brand personality and archetype definition",
          "Brand story and narrative creation"
        ]
      },
      {
        title: "Premium Positioning & Pricing",
        content: "Establish your brand as a premium choice in the market with appropriate pricing strategies.",
        icon: Award,
        points: [
          "Premium positioning strategy development",
          "Pricing strategy and tier optimization",
          "Value communication framework",
          "Luxury and premium market insights",
          "Competitive pricing analysis",
          "ROI measurement for brand investments"
        ]
      }
    ],
    
    processSteps: [
      {
        title: "Brand Audit & Research",
        description: "Comprehensive analysis of current brand equity and market position",
        icon: Search,
        duration: "2-3 Weeks"
      },
      {
        title: "Strategy Development",
        description: "Create brand positioning, architecture, and communication strategies",
        icon: Target,
        duration: "3-4 Weeks"
      },
      {
        title: "Identity Creation",
        description: "Develop visual identity, messaging, and brand guidelines",
        icon: Palette,
        duration: "3 Weeks"
      },
      {
        title: "Implementation Planning",
        description: "Create rollout strategy and implementation roadmap",
        icon: TrendingUp,
        duration: "2 Weeks"
      }
    ],
    
    caseStudies: [
      {
        title: "Luxury Lifestyle Brand Launch",
        industry: "Luxury Retail",
        description: "Developed and launched a premium lifestyle brand targeting high-net-worth individuals",
        result: "Achieved 5x price premium over competitors"
      },
      {
        title: "Tech Brand Repositioning",
        industry: "Technology",
        description: "Repositioned a B2B tech company from commodity provider to premium partner",
        result: "Increased deal size by 300%"
      }
    ],
    
    testimonials: [
      {
        name: "Michael Rodriguez",
        position: "Brand Director",
        company: "Luxe Living Group",
        quote: "Their brand strategy transformed our positioning. We went from being another furniture brand to a luxury lifestyle authority."
      },
      {
        name: "Priya Sharma",
        position: "CMO",
        company: "TechSolutions Inc",
        quote: "The premium positioning strategy helped us command higher prices while increasing customer loyalty. Exceptional work."
      }
    ],
    
    faqs: [
      {
        question: "How do you measure the success of a brand strategy?",
        answer: "We measure success through brand equity metrics (awareness, consideration, preference), pricing power, customer loyalty scores, and business KPIs like revenue and market share."
      },
      {
        question: "Can you work with established brands needing refresh?",
        answer: "Absolutely. We specialize in both new brand creation and established brand revitalization, helping legacy brands stay relevant in changing markets."
      }
    ]
  };

  return <ServiceLayout data={serviceData} />;
};

export default BrandStrategy;