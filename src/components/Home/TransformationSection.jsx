import React from "react";

const TransformationSection = () => {
  const capabilities = [
    {
      id: 1,
      title: "Agentic AI transformation",
      description: "Fuse human brilliance and AI precision for breakthrough innovation.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "Find out more",
    },
    {
      id: 2,
      title: "GenAI for customer experience",
      description: "Reimagine engagement with intelligent, adaptive experiences.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "Find out more",
    },
    {
      id: 3,
      title: "Personalized customer journeys",
      description: "Deliver meaningful moments across every touchpoint.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "Find out more",
    },
    {
      id: 4,
      title: "Front-office optimization",
      description: "Optimize sales and service with data-driven operations.",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "Find out more",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* LABEL */}
        <h1 className="uppercase tracking-[0.01em] text-[28px] font-black mb-6 text-black drop-shadow-[0_1px_0_#000]">
          Trending Topics
        </h1>

        {/* HEADING */}
        <h2 className="text-[42px] font-light mb-20 max-w-4xl leading-[1.15] text-black">
          Transforming complexity into business advantage
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-[290px] overflow-hidden">

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50" />

                {/* DEFAULT TITLE */}
                <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-6">
                  <h3 className="text-[22px] font-light leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* HOVER CONTENT */}
                <div className="absolute inset-0 p-6 text-white flex flex-col opacity-0 translate-y-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  <div>
                    <h3 className="text-[22px] font-light mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[14px] text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex-grow" />

                  <span className="text-[14px] font-medium tracking-wide">
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
