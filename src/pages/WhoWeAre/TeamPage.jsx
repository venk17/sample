import React from 'react';
import { Linkedin, Mail, Github, Briefcase, Users, Globe, Award, Heart, Sparkles } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d5?w=400",
      bio: "Serial entrepreneur with 15+ years in digital transformation",
      linkedin: "https://linkedin.com",
      email: "sarah@company.com"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Former Google engineer specializing in AI and machine learning",
      linkedin: "https://linkedin.com",
      email: "michael@company.com"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      bio: "Award-winning designer with focus on user experience",
      linkedin: "https://linkedin.com",
      email: "emma@company.com"
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Built scalable systems for tech unicorns before joining our team",
      linkedin: "https://linkedin.com",
      email: "david@company.com"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Growth",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400",
      bio: "Expert in digital marketing and business development",
      linkedin: "https://linkedin.com",
      email: "lisa@company.com"
    },
    {
      name: "James Wilson",
      role: "Lead Data Scientist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      bio: "PhD in Computer Science with focus on predictive analytics",
      linkedin: "https://linkedin.com",
      email: "james@company.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Attractive Gradient */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-pulse">
              <Users className="w-5 h-5" />
              <span className="font-semibold">MEET OUR TEAM</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
                Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
              Meet the brilliant minds and passionate innovators driving our success
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/80 text-sm">Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-white/80 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-white/80 text-sm">Projects</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-white/80">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Leadership Intro */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold">LEADERSHIP TEAM</span>
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visionary <span className="text-blue-600">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our executive team brings together decades of pioneering experience across technology, 
            design, and business strategy, guiding our vision and driving relentless innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Role Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{member.role}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-500 mb-5">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{member.role}</span>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 hover:scale-110 transition-all duration-300 group/linkedin"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 group-hover/linkedin:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-3 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 hover:scale-110 transition-all duration-300 group/email"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 group-hover/email:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
              
              {/* Hover Effect Decoration */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Company Culture Section */}
        <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-12 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/60 backdrop-blur-sm rounded-full mb-8">
              <Heart className="w-5 h-5 text-pink-600" />
              <span className="font-bold text-gray-800">OUR CULTURE</span>
              <Heart className="w-5 h-5 text-purple-600" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              More Than Just <span className="text-indigo-600">Colleagues</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              We cultivate an environment where innovation thrives, collaboration flourishes, 
              and continuous learning is celebrated. Our diverse team is united by a shared 
              passion for creating exceptional digital experiences that make a difference.
            </p>
            
            {/* Culture Stats */}
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Users className="w-10 h-10" />,
                  number: "200+",
                  label: "Team Members",
                  gradient: "from-blue-500 to-cyan-500",
                  description: "Diverse talents from around the world"
                },
                {
                  icon: <Globe className="w-10 h-10" />,
                  number: "25+",
                  label: "Countries",
                  gradient: "from-purple-500 to-pink-500",
                  description: "Global perspective, local impact"
                },
                {
                  icon: <Award className="w-10 h-10" />,
                  number: "98%",
                  label: "Satisfaction",
                  gradient: "from-green-500 to-emerald-500",
                  description: "Client and team happiness"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r bg-gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-gray-600 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
            
            {/* Culture Values */}
            <div className="mt-16 pt-12 border-t border-gray-200/50">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Innovation First",
                    description: "We encourage bold ideas and experimentation"
                  },
                  {
                    title: "Collaborative Spirit",
                    description: "Great things happen when we work together"
                  },
                  {
                    title: "Growth Mindset",
                    description: "Always learning, always improving"
                  }
                ].map((value, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
                    <div className="text-lg font-bold text-gray-900 mb-3">{value.title}</div>
                    <div className="text-gray-600">{value.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .bg-gradient-text {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;