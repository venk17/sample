const QuoteBanner = ({ quote, author, role }) => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,#b45309,transparent_45%),radial-gradient(circle_at_80%_50%,#0f766e,transparent_45%),linear-gradient(135deg,#0f172a,#064e3b)]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-10">
          “{quote}”
        </p>

        <div className="mt-6">
          <p className="font-medium">{author}</p>
          <p className="text-sm text-white/80">{role}</p>
        </div>

      </div>
    </section>
  );
};

export default QuoteBanner;
