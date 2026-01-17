import { ArrowRight } from "lucide-react";

const QuoteCtaSection = ({
  quote,
  author,
  role,
  buttonText,
  buttonLink
}) => {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,#b45309,transparent_45%),radial-gradient(circle_at_80%_50%,#0f766e,transparent_45%),linear-gradient(135deg,#0f172a,#064e3b)]" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Quote Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center text-white">

        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-10">
          “{quote}”
        </p>

        <div className="text-sm opacity-90">
          <p className="font-medium">{author}</p>
          <p>{role}</p>
        </div>
      </div>

      {/* Bottom CTA Area */}
      <div className="relative bg-white py-20 flex justify-center">

        <a
          href={buttonLink}
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full text-sm tracking-widest hover:bg-gray-900 transition"
        >
          {buttonText}
          <ArrowRight size={18} />
        </a>

      </div>

    </section>
  );
};

export default QuoteCtaSection;
