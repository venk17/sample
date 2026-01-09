import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ClientImpactSection = () => {
  const cases = [
    {
      id: 1,
      client: "JACKSON FAMILY WINES",
      title:
        "Higher conversion and e-commerce adoption to craft wine’s digital future",
      image:
        "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
    },
    {
      id: 2,
      client: "MACY’S",
      title:
        "Reimagined retail with omnichannel experience personalization",
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
    },
    {
      id: 3,
      client: "THE RITZ-CARLTON",
      title:
        "Immersive, memorable luxury at every digital touchpoint",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % cases.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? cases.length - 1 : prev - 1
    );

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <p className="uppercase italic tracking-widest text-sm font-semibold mb-6">
          Client Impact
        </p>

        <h2 className="text-4xl lg:text-5xl font-light max-w-4xl mb-20">
          Combining creativity and technology to drive more value
        </h2>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 33.3333}%)` }}
          >
            {cases.map((item) => (
              <div key={item.id} className="min-w-[33.3333%] px-4">
                <div className="group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <p className="text-xs tracking-widest font-semibold text-gray-500 mb-3">
                    {item.client}
                  </p>

                  <h3 className="text-lg font-light mb-6 leading-relaxed">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INDICATOR + ARROWS (EXACT MATCH) */}
        <div className="mt-20 flex items-center justify-between">

          {/* PROGRESS BAR */}
          <div className="relative w-full max-w-2xl h-[4px] bg-gray-200">
            <div
              className="absolute top-0 left-0 h-[4px] bg-black transition-all duration-500"
              style={{
                width: `${100 / cases.length}%`,
                transform: `translateX(${activeIndex * 100}%)`
              }}
            />
          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-3 ml-6">
            <button
              onClick={prev}
              className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center hover:border-black transition"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={next}
              className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center hover:border-black transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientImpactSection;
