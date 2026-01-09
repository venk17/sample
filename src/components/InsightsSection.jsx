const InsightsSection = () => {
  const insights = [
    {
      id: 1,
      category: "INNOVATION STRATEGIES",
      title: "Make your organization innovation-ready with four bold strategies",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      category: "CONTENT STRATEGY",
      title: "How to build a high-impact content operating model in life sciences",
      image: "https://images.pexels.com/photos/3952244/pexels-photo-3952244.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      category: "MARKETING BEYOND PODCAST",
      title: "Creating Gen Z FOMO in experiential marketing",
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
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-sm font-bold tracking-wider uppercase mb-4 italic">
            LATEST INSIGHTS
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-6 relative">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Podcast Overlay */}
                {insight.isPodcast && (
                  <div className="absolute inset-0 bg-gradient-to-t from-green-800/90 via-green-800/50 to-transparent flex flex-col justify-end p-6">
                    <div className="text-white">
                      <div className="text-2xl font-bold mb-2">MARKETING</div>
                      <div className="text-2xl font-bold mb-4">BEYOND</div>
                      <div className="text-sm mb-2">WITH {insight.podcastInfo.host}</div>
                      <div className="text-xs opacity-90">FEATURING</div>
                      <div className="text-sm font-medium">{insight.podcastInfo.featuring}</div>
                      <div className="text-xs opacity-75">{insight.podcastInfo.role}</div>
                      <div className="text-xs opacity-75">{insight.podcastInfo.company}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                {/* Category */}
                <div className="text-xs font-bold tracking-wider uppercase text-gray-600 mb-3">
                  {insight.category}
                </div>

                {/* Title */}
                <h3 className="text-lg font-normal text-black leading-tight group-hover:text-green-600 transition-colors">
                  {insight.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;