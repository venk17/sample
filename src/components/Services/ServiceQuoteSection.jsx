const ServiceQuoteSection = ({ quote, name, role }) => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#b45309,transparent_40%),radial-gradient(circle_at_80%_60%,#0f766e,transparent_45%),linear-gradient(135deg,#0f172a,#064e3b)]" />

      {/* Overlay for softness */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        {/* Quote */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-10">
          “{quote}”
        </p>

        {/* Author */}
        <div className="text-sm tracking-wide">
          <div className="font-medium">{name}</div>
          <div className="text-white/80 mt-1">{role}</div>
        </div>

      </div>
    </section>
  );
};

export default ServiceQuoteSection;
