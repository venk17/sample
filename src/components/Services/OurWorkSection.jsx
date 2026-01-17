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

              {/* Link */}
              <a
                href={item.link}
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-black hover:opacity-70 transition"
              >
                Read more <ArrowRight size={16} />
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
