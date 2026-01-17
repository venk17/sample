import React from "react";

export default function SpotlightSection() {
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

            {/* Small Title (same as Trending Topics style) */}
            <h3 className="uppercase tracking-[0.35em] text-[20px] font-bold mb-6 text-black">
              In the spotlight
            </h3>

            {/* Main Heading (same system) */}
            <h2 className="text-[42px] lg:text-[46px] font-light mb-8 max-w-xl leading-[1.08] tracking-tight text-black">
              Deloitte Digital recognized again for digital experience services
            </h2>

            {/* Description */}
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

            {/* Button */}
            <button className="mt-12 bg-black text-white px-10 py-4 rounded-full text-[14px] font-medium tracking-wide hover:bg-gray-900 transition">
              Learn more
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
