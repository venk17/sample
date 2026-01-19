const CaseStudiesHero = () => {
  return (
    <section className="pt-36 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h1
          className="
            text-[72px] md:text-[96px]
            font-[300]
            tracking-tight
            leading-[1]
            text-black
            mb-10
          "
          style={{ fontFamily: "Inter, Helvetica, Arial, sans-serif" }}
        >
          Our Work
        </h1>

        {/* Description */}
        <p
          className="
            max-w-4xl
            text-[20px] md:text-[22px]
            font-[400]
            text-gray-700
            leading-[1.7]
          "
          style={{ fontFamily: "Inter, Helvetica, Arial, sans-serif" }}
        >
          From ideation to realization, we connect innovation with intellectual
          rigor to drive growth across the entire customer experience. We blend
          art and science, design and engineering, and use creativity to deliver
          smarter, more effective solutions to our clients' toughest business
          problems.
        </p>

      </div>
    </section>
  );
};

export default CaseStudiesHero;
