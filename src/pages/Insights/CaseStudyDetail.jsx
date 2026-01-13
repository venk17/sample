import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, Users, TrendingUp, Target, 
  DollarSign, Building, ArrowLeft, Clock,
  Eye, MessageSquare, Share2, Copy, Check,
  BarChart, ArrowRight, ChevronRight, Tag,
  Facebook, Twitter, Linkedin, Mail, CheckCircle,
  Users as UsersIcon, PieChart, Award, Zap
} from 'lucide-react';

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  // Mock data for case studies
  const allCaseStudies = [
    {
      id: 1,
      title: "Digital Transformation Success in Retail",
      company: "RetailCorp",
      industry: "Retail & E-commerce",
      companySize: "Enterprise (10,000+ employees)",
      location: "Global",
      timeline: "January 2023 - June 2023",
      challenge: `
        <h3 class="text-lg font-semibold text-gray-900 mb-3">The Situation</h3>
        <p class="text-gray-700 mb-4">RetailCorp, a global retail chain with over 500 stores worldwide, was facing significant challenges with their legacy inventory management system. The outdated system was causing:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-gray-700">30% stock discrepancies across locations</li>
          <li class="text-gray-700">Average 2-day delay in inventory updates</li>
          <li class="text-gray-700">15% loss due to overstocking and stockouts</li>
          <li class="text-gray-700">Poor integration between online and offline channels</li>
        </ul>
      `,
      solution: `
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Our Approach</h3>
        <p class="text-gray-700 mb-4">We implemented a comprehensive digital transformation strategy focusing on three key areas:</p>
        <ol class="list-decimal pl-6 mb-4 space-y-3">
          <li class="text-gray-700">
            <strong>AI-Powered Inventory Management:</strong> Deployed machine learning algorithms to predict demand and optimize stock levels
          </li>
          <li class="text-gray-700">
            <strong>Omnichannel Integration:</strong> Created a unified platform connecting physical stores with e-commerce operations
          </li>
          <li class="text-gray-700">
            <strong>Real-time Analytics Dashboard:</strong> Developed custom dashboards for data-driven decision making
          </li>
          <li class="text-gray-700">
            <strong>Staff Training Program:</strong> Comprehensive training to ensure smooth adoption of new systems
          </li>
        </ol>
      `,
      implementation: `
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Implementation Process</h3>
        <div class="bg-gray-50 p-6 rounded-xl mb-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600 mb-2">Phase 1</div>
              <div class="text-sm font-medium text-gray-900">Assessment & Planning</div>
              <div class="text-xs text-gray-600">Weeks 1-4</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600 mb-2">Phase 2</div>
              <div class="text-sm font-medium text-gray-900">Pilot & Testing</div>
              <div class="text-xs text-gray-600">Weeks 5-12</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600 mb-2">Phase 3</div>
              <div class="text-sm font-medium text-gray-900">Full Rollout</div>
              <div class="text-xs text-gray-600">Weeks 13-24</div>
            </div>
          </div>
        </div>
      `,
      results: [
        { label: "Inventory Accuracy", value: "+95%", icon: CheckCircle, color: "green" },
        { label: "Sales Growth", value: "+45%", icon: TrendingUp, color: "blue" },
        { label: "Customer Satisfaction", value: "+78%", icon: UsersIcon, color: "purple" },
        { label: "Operational Cost", value: "-35%", icon: DollarSign, color: "red" },
        { label: "Stock Turnover", value: "+60%", icon: PieChart, color: "orange" },
        { label: "Order Fulfillment", value: "+85%", icon: Zap, color: "teal" }
      ],
      keyLearnings: `
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Key Learnings</h3>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 class="font-medium text-gray-900">Cultural Change is Critical</h4>
              <p class="text-gray-600 text-sm">Successful digital transformation requires significant cultural adaptation and buy-in from all stakeholders.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 class="font-medium text-gray-900">Data Quality Matters</h4>
              <p class="text-gray-600 text-sm">The accuracy of AI predictions depends heavily on the quality of historical data.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 class="font-medium text-gray-900">Start Small, Scale Fast</h4>
              <p class="text-gray-600 text-sm">Pilot programs in select locations allowed for quick iteration before full-scale implementation.</p>
            </div>
          </div>
        </div>
      `,
      duration: "6 Months",
      date: "Mar 10, 2024",
      views: "3.2k",
      comments: 42,
      tags: ["Digital Transformation", "AI", "Retail", "Inventory Management", "Omnichannel"],
      image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg",
      companyLogo: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
      testimonial: {
        text: "The digital transformation led by this team was a game-changer for our business. The results speak for themselves - we've seen unprecedented growth and efficiency improvements.",
        author: "Jane Smith",
        role: "CEO, RetailCorp",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
      }
    },
    {
      id: 2,
      title: "AI-Powered Customer Service Optimization",
      company: "TechSolutions Inc",
      industry: "Technology",
      companySize: "Large (5,000 employees)",
      location: "North America",
      timeline: "November 2022 - February 2023",
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
      companySize: "Enterprise (15,000+ employees)",
      location: "Global",
      timeline: "March 2023 - October 2023",
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
    }
  ];

  useEffect(() => {
    // Find the case study by ID
    const foundCaseStudy = allCaseStudies.find(study => study.id === parseInt(id));
    if (foundCaseStudy) {
      setCaseStudy(foundCaseStudy);
    } else {
      // If case study not found, navigate back to case studies list
      navigate('/insights/cases');
    }
  }, [id, navigate]);

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
    const title = encodeURIComponent(caseStudy?.title || '');
    
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
        shareUrl = `mailto:?subject=${title}&body=Check out this case study: ${url}`;
        window.location.href = shareUrl;
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (!caseStudy) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading case study...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/insights/cases')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Case Studies
        </button>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
            <Building className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">{caseStudy.industry}</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 ml-auto">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {caseStudy.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {caseStudy.duration}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {caseStudy.views}
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                <img src={caseStudy.companyLogo} alt={caseStudy.company} className="w-10 h-10 rounded-lg" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">{caseStudy.company}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{caseStudy.companySize}</span>
                  <span>•</span>
                  <span>{caseStudy.location}</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-gray-600 mt-4">{caseStudy.timeline}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mb-10">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Results Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <BarChart className="w-6 h-6 text-blue-600" />
              Measurable Business Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {caseStudy.results.map((result, index) => {
                const Icon = result.icon || TrendingUp;
                const colorClasses = {
                  green: 'bg-green-50 text-green-700 border-green-200',
                  blue: 'bg-blue-50 text-blue-700 border-blue-200',
                  purple: 'bg-purple-50 text-purple-700 border-purple-200',
                  red: 'bg-red-50 text-red-700 border-red-200',
                  orange: 'bg-orange-50 text-orange-700 border-orange-200',
                  teal: 'bg-teal-50 text-teal-700 border-teal-200'
                };
                
                return (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl border-2 ${colorClasses[result.color] || 'bg-blue-50 text-blue-700 border-blue-200'} text-center`}
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${result.color === 'green' ? 'text-green-600' : 
                                    result.color === 'blue' ? 'text-blue-600' :
                                    result.color === 'purple' ? 'text-purple-600' :
                                    result.color === 'red' ? 'text-red-600' :
                                    result.color === 'orange' ? 'text-orange-600' : 'text-teal-600'}`} />
                    <div className="text-3xl font-bold mb-2">{result.value}</div>
                    <div className="text-sm font-medium">{result.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Challenge Section */}
          {caseStudy.challenge && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-red-600">?</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div dangerouslySetInnerHTML={{ __html: caseStudy.challenge }} />
              </div>
            </div>
          )}

          {/* Solution Section */}
          {caseStudy.solution && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Solution</h3>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div dangerouslySetInnerHTML={{ __html: caseStudy.solution }} />
              </div>
            </div>
          )}

          {/* Implementation Process */}
          {caseStudy.implementation && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Process</h3>
              <div dangerouslySetInnerHTML={{ __html: caseStudy.implementation }} />
            </div>
          )}

          {/* Key Learnings */}
          {caseStudy.keyLearnings && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Learnings & Insights</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div dangerouslySetInnerHTML={{ __html: caseStudy.keyLearnings }} />
              </div>
            </div>
          )}

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h3>
              <div className="bg-white border-2 border-blue-200 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">"{caseStudy.testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={caseStudy.testimonial.avatar}
                    alt={caseStudy.testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{caseStudy.testimonial.author}</div>
                    <div className="text-sm text-gray-600">{caseStudy.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Share this case study</h3>
            <div className="flex flex-wrap gap-3">
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
        <div className="lg:col-span-1 space-y-8">
          {/* Project Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h4 className="font-bold text-gray-900 text-lg mb-6">Project Details</h4>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Timeline</div>
                <div className="text-gray-900">{caseStudy.duration}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Industry</div>
                <div className="text-gray-900">{caseStudy.industry}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Company Size</div>
                <div className="text-gray-900">{caseStudy.companySize}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Location</div>
                <div className="text-gray-900">{caseStudy.location}</div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-gray-500" />
              <h4 className="font-bold text-gray-900">Technologies & Solutions</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Case Studies */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h4 className="font-bold text-gray-900 text-lg mb-6">Related Case Studies</h4>
            <div className="space-y-4">
              {allCaseStudies
                .filter(s => s.id !== caseStudy.id && s.industry === caseStudy.industry)
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.id}
                    to={`/insights/cases/${related.id}`}
                    className="block group"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <h5 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 text-sm">
                          {related.title}
                        </h5>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                          <span>{related.company}</span>
                          <span>•</span>
                          <span>{related.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
            <h4 className="font-bold text-lg mb-3">Want Similar Results?</h4>
            <p className="text-blue-100 text-sm mb-6">
              Contact us to discuss how we can help transform your business
            </p>
            <button
              onClick={() => alert('Contact form would open here')}
              className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <Link
            to={`/insights/cases/${Math.max(1, parseInt(id) - 1)}`}
            className={`flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 ${
              parseInt(id) <= 1 ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            <ArrowLeft className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Previous Case Study</div>
              <div className="font-medium text-gray-900">
                {allCaseStudies.find(s => s.id === parseInt(id) - 1)?.title || 'No previous case study'}
              </div>
            </div>
          </Link>
          
          <Link
            to={`/insights/cases/${parseInt(id) + 1}`}
            className={`flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 text-right ${
              parseInt(id) >= allCaseStudies.length ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            <div className="flex-1">
              <div className="text-sm text-gray-500">Next Case Study</div>
              <div className="font-medium text-gray-900">
                {allCaseStudies.find(s => s.id === parseInt(id) + 1)?.title || 'No next case study'}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </Link>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <Link
          to="/insights/cases"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 text-lg"
        >
          <ArrowRight className="w-6 h-6 rotate-180" />
          View All Case Studies
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;