import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ServiceHelpSection = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT TITLE */}
          <h2 className="text-5xl font-light leading-tight max-w-md">
            {title}
          </h2>

          {/* RIGHT DROPDOWNS */}
          <div className="space-y-14">

            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-t border-gray-300 pt-6">

                  {/* HEADER */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-3xl font-light w-12">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xl font-medium">
                        {item.title}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN CONTENT */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-[700px] mt-8 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-16 max-w-xl text-gray-700 space-y-6">

                      {/* paragraph */}
                      <p>{item.description}</p>

                      {/* services list */}
                      {item.services && (
                        <>
                          <p className="font-medium text-black">
                            Related services include:
                          </p>

                          <ul className="list-disc ml-6 space-y-2">
                            {item.services.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* CTA */}
                      <button className="mt-6 bg-black text-white px-10 py-4 rounded-full tracking-widest text-xs flex items-center gap-3 hover:bg-gray-900 transition">
                        EXPLORE MORE STRATEGY CAPABILITIES →
                      </button>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHelpSection;
