import { ArrowRight } from "lucide-react";

const InsightCardsSection = ({ items }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {items.map((item, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Category */}
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase mb-3 text-gray-700">
                <span>{item.category}</span>
                <ArrowRight size={14} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-light leading-snug text-black">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InsightCardsSection;
