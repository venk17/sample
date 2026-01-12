import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, Target, Globe, TrendingUp, Users, Cpu,
  ArrowRight, CheckCircle, Shield, Zap, Clock
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Business & Market Intelligence",
      description: "Transform raw data into actionable insights that drive strategic decisions and competitive advantage",
      path: "/services/business-market-intelligence",
      icon: BarChart,
      color: "blue",
      features: ["Market Analysis", "Competitive Intelligence", "Predictive Analytics", "Data Visualization"]
    },
    {
      title: "Brand Strategy & Premium Positioning",
      description: "Elevate your brand to command premium value and build lasting customer loyalty",
      path: "/services/brand-strategy",
      icon: Target,
      color: "purple",
      features: ["Brand Positioning", "Identity Development", "Premium Strategy", "Customer Experience"]
    },
    {
      title: "Digital Experience & Technology",
      description: "Create seamless, engaging digital experiences that delight customers and drive business growth",
      path: "/services/digital-experience",
      icon: Globe,
      color: "green",
      features: ["UX/UI Design", "Web Development", "Mobile Apps", "Digital Transformation"]
    },
    {
      title: "Growth, Marketing & Sales Systems",
      description: "Build scalable revenue engines that drive sustainable business growth",
      path: "/services/growth-marketing",
      icon: TrendingUp,
      color: "orange",
      features: ["Growth Strategy", "Marketing Automation", "Sales Enablement", "Performance Marketing"]
    },
    {
      title: "Organisation & Capability Building",
      description: "Build high-performing teams and organizational capabilities that drive sustainable growth",
      path: "/services/organisation-capability",
      icon: Users,
      color: "red",
      features: ["Leadership Development", "Talent Management", "Organizational Design", "Change Management"]
    },
    {
      title: "AI & Automation Enablement",
      description: "Leverage artificial intelligence and automation to drive efficiency, innovation, and competitive advantage",
      path: "/services/ai-automation",
      icon: Cpu,
      color: "indigo",
      features: ["Process Automation", "AI Strategy", "Machine Learning", "Intelligent Systems"]
    }
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    green: "bg-green-50 text-green-700 border-green-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    red: "bg-red-50 text-red-700 border-red-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital transformation solutions designed to drive growth, 
            enhance customer experience, and build sustainable competitive advantage.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className={`group bg-white rounded-2xl border p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${colorClasses[service.color].split(' ')[2]}`}
            >
              <div className={`inline-flex p-4 rounded-xl ${colorClasses[service.color].split(' ')[0]} mb-6`}>
                <service.icon className={`w-8 h-8 ${colorClasses[service.color].split(' ')[1]}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center text-blue-600 font-semibold">
                Explore Service <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mx-4 md:mx-8 lg:mx-auto max-w-7xl p-8 md:p-12 text-white text-center my-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Where to Start?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation and we'll help identify the best solutions for your business needs.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition"
        >
          Book a Free Consultation
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;