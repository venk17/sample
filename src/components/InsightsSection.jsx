const InsightsSection = () => {
  const insights = [
    {
      id: 1,
      category: "INNOVATION STRATEGIES",
      title: "Make your organization innovation-ready with four bold strategies",
      description: "Learn how to foster a culture of innovation and implement strategies that drive sustainable growth.",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      category: "CONTENT STRATEGY",
      title: "How to build a high-impact content operating model in life sciences",
      description: "Discover frameworks for creating compliant, engaging content that drives business results in regulated industries.",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/3952244/pexels-photo-3952244.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      category: "MARKETING BEYOND PODCAST",
      title: "Creating Gen Z FOMO in experiential marketing",
      description: "Explore strategies for engaging Gen Z through immersive experiences and social-first campaigns.",
      readTime: "Listen: 45 min",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      isPodcast: true,
      podcastInfo: {
        host: "ALAN B. HART",
        featuring: "ANDY LEVEY",
        role: "Chief marketing officer",
        company: "Museum of Illusions"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - UPDATED TYPOGRAPHY */}
        <div className="mb-16">
          {/* Section label - 14px, weight 600, tracking-[0.3em] */}
          <div className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 mb-4">
            LATEST INSIGHTS
          </div>
          
          {/* Main heading - 36px mobile, 48px desktop, weight 300, tracking-tight */}
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6">
            Expert Perspectives & Industry Analysis
          </h2>
          
          {/* Description text - 14px, weight 400 */}
          <p className="text-sm text-gray-600 max-w-3xl">
            Stay ahead with our latest research, case studies, and expert commentary on business transformation and innovation.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Read Time Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-black/80 text-white backdrop-blur-sm">
                    {insight.readTime}
                  </span>
                </div>
                
                {/* Podcast Overlay */}
                {insight.isPodcast && (
                  <div className="absolute inset-0 bg-gradient-to-t from-green-800/90 via-green-800/60 to-transparent flex flex-col justify-end p-6">
                    <div className="text-white">
                      {/* Podcast Title - 18px, weight 700 */}
                      <div className="text-lg font-bold mb-1">MARKETING</div>
                      <div className="text-lg font-bold mb-3">BEYOND</div>
                      
                      {/* Host - 14px, weight 400 */}
                      <div className="text-sm mb-4">WITH {insight.podcastInfo.host}</div>
                      
                      {/* Featuring - 12px, weight 400 */}
                      <div className="text-xs opacity-90 mb-1">FEATURING</div>
                      
                      {/* Guest Name - 14px, weight 500 */}
                      <div className="text-sm font-medium mb-1">{insight.podcastInfo.featuring}</div>
                      
                      {/* Guest Info - 12px, weight 400 */}
                      <div className="text-xs opacity-75">{insight.podcastInfo.role}</div>
                      <div className="text-xs opacity-75">{insight.podcastInfo.company}</div>
                      
                      {/* Listen CTA - 14px, weight 500 */}
                      <button className="mt-6 inline-flex items-center gap-2 text-white font-medium text-sm hover:gap-3 transition-all group/play">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        Listen Now
                        <svg className="w-4 h-4 group-hover/play:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category - 14px, weight 600 */}
                <div className="text-sm font-semibold tracking-[0.05em] uppercase text-gray-500 mb-3">
                  {insight.category}
                </div>

                {/* Title - 20px, weight 500 (Card title) */}
                <h3 className="text-xl font-medium text-gray-900 mb-4 leading-tight group-hover:text-green-600 transition-colors duration-300">
                  {insight.title}
                </h3>
                
                {/* Description - 14px, weight 400 */}
                <p className="text-sm text-gray-600 mb-5 line-clamp-2">
                  {insight.description}
                </p>
                
                {/* Read More CTA - 14px, weight 500 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    Read Article
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="mt-16 text-center">
          {/* CTA Link - 14px, weight 500 */}
          <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-green-600 hover:gap-3 transition-all group/viewall">
            View All Insights
            <svg className="w-5 h-5 group-hover/viewall:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;