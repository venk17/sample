import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const ClientImpactSection = () => {
  const cases = [
    {
      id: 1,
      client: "JACKSON FAMILY WINES",
      title: "Higher conversion and e-commerce adoption to craft wine's digital future",
      image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
    },
    {
      id: 2,
      client: "MACY'S",
      title: "Reimagined retail with omnichannel experience personalization",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
    },
    {
      id: 3,
      client: "THE RITZ-CARLTON",
      title: "Immersive, memorable luxury at every digital touchpoint",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
    },
    {
      id: 4,
      client: "NIKE",
      title: "Digital commerce transformation for global scale",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
    }
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
  const maxIndex = cases.length - visibleCards;

  const next = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const step = 100 / visibleCards;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* LABEL – same as TransformationSection */}
        <h3 className="uppercase tracking-[0.01em] text-[28px] font-black mb-6 text-black drop-shadow-[0_1px_0_#000]">
          Client Impact
        </h3>

        {/* HEADING – same as TransformationSection */}
        <h2 className="text-[42px] font-light mb-20 max-w-4xl leading-[1.15] text-black">
          Combining creativity and technology to drive more value
        </h2>

        {/* SLIDER */}
        <div className="relative overflow-hidden touch-pan-y">
          <div
            className="flex transition-transform duration-700 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${activeIndex * step}%)` }}
          >
            {cases.map((item) => (
              <div key={item.id} className="min-w-full md:min-w-[33.3333%] px-4">
                <div className="group cursor-pointer">

                  {/* IMAGE */}
                  <div className="aspect-[16/10] overflow-hidden mb-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* CLIENT */}
                  <p className="text-[12px] tracking-[0.3em] font-semibold text-gray-500 mb-4 uppercase">
                    {item.client}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-[22px] font-light leading-snug tracking-tight text-black mb-6">
                    {item.title}
                  </h3>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-3 text-[14px] font-medium tracking-wide text-black group-hover:opacity-80 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* PROGRESS + CONTROLS */}
          <div className="mt-14 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">

              {/* BAR */}
              <div className="flex-1 max-w-2xl">
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

              {/* ARROWS */}
              <div className="flex items-center gap-3 ml-8">
                <button
                  onClick={prev}
                  className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={next}
                  className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientImpactSection;
