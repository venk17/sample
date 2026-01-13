import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, User, Clock, ArrowLeft, 
  Eye, Bookmark, Share2, Heart, MessageSquare,
  Facebook, Twitter, Linkedin, Copy, Check,
  Tag, TrendingUp, Mail, 
  ChevronRight, ArrowRight
} from 'lucide-react';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [article, setArticle] = useState(null);

  // Mock data for articles
  const allArticles = [
    {
      id: 1,
      title: "The Future of AI in Customer Experience",
      excerpt: "How artificial intelligence is transforming customer interactions and creating personalized experiences at scale.",
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Introduction</h2>
        <p class="text-gray-700 mb-6">Artificial Intelligence is no longer just a buzzword—it's fundamentally transforming how businesses interact with customers. In this comprehensive guide, we explore the latest advancements and practical applications of AI in customer experience.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Evolution of AI in Customer Service</h2>
        <p class="text-gray-700 mb-6">From simple chatbots to sophisticated predictive analytics, AI has come a long way. Early implementations focused on automation, but today's solutions emphasize personalization and emotional intelligence.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p class="text-lg font-semibold text-gray-900">"AI-powered customer experience isn't about replacing humans—it's about augmenting human capabilities to deliver exceptional service at scale."</p>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Benefits</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li class="text-gray-700"><strong>24/7 Availability:</strong> AI-powered systems provide round-the-clock customer support without fatigue</li>
          <li class="text-gray-700"><strong>Personalization:</strong> Tailored experiences based on customer behavior, preferences, and history</li>
          <li class="text-gray-700"><strong>Predictive Analytics:</strong> Anticipating customer needs before they even arise</li>
          <li class="text-gray-700"><strong>Cost Efficiency:</strong> Reducing operational costs while significantly improving service quality</li>
        </ul>
      `,
      author: "Sarah Johnson",
      authorRole: "AI Solutions Director",
      date: "Mar 15, 2024",
      readTime: "8 min",
      category: "AI & Automation",
      views: "2.4k",
      likes: 124,
      comments: 28,
      trending: true,
      tags: ["AI", "Customer Experience", "Automation"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      authorImage: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
    },
    {
      id: 2,
      title: "Digital Transformation: Beyond Technology",
      excerpt: "Why successful digital transformation requires cultural change and strategic alignment, not just new tools.",
      content: `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Beyond Technology</h2><p class="text-gray-700 mb-6">Digital transformation goes far beyond implementing new technologies...</p>`,
      author: "Michael Chen",
      authorRole: "Digital Transformation Lead",
      date: "Mar 10, 2024",
      readTime: "12 min",
      category: "Digital Transformation",
      views: "3.1k",
      likes: 89,
      comments: 42,
      trending: true,
      tags: ["Digital", "Strategy", "Innovation"],
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      id: 3,
      title: "Building Brands in the Age of Social Media",
      excerpt: "Strategies for creating authentic brand connections through social media and influencer partnerships.",
      content: `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Social Media Branding</h2><p class="text-gray-700 mb-6">In today's digital age, social media is crucial for brand building...</p>`,
      author: "Priya Sharma",
      authorRole: "Brand Strategy Director",
      date: "Mar 5, 2024",
      readTime: "10 min",
      category: "Brand Strategy",
      views: "1.9k",
      likes: 156,
      comments: 31,
      trending: false,
      tags: ["Branding", "Social Media", "Marketing"],
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      authorImage: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
    }
  ];

  useEffect(() => {
    // Find the article by ID
    const foundArticle = allArticles.find(article => article.id === parseInt(id));
    if (foundArticle) {
      setArticle(foundArticle);
      setLikesCount(foundArticle.likes);
    } else {
      // If article not found, navigate back to blog list
      navigate('/insights/blog');
    }
  }, [id, navigate]);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article?.title || '');
    
    let shareUrl = '';
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${title}&body=Check out this article: ${url}`;
        window.location.href = shareUrl;
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (!article) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/insights/blog')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Articles
        </button>
      </div>

      {/* Article Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {article.category}
          </span>
          {article.trending && (
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Trending
            </span>
          )}
          <div className="flex items-center gap-6 text-sm text-gray-500 ml-auto">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime} read
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {article.views}
            </span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <img 
              src={article.authorImage} 
              alt={article.author}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-gray-900">{article.author}</div>
              <div className="text-sm text-gray-600">{article.authorRole}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                isLiked ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-700'
              } hover:bg-gray-200`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-600' : ''}`} />
              <span className="font-medium">{likesCount}</span>
            </button>

            <button
              onClick={handleBookmark}
              className={`p-3 rounded-lg ${
                isBookmarked ? 'bg-yellow-50 text-yellow-600' : 'bg-gray-100 text-gray-700'
              } hover:bg-gray-200`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-yellow-600' : ''}`} />
            </button>

            <div className="relative">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                {isCopied ? (
                  <>
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="mb-8">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>

          {/* Tags */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-gray-500" />
              <h3 className="font-semibold text-gray-900">Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8]"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 px-4 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-[#365899]"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#00669c]"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
              <button
                onClick={() => handleShare('email')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Related Articles */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 text-lg mb-4">Related Articles</h4>
            <div className="space-y-4">
              {allArticles
                .filter(a => a.category === article.category && a.id !== article.id)
                .slice(0, 3)
                .map((related) => (
                  <Link
                    key={related.id}
                    to={`/insights/blog/${related.id}`}
                    className="block group"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <h5 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 text-sm">
                          {related.title}
                        </h5>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <span>{related.date}</span>
                          <span>•</span>
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 text-lg mb-4">Continue Reading</h4>
            <div className="space-y-4">
              <Link
                to={`/insights/blog/${Math.max(1, parseInt(id) - 1)}`}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 ${
                  parseInt(id) <= 1 ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="text-sm text-gray-500">Previous</div>
                  <div className="font-medium text-gray-900 text-sm">
                    {allArticles.find(a => a.id === parseInt(id) - 1)?.title || 'No previous article'}
                  </div>
                </div>
                <ArrowLeft className="w-4 h-4 text-gray-400" />
              </Link>
              
              <Link
                to={`/insights/blog/${parseInt(id) + 1}`}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 ${
                  parseInt(id) >= allArticles.length ? 'opacity-50 pointer-events-none' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="text-sm text-gray-500">Next</div>
                  <div className="font-medium text-gray-900 text-sm">
                    {allArticles.find(a => a.id === parseInt(id) + 1)?.title || 'No next article'}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-center">
          <Link
            to="/insights/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Blog Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;