import React from "react";

const industries = [
  {
    title: "Financial Services",
    description:
      "To meet rising customer expectations and reduce costs, today’s financial services firms must focus on efficiency, relationship development, and customer loyalty. Discover our comprehensive services in the banking, insurance, investment management, and real estate sectors.",
    gradient: "from-slate-indigo-300 via-slate-indigo-500 to-slate-indigo-800",
  },
  {
    title: "Consumer",
    description:
      "Today’s consumers are complex, evolving, and have high expectations from brands. Innovation is crucial to stay competitive in this market. Learn how we help consumer-facing clients deliver impactful products and services in retail, automotive, travel, hospitality, and more.",
    gradient: "from-slate-indigo-400 via-slate-indigo-700 to-slate-indigo-950",
  },
  {
    title: "Life Sciences & Health Care",
    description:
      "The life sciences and health care industries are contending with a growing demand for services and a bevy of new trends and regulations. Discover how we address our clients’ unique challenges with integrated solutions founded on technology, data, and user experience.",
    gradient: "from-slate-indigo-500 via-slate-indigo-800 to-black",
  },
  {
    title: "Technology, Media & Telecommunications",
    description:
      "Today’s makers and creators need the best strategies, data, and creative minds on speed dial to stay ahead. Learn how we help our technology, media, and telecommunications clients excel through game days, album drops, product launches, and everything in between.",
    gradient: "from-emerald-700 via-emerald-900 to-black",
  },
  {
    title: "Energy, Resources & Industrials",
    description:
      "To succeed in an evolving energy landscape, today’s energy, resources, and industrials organizations need to embrace new capabilities and quickly adopt new technologies. Discover how we help leaders in this industry drive profitable growth with next-gen solutions.",
    gradient: "from-red-900 via-rose-950 to-black",
  },
];


const IndustriesCardsSection = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {industries.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Gradient Card */}
              <div
                className={`h-[220px] rounded-sm bg-gradient-to-br ${item.gradient}
                flex items-center justify-center`}
              >
                <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-6">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-8 text-gray-700 leading-relaxed text-[16px]">
                {item.description}
              </p>

              {/* CTA BUTTON */}
              <div className="mt-10">
                <a
                  href="#"
                  className="
                    group box-border
                    inline-flex items-center justify-center
                    px-8 py-4
                    rounded-full
                    bg-black
                    text-white
                    tracking-[0.25em]
                    text-xs
                    font-medium
                    transition-all duration-300 ease-out
                    border border-transparent hover:border-2

                    hover:text-[#3b42c4]
                    hover:border-[#3b42c4]
                  "
                >
                  LEARN MORE

                  <span className="ml-3 text-xl font-light tracking-wide transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesCardsSection;
