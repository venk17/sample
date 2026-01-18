import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ServiceHelpSectionBtn = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT TITLE */}
          <div className="flex items-center">
            <h2 className="text-5xl font-light leading-tight max-w-md">
              {title}
            </h2>
          </div>

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

                  {/* CONTENT */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen
                        ? "max-h-[700px] mt-8 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-16 max-w-xl text-gray-700 space-y-6">

                      <p>{item.description}</p>

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

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COMMON CTA BUTTON – only one */}
          <div className="mt-20 flex justify-center lg:col-span-2">
            <a
              href="#"
              className="
                group box-border
                inline-flex items-center justify-center
                px-12 py-5
                rounded-full
                bg-black
                text-white
                tracking-[0.25em]
                text-xs md:text-sm
                font-medium
                transition-all duration-300 ease-out
                border border-transparent hover:border-2
                hover:text-[#3b42c4]
                hover:border-[#3b42c4]
              "
            >
              IT'S TIME TO STRATEGIZE
              <span className="ml-3 text-2xl md:text-3xl font-light transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHelpSectionBtn;
