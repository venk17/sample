import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const AlliancesSection = ({ title, subtitle, items, buttonText, buttonLink }) => {
  const [activeIndex, setActiveIndex] = useState(0); // first open by default

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-black">
            {title}
          </h2>
          <p className="text-gray-600 text-sm">
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
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expand content */}
                {isOpen && (
                  <div className="pb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                    <p className="text-sm text-gray-600 max-w-md">
                      {item.description}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-2 border border-black px-8 py-3 rounded-full text-sm hover:bg-black hover:text-white transition"
                      >
                        Learn more
                        <ArrowRight size={16} />
                      </a>
                    )}

                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        {buttonText && (
          <div className="mt-20 text-center">
            <a
              href={buttonLink}
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full text-sm tracking-wider hover:bg-gray-900 transition"
            >
              {buttonText}
              <ArrowRight size={16} />
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default AlliancesSection;
