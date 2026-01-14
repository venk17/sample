import React, { useState } from 'react';
import { 
  Briefcase, MapPin, DollarSign, Clock, CheckCircle, Send, 
  Zap, Heart, Award, Globe, Users, BookOpen, Home, 
  TrendingUp, Shield, Sparkles, Rocket, Coffee, GraduationCap,
  ChevronRight, ArrowRight, Star, Target, Crown, Lightbulb
} from 'lucide-react';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      description: "Build cutting-edge web applications using React, TypeScript, and modern frontend technologies to create exceptional user experiences.",
      requirements: ["5+ years React experience", "TypeScript expertise", "Experience with Next.js", "Strong UX/UI sensibilities", "Test-driven development"],
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "GraphQL"],
      highlight: true
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      description: "Design beautiful, intuitive interfaces for web and mobile applications that delight users and drive business results.",
      requirements: ["3+ years design experience", "Figma proficiency", "Portfolio required", "User research skills", "Design systems"],
      tags: ["Figma", "UI/UX", "Prototyping", "Research", "Wireframing"],
      highlight: false
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      description: "Manage cloud infrastructure and CI/CD pipelines for enterprise applications at scale with security and reliability in mind.",
      requirements: ["AWS/GCP/Azure experience", "Kubernetes expertise", "CI/CD tools", "Infrastructure as Code", "Monitoring & Observability"],
      tags: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      highlight: true
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140,000 - $180,000",
      description: "Lead product strategy and development for our flagship platform, driving innovation and business growth.",
      requirements: ["5+ years PM experience", "Technical background", "Agile/Scrum", "Data-driven decision making", "Stakeholder management"],
      tags: ["Product Strategy", "Roadmapping", "User Research", "Agile", "Analytics"],
      highlight: false
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "AI & Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      description: "Extract insights from complex data sets and build predictive models to drive business intelligence.",
      requirements: ["Python/R expertise", "ML algorithms", "SQL proficiency", "Statistical analysis", "Data visualization"],
      tags: ["Python", "Machine Learning", "SQL", "TensorFlow", "Analytics"],
      highlight: false
    },
    {
      id: 6,
      title: "Growth Marketing Lead",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      description: "Develop and execute growth strategies to acquire and retain customers through data-driven marketing campaigns.",
      requirements: ["Digital marketing experience", "Analytics tools", "AB testing", "Content strategy", "SEO/SEM"],
      tags: ["Growth", "Analytics", "Digital Marketing", "AB Testing", "SEO"],
      highlight: true
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We\'ll be in touch soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      resume: null
    });
  };

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Above-market salary with performance bonuses and equity options",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and schedule autonomy",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, vision, and mental health coverage",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear promotion paths, mentorship programs, and leadership training",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learning Stipend",
      description: "$5,000 annual budget for courses, conferences, and certifications",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Retreats",
      description: "Annual company retreats in exciting international destinations",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const stats = [
    { value: "4.8/5", label: "Employee Satisfaction", icon: <Star className="w-5 h-5" /> },
    { value: "30+", label: "Nationalities", icon: <Globe className="w-5 h-5" /> },
    { value: "15%", label: "Annual Growth", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "< 2%", label: "Attrition Rate", icon: <Heart className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full -translate-x-64 -translate-y-64"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full translate-x-64 translate-y-64"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20 animate-pulse">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold tracking-wider">CAREERS AT DIGITAL DYNAMICS</span>
              <Sparkles className="w-5 h-5" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
                Shape the Future
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-12 font-light">
              Join a team of innovators building tomorrow's digital solutions today
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-6">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="flex items-center justify-center gap-2 text-white/80">
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('openings-section').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-white/20 flex items-center gap-3"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('apply-section').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                Apply Now
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/70 tracking-wider">EXPLORE</span>
            <div className="w-px h-10 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Why Join Us */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <Crown className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-bold">WHY CHOOSE US</span>
              <Crown className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perks & <span className="text-blue-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our people because they're our greatest asset. Here's what makes working with us exceptional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${benefit.color} group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div id="openings-section" className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-bold">CURRENT OPENINGS</span>
              <Target className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career and make an impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
                  job.highlight ? 'border-blue-200' : 'border-gray-100'
                } ${job.highlight ? 'ring-2 ring-blue-100' : ''}`}
              >
                {job.highlight && (
                  <div className="absolute -top-3 left-8">
                    <div className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full">
                      🔥 Hot Opportunity
                    </div>
                  </div>
                )}
                
                {/* Job Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  
                  {/* Job Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Job Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-bold">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
                
                {/* Job Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {job.description}
                </p>
                
                {/* Requirements */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Requirements
                  </h4>
                  <ul className="space-y-3">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Apply Button */}
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, position: job.title }));
                    document.getElementById('apply-section').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  Apply for this Position
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply-section" className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 rounded-full translate-y-24 -translate-x-24"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Lightbulb className="w-5 h-5 text-white" />
                <span className="font-bold text-white">READY TO APPLY?</span>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Your <span className="text-blue-300">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Submit your application and join our team of innovators.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Position *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Senior Frontend Developer"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Resume/CV *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Upload your resume in PDF, DOC, or DOCX format (Max 5MB)
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us why you're passionate about joining our team and what makes you the perfect candidate..."
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <Send className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Submit Your Application
              </button>
              
              <p className="text-center text-gray-400 text-sm">
                By submitting this application, you agree to our privacy policy. We typically respond within 48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;