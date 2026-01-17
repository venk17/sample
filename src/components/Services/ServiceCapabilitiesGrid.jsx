import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const ServiceCapabilitiesCarousel = () => {

  const services = [
    { title: "Advertising", description: "We make sure customers can never forget you.", image: "https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg" },
    { title: "Marketing", description: "Our strategic insight makes your marketing budget seem bigger.", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
    { title: "Digital Commerce", description: "We help meet your objectives one cart at a time.", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" },
    { title: "Customer Insights", description: "Understand customer behavior deeply and act faster.", image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg" },
    { title: "Brand Strategy", description: "Build brands that people trust and remember.", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" },
    { title: "Growth Optimization", description: "Scale revenue using data-driven strategies.", image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = services.length - visibleCards;
  const step = 100 / visibleCards;

  const next = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
          Our strategy capabilities
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * step}%)` }}
          >
            {services.map((item, index) => (
              <div key={index} className="min-w-full md:min-w-[33.3333%] px-4">
                <div className="relative h-[420px] overflow-hidden group rounded-xl">

                  <img src={item.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  <div className="absolute inset-0 bg-black/45" />

                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
                    <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                    <p className="text-sm text-white/90 max-w-xs">{item.description}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Indicator + Arrows */}
          <div className="mt-12 flex items-center justify-between">

            {/* Progress Bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative h-[6px] bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
                  style={{
                    width: `${100 / (maxIndex + 1)}%`,
                    transform: `translateX(${activeIndex * 100}%)`
                  }}
                />
              </div>
            </div>

            {/* Arrows */}
            <div className="flex gap-3 ml-6">
              <button
                onClick={prev}
                className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ChevronRight />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilitiesCarousel;
