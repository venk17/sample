import { ChevronDown } from "lucide-react";
import { useState } from "react";

const AlliancesSection = ({ title, subtitle, items, buttonText, buttonLink }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-black">
            {title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* List */}
        <div className="max-w-4xl border-t border-gray-300">

          {items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-gray-300">

                {/* Heading row */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center py-8 text-left"
                >
                  <h3 className="text-xl font-light text-black">
                    {item.name}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expand content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[400px] pb-10 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">

                    <p className="text-sm text-gray-600 max-w-md leading-relaxed">
                      {item.description}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        className="
                          group box-border
                          inline-flex items-center justify-center
                          px-8 py-3
                          rounded-full
                          bg-black
                          text-white
                          tracking-[0.25em]
                          text-[11px]
                          font-medium
                          transition-all duration-300 ease-out
                          border border-transparent hover:border-2
                          hover:text-[#3b42c4]
                          hover:border-[#3b42c4]
                        "
                      >
                        LEARN MORE
                        <span className="ml-3 text-xl font-light transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </a>
                    )}

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        {buttonText && (
          <div className="mt-24 flex justify-center">
            <a
              href={buttonLink}
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
              {buttonText}
              <span className="ml-3 text-2xl md:text-3xl font-light transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default AlliancesSection;
