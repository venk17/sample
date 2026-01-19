import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogData } from "../../data/blogData";

const BlogCardCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(420);
  const total = blogData.length;

  // Detect screen size
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setCardWidth(window.innerWidth - 48); // mobile padding safe
      } else {
        setCardWidth(420);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const prev = () => setCurrent((p) => Math.max(p - 1, 0));
  const next = () => setCurrent((p) => Math.min(p + 1, total - 1));

  const progressWidth = ((current + 1) / total) * 100;

  return (
    <section className="w-full py-14 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Slider */}
        <div className="overflow-hidden mb-8 sm:mb-10">
          <div
            className="flex gap-6 sm:gap-10 transition-transform duration-500"
            style={{ transform: `translateX(-${current * cardWidth}px)` }}
          >
            {blogData.map((item) => (
              <div
                key={item.id}
                style={{ minWidth: cardWidth, maxWidth: cardWidth }}
                className="bg-white overflow-hidden flex-shrink-0"
              >
                <div className="w-full h-[240px] sm:h-[360px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-4 sm:px-6 pt-5 pb-7">
                  <p className="text-xs tracking-widest text-gray-500 uppercase mb-2 sm:mb-3">
                    {item.category}
                  </p>

                  <h3 className="text-xl sm:text-3xl font-light leading-snug mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center text-xs sm:text-sm text-gray-500 gap-3">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                    <span className="ml-auto text-lg">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Progress bar */}
          <div className="w-full sm:max-w-md h-[5px] bg-gray-300 rounded overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-500"
              style={{ width: `${progressWidth}%` }}
            />
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition disabled:opacity-40"
              disabled={current === 0}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition disabled:opacity-40"
              disabled={current === total - 1}
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogCardCarousel;
