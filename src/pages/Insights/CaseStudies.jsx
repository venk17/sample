import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, Users, TrendingUp, Target, 
  DollarSign, Building, ArrowRight, Filter,
  ChevronDown, Eye, MessageSquare, Bookmark,
  Share2, BarChart, Clock
} from 'lucide-react';

const CaseStudiesPage = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortBy, setSortBy] = useState('newest');

  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation Success in Retail",
      company: "RetailCorp",
      industry: "Retail & E-commerce",
      challenge: "Outdated inventory management system leading to 30% stock discrepancies",
      solution: "Implemented AI-powered inventory management and omnichannel integration",
      results: [
        { label: "Inventory Accuracy", value: "+95%" },
        { label: "Sales Growth", value: "+45%" },
        { label: "Customer Satisfaction", value: "+78%" },
        { label: "Cost Reduction", value: "-35%" }
      ],
      duration: "6 Months",
      date: "Mar 10, 2024",
      views: "3.2k",
      comments: 42,
      tags: ["Digital Transformation", "AI", "Retail"],
      image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg",
      companyLogo: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
    },
    {
      id: 2,
      title: "AI-Powered Customer Service Optimization",
      company: "TechSolutions Inc",
      industry: "Technology",
      challenge: "High customer service wait times and low resolution rates",
      solution: "Deployed AI chatbots with human escalation and sentiment analysis",
      results: [
        { label: "Response Time", value: "-85%" },
        { label: "Resolution Rate", value: "+92%" },
        { label: "Customer Retention", value: "+40%" },
        { label: "Operational Cost", value: "-60%" }
      ],
      duration: "4 Months",
      date: "Feb 25, 2024",
      views: "2.8k",
      comments: 35,
      tags: ["AI", "Customer Service", "Automation"],
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      companyLogo: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
    },
    {
      id: 3,
      title: "Healthcare System Modernization",
      company: "HealthFirst Medical",
      industry: "Healthcare",
      challenge: "Manual processes causing 40% administrative overhead",
      solution: "Cloud-based patient management and AI-driven diagnostics",
      results: [
        { label: "Efficiency Gain", value: "+65%" },
        { label: "Patient Throughput", value: "+55%" },
        { label: "Accuracy Rate", value: "+90%" },
        { label: "Cost Savings", value: "-40%" }
      ],
      duration: "8 Months",
      date: "Feb 15, 2024",
      views: "4.1k",
      comments: 56,
      tags: ["Healthcare", "Cloud", "Digital Transformation"],
      image: "https://images.pexels.com/photos/7652052/pexels-photo-7652052.jpeg",
      companyLogo: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
    },
    {
      id: 4,
      title: "Financial Services Automation",
      company: "FinSecure Bank",
      industry: "Finance",
      challenge: "Manual loan processing taking 7+ days per application",
      solution: "Automated loan processing with AI credit scoring",
      results: [
        { label: "Processing Time", value: "-90%" },
        { label: "Approval Accuracy", value: "+85%" },
        { label: "Customer Satisfaction", value: "+75%" },
        { label: "Fraud Detection", value: "+95%" }
      ],
      duration: "5 Months",
      date: "Feb 5, 2024",
      views: "3.5k",
      comments: 48,
      tags: ["Finance", "Automation", "AI"],
      image: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg",
      companyLogo: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg"
    },
    {
      id: 5,
      title: "Manufacturing 4.0 Implementation",
      company: "AutoManufacture Co",
      industry: "Manufacturing",
      challenge: "Production inefficiencies causing 25% material waste",
      solution: "IoT sensors and predictive maintenance system",
      results: [
        { label: "Productivity", value: "+50%" },
        { label: "Waste Reduction", value: "-70%" },
        { label: "Equipment Uptime", value: "+85%" },
        { label: "Quality Control", value: "+95%" }
      ],
      duration: "7 Months",
      date: "Jan 28, 2024",
      views: "2.9k",
      comments: 31,
      tags: ["Manufacturing", "IoT", "Industry 4.0"],
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
      companyLogo: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    },
    {
      id: 6,
      title: "Education Technology Integration",
      company: "EduTech Solutions",
      industry: "Education",
      challenge: "Low student engagement and outdated teaching methods",
      solution: "Interactive learning platform with AI personalization",
      results: [
        { label: "Student Engagement", value: "+80%" },
        { label: "Learning Outcomes", value: "+60%" },
        { label: "Teacher Efficiency", value: "+70%" },
        { label: "Parent Satisfaction", value: "+85%" }
      ],
      duration: "6 Months",
      date: "Jan 20, 2024",
      views: "2.3k",
      comments: 29,
      tags: ["Education", "EdTech", "AI"],
      image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
      companyLogo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
    }
  ];

  const industries = ["All", "Retail & E-commerce", "Technology", "Healthcare", "Finance", "Manufacturing", "Education"];
  const durations = ["All", "1-3 Months", "4-6 Months", "7-9 Months", "10+ Months"];

  const handleCaseStudyClick = (id) => {
    navigate(`/insights/cases/${id}`);
  };

  const handleIndustryFilter = (industry) => {
    setSelectedIndustry(industry);
    setVisibleCount(6);
  };

  const handleDurationFilter = (duration) => {
    setSelectedDuration(duration);
    setVisibleCount(6);
  };

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'All' || study.industry === selectedIndustry;
    
    let durationMatch = true;
    if (selectedDuration !== 'All') {
      const durationMonths = parseInt(study.duration);
      if (selectedDuration === '1-3 Months') durationMatch = durationMonths <= 3;
      else if (selectedDuration === '4-6 Months') durationMatch = durationMonths >= 4 && durationMonths <= 6;
      else if (selectedDuration === '7-9 Months') durationMatch = durationMonths >= 7 && durationMonths <= 9;
      else if (selectedDuration === '10+ Months') durationMatch = durationMonths >= 10;
    }
    
    return industryMatch && durationMatch;
  });

  const sortedCaseStudies = [...filteredCaseStudies].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'popular') {
      return b.views - a.views;
    } else if (sortBy === 'results') {
      const aTotal = a.results.reduce((sum, r) => sum + parseInt(r.value), 0);
      const bTotal = b.results.reduce((sum, r) => sum + parseInt(r.value), 0);
      return bTotal - aTotal;
    }
    return 0;
  });

  const visibleCaseStudies = sortedCaseStudies.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Case Studies</h1>
        <p className="text-gray-600">
          Real-world success stories showcasing measurable business impact
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700">Industry:</span>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => handleIndustryFilter(industry)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedIndustry === industry
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700">Duration:</span>
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => handleDurationFilter(duration)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedDuration === duration
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
            <option value="results">Best Results</option>
          </select>
        </div>
      </div>

      {/* Case Studies Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {visibleCaseStudies.length} of {filteredCaseStudies.length} case studies
          {selectedIndustry !== 'All' && ` in "${selectedIndustry}"`}
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-6">
        {visibleCaseStudies.map((study) => (
          <div
            key={study.id}
            onClick={() => handleCaseStudyClick(study.id)}
            className="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3 relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <Building className="w-3 h-3 text-blue-600" />
                    <span className="text-xs font-medium">{study.industry}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <img src={study.companyLogo} alt={study.company} className="w-6 h-6 rounded" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{study.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Clock className="w-3 h-3" />
                      <span>{study.duration}</span>
                    </div>
                    <span className="text-sm text-gray-500">{study.date}</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-red-600">?</span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900">Challenge</h4>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{study.challenge}</p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">✓</span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900">Solution</h4>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    Measurable Results
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {study.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {study.comments}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / No Results */}
      {visibleCaseStudies.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
          <p className="text-gray-600 mb-6">Try selecting different filters or check back soon for new case studies.</p>
          <button
            onClick={() => {
              setSelectedIndustry('All');
              setSelectedDuration('All');
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            Clear All Filters
          </button>
        </div>
      ) : visibleCaseStudies.length < filteredCaseStudies.length ? (
        <div className="text-center mt-12">
          <button 
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Load More Case Studies ({filteredCaseStudies.length - visibleCaseStudies.length} remaining)
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="text-center mt-12 text-gray-500">
          You've reached the end! 🎉
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;