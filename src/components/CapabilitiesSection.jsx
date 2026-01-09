import { ArrowRight } from 'lucide-react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      id: 1,
      title: "Digital Strategy & Transformation",
      description: "End-to-end digital transformation that reimagines business models",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Strategy"
    },
    {
      id: 2,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions that drive operational excellence",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology"
    },
    {
      id: 3,
      title: "AI & Data Analytics",
      description: "Intelligent insights that unlock new business opportunities",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Innovation"
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Our Capabilities
          </div>
          <h2 className="text-h1 text-black mb-6">
            Driving transformation across every dimension of your business
          </h2>
          <p className="text-lg text-gray-600">
            From strategy to execution, we deliver comprehensive solutions that 
            create lasting competitive advantage.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {capability.category}
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-green-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="flex items-center text-black group-hover:text-green-600 transition-colors">
                <span className="font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;