import { ArrowRight } from "lucide-react";

const FeaturedAccelerators = ({ title, items }) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <p className="text-sm tracking-widest uppercase text-gray-500 mb-10">
          {title}
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white p-12 flex flex-col justify-between min-h-[420px]"
            >
              <div>
                <h3 className="text-3xl font-light mb-6">{item.name}</h3>

                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <a
                href={item.link}
                className="mt-10 inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-70 transition"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedAccelerators;
