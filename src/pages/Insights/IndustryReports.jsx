import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, Download, FileText, BarChart, 
  Users, Filter, ChevronDown, Eye,
  Bookmark, Share2, ArrowRight, TrendingUp,
  DollarSign, Building, Globe, Tag,
  Clock, Star, ExternalLink
} from 'lucide-react';

const IndustryReportsPage = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortBy, setSortBy] = useState('newest');
  const [bookmarkedReports, setBookmarkedReports] = useState([]);

  const industryReports = [
    {
      id: 1,
      title: "2024 Digital Transformation Market Outlook",
      description: "Comprehensive analysis of digital transformation trends, market size, and growth opportunities across industries.",
      publisher: "Digital Insights Research",
      publishDate: "March 2024",
      pages: 48,
      downloads: "2.8k",
      sector: "Technology",
      reportType: "Market Research",
      year: "2024",
      format: "PDF",
      fileSize: "8.4 MB",
      premium: true,
      price: "$299",
      freePreview: true,
      trending: true,
      tags: ["Digital Transformation", "Market Analysis", "Technology", "Trends"],
      coverImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      previewUrl: "/reports/preview/digital-transformation-2024.pdf"
    },
    {
      id: 2,
      title: "Artificial Intelligence Adoption Index 2023",
      description: "In-depth study on AI adoption rates, implementation challenges, and ROI across enterprise organizations.",
      publisher: "AI Research Institute",
      publishDate: "February 2024",
      pages: 64,
      downloads: "3.5k",
      sector: "AI & Machine Learning",
      reportType: "Research Report",
      year: "2023",
      format: "PDF + Excel",
      fileSize: "12.2 MB",
      premium: false,
      freePreview: true,
      trending: true,
      tags: ["AI", "Machine Learning", "Adoption", "Enterprise"],
      coverImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      previewUrl: "/reports/preview/ai-adoption-2023.pdf"
    },
    {
      id: 3,
      title: "Global E-commerce Trends & Forecast 2024-2028",
      description: "Market analysis and growth projections for global e-commerce with regional breakdowns.",
      publisher: "MarketWatch Analytics",
      publishDate: "January 2024",
      pages: 72,
      downloads: "4.1k",
      sector: "E-commerce",
      reportType: "Market Forecast",
      year: "2024",
      format: "PDF",
      fileSize: "10.5 MB",
      premium: true,
      price: "$399",
      freePreview: true,
      trending: false,
      tags: ["E-commerce", "Retail", "Market Forecast", "Global"],
      coverImage: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg",
      previewUrl: "/reports/preview/ecommerce-trends-2024.pdf"
    },
    {
      id: 4,
      title: "FinTech Innovation Report Q4 2023",
      description: "Quarterly analysis of financial technology innovations, funding trends, and market disruptions.",
      publisher: "FinTech Insights",
      publishDate: "December 2023",
      pages: 56,
      downloads: "2.3k",
      sector: "Finance",
      reportType: "Quarterly Report",
      year: "2023",
      format: "PDF + Dashboard",
      fileSize: "15.7 MB",
      premium: false,
      freePreview: true,
      trending: true,
      tags: ["FinTech", "Finance", "Innovation", "Quarterly"],
      coverImage: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg",
      previewUrl: "/reports/preview/fintech-q4-2023.pdf"
    },
    {
      id: 5,
      title: "Sustainable Tech Investment Trends",
      description: "Analysis of green technology investments, ESG criteria, and sustainable business models.",
      publisher: "GreenTech Research",
      publishDate: "November 2023",
      pages: 52,
      downloads: "1.9k",
      sector: "Sustainability",
      reportType: "Research Report",
      year: "2023",
      format: "PDF",
      fileSize: "7.8 MB",
      premium: true,
      price: "$249",
      freePreview: true,
      trending: false,
      tags: ["Sustainability", "Green Tech", "ESG", "Investment"],
      coverImage: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg",
      previewUrl: "/reports/preview/sustainable-tech-2023.pdf"
    },
    {
      id: 6,
      title: "Healthcare Digital Transformation Index",
      description: "Comprehensive study on digital adoption in healthcare, telemedicine growth, and patient experience.",
      publisher: "HealthTech Analytics",
      publishDate: "October 2023",
      pages: 68,
      downloads: "3.2k",
      sector: "Healthcare",
      reportType: "Industry Index",
      year: "2023",
      format: "PDF + Data",
      fileSize: "11.3 MB",
      premium: false,
      freePreview: true,
      trending: true,
      tags: ["Healthcare", "Digital Health", "Telemedicine", "Patient Experience"],
      coverImage: "https://images.pexels.com/photos/7652052/pexels-photo-7652052.jpeg",
      previewUrl: "/reports/preview/healthcare-digital-2023.pdf"
    },
    {
      id: 7,
      title: "Cybersecurity Market Analysis 2023",
      description: "Detailed analysis of cybersecurity market trends, threat landscape, and spending patterns.",
      publisher: "Security Insights",
      publishDate: "September 2023",
      pages: 60,
      downloads: "2.7k",
      sector: "Cybersecurity",
      reportType: "Market Analysis",
      year: "2023",
      format: "PDF",
      fileSize: "9.1 MB",
      premium: true,
      price: "$349",
      freePreview: true,
      trending: false,
      tags: ["Cybersecurity", "Security", "Market Analysis", "Threats"],
      coverImage: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      previewUrl: "/reports/preview/cybersecurity-2023.pdf"
    },
    {
      id: 8,
      title: "Manufacturing 4.0 Technology Adoption",
      description: "Study on Industry 4.0 technology adoption, ROI metrics, and implementation best practices.",
      publisher: "Industrial Tech Research",
      publishDate: "August 2023",
      pages: 55,
      downloads: "2.1k",
      sector: "Manufacturing",
      reportType: "Research Report",
      year: "2023",
      format: "PDF + Case Studies",
      fileSize: "10.8 MB",
      premium: false,
      freePreview: true,
      trending: true,
      tags: ["Manufacturing", "Industry 4.0", "IoT", "Automation"],
      coverImage: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
      previewUrl: "/reports/preview/manufacturing-4-0-2023.pdf"
    },
    {
      id: 9,
      title: "Remote Work Productivity Analysis 2023",
      description: "Data-driven analysis of remote work productivity, collaboration tools, and workforce trends.",
      publisher: "Workplace Analytics",
      publishDate: "July 2023",
      pages: 48,
      downloads: "3.8k",
      sector: "Workplace",
      reportType: "Data Analysis",
      year: "2023",
      format: "PDF + Dataset",
      fileSize: "6.9 MB",
      premium: true,
      price: "$199",
      freePreview: true,
      trending: false,
      tags: ["Remote Work", "Productivity", "Workplace", "Collaboration"],
      coverImage: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
      previewUrl: "/reports/preview/remote-work-2023.pdf"
    }
  ];

  const sectors = ["All", "Technology", "AI & Machine Learning", "E-commerce", "Finance", "Sustainability", "Healthcare", "Cybersecurity", "Manufacturing", "Workplace"];
  const years = ["All", "2024", "2023", "2022", "2021"];
  const reportTypes = ["All", "Market Research", "Research Report", "Market Forecast", "Quarterly Report", "Industry Index", "Market Analysis", "Data Analysis"];

  const handleReportClick = (id) => {
    navigate(`/insights/reports/${id}`);
  };

  const handleDownload = (e, report) => {
    e.stopPropagation();
    if (report.premium) {
      alert(`This is a premium report. Please purchase for ${report.price} to download.`);
    } else {
      alert(`Downloading ${report.title}`);
      // In real app: window.location.href = report.downloadUrl;
    }
  };

  const handlePreview = (e, report) => {
    e.stopPropagation();
    alert(`Opening preview for ${report.title}`);
    // In real app: window.open(report.previewUrl, '_blank');
  };

  const handleBookmark = (e, id) => {
    e.stopPropagation();
    setBookmarkedReports(prev => 
      prev.includes(id) 
        ? prev.filter(reportId => reportId !== id)
        : [...prev, id]
    );
  };

  const handleSectorFilter = (sector) => {
    setSelectedSector(sector);
    setVisibleCount(6);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setVisibleCount(6);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setVisibleCount(6);
  };

  const filteredReports = industryReports.filter(report => {
    const sectorMatch = selectedSector === 'All' || report.sector === selectedSector;
    const yearMatch = selectedYear === 'All' || report.year === selectedYear;
    const typeMatch = selectedType === 'All' || report.reportType === selectedType;
    
    return sectorMatch && yearMatch && typeMatch;
  });

  const sortedReports = [...filteredReports].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.publishDate) - new Date(a.publishDate);
    } else if (sortBy === 'popular') {
      return parseInt(b.downloads) - parseInt(a.downloads);
    } else if (sortBy === 'pages') {
      return b.pages - a.pages;
    }
    return 0;
  });

  const visibleReports = sortedReports.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Industry Reports</h1>
            <p className="text-gray-600">
              Data-driven research and market analysis reports
            </p>
          </div>
          <div className="text-sm text-gray-500">
            {industryReports.length} reports available
          </div>
        </div>

        {/* Featured Report Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Featured Report</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quarterly Market Intelligence</h3>
              <p className="text-blue-100 mb-4">
                Get our latest comprehensive report with exclusive data and insights
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  4.8k downloads
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  68 pages
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  March 2024
                </span>
              </div>
            </div>
            <button
              onClick={() => handleReportClick(1)}
              className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 whitespace-nowrap"
            >
              View Report
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Sector Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Sector
            </label>
            <select 
              value={selectedSector}
              onChange={(e) => handleSectorFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Year
            </label>
            <select 
              value={selectedYear}
              onChange={(e) => handleYearFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 inline mr-2" />
              Report Type
            </label>
            <select 
              value={selectedType}
              onChange={(e) => handleTypeFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {reportTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="pages">Longest Reports</option>
            </select>
          </div>
          
          <div className="text-sm text-gray-600">
            Showing {visibleReports.length} of {filteredReports.length} reports
            {selectedSector !== 'All' && ` in "${selectedSector}"`}
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleReports.map((report) => (
          <div
            key={report.id}
            className="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Report Header */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={report.coverImage}
                alt={report.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Premium Badge */}
              {report.premium && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold">
                  Premium
                </div>
              )}
              
              {/* Trending Badge */}
              {report.trending && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 text-orange-500" />
                  <span className="text-xs font-medium">Trending</span>
                </div>
              )}

              {/* Bookmark Button */}
              <button 
                onClick={(e) => handleBookmark(e, report.id)}
                className="absolute top-4 right-12 p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white"
              >
                <Bookmark className={`w-4 h-4 ${bookmarkedReports.includes(report.id) ? 'text-yellow-600 fill-yellow-600' : 'text-gray-600'}`} />
              </button>
            </div>

            {/* Report Content */}
            <div className="p-5">
              {/* Report Type & Date */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    report.sector === 'Technology' ? 'bg-blue-100 text-blue-700' :
                    report.sector === 'AI & Machine Learning' ? 'bg-purple-100 text-purple-700' :
                    report.sector === 'E-commerce' ? 'bg-green-100 text-green-700' :
                    report.sector === 'Finance' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {report.sector}
                  </span>
                  <span className="text-xs text-gray-500">{report.reportType}</span>
                </div>
                <span className="text-sm text-gray-500">{report.publishDate}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {report.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {report.description}
              </p>

              {/* Report Details */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span>{report.pages} pages</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Download className="w-4 h-4 text-gray-400" />
                  <span>{report.downloads}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>{report.publisher}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{report.year}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {report.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {report.tags.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    +{report.tags.length - 2}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                  <button
                    onClick={(e) => handlePreview(e, report)}
                    className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50"
                  >
                    Preview
                  </button>
                  <button
                    onClick={(e) => handleDownload(e, report)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                      report.premium
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {report.premium ? `Buy ${report.price}` : 'Download'}
                  </button>
                </div>
                
                <button
                  onClick={() => handleReportClick(report.id)}
                  className="flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / No Results */}
      {visibleReports.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No reports found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your filters or check back soon for new reports.</p>
          <button
            onClick={() => {
              setSelectedSector('All');
              setSelectedYear('All');
              setSelectedType('All');
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            Clear All Filters
          </button>
        </div>
      ) : visibleReports.length < filteredReports.length ? (
        <div className="text-center mt-12">
          <button 
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Load More Reports ({filteredReports.length - visibleReports.length} remaining)
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="text-center mt-12 text-gray-500">
          You've reached the end! 🎉
        </div>
      )}

      {/* Statistics */}
      <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Report Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">{industryReports.length}</div>
            <div className="text-gray-600">Total Reports</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">25.6k</div>
            <div className="text-gray-600">Total Downloads</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
            <div className="text-gray-600">Industries Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">560+</div>
            <div className="text-gray-600">Total Pages</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryReportsPage;