import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % cases.length);
  const prev = () => setActiveIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* LABEL */}
        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-gray-600 mb-6">
          Client Impact
        </p>

        {/* HEADING */}
        <div className="mb-16 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight text-black">
            Combining creativity and technology to drive more value
          </h2>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 33.3333}%)` }}
          >
            {cases.map((item) => (
              <div key={item.id} className="min-w-[33.3333%] px-4">
                <div className="group cursor-pointer">

                  {/* IMAGE */}
                  <div className="aspect-[16/10] overflow-hidden mb-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* CLIENT */}
                  <p className="text-xs tracking-[0.3em] font-semibold text-gray-500 mb-4 uppercase">
                    {item.client}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-xl font-light leading-snug tracking-tight text-black mb-8">
                    {item.title}
                  </h3>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-black group-hover:opacity-80 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* PROGRESS */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">

              {/* BAR */}
              <div className="flex-1 max-w-2xl">
                <div className="relative h-[3px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
                    style={{
                      width: `${100 / cases.length}%`,
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
