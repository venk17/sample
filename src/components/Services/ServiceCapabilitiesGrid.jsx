const ServiceCapabilitiesGrid = () => {
  const services = [
    { title: "Advertising", description: "We make sure customers can never forget you.", image: "https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg" },
    { title: "Marketing", description: "Our strategic insight makes your marketing budget seem bigger.", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
    { title: "Digital Commerce", description: "We help meet your objectives one cart at a time.", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" },
    { title: "Customer Insights", description: "Understand customer behavior deeply and act faster.", image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg" },
    { title: "Brand Strategy", description: "Build brands that people trust and remember.", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" },
    { title: "Growth Optimization", description: "Scale revenue using data-driven strategies.", image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
          Our strategy capabilities
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="relative h-[420px] overflow-hidden group rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                <p className="text-sm text-white/90 max-w-xs">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceCapabilitiesGrid;
