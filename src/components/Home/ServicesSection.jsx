import { useState } from "react";
import { Link } from "react-router-dom";

// Updated service navigations
const services = [
  { id: "business-market-intelligence", name: "Business & Market Intelligence" },
  { id: "brand-strategy", name: "Brand Strategy & Premium Positioning" },
  { id: "digital-experience", name: "Digital Experience & Technology" },
  { id: "growth-marketing", name: "Growth, Marketing & Sales Systems" },
  { id: "organisation-capability", name: "Organisation & Capability Building" },
  { id: "ai-automation", name: "AI & Automation Enablement" }
];

// Updated service solutions data
const serviceSolutions = {
  "business-market-intelligence": [
    {
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      title: "Market Research & Consumer Insights",
      category: "Intelligence",
      link: "services/business-market-intelligence"
    },
    {
      url: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
      title: "Competitive Analysis & Benchmarking",
      category: "Analysis",
      link: "services/business-market-intelligence"
    },
    {
      url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      title: "Industry Trends & Forecasting",
      category: "Trends",
      link: "services/business-market-intelligence"
    },
    {
      url: "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg",
      title: "Customer Segmentation & Targeting",
      category: "Segmentation",
      link: "services/business-market-intelligence"
    },
    {
      url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      title: "Data-Driven Decision Support",
      category: "Analytics",
      link: "services/business-market-intelligence"
    }
  ],
  "brand-strategy": [
    {
      url: "https://images.pexels.com/photos/3184473/pexels-photo-3184473.jpeg",
      title: "Brand Identity Development",
      category: "Identity",
      link: "services/brand-strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184472/pexels-photo-3184472.jpeg",
      title: "Brand Positioning Strategy",
      category: "Strategy",
      link: "services/brand-strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184471/pexels-photo-3184471.jpeg",
      title: "Visual Identity & Guidelines",
      category: "Design",
      link: "services/brand-strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg",
      title: "Brand Communication Framework",
      category: "Communication",
      link: "services/brand-strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184469/pexels-photo-3184469.jpeg",
      title: "Premium Brand Experience Design",
      category: "Experience",
      link: "services/brand-strategy"
    }
  ],
  "digital-experience": [
    {
      url: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
      title: "Website & App Experience Design",
      category: "Design",
      link: "services/digital-experience"
    },
    {
      url: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg",
      title: "UI/UX Strategy & Prototyping",
      category: "Strategy",
      link: "services/digital-experience"
    },
    {
      url: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg",
      title: "Full-Stack Web Development",
      category: "Development",
      link: "services/digital-experience"
    },
    {
      url: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
      title: "Performance & Security Optimization",
      category: "Optimization",
      link: "services/digital-experience"
    },
    {
      url: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg",
      title: "Digital Platform Integration",
      category: "Integration",
      link: "services/digital-experience"
    }
  ],
  "growth-marketing": [
    {
      url: "https://images.pexels.com/photos/3184417/pexels-photo-3184417.jpeg",
      title: "Digital Marketing Strategy",
      category: "Strategy",
      link: "services/growth-marketing"
    },
    {
      url: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
      title: "Lead Generation Systems",
      category: "Systems",
      link: "services/growth-marketing"
    },
    {
      url: "https://images.pexels.com/photos/3184415/pexels-photo-3184415.jpeg",
      title: "Marketing Automation Setup",
      category: "Automation",
      link: "services/growth-marketing"
    },
    {
      url: "https://images.pexels.com/photos/3184414/pexels-photo-3184414.jpeg",
      title: "Sales Funnel Optimization",
      category: "Optimization",
      link: "services/growth-marketing"
    },
    {
      url: "https://images.pexels.com/photos/3184413/pexels-photo-3184413.jpeg",
      title: "Customer Retention Systems",
      category: "Retention",
      link: "services/growth-marketing"
    }
  ],
  "organisation-capability": [
    {
      url: "https://images.pexels.com/photos/3184407/pexels-photo-3184407.jpeg",
      title: "Business Process Optimization",
      category: "Optimization",
      link: "services/organisation-capability"
    },
    {
      url: "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg",
      title: "Team Skill Development",
      category: "Development",
      link: "services/organisation-capability"
    },
    {
      url: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
      title: "Leadership & Management Framework",
      category: "Leadership",
      link: "services/organisation-capability"
    },
    {
      url: "https://images.pexels.com/photos/3184404/pexels-photo-3184404.jpeg",
      title: "Workflow Automation Strategy",
      category: "Automation",
      link: "services/organisation-capability"
    },
    {
      url: "https://images.pexels.com/photos/3184403/pexels-photo-3184403.jpeg",
      title: "Performance Management Systems",
      category: "Management",
      link: "services/organisation-capability"
    }
  ],
  "ai-automation": [
    {
      url: "https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg",
      title: "AI Chatbots & Virtual Assistants",
      category: "AI",
      link: "services/ai-automation"
    },
    {
      url: "https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg",
      title: "Business Process Automation",
      category: "Automation",
      link: "services/ai-automation"
    },
    {
      url: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg",
      title: "Predictive Analytics Solutions",
      category: "Analytics",
      link: "services/ai-automation"
    },
    {
      url: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg",
      title: "AI-Powered Customer Support",
      category: "Customer Support",
      link: "services/ai-automation"
    },
    {
      url: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg",
      title: "Custom AI Tool Development",
      category: "Development",
      link: "services/ai-automation"
    }
  ]
};

export default function WhatWeDoSection() {
  const [activeService, setActiveService] = useState(services[0].id);
  const images = serviceSolutions[activeService] || serviceSolutions["business-market-intelligence"];
  const activeServiceName = services.find(s => s.id === activeService)?.name || services[0].name;

  return (
    <section className="bg-white py-16 lg:py-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* LABEL */}
        <h3 className="uppercase tracking-[0.01em] text-[28px] font-black mb-12 text-black drop-shadow-[0_1px_0_#000]">
          What we do
        </h3>

        {/* SERVICE NAVIGATION TABS */}
        <div className="mb-14">
          <div className="flex overflow-x-auto pb-4 space-x-8 lg:space-x-10">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`pb-2 text-[14px] tracking-wide transition-colors whitespace-nowrap
                  ${
                    activeService === service.id
                      ? "border-b-2 border-black text-black font-medium"
                      : "text-gray-500 hover:text-black"
                  }`}
              >
                {service.name}
              </button>
            ))}
          </div>
          <div className="border-b border-gray-200 mt-2"></div>
        </div>

        {/* SERVICE SOLUTIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          {/* LEFT BIG CARD (Primary Solution) */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden group h-[500px]">

              <img
                src={images[0].url}
                alt={images[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-4">
                    {images[0].category}
                  </span>

                  <h3 className="text-white text-[34px] font-light mb-3 leading-tight">
                    {images[0].title}
                  </h3>

                  <p className="text-white/90 text-[15px] mb-6 max-w-2xl">
                    Part of our comprehensive <strong>{activeServiceName}</strong> service offering.
                  </p>

                  <Link
                    to={images[0].link}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-[13px] tracking-wider font-medium hover:bg-white/90 transition-all duration-300"
                  >
                    Explore Solution →
                  </Link>

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT GRID - 4 Additional Solutions */}
          <div className="grid grid-cols-2 gap-6">
            {images.slice(1).map((img, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden h-[240px]">

                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-5">

                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-[11px] mb-2">
                      {img.category}
                    </span>

                    <h4 className="text-white text-[17px] font-light mb-2 leading-snug">
                      {img.title}
                    </h4>

                    <p className="text-white/80 text-[13px] mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                      Expert solution within {activeServiceName}
                    </p>

                    <Link
                      to={img.link}
                      className="text-white text-[13px] tracking-wide font-medium opacity-0 group-hover:opacity-100 transition-all hover:text-white/80 flex items-center gap-1"
                    >
                      Explore Solution →
                    </Link>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* VIEW ALL SERVICES CTA (Styled like Bottom CTA) */}
<div className="mt-16 flex justify-center">
  <Link
    to={`/services/${activeService}`}
    className="
      group box-border
      inline-flex items-center justify-center
      px-12 py-5
      rounded-full
      bg-black
      text-white
      tracking-[0.25em]
      text-xs md:text-sm
      font-medium
      transition-all duration-300 ease-out
      border border-transparent hover:border-2
      hover:text-[#3b42c4]
      hover:border-[#3b42c4]
    "
  >
    View All {activeServiceName} Solutions
    <span className="ml-3 text-2xl md:text-3xl font-light transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  </Link>
</div>


      </div>
    </section>
  );
}