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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* LABEL – same as other sections */}
        <h3 className="uppercase tracking-[0.01em] text-[28px] font-black mb-6 text-black drop-shadow-[0_1px_0_#000]">
          Latest Insights
        </h3>

        {/* HEADING – optional (remove if not needed) */}
        {/* 
        <h2 className="text-[42px] font-light mb-20 max-w-4xl leading-[1.15] text-black">
          Discover trends shaping digital transformation
        </h2> 
        */}

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4">
                  <span className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-black/80 text-white">
                    {insight.readTime}
                  </span>
                </div>

                {insight.isPodcast && (
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/60 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="text-[18px] font-bold mb-3">MARKETING BEYOND</div>
                    <div className="text-[14px] mb-4">WITH {insight.podcastInfo.host}</div>
                    <div className="text-[12px] opacity-90 mb-1">FEATURING</div>
                    <div className="text-[14px] font-medium mb-1">{insight.podcastInfo.featuring}</div>
                    <div className="text-[12px] opacity-75">{insight.podcastInfo.role}</div>
                    <div className="text-[12px] opacity-75">{insight.podcastInfo.company}</div>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="text-[12px] font-semibold tracking-[0.25em] uppercase text-gray-500 mb-3">
                  {insight.category}
                </div>

                <h3 className="text-[22px] font-light text-black mb-4 leading-snug tracking-tight">
                  {insight.title}
                </h3>

                <p className="text-[15px] text-gray-600 mb-5 leading-relaxed line-clamp-2">
                  {insight.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[14px] font-medium text-black">
                    Read Article
                  </span>
                  <span className="text-[16px]">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-[14px] font-medium text-black hover:gap-3 transition-all">
            View All Insights →
          </button>
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;
