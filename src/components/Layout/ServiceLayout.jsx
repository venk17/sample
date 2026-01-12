import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle, BarChart, TrendingUp, 
  Users, Clock, Target, Zap, Shield, Globe,
  ChevronRight, Play, MessageSquare, Download,
  Award, Briefcase, PieChart, Cpu, Building, Rocket,
  ShoppingCart, Search, Star
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ServiceLayout = ({ 
  data,
  children 
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // State for which FAQ is open

  const {
    title,
    subtitle,
    description,
    icon: IconComponent,
    iconColor = 'blue',
    stats = [],
    sections = [],
    features = [],
    processSteps = [],
    caseStudies = [],
    testimonials = [],
    faqs = [],
    ctaText = "Ready to Transform Your Business?"
  } = data;

  const colorVariants = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      light: 'bg-blue-100',
      dark: 'bg-blue-600',
      gradient: 'from-blue-500 to-blue-700'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-200',
      light: 'bg-purple-100',
      dark: 'bg-purple-600',
      gradient: 'from-purple-500 to-purple-700'
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      light: 'bg-green-100',
      dark: 'bg-green-600',
      gradient: 'from-green-500 to-green-700'
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-700',
      border: 'border-orange-200',
      light: 'bg-orange-100',
      dark: 'bg-orange-600',
      gradient: 'from-orange-500 to-orange-700'
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      light: 'bg-red-100',
      dark: 'bg-red-600',
      gradient: 'from-red-500 to-red-700'
    },
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-700',
      border: 'border-indigo-200',
      light: 'bg-indigo-100',
      dark: 'bg-indigo-600',
      gradient: 'from-indigo-500 to-indigo-700'
    }
  };

  const colors = colorVariants[iconColor] || colorVariants.blue;

  // All Services Data for Navigation
  const allServices = [
    { name: "Business & Market Intelligence", path: "/services/business-market-intelligence", icon: BarChart },
    { name: "Brand Strategy & Premium Positioning", path: "/services/brand-strategy", icon: Target },
    { name: "Digital Experience & Technology", path: "/services/digital-experience", icon: Globe },
    { name: "Growth, Marketing & Sales Systems", path: "/services/growth-marketing", icon: TrendingUp },
    { name: "Organisation & Capability Building", path: "/services/organisation-capability", icon: Users },
    { name: "AI & Automation Enablement", path: "/services/ai-automation", icon: Cpu }
  ];

  // Function to toggle FAQ open/close
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index); // Close if already open, else open this one
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-10`} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className={`p-3 rounded-full ${colors.bg}`}>
                  {IconComponent && <IconComponent className={`w-8 h-8 ${colors.text}`} />}
                </div>
                <span className={`text-sm font-semibold ${colors.text} uppercase tracking-wider`}>
                  Our Services
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className={`inline-flex items-center justify-center gap-2 ${colors.dark} text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                >
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => {
                    const processElement = document.getElementById('process');
                    if (processElement) {
                      processElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 transition-all"
                >
                  <Play className="w-5 h-5" />
                  See How It Works
                </button>
              </div>
            </div>
            
            {/* Right - Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="mt-4 text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200 mb-12">
          {['overview', 'features', 'process', 'results', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === tab 
                  ? `border-b-2 ${colors.text} ${colors.border}`
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Introduction */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is {title}?</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="text-lg leading-relaxed">
                    {description}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">
                    We combine cutting-edge technology with strategic thinking to deliver 
                    measurable results that drive sustainable growth and competitive advantage.
                  </p>
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-xl ${colors.light} p-8`}>
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-white mb-6">
                    {IconComponent && <IconComponent className={`w-12 h-12 ${colors.text}`} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our {title}?</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-1`} />
                      <span className="text-gray-700">Industry-leading expertise and methodology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-1`} />
                      <span className="text-gray-700">Proven track record with measurable results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-1`} />
                      <span className="text-gray-700">Customized solutions for your unique needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Features */}
            {features.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => {
                    const FeatureIcon = feature.icon || Zap;
                    return (
                      <div 
                        key={index}
                        className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
                          <FeatureIcon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && sections.length > 0 && (
          <div className="space-y-12">
            {sections.map((section, index) => {
              const SectionIcon = section.icon || Briefcase;
              return (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-full ${colors.bg}`}>
                      <SectionIcon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-8">{section.content}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.points?.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-1`} />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div id="process">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden lg:block" />
              
              <div className="space-y-12 lg:space-y-0">
                {processSteps.map((step, index) => {
                  const StepIcon = step.icon || Clock;
                  return (
                    <div 
                      key={index}
                      className={`relative lg:flex items-center ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 w-8 h-8 rounded-full bg-white border-4 border-blue-500 z-10 hidden lg:block" />
                      
                      {/* Content */}
                      <div className={`lg:w-1/2 ${
                        index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'
                      }`}>
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded ${colors.bg}`}>
                              <StepIcon className={`w-5 h-5 ${colors.text}`} />
                            </div>
                            <div className={`text-sm font-semibold ${colors.text}`}>Step {index + 1}</div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                          <div className="mt-4 text-sm text-gray-500">
                            Duration: <span className="font-medium">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Empty space for opposite side */}
                      <div className="lg:w-1/2 hidden lg:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="space-y-12">
            {/* Case Studies */}
            {caseStudies.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Case Studies</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudies.map((study, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className={`h-2 ${colors.dark}`} />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Building className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-500">{study.industry}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                        <p className="text-gray-600 mb-4">{study.description}</p>
                        <div className="flex items-center justify-between">
                          <div className={`text-2xl font-bold ${colors.text}`}>
                            {study.result}
                          </div>
                          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                            Read Case Study →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {testimonials.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                          <Users className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                
                return (
                  <div 
                    key={index}
                    className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen ? 'shadow-sm' : ''
                    }`}
                  >
                    <button
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                      <ChevronRight 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          isOpen ? 'transform rotate-90' : ''
                        }`}
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Children Content (if any) */}
        {children && (
          <div className="mt-16">
            {children}
          </div>
        )}

        {/* ALL SERVICES NAVIGATION */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Our Other Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allServices
              .filter(service => service.name !== title)
              .map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                      <service.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {service.name}
                      </h3>
                      <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-500">
                        Learn more →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className={`mt-24 rounded-3xl overflow-hidden bg-gradient-to-r ${colors.gradient}`}>
          <div className="px-8 py-12 text-center text-white">
            <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-4">{ctaText}</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {title} can drive measurable growth and transformation for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Schedule a Free Consultation
              </button>
              <button
                onClick={() => navigate('/services')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                View All Services
              </button>
            </div>
            <p className="mt-8 text-sm opacity-75">
              Or call us at <span className="font-bold">+91 44 1234 5678</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;