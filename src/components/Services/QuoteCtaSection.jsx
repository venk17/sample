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

        {/* CTA BUTTON – same style as others */}
        <a
          href={buttonLink}
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
          {buttonText}

          <span className="ml-3 text-2xl md:text-3xl font-light tracking-wide transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>

      </div>

    </section>
  );
};

export default QuoteCtaSection;
