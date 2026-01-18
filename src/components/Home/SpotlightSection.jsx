import React from "react";

export default function SpotlightSection({
  buttonText = "LEARN MORE",
  buttonLink = "/insights"
}) {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Gartner Magic Quadrant"
              className="max-w-[520px] w-full object-contain shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* LABEL */}
            <h3 className="uppercase tracking-[0.01em] text-[28px] font-black mb-6 text-black drop-shadow-[0_1px_0_#000]">
              In the spotlight
            </h3>

            {/* MAIN HEADING */}
            <h2 className="text-[42px] font-light mb-8 max-w-xl leading-[1.15] text-black">
              Deloitte Digital recognized again for digital experience services
            </h2>

            {/* DESCRIPTION */}
            <div className="space-y-5 max-w-xl">
              <p className="text-[15px] text-gray-600 leading-relaxed">
                We're thrilled to share that we've been named a Leader in
                Gartner's Magic Quadrant™ for Digital Experience Services for
                the second year in a row! We also scored highest in all five
                Use Cases in the Gartner® Critical Capabilities for Digital
                Experience Services 2025 report.
              </p>

              <p className="text-[15px] text-gray-600 leading-relaxed">
                This recognition is a testament to how our deep industry
                knowledge, advanced engineering, and agentic AI capabilities
                enable our clients to confidently navigate challenges and
                seize competitive advantage.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-24 flex justify-start">
              <a
                href={buttonLink}
                className="
                  group inline-flex items-center justify-center
                  px-12 py-5 rounded-full
                  bg-black text-white
                  tracking-[0.25em]
                  text-xs md:text-sm
                  font-medium
                  transition-all duration-300 ease-out
                  border border-transparent hover:border-2
                  hover:text-[#3b42c4]
                  hover:border-[#3b42c4]
                "
              >
                {buttonText}
                <span className="ml-3 text-2xl md:text-3xl font-light transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
