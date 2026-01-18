import { ArrowRight } from "lucide-react";

const OurWorkSection = ({ title, subtitle, items }) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          {title}
        </h2>

        <p className="text-gray-600 mb-16 max-w-2xl">
          {subtitle}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {items.map((item, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text */}
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
                {item.category}
              </p>

              <h3 className="text-lg font-medium mb-6">
                {item.client}
              </h3>

              {/* Existing link (unchanged) */}
              <a
                href={item.link}
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-black hover:opacity-70 transition"
              >
                Read more <ArrowRight size={16} />
              </a>

            </div>
          ))}

        </div>

        {/* NEW CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <a
            href="#"
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
            EXPLORE MORE STORIES
            <span className="ml-3 text-2xl md:text-3xl font-light transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurWorkSection;
