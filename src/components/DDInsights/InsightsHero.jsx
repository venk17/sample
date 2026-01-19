const InsightsHero = () => {
  return (
    <section className="w-full bg-white pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <h1 className="
          text-[42px]
          sm:text-[64px]
          md:text-[96px]
          lg:text-[110px]
          font-light
          tracking-tight
          mb-6 sm:mb-8 md:mb-10
        ">
          INSIGHTS
        </h1>

        {/* Description */}
        <p className="
          max-w-4xl
          text-[16px]
          sm:text-[18px]
          md:text-[22px]
          lg:text-[26px]
          leading-relaxed
          text-gray-700
          font-light
        ">
          We believe that the right idea at the right moment can spark change
          and inspire action. Explore our insights on creative business
          transformation, future-proofing your business, and innovating to
          create great impact for all.
        </p>

      </div>
    </section>
  );
};

export default InsightsHero;
