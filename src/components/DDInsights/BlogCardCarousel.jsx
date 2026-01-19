import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogData } from "../../data/blogData";

const CARD_WIDTH = 460;

const BlogCardCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = blogData.length;

  const prev = () => setCurrent((p) => Math.max(p - 1, 0));
  const next = () => setCurrent((p) => Math.min(p + 1, total - 1));

  const progressWidth = ((current + 1) / total) * 100;

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Slider */}
        <div className="overflow-hidden mb-10">
          <div
            className="flex gap-10 transition-transform duration-500"
            style={{ transform: `translateX(-${current * CARD_WIDTH}px)` }}
          >
            {blogData.map((item) => (
              <div
                key={item.id}
                className="bg-white overflow-hidden min-w-[420px] max-w-[420px] flex-shrink-0"
              >
                <div className="w-full h-[360px] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="px-6 pt-6 pb-8">
                  <p className="text-xs tracking-widest text-gray-500 uppercase mb-3">
                    {item.category}
                  </p>

                  <h3 className="text-3xl font-light leading-snug mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-base mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 gap-3">
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
        <div className="flex items-center justify-between">

          {/* Left: progress bar */}
          <div className="w-full max-w-md h-[6px] bg-gray-300 rounded overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-500"
              style={{ width: `${progressWidth}%` }}
            />
          </div>

          {/* Right: arrows */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
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
