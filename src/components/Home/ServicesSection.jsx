import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  "Customer Strategy",
  "Advertising",
  "Marketing",
  "Digital Commerce",
  "Sales",
  "Service",
  "Digital Product"
];

const imagesData = {
  "Customer Strategy": [
    {
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      title: "Customer Strategy",
      desc: "Drive growth with data-led customer insights and strategic planning.",
      category: "Strategy",
      link: "/services/customer-strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
      title: "TrustID™",
      desc: "Digital identity & trust solutions for secure customer interactions.",
      category: "Technology",
      link: "/products/trustid"
    },
    {
      url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      title: "BrandWorth™",
      desc: "Measure and grow brand value with comprehensive analytics.",
      category: "Analytics",
      link: "/products/brandworth"
    },
    {
      url: "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg",
      title: "GenAI for CX",
      desc: "AI-powered customer experiences that personalize every interaction.",
      category: "AI",
      link: "/solutions/genai-cx"
    },
    {
      url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
      title: "Ten Types of Innovation",
      desc: "Innovation strategy framework for competitive advantage.",
      category: "Framework",
      link: "/solutions/innovation-framework"
    }
  ],
  "Advertising": [
    {
      url: "https://images.pexels.com/photos/3184473/pexels-photo-3184473.jpeg",
      title: "Digital Advertising",
      desc: "Targeted campaigns across digital channels for maximum reach.",
      category: "Digital",
      link: "/services/advertising/digital"
    },
    {
      url: "https://images.pexels.com/photos/3184472/pexels-photo-3184472.jpeg",
      title: "Programmatic Buying",
      desc: "Automated ad placement for optimal ROI and efficiency.",
      category: "Automation",
      link: "/services/advertising/programmatic"
    },
    {
      url: "https://images.pexels.com/photos/3184471/pexels-photo-3184471.jpeg",
      title: "Creative Strategy",
      desc: "Compelling ad creatives that capture attention and convert.",
      category: "Creative",
      link: "/services/advertising/creative"
    },
    {
      url: "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg",
      title: "Media Planning",
      desc: "Strategic media placement across channels for optimal impact.",
      category: "Planning",
      link: "/services/advertising/media-planning"
    },
    {
      url: "https://images.pexels.com/photos/3184469/pexels-photo-3184469.jpeg",
      title: "Performance Analytics",
      desc: "Track and optimize advertising performance with real-time data.",
      category: "Analytics",
      link: "/services/advertising/analytics"
    }
  ],
  "Marketing": [
    {
      url: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
      title: "Content Marketing",
      desc: "Strategic content that drives engagement and builds authority.",
      category: "Content",
      link: "/services/marketing/content"
    },
    {
      url: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg",
      title: "Social Media Strategy",
      desc: "Build brand presence and engagement across social platforms.",
      category: "Social",
      link: "/services/marketing/social-media"
    },
    {
      url: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg",
      title: "Email Marketing",
      desc: "Personalized campaigns that nurture leads and drive conversions.",
      category: "Email",
      link: "/services/marketing/email"
    },
    {
      url: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
      title: "SEO & SEM",
      desc: "Drive organic and paid search traffic with proven strategies.",
      category: "Search",
      link: "/services/marketing/seo-sem"
    },
    {
      url: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg",
      title: "Marketing Automation",
      desc: "Streamline marketing workflows and nurture leads automatically.",
      category: "Automation",
      link: "/services/marketing/automation"
    }
  ],
  "Digital Commerce": [
    {
      url: "https://images.pexels.com/photos/3184417/pexels-photo-3184417.jpeg",
      title: "E-commerce Strategy",
      desc: "Complete online sales strategy and implementation.",
      category: "Strategy",
      link: "/services/digital-commerce/strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
      title: "Shopify Optimization",
      desc: "Maximize your Shopify store performance and sales.",
      category: "Platform",
      link: "/services/digital-commerce/shopify"
    },
    {
      url: "https://images.pexels.com/photos/3184415/pexels-photo-3184415.jpeg",
      title: "Conversion Rate Optimization",
      desc: "Increase website conversions and sales with data-driven testing.",
      category: "Optimization",
      link: "/services/digital-commerce/cro"
    },
    {
      url: "https://images.pexels.com/photos/3184414/pexels-photo-3184414.jpeg",
      title: "Marketplace Integration",
      desc: "Sell across multiple marketplaces seamlessly.",
      category: "Integration",
      link: "/services/digital-commerce/marketplace"
    },
    {
      url: "https://images.pexels.com/photos/3184413/pexels-photo-3184413.jpeg",
      title: "Mobile Commerce",
      desc: "Optimized shopping experiences for mobile users.",
      category: "Mobile",
      link: "/services/digital-commerce/mobile"
    }
  ],
  "Sales": [
    {
      url: "https://images.pexels.com/photos/3184407/pexels-photo-3184407.jpeg",
      title: "Sales Strategy",
      desc: "Data-driven sales planning and execution for growth.",
      category: "Strategy",
      link: "/services/sales/strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg",
      title: "CRM Implementation",
      desc: "Customer relationship management solutions that work.",
      category: "Technology",
      link: "/services/sales/crm"
    },
    {
      url: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
      title: "Sales Training",
      desc: "Develop high-performing sales teams with proven techniques.",
      category: "Training",
      link: "/services/sales/training"
    },
    {
      url: "https://images.pexels.com/photos/3184404/pexels-photo-3184404.jpeg",
      title: "Lead Generation",
      desc: "Quality lead acquisition strategies that convert.",
      category: "Acquisition",
      link: "/services/sales/lead-gen"
    },
    {
      url: "https://images.pexels.com/photos/3184403/pexels-photo-3184403.jpeg",
      title: "Sales Analytics",
      desc: "Performance tracking and optimization for sales teams.",
      category: "Analytics",
      link: "/services/sales/analytics"
    }
  ],
  "Service": [
    {
      url: "https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg",
      title: "Customer Service Strategy",
      desc: "Build exceptional customer support systems that delight.",
      category: "Strategy",
      link: "/services/service/strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg",
      title: "Help Desk Solutions",
      desc: "Efficient customer support ticketing systems.",
      category: "Technology",
      link: "/services/service/help-desk"
    },
    {
      url: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg",
      title: "Customer Success",
      desc: "Ensure customer retention and satisfaction long-term.",
      category: "Retention",
      link: "/services/service/customer-success"
    },
    {
      url: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg",
      title: "Service Analytics",
      desc: "Measure and improve service performance with insights.",
      category: "Analytics",
      link: "/services/service/analytics"
    },
    {
      url: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg",
      title: "Omnichannel Support",
      desc: "Seamless support across all customer touchpoints.",
      category: "Integration",
      link: "/services/service/omnichannel"
    }
  ],
  "Digital Product": [
    {
      url: "https://images.pexels.com/photos/3184381/pexels-photo-3184381.jpeg",
      title: "Product Strategy",
      desc: "End-to-end digital product planning and roadmap development.",
      category: "Strategy",
      link: "/services/digital-product/strategy"
    },
    {
      url: "https://images.pexels.com/photos/3184380/pexels-photo-3184380.jpeg",
      title: "UI/UX Design",
      desc: "User-centered design for exceptional digital experiences.",
      category: "Design",
      link: "/services/digital-product/design"
    },
    {
      url: "https://images.pexels.com/photos/3184379/pexels-photo-3184379.jpeg",
      title: "Product Development",
      desc: "Agile development of scalable digital solutions.",
      category: "Development",
      link: "/services/digital-product/development"
    },
    {
      url: "https://images.pexels.com/photos/3184378/pexels-photo-3184378.jpeg",
      title: "Product Analytics",
      desc: "Data-driven product optimization and user insights.",
      category: "Analytics",
      link: "/services/digital-product/analytics"
    },
    {
      url: "https://images.pexels.com/photos/3184377/pexels-photo-3184377.jpeg",
      title: "Product Launch",
      desc: "Successful market introduction and adoption strategies.",
      category: "Launch",
      link: "/services/digital-product/launch"
    }
  ]
};

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState("Customer Strategy");

  const images = imagesData[activeTab] || imagesData["Customer Strategy"];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="mb-12 lg:mb-16">
          
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            WHAT WE DO
          </h2>
        </div>

        {/* TABS */}
        <div className="mb-12 lg:mb-16">
          <div className="flex overflow-x-auto pb-4 scrollbar-hide space-x-8">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 pb-3 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="border-b border-gray-200 mt-2"></div>
        </div>

        {/* IMAGE GRID - IMPROVED LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          {/* LEFT BIG IMAGE - Featured Solution */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden group h-[500px]">
              <img
                src={images[0].url}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={images[0].title}
              />
              
              {/* Static Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-4">
                    {images[0].category}
                  </span>
                  
                  <h3 className="text-white text-3xl lg:text-4xl font-bold mb-3">
                    {images[0].title}
                  </h3>
                  
                  {/* Description appears on hover */}
                  <div className="overflow-hidden">
                    <p className="text-white/90 text-lg mb-6 max-w-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {images[0].desc}
                    </p>
                  </div>
                  
                  <Link
                    to={images[0].link}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 text-sm transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                  >
                    Explore Solution
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 4 IMAGES GRID - Proper Layout */}
          <div className="grid grid-cols-2 gap-6">
            {images.slice(1).map((img, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden h-[240px]"
              >
                <img
                  src={img.url}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={img.title}
                />
                
                {/* Static Content - Always Visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2">
                      {img.category}
                    </span>
                    
                    <h4 className="text-white font-semibold text-base mb-2">
                      {img.title}
                    </h4>
                    
                    {/* Description appears on hover */}
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm mb-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                        {img.desc}
                      </p>
                    </div>
                    
                    <Link
                      to={img.link}
                      className="inline-flex items-center gap-1 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                    >
                      Learn more
                      <svg 
                        className="w-3 h-3 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}