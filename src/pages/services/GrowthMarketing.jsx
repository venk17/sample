import React from 'react';
import ServiceLayout from '../../components/Layout/ServiceLayout';
import { 
  TrendingUp, Target, Users, BarChart, Mail, MessageSquare,
  Filter, Zap, DollarSign, Globe, PieChart, Cpu,
  Search, Building
} from 'lucide-react';

const GrowthMarketing = () => {
  const serviceData = {
    title: "Growth, Marketing & Sales Systems",
    subtitle: "Build scalable revenue engines that drive sustainable business growth",
    description: "We design and implement integrated marketing and sales systems that attract, convert, and retain customers at scale, using data-driven strategies, automation, and optimization to maximize revenue growth and customer lifetime value.",
    icon: TrendingUp,
    iconColor: 'orange',
    
    stats: [
      { value: "300%", label: "ROI", description: "Average return on marketing investment" },
      { value: "50%", label: "Cost Reduction", description: "In customer acquisition costs" },
      { value: "3x", label: "Lead Conversion", description: "Increase in lead-to-customer rate" },
      { value: "40%", label: "Revenue Growth", description: "Annual revenue increase" }
    ],
    
    features: [
      {
        title: "Growth Strategy",
        description: "Develop data-driven growth plans and experimentation frameworks",
        icon: Target
      },
      {
        title: "Marketing Automation",
        description: "Implement systems for lead nurturing and customer engagement",
        icon: Zap
      },
      {
        title: "Sales Enablement",
        description: "Equip sales teams with tools, content, and processes to close more deals",
        icon: DollarSign
      },
      {
        title: "Performance Marketing",
        description: "Optimize paid channels for maximum ROI",
        icon: BarChart
      },
      {
        title: "CRM Implementation",
        description: "Design and implement customer relationship management systems",
        icon: Users
      },
      {
        title: "Analytics & Attribution",
        description: "Track performance and optimize marketing spend",
        icon: Filter
      }
    ],
    
    sections: [
      {
        title: "Integrated Marketing Strategy",
        content: "Create cohesive marketing strategies that align sales and marketing efforts for maximum impact.",
        icon: Target,
        points: [
          "Marketing funnel design and optimization",
          "Channel strategy and media planning",
          "Content strategy and creation",
          "SEO and organic growth strategies",
          "Social media and community building",
          "Email marketing and automation"
        ]
      },
      {
        title: "Sales System Development",
        content: "Build scalable sales processes and enablement systems that drive consistent revenue growth.",
        icon: DollarSign,
        points: [
          "Sales process design and optimization",
          "CRM selection and implementation",
          "Sales team training and enablement",
          "Proposal and pricing strategy",
          "Sales analytics and forecasting",
          "Customer retention programs"
        ]
      }
    ],
    
    processSteps: [
      {
        title: "Audit & Analysis",
        description: "Assess current marketing and sales performance, identify opportunities",
        icon: Search,
        duration: "2 Weeks"
      },
      {
        title: "Strategy Development",
        description: "Create integrated growth strategy and implementation plan",
        icon: Target,
        duration: "3 Weeks"
      },
      {
        title: "System Implementation",
        description: "Implement marketing automation, CRM, and sales enablement tools",
        icon: Zap,
        duration: "4-6 Weeks"
      },
      {
        title: "Optimization & Scaling",
        description: "Monitor performance, optimize campaigns, and scale successful strategies",
        icon: TrendingUp,
        duration: "Ongoing"
      }
    ],
    
    caseStudies: [
      {
        title: "SaaS Company Growth",
        industry: "Technology",
        description: "Implemented integrated marketing and sales system for B2B SaaS company",
        result: "Increased MRR by 250% in 12 months"
      },
      {
        title: "E-commerce Scaling",
        industry: "Retail",
        description: "Developed omnichannel marketing strategy for DTC brand",
        result: "3x customer acquisition at 40% lower cost"
      }
    ],
    
    testimonials: [
      {
        name: "Alex Thompson",
        position: "CEO",
        company: "SaaSStartup Inc",
        quote: "Their growth marketing system transformed our business. We went from struggling to scale to consistent 20% month-over-month growth."
      },
      {
        name: "Maria Garcia",
        position: "VP of Marketing",
        company: "StyleDirect",
        quote: "The integrated approach to marketing and sales alignment was game-changing. Our sales cycle shortened by 40%."
      }
    ],
    
    faqs: [
      {
        question: "How quickly can we expect to see results?",
        answer: "Initial improvements typically appear within 30-60 days, with full impact realized within 3-6 months as systems mature and optimize."
      },
      {
        question: "Do you work with companies of all sizes?",
        answer: "Yes, we work with startups to enterprise companies, tailoring our approach to each company's stage, budget, and growth objectives."
      }
    ]
  };

  return <ServiceLayout data={serviceData} />;
};

export default GrowthMarketing;