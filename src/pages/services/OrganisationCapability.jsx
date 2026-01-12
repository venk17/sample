import React from 'react';
import ServiceLayout from '../../components/Layout/ServiceLayout';
import { 
  Users, Target, TrendingUp, BarChart, Award, BookOpen,
  Shield, Zap, Globe, Cpu, Heart, MessageSquare,
  Search, Building
} from 'lucide-react';

const OrganisationCapability = () => {
  const serviceData = {
    title: "Organisation & Capability Building",
    subtitle: "Build high-performing teams and organizational capabilities that drive sustainable growth",
    description: "We help organizations develop the people, processes, and structures needed to execute strategy effectively, foster innovation, and adapt to changing market conditions through comprehensive capability building and organizational development.",
    icon: Users,
    iconColor: 'red',
    
    stats: [
      { value: "45%", label: "Productivity Gain", description: "Average increase in team productivity" },
      { value: "60%", label: "Employee Retention", description: "Improvement in retention rates" },
      { value: "3.5x", label: "ROI", description: "Return on capability investments" },
      { value: "85%", label: "Strategy Execution", description: "Improvement in strategic execution" }
    ],
    
    features: [
      {
        title: "Leadership Development",
        description: "Develop leaders who can drive transformation and inspire teams",
        icon: Target
      },
      {
        title: "Talent Management",
        description: "Design systems to attract, develop, and retain top talent",
        icon: Users
      },
      {
        title: "Organizational Design",
        description: "Structure organizations for agility and efficiency",
        icon: BarChart
      },
      {
        title: "Change Management",
        description: "Guide organizations through transformation successfully",
        icon: TrendingUp
      },
      {
        title: "Learning & Development",
        description: "Create continuous learning cultures and development programs",
        icon: BookOpen
      },
      {
        title: "Performance Management",
        description: "Design systems to drive high performance and accountability",
        icon: Award
      }
    ],
    
    sections: [
      {
        title: "Strategic Capability Building",
        content: "Develop the specific capabilities your organization needs to execute its strategy successfully.",
        icon: Target,
        points: [
          "Capability gap analysis and assessment",
          "Skill development and training programs",
          "Succession planning and leadership pipeline",
          "Cross-functional team development",
          "Innovation capability building",
          "Digital literacy and technology adoption"
        ]
      },
      {
        title: "Organizational Development",
        content: "Design and implement structures, processes, and cultures that enable high performance.",
        icon: BarChart,
        points: [
          "Organizational structure design",
          "Process optimization and workflow design",
          "Culture assessment and development",
          "Communication and collaboration systems",
          "Performance measurement frameworks",
          "Employee engagement strategies"
        ]
      }
    ],
    
    processSteps: [
      {
        title: "Assessment & Diagnosis",
        description: "Evaluate current organizational capabilities and identify gaps",
        icon: Search,
        duration: "2-3 Weeks"
      },
      {
        title: "Strategy Development",
        description: "Create capability building roadmap and implementation plan",
        icon: Target,
        duration: "3 Weeks"
      },
      {
        title: "Program Design",
        description: "Develop training programs, processes, and systems",
        icon: BookOpen,
        duration: "4 Weeks"
      },
      {
        title: "Implementation & Coaching",
        description: "Roll out programs and provide ongoing support and coaching",
        icon: Users,
        duration: "3-6 Months"
      }
    ],
    
    caseStudies: [
      {
        title: "Digital Transformation Enablement",
        industry: "Financial Services",
        description: "Built digital capabilities across 5,000-person organization",
        result: "75% faster digital product delivery"
      },
      {
        title: "Leadership Development",
        industry: "Manufacturing",
        description: "Created leadership pipeline for global manufacturing company",
        result: "95% internal promotion rate"
      }
    ],
    
    testimonials: [
      {
        name: "Robert Johnson",
        position: "CHRO",
        company: "Global Financial Corp",
        quote: "Their capability building program transformed our organization. We went from struggling with digital transformation to leading in innovation."
      },
      {
        name: "Sophie Martin",
        position: "CEO",
        company: "ManufactureTech",
        quote: "The leadership development program created a pipeline of future-ready leaders. Our succession planning is now a competitive advantage."
      }
    ],
    
    faqs: [
      {
        question: "How do you measure the impact of capability building?",
        answer: "We measure impact through productivity metrics, employee engagement scores, retention rates, skill assessments, and business performance indicators tied to strategic objectives."
      },
      {
        question: "Can you work with remote or hybrid teams?",
        answer: "Absolutely. We design programs that work effectively for distributed teams, using digital tools and platforms to enable learning and collaboration across locations."
      }
    ]
  };

  return <ServiceLayout data={serviceData} />;
};

export default OrganisationCapability;