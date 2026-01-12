import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart, Target, Globe, TrendingUp, 
  Users, Cpu, ChevronRight, ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("business-intelligence");

  const services = [
    { 
      id: "business-intelligence",
      label: "Business & Market Intelligence", 
      path: "/services/business-market-intelligence",
      icon: BarChart,
      color: "blue",
      description: "Data-driven insights and strategic intelligence to inform business decisions",
      stats: "45% faster decision making"
    },
    { 
      id: "brand-strategy",
      label: "Brand Strategy & Premium Positioning", 
      path: "/services/brand-strategy",
      icon: Target,
      color: "purple",
      description: "Elevate your brand to command premium value and build lasting customer loyalty",
      stats: "3.2x average price premium"
    },
    { 
      id: "digital-experience",
      label: "Digital Experience & Technology", 
      path: "/services/digital-experience",
      icon: Globe,
      color: "green",
      description: "Create seamless, engaging digital experiences that delight customers and drive business growth",
      stats: "65% engagement increase"
    },
    { 
      id: "growth-marketing",
      label: "Growth, Marketing & Sales Systems", 
      path: "/services/growth-marketing",
      icon: TrendingUp,
      color: "orange",
      description: "Build scalable revenue engines that drive sustainable business growth",
      stats: "300% average ROI"
    },
    { 
      id: "organisation-capability",
      label: "Organisation & Capability Building", 
      path: "/services/organisation-capability",
      icon: Users,
      color: "red",
      description: "Build high-performing teams and organizational capabilities that drive sustainable growth",
      stats: "45% productivity gain"
    },
    { 
      id: "ai-automation",
      label: "AI & Automation Enablement", 
      path: "/services/ai-automation",
      icon: Cpu,
      color: "indigo",
      description: "Leverage artificial intelligence and automation to transform business operations",
      stats: "70% operational efficiency"
    }
  ];

  const colorVariants = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" }
  };

  const current = useMemo(
    () => services.find(service => service.id === activeService),
    [activeService]
  );

  const colors = colorVariants[current?.color || "blue"];

  /* 🔹 EACH SERVICE = 5 UNIQUE IMAGES */
  const visualContent = {
    "business-intelligence": {
      images: [
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
      ],
      labels: { 
        1: "Market Insights", 
        2: "Competitive Analysis",
        3: "Data Intelligence",
        4: "Strategic Reports"
      }
    },
    "brand-strategy": {
      images: [
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
        "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg"
      ],
      labels: { 
        1: "Brand Positioning", 
        2: "Premium Strategy",
        3: "Brand Identity",
        4: "Market Perception"
      }
    },
    "digital-experience": {
      images: [
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
        "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
        "https://images.pexels.com/photos/3184376/pexels-photo-3184376.jpeg",
        "https://images.pexels.com/photos/3184389/pexels-photo-3184389.jpeg",
        "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg"
      ],
      labels: { 
        1: "UX/UI Design", 
        2: "Digital Transformation",
        3: "Web Development",
        4: "Mobile Solutions"
      }
    },
    "growth-marketing": {
      images: [
        "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg",
        "https://images.pexels.com/photos/3184461/pexels-photo-3184461.jpeg",
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
        "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg",
        "https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg"
      ],
      labels: { 
        1: "Growth Strategy", 
        2: "Marketing Automation",
        3: "Sales Enablement",
        4: "Performance Marketing"
      }
    },
    "organisation-capability": {
      images: [
        "https://images.pexels.com/photos/3184441/pexels-photo-3184441.jpeg",
        "https://images.pexels.com/photos/3184440/pexels-photo-3184440.jpeg",
        "https://images.pexels.com/photos/3184439/pexels-photo-3184439.jpeg",
        "https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg",
        "https://images.pexels.com/photos/3184437/pexels-photo-3184437.jpeg"
      ],
      labels: { 
        1: "Leadership Development", 
        2: "Talent Management",
        3: "Organizational Design",
        4: "Capability Building"
      }
    },
    "ai-automation": {
      images: [
        "https://images.pexels.com/photos/3184426/pexels-photo-3184426.jpeg",
        "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg",
        "https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg",
        "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg",
        "https://images.pexels.com/photos/3184422/pexels-photo-3184422.jpeg"
      ],
      labels: { 
        1: "AI Implementation", 
        2: "Process Automation",
        3: "Machine Learning",
        4: "Intelligent Systems"
      }
    }
  };

  const currentVisuals = visualContent[activeService] || visualContent["business-intelligence"];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="uppercase tracking-wider text-sm font-semibold text-gray-500 mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive growth, enhance efficiency, and create competitive advantage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN - SERVICE LIST */}
          <div className="lg:col-span-1 space-y-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;
              const serviceColors = colorVariants[service.color];
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full p-6 text-left rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? `${serviceColors.bg} border-l-4 ${serviceColors.border} shadow-lg` 
                      : "bg-white border border-gray-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${serviceColors.bg}`}>
                      <Icon className={`w-6 h-6 ${serviceColors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        isActive ? serviceColors.text : "text-gray-900"
                      }`}>
                        {service.label}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          {service.stats}
                        </span>
                        <ChevronRight className={`w-5 h-5 ${
                          isActive ? serviceColors.text : "text-gray-400"
                        }`} />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN - VISUAL CONTENT */}
          <div className="lg:col-span-2">
            {/* SERVICE HEADER */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full ${colors.bg}`}>
                  <current.icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{current?.label}</h3>
                  <p className="text-gray-600">{current?.description}</p>
                </div>
              </div>
            </div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {/* MAIN IMAGE */}
              <div className="col-span-2 lg:col-span-2 row-span-2">
                <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src={currentVisuals.images[0]}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt={current?.label}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="absolute bottom-6 left-6">
                      <span className="text-white text-2xl font-bold">
                        {currentVisuals.labels[1]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMALL IMAGES */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden group">
                  <div className="aspect-square">
                    <img
                      src={currentVisuals.images[i]}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={currentVisuals.labels[i + 1]}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-medium">
                        {currentVisuals.labels[i + 1]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-black rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-white text-xl font-bold mb-2">
                    Ready to Transform Your Business?
                  </h4>
                  <p className="text-gray-300">
                    Let's discuss how our {current?.label} can drive measurable results for your organization.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link
                    to={current?.path || "/services"}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;