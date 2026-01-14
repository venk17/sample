import React from "react";

const TransformationSection = () => {
  const capabilities = [
    {
      id: 1,
      title: "Agentic AI transformation",
      description:
        "Fuse human brilliance and AI precision for breakthrough innovation.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "Find out more",
    },
    {
      id: 2,
      title: "GenAI for customer experience",
      description:
        "Reimagine engagement with intelligent, adaptive experiences.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "Find out more",
    },
    {
      id: 3,
      title: "Personalized customer journeys",
      description:
        "Deliver meaningful moments across every touchpoint.",
      image:
        "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "Find out more",
    },
    {
      id: 4,
      title: "Front-office optimization",
      description:
        "Optimize sales and service with data-driven operations.",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "Find out more",
    },
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* LABEL */}
        <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4 text-black">
          Trending Topics
        </p>

        {/* HEADING */}
        <h2 className="text-4xl lg:text-5xl font-light mb-16 max-w-4xl leading-tight tracking-tight text-black">
          Transforming complexity into business advantage
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden shadow-lg">

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* DEFAULT STATE */}
                <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-6">
                  <h3 className="text-xl font-light leading-snug tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* HOVER STATE */}
                <div className="absolute inset-0 p-6 text-white flex flex-col opacity-0 translate-y-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">

                  <div>
                    <h3 className="text-xl font-light leading-snug tracking-tight mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex-grow" />

                  <span className="text-sm font-medium tracking-wide">
                    {item.link}
                  </span>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TransformationSection;
