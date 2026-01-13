import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { 
  FileText, BookOpen, BarChart, ChevronRight, 
  Calendar, User, Tag, ArrowRight, Clock,
  Search, Filter, Share2, Bookmark,
  TrendingUp, Eye, MessageSquare,
  Play, Pause, Volume2, VolumeX, ExternalLink
} from 'lucide-react';

const InsightsPage = ({ 
  title, 
  subtitle, 
  description,
  videoSrc = null,
  imageSrc = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  children 
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const insightTypes = [
    {
      name: "Blog Articles",
      path: "/insights/blog",
      icon: FileText,
      description: "Thought leadership and industry insights",
      count: "45+ Articles",
      color: "blue",
      heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-background-33955-large.mp4",
      heroImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      name: "Case Studies",
      path: "/insights/cases",
      icon: BookOpen,
      description: "Real-world success stories",
      count: "28+ Cases",
      color: "green",
      heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-data-transfer-connection-background-33954-large.mp4",
      heroImage: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
    },
    {
      name: "Industry Reports",
      path: "/insights/reports",
      icon: BarChart,
      description: "Data-driven market analysis",
      count: "15+ Reports",
      color: "purple",
      heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-background-33963-large.mp4",
      heroImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
    }
  ];

  const categories = [
    { name: "Digital Transformation", count: 24, path: "/insights/category/digital-transformation" },
    { name: "AI & Automation", count: 18, path: "/insights/category/ai-automation" },
    { name: "Growth Strategy", count: 22, path: "/insights/category/growth-strategy" },
    { name: "Customer Experience", count: 16, path: "/insights/category/customer-experience" },
    { name: "Brand Strategy", count: 12, path: "/insights/category/brand-strategy" },
    { name: "Technology Trends", count: 20, path: "/insights/category/technology-trends" }
  ];

  const trendingInsights = [
    {
      id: "1",
      title: "AI in 2024: What's Next?",
      type: "Article",
      date: "Today",
      path: "/insights/blog/1",
      views: "2.4k"
    },
    {
      id: "2",
      title: "Retail Transformation Success",
      type: "Case Study",
      date: "2 days ago",
      path: "/insights/cases/1",
      views: "1.8k"
    },
    {
      id: "3",
      title: "Digital Marketing Trends 2024",
      type: "Report",
      date: "1 week ago",
      path: "/insights/reports/1",
      views: "3.1k"
    }
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  const colorVariants = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", gradient: "from-green-500 to-green-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600" }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  const handleBrowseAll = () => {
    navigate('/insights/blog');
  };

  const handleCategoryClick = (path) => {
    alert(`Navigating to category: ${path}`);
  };

  const handleTrendingClick = (path) => {
    navigate(path);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video/Image Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Dynamic Background */}
        {videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={imageSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            <img 
              src={imageSrc} 
              alt="Hero background" 
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <div className="absolute inset-0">
            <img
              src={imageSrc}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

        {/* Video Controls */}
        {videoSrc && (
          <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
            <button
              onClick={togglePlayPause}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <FileText className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">DD Insights</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-3xl">
                {subtitle}
              </p>
              
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Search Insights
                </button>
                <button
                  type="button"
                  onClick={handleBrowseAll}
                  className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  Browse All
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content Types Cards - Moved up to be visible immediately */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Explore Insights by Type
            </h2>
            <p className="text-gray-600">
              Discover valuable content in different formats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {insightTypes.map((type) => {
              const Icon = type.icon;
              const colors = colorVariants[type.color];
              const active = isActive(type.path);
              
              return (
                <Link
                  key={type.name}
                  to={type.path}
                  className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-1 ${
                    active 
                      ? `${colors.bg} border-2 ${colors.border} shadow-lg`
                      : 'bg-white border border-gray-200 hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${colors.bg}`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {type.count}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${
                    active ? colors.text : 'text-gray-900'
                  }`}>
                    {type.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform">
                    <span className={active ? colors.text : 'text-gray-700'}>
                      Explore {type.name}
                    </span>
                    <ArrowRight className={`w-5 h-5 ml-2 ${
                      active ? colors.text : 'text-gray-400'
                    }`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Browse by Category
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => handleCategoryClick(category.path)}
                      className="flex items-center justify-between w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-blue-600">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded group-hover:bg-blue-50 group-hover:text-blue-600">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Insights */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Trending Now
              </h3>
              <div className="space-y-4">
                {trendingInsights.map((insight) => (
                  <button
                    key={insight.id}
                    onClick={() => handleTrendingClick(insight.path)}
                    className="block w-full text-left pb-4 border-b border-gray-100 last:border-0 last:pb-0 hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        insight.type === 'Article' ? 'bg-blue-100 text-blue-700' :
                        insight.type === 'Case Study' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {insight.type}
                      </span>
                      <span className="text-xs text-gray-500">{insight.date}</span>
                    </div>
                    <h4 className="font-medium text-gray-900 hover:text-blue-600 mb-2">
                      {insight.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Eye className="w-3 h-3" />
                      {insight.views} views
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Weekly Insights
                </h3>
                <p className="text-blue-100 text-sm">
                  Get the latest delivered to your inbox
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs text-blue-200 text-center mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4">DD Insights</div>
              <p className="text-gray-400 text-sm mb-6">
                Thought leadership, case studies, and industry analysis.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.open('https://twitter.com', '_blank')}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => alert('Share this page')}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Share"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/insights/blog" className="text-gray-400 hover:text-white transition-colors">Blog Articles</Link></li>
                <li><Link to="/insights/cases" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/insights/reports" className="text-gray-400 hover:text-white transition-colors">Industry Reports</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Back to Home</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-3">
                {categories.slice(0, 4).map((category) => (
                  <li key={category.name}>
                    <button 
                      onClick={() => handleCategoryClick(category.path)}
                      className="text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <span>insights@yourbrand.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Monday - Friday, 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              © 2024 YourBrand Digital. All rights reserved. |{' '}
              <button onClick={() => alert('Privacy Policy')} className="hover:text-white transition-colors">
                Privacy Policy
              </button>{' '}
              |{' '}
              <button onClick={() => alert('Terms of Service')} className="hover:text-white transition-colors">
                Terms of Service
              </button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsightsPage;