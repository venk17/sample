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

  const visualContent = {
    "business-intelligence": {
      images: [
        {
          url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
          label: "Market Insights",
          description: "Featured case study and detailed insights"
        },
        {
          url: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
          label: "Competitive Analysis",
          description: "Understand market dynamics and competitors"
        },
        {
          url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
          label: "Data Intelligence",
          description: "Advanced analytics and reporting"
        },
        {
          url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
          label: "Strategic Reports",
          description: "Comprehensive business intelligence"
        },
        {
          url: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
          label: "Implementation",
          description: "Turn insights into action"
        }
      ]
    },
    "brand-strategy": {
      images: [
        {
          url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
          label: "Brand Positioning",
          description: "Establish market leadership"
        },
        {
          url: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
          label: "Premium Strategy",
          description: "Command higher price points"
        },
        {
          url: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
          label: "Brand Identity",
          description: "Create memorable brand assets"
        },
        {
          url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
          label: "Market Perception",
          description: "Shape customer perception"
        },
        {
          url: "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg",
          label: "Brand Growth",
          description: "Scale your brand presence"
        }
      ]
    },
    "digital-experience": {
      images: [
        {
          url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
          label: "UX/UI Design",
          description: "User-centered design solutions"
        },
        {
          url: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
          label: "Digital Transformation",
          description: "Modernize your digital ecosystem"
        },
        {
          url: "https://images.pexels.com/photos/3184376/pexels-photo-3184376.jpeg",
          label: "Web Development",
          description: "High-performance web solutions"
        },
        {
          url: "https://images.pexels.com/photos/3184389/pexels-photo-3184389.jpeg",
          label: "Mobile Solutions",
          description: "Native and cross-platform apps"
        },
        {
          url: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
          label: "E-commerce",
          description: "Optimized online stores"
        }
      ]
    },
    "growth-marketing": {
      images: [
        {
          url: "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg",
          label: "Growth Strategy",
          description: "Scalable growth frameworks"
        },
        {
          url: "https://images.pexels.com/photos/3184461/pexels-photo-3184461.jpeg",
          label: "Marketing Automation",
          description: "Streamline marketing workflows"
        },
        {
          url: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
          label: "Sales Enablement",
          description: "Empower your sales team"
        },
        {
          url: "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg",
          label: "Performance Marketing",
          description: "Data-driven campaign optimization"
        },
        {
          url: "https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg",
          label: "ROI Optimization",
          description: "Maximize marketing returns"
        }
      ]
    },
    "organisation-capability": {
      images: [
        {
          url: "https://images.pexels.com/photos/3184441/pexels-photo-3184441.jpeg",
          label: "Leadership Development",
          description: "Build exceptional leaders"
        },
        {
          url: "https://images.pexels.com/photos/3184440/pexels-photo-3184440.jpeg",
          label: "Talent Management",
          description: "Attract and retain top talent"
        },
        {
          url: "https://images.pexels.com/photos/3184439/pexels-photo-3184439.jpeg",
          label: "Organizational Design",
          description: "Optimize structure and processes"
        },
        {
          url: "https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg",
          label: "Capability Building",
          description: "Develop critical skills"
        },
        {
          url: "https://images.pexels.com/photos/3184437/pexels-photo-3184437.jpeg",
          label: "Change Management",
          description: "Navigate organizational change"
        }
      ]
    },
    "ai-automation": {
      images: [
        {
          url: "https://images.pexels.com/photos/3184426/pexels-photo-3184426.jpeg",
          label: "AI Implementation",
          description: "Deploy AI solutions effectively"
        },
        {
          url: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg",
          label: "Process Automation",
          description: "Automate repetitive tasks"
        },
        {
          url: "https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg",
          label: "Machine Learning",
          description: "Predictive analytics models"
        },
        {
          url: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg",
          label: "Intelligent Systems",
          description: "Smart business applications"
        },
        {
          url: "https://images.pexels.com/photos/3184422/pexels-photo-3184422.jpeg",
          label: "AI Strategy",
          description: "Plan your AI transformation"
        }
      ]
    }
  };

  const currentVisuals = visualContent[activeService] || visualContent["business-intelligence"];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER - UPDATED TYPOGRAPHY */}
        <div className="mb-16 text-center">
          {/* Section label - 14px, weight 600, tracking-widest */}
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 mb-4 block">
            Our Services
          </span>
          
          {/* Main heading - 36px mobile, 48px desktop, weight 300, tracking-tight */}
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6">
            Transform Your Business with Our Expertise
          </h2>
          
          {/* Description text - 14px, weight 400 */}
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
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
                      {/* Service title - 16px, weight 500 when not active */}
                      <h3 className={`text-base font-medium mb-2 ${
                        isActive ? `font-semibold ${serviceColors.text}` : "text-gray-900"
                      }`}>
                        {service.label}
                      </h3>
                      
                      {/* Description text - 14px, weight 400 */}
                      <p className="text-sm text-gray-600 mb-3">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        {/* Stats badge - 12px, weight 500 */}
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
                  {/* Active service title - 20px, weight 500 */}
                  <h3 className="text-xl font-medium text-gray-900">{current?.label}</h3>
                  
                  {/* Active service description - 14px, weight 400 */}
                  <p className="text-sm text-gray-600">{current?.description}</p>
                </div>
              </div>
            </div>

            {/* IMPROVED IMAGE GRID LAYOUT WITH LEARN MORE BUTTONS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* LARGE FEATURED IMAGE - Takes 2 columns */}
              <div className="col-span-2 row-span-2">
                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden group">
                  <img
                    src={currentVisuals.images[0].url}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={currentVisuals.images[0].label}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-6 left-6 right-6">
                      {/* Image label - 24px, weight 700 */}
                      <span className="text-white text-2xl font-bold">
                        {currentVisuals.images[0].label}
                      </span>
                      
                      {/* Image description - 14px, weight 400 */}
                      <p className="text-white/90 text-sm mt-2 max-w-md">
                        {currentVisuals.images[0].description}
                      </p>
                      
                      {/* Learn More Button for large image */}
                      <Link
                        to={current?.path || "/services"}
                        className="inline-flex items-center gap-1 mt-4 text-white font-medium text-sm hover:gap-2 transition-all group/button"
                      >
                        Learn more about {current?.label}
                        <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMALL IMAGE 1 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-square">
                  <img
                    src={currentVisuals.images[1].url}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={currentVisuals.images[1].label}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {/* Small image label - 14px, weight 500 */}
                    <span className="text-white font-medium text-sm block mb-1">
                      {currentVisuals.images[1].label}
                    </span>
                    <p className="text-white/80 text-xs mb-2">
                      {currentVisuals.images[1].description}
                    </p>
                    {/* Learn More Button for small image */}
                    <Link
                      to={current?.path || "/services"}
                      className="inline-flex items-center gap-1 text-white font-medium text-xs hover:gap-1.5 transition-all group/button2"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3 group-hover/button2:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* SMALL IMAGE 2 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-square">
                  <img
                    src={currentVisuals.images[2].url}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={currentVisuals.images[2].label}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {/* Small image label - 14px, weight 500 */}
                    <span className="text-white font-medium text-sm block mb-1">
                      {currentVisuals.images[2].label}
                    </span>
                    <p className="text-white/80 text-xs mb-2">
                      {currentVisuals.images[2].description}
                    </p>
                    {/* Learn More Button for small image */}
                    <Link
                      to={current?.path || "/services"}
                      className="inline-flex items-center gap-1 text-white font-medium text-xs hover:gap-1.5 transition-all group/button3"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3 group-hover/button3:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* HORIZONTAL IMAGE - Takes 2 columns */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden group">
                <div className="aspect-[2/1]">
                  <img
                    src={currentVisuals.images[3].url}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={currentVisuals.images[3].label}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    {/* Horizontal image label - 18px, weight 700 */}
                    <span className="text-white font-bold text-lg">
                      {currentVisuals.images[3].label}
                    </span>
                    
                    {/* Horizontal image description - 14px, weight 400 */}
                    <p className="text-white/90 text-sm mt-1 mb-3">
                      {currentVisuals.images[3].description}
                    </p>
                    
                    {/* Learn More Button for horizontal image */}
                    <Link
                      to={current?.path || "/services"}
                      className="inline-flex items-center gap-1 text-white font-medium text-sm hover:gap-2 transition-all group/button4"
                    >
                      Learn more about this solution
                      <ArrowRight className="w-4 h-4 group-hover/button4:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  {/* CTA title - 24px, weight 700 */}
                  <h4 className="text-white text-2xl font-bold mb-3">
                    Ready to Transform Your Business?
                  </h4>
                  
                  {/* CTA description - 14px, weight 400 */}
                  <p className="text-gray-300 text-sm">
                    Let's discuss how our {current?.label} can drive measurable results for your organization.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* CTA button links - 14px, weight 500 */}
                  <Link
                    to={current?.path || "/services"}
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 text-sm"
                  >
                    Explore Service <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-sm"
                  >
                    Book a Consultation
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