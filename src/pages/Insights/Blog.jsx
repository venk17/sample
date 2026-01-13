import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, User, Clock, ArrowRight, 
  Eye, Bookmark, Share2, TrendingUp,
  ChevronDown, Filter, Heart, MessageSquare
} from 'lucide-react';

const BlogPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [visibleCount, setVisibleCount] = useState(6);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  const articles = [
    {
      id: 1,
      title: "The Future of AI in Customer Experience",
      excerpt: "How artificial intelligence is transforming customer interactions and creating personalized experiences at scale.",
      author: "Sarah Johnson",
      date: "Mar 15, 2024",
      readTime: "8 min",
      category: "AI & Automation",
      views: "2.4k",
      likes: 124,
      comments: 28,
      trending: true,
      tags: ["AI", "Customer Experience", "Automation"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    },
    {
      id: 2,
      title: "Digital Transformation: Beyond Technology",
      excerpt: "Why successful digital transformation requires cultural change and strategic alignment, not just new tools.",
      author: "Michael Chen",
      date: "Mar 10, 2024",
      readTime: "12 min",
      category: "Digital Transformation",
      views: "3.1k",
      likes: 89,
      comments: 42,
      trending: true,
      tags: ["Digital", "Strategy", "Innovation"],
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg"
    },
    {
      id: 3,
      title: "Building Brands in the Age of Social Media",
      excerpt: "Strategies for creating authentic brand connections through social media and influencer partnerships.",
      author: "Priya Sharma",
      date: "Mar 5, 2024",
      readTime: "10 min",
      category: "Brand Strategy",
      views: "1.9k",
      likes: 156,
      comments: 31,
      trending: false,
      tags: ["Branding", "Social Media", "Marketing"],
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
    },
    {
      id: 4,
      title: "Data-Driven Decision Making in Marketing",
      excerpt: "How to leverage analytics and customer data to optimize marketing campaigns and drive ROI.",
      author: "David Wilson",
      date: "Feb 28, 2024",
      readTime: "15 min",
      category: "Growth Strategy",
      views: "4.2k",
      likes: 210,
      comments: 56,
      trending: true,
      tags: ["Analytics", "Marketing", "Data"],
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
    },
    {
      id: 5,
      title: "The Rise of Low-Code/No-Code Platforms",
      excerpt: "How citizen developers are changing the software development landscape and what it means for businesses.",
      author: "Emma Rodriguez",
      date: "Feb 22, 2024",
      readTime: "9 min",
      category: "Technology Trends",
      views: "2.7k",
      likes: 178,
      comments: 39,
      trending: false,
      tags: ["Development", "Technology", "Platforms"],
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
    },
    {
      id: 6,
      title: "Creating Exceptional Digital Experiences",
      excerpt: "Principles for designing digital products that delight users and drive business outcomes.",
      author: "Alex Turner",
      date: "Feb 18, 2024",
      readTime: "11 min",
      category: "Customer Experience",
      views: "3.5k",
      likes: 142,
      comments: 47,
      trending: true,
      tags: ["UX", "Design", "Customer"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    }
  ];

  const categories = ["All", "AI & Automation", "Digital Transformation", "Growth Strategy", "Customer Experience", "Technology Trends", "Brand Strategy", "Leadership", "Innovation"];

  const handleArticleClick = (id) => {
    navigate(`/insights/blog/${id}`);
  };

  const handleBookmark = (e, id) => {
    e.stopPropagation();
    setBookmarkedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(articleId => articleId !== id)
        : [...prev, id]
    );
  };

  const handleShare = (e, article) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: `/insights/blog/${article.id}`,
      });
    } else {
      alert(`Share article: ${article.title}`);
    }
  };

  const handleLike = (e, id) => {
    e.stopPropagation();
    // In real app, you would update the likes count via API
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'popular') {
      return parseInt(b.views) - parseInt(a.views);
    } else if (sortBy === 'trending') {
      return (b.likes + b.comments) - (a.likes + a.comments);
    }
    return 0;
  });

  const visibleArticles = sortedArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Articles</h1>
        <p className="text-gray-600">
          Latest insights, trends, and expert opinions in digital transformation
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
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
            <option value="trending">Trending</option>
          </select>
        </div>
      </div>

      {/* Articles Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {visibleArticles.length} of {filteredArticles.length} articles
          {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => handleArticleClick(article.id)}
            className="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {article.trending && (
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 text-orange-500" />
                  <span className="text-xs font-medium">Trending</span>
                </div>
              )}
              <div className="absolute top-3 right-3 flex gap-2">
                <button 
                  onClick={(e) => handleBookmark(e, article.id)}
                  className={`p-2 ${bookmarkedArticles.includes(article.id) ? 'bg-yellow-100' : 'bg-white/90'} backdrop-blur-sm rounded-lg hover:bg-white`}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'text-yellow-600 fill-yellow-600' : 'text-gray-600'}`} />
                </button>
                <button 
                  onClick={(e) => handleShare(e, article)}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white"
                >
                  <Share2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {article.category}
                </span>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {article.views}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {article.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <button 
                  onClick={(e) => handleLike(e, article.id)}
                  className="flex items-center gap-1 hover:text-red-600"
                >
                  <Heart className="w-4 h-4" />
                  {article.likes}
                </button>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {article.comments}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} read
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{article.author}</div>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / No Results */}
      {visibleArticles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600 mb-6">Try selecting a different category or check back soon for new content.</p>
          <button
            onClick={() => handleCategoryFilter('All')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            Show All Articles
          </button>
        </div>
      ) : visibleArticles.length < filteredArticles.length ? (
        <div className="text-center mt-12">
          <button 
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Load More Articles ({filteredArticles.length - visibleArticles.length} remaining)
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

export default BlogPage;