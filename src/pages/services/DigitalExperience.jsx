import React from 'react';
import ServiceLayout from '../../components/Layout/ServiceLayout';
import { 
  Globe, Smartphone, Layout, Code, Zap, Users,
  Shield, Cloud, Cpu, TrendingUp, Eye, Palette,
  Search, Rocket, ShoppingCart, Building
} from 'lucide-react';

const DigitalExperience = () => {
  const serviceData = {
    title: "Digital Experience & Technology",
    subtitle: "Create seamless, engaging digital experiences that delight customers and drive business growth",
    description: "We design and develop cutting-edge digital solutions that transform customer interactions, streamline operations, and create competitive advantage through innovative technology implementation and user-centered design.",
    icon: Globe,
    iconColor: 'green',
    
    stats: [
      { value: "65%", label: "Engagement Increase", description: "Average improvement in user engagement" },
      { value: "40%", label: "Conversion Lift", description: "Increase in conversion rates" },
      { value: "50%", label: "Faster Development", description: "Reduced time-to-market" },
      { value: "99.9%", label: "Uptime", description: "Platform reliability" }
    ],
    
    features: [
      {
        title: "UX/UI Design",
        description: "Create intuitive, beautiful interfaces that users love",
        icon: Layout
      },
      {
        title: "Web & Mobile Development",
        description: "Build responsive, high-performance applications",
        icon: Smartphone
      },
      {
        title: "Digital Transformation",
        description: "Modernize legacy systems and processes",
        icon: Cloud
      },
      {
        title: "E-commerce Solutions",
        description: "Create seamless online shopping experiences",
        icon: ShoppingCart
      },
      {
        title: "API Integration",
        description: "Connect systems and data for seamless operations",
        icon: Code
      },
      {
        title: "Performance Optimization",
        description: "Ensure fast, reliable digital experiences",
        icon: Zap
      }
    ],
    
    sections: [
      {
        title: "User-Centered Design",
        content: "We create digital experiences that prioritize user needs while achieving business objectives.",
        icon: Users,
        points: [
          "User research and persona development",
          "Information architecture and user flows",
          "Wireframing and prototyping",
          "Usability testing and optimization",
          "Accessibility compliance (WCAG)",
          "Design system development"
        ]
      },
      {
        title: "Technology Implementation",
        content: "Leverage modern technology stacks to build scalable, secure digital solutions.",
        icon: Cpu,
        points: [
          "Modern frontend frameworks (React, Vue, Angular)",
          "Backend development (Node.js, Python, .NET)",
          "Cloud infrastructure (AWS, Azure, GCP)",
          "Mobile app development (iOS, Android)",
          "Headless CMS implementation",
          "DevOps and CI/CD pipelines"
        ]
      }
    ],
    
    processSteps: [
      {
        title: "Discovery & Strategy",
        description: "Define project goals, user needs, and technical requirements",
        icon: Search,
        duration: "2-3 Weeks"
      },
      {
        title: "Design & Prototyping",
        description: "Create user interfaces, experiences, and interactive prototypes",
        icon: Layout,
        duration: "3-4 Weeks"
      },
      {
        title: "Development & Testing",
        description: "Build, integrate, and rigorously test the digital solution",
        icon: Code,
        duration: "6-8 Weeks"
      },
      {
        title: "Launch & Optimization",
        description: "Deploy solution and implement ongoing improvements",
        icon: Rocket,
        duration: "Ongoing"
      }
    ],
    
    caseStudies: [
      {
        title: "Omnichannel Retail Platform",
        industry: "Retail",
        description: "Developed unified commerce platform integrating online, mobile, and in-store experiences",
        result: "35% increase in cross-channel sales"
      },
      {
        title: "Healthcare Portal Modernization",
        industry: "Healthcare",
        description: "Redesigned patient portal improving accessibility and engagement",
        result: "60% reduction in support calls"
      }
    ],
    
    testimonials: [
      {
        name: "David Kim",
        position: "CTO",
        company: "Urban Retail Group",
        quote: "Their digital transformation expertise helped us create a seamless omnichannel experience. Sales increased dramatically across all channels."
      },
      {
        name: "Lisa Wang",
        position: "Product Director",
        company: "HealthFirst Systems",
        quote: "The patient portal redesign was exceptional. User satisfaction scores went from 65% to 94% in just 3 months."
      }
    ],
    
    faqs: [
      {
        question: "What technologies do you specialize in?",
        answer: "We specialize in React, Next.js, Vue, Node.js, Python, AWS, and mobile development (React Native, Flutter). We choose the best stack for each project."
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes, we offer maintenance packages including updates, security patches, performance monitoring, and feature enhancements."
      }
    ]
  };

  return <ServiceLayout data={serviceData} />;
};

export default DigitalExperience;