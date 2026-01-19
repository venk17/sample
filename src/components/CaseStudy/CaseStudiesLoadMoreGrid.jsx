import { useState } from "react";

const CaseStudiesLoadMoreGrid = ({ data, itemsPerPage = 3 }) => {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="group cursor-pointer">

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[280px] object-cover mb-5 transition-transform duration-500 group-hover:scale-105"
            />

            <p className="text-xs tracking-[0.25em] text-gray-500 uppercase mb-2">
              {item.client}
            </p>

            <h3 className="text-xl font-light leading-snug text-black">
              {item.title}
            </h3>

          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < data.length && (
        <div className="text-center mt-16">
          <button
            onClick={handleLoadMore}
            className="border border-black px-10 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            View more
          </button>
        </div>
      )}

    </section>
  );
};

export default CaseStudiesLoadMoreGrid;
