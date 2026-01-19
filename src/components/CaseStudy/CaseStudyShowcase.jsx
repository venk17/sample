const CaseStudyShowcase = ({ data }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-28">
      {data.map((item) => (
        <div key={item.id} className="relative">

          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[710px] object-cover rounded-xl transition-transform duration-500 hover:scale-105"
          />

          {/* Bottom Center Overlay Card */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-65px] bg-white w-[90%] md:w-[75%] px-12 py-10 shadow-xl rounded-md text-center">

            {/* Client Name */}
            <p className="text-sm tracking-[0.25em] text-gray-500 uppercase mb-3">
              {item.client}
            </p>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-5 leading-tight">
              {item.title}
            </h3>

            {/* Tags */}
            <p className="text-base md:text-lg text-gray-500">
              {item.tags.join(" | ")}
            </p>

          </div>

        </div>
      ))}
    </section>
  );
};

export default CaseStudyShowcase;
