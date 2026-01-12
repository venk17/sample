import React from 'react';
import  ServiceLayout  from '../../components/Layout/ServiceLayout';
import { 
  Cpu, Zap, Brain, Database, LineChart, Target,
  Users, Shield, Globe, TrendingUp, BarChart, Filter
} from 'lucide-react';

const AIAutomation = () => {
  const serviceData = {
    title: "AI & Automation Enablement",
    subtitle: "Leverage artificial intelligence and automation to drive efficiency, innovation, and competitive advantage",
    description: "We help organizations identify, implement, and scale AI and automation solutions that transform operations, enhance customer experiences, and create new business opportunities through cutting-edge technology and strategic implementation.",
    icon: Cpu,
    iconColor: 'indigo',
    
    stats: [
      { value: "70%", label: "Efficiency Gain", description: "Average process efficiency improvement" },
      { value: "50%", label: "Cost Reduction", description: "In operational costs" },
      { value: "4x", label: "ROI", description: "Average return on AI investments" },
      { value: "30%", label: "Revenue Growth", description: "From AI-enabled products/services" }
    ],
    
    features: [
      {
        title: "Process Automation",
        description: "Automate repetitive tasks and workflows for efficiency gains",
        icon: <Zap className="w-6 h-6 text-indigo-600" />
      },
      {
        title: "AI Strategy",
        description: "Develop AI roadmaps aligned with business objectives",
        icon: <Target className="w-6 h-6 text-indigo-600" />
      },
      {
        title: "Machine Learning",
        description: "Implement predictive models and intelligent systems",
        icon: <Brain className="w-6 h-6 text-indigo-600" />
      },
      {
        title: "Intelligent Chatbots",
        description: "Create AI-powered customer service solutions",
        icon: <MessageSquare className="w-6 h-6 text-indigo-600" />
      },
      {
        title: "Data Analytics",
        description: "Leverage AI for advanced analytics and insights",
        icon: <BarChart className="w-6 h-6 text-indigo-600" />
      },
      {
        title: "AI Integration",
        description: "Integrate AI capabilities into existing systems",
        icon: <Database className="w-6 h-6 text-indigo-600" />
      }
    ],
    
    sections: [
      {
        title: "AI Strategy & Implementation",
        content: "Develop and implement AI strategies that deliver measurable business value and competitive advantage.",
        icon: Target,
        points: [
          "AI opportunity assessment and prioritization",
          "Use case identification and business case development",
          "Technology selection and architecture design",
          "Data strategy and infrastructure",
          "Model development and training",
          "Implementation roadmap and change management"
        ]
      },
      {
        title: "Intelligent Automation",
        content: "Automate business processes using AI and robotic process automation to drive efficiency and accuracy.",
        icon: Zap,
        points: [
          "Process discovery and automation potential assessment",
          "RPA implementation and integration",
          "Intelligent document processing",
          "Workflow automation design",
          "Exception handling and escalation",
          "Performance monitoring and optimization"
        ]
      }
    ],
    
    processSteps: [
      {
        title: "Assessment & Opportunity Mapping",
        description: "Identify high-impact AI and automation opportunities",
        icon: Search,
        duration: "2-3 Weeks"
      },
      {
        title: "Proof of Concept",
        description: "Develop and test AI solutions with real data",
        icon: Brain,
        duration: "4-6 Weeks"
      },
      {
        title: "Solution Development",
        description: "Build and train AI models, implement automation",
        icon: Cpu,
        duration: "6-10 Weeks"
      },
      {
        title: "Scaling & Integration",
        description: "Deploy at scale and integrate with business processes",
        icon: TrendingUp,
        duration: "4-8 Weeks"
      }
    ],
    
    caseStudies: [
      {
        title: "Customer Service Automation",
        industry: "Telecommunications",
        description: "Implemented AI-powered chatbots and automation for customer service",
        result: "65% reduction in support costs"
      },
      {
        title: "Manufacturing Optimization",
        industry: "Manufacturing",
        description: "Deployed AI for predictive maintenance and quality control",
        result: "40% reduction in downtime"
      }
    ],
    
    testimonials: [
      {
        name: "James Wilson",
        position: "CIO",
        company: "ConnectTel",
        quote: "The AI automation implementation transformed our customer service. We handle 3x more queries with higher satisfaction scores."
      },
      {
        name: "Fatima Al-Mansoori",
        position: "Operations Director",
        company: "Precision Manufacturing",
        quote: "Predictive maintenance AI has saved us millions in downtime and maintenance costs. The ROI was achieved in just 4 months."
      }
    ],
    
    faqs: [
      {
        question: "How do you ensure AI solutions are ethical and responsible?",
        answer: "We follow responsible AI principles including fairness, transparency, privacy, and accountability. We conduct bias testing, provide explainability, and ensure compliance with regulations."
      },
      {
        question: "Do we need to have advanced technical capabilities to implement AI?",
        answer: "Not necessarily. We provide end-to-end support including strategy, implementation, and training. We can work with your existing team or provide additional resources as needed."
      }
    ]
  };

  return <ServiceLayout data={serviceData} />;
};

export default AIAutomation;