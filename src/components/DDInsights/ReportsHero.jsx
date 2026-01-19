const ReportsHero = () => {
  return (
    <section className="w-full bg-white pt-28 sm:pt-32 md:pt-[160px] pb-16 sm:pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <h1
          className="
            text-[40px]
            sm:text-[60px]
            md:text-[88px]
            lg:text-[100px]
            font-light
            tracking-tight
            mb-6 sm:mb-8 md:mb-10
          "
        >
          INDUSTRY REPORTS
        </h1>

        {/* Description */}
        <p
          className="
            max-w-4xl
            text-[16px]
            sm:text-[18px]
            md:text-[22px]
            lg:text-[26px]
            leading-relaxed
            text-gray-700
            font-light
          "
        >
          Explore our in-depth industry reports, market intelligence, and
          data-driven research designed to help leaders make confident,
          future-ready decisions across sectors.
        </p>

      </div>
    </section>
  );
};

export default ReportsHero;
