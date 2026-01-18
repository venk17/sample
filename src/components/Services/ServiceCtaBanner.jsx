import { ArrowRight } from "lucide-react";

const ServiceCtaBanner = ({ label, title, buttonText, buttonLink }) => {
  return (
    <section className="relative py-24 my-24 overflow-hidden">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,#b45309,transparent_45%),radial-gradient(circle_at_80%_50%,#0f766e,transparent_45%),linear-gradient(135deg,#0f172a,#064e3b)]" />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">

          <p className="text-xs tracking-[0.3em] uppercase text-white/80 mb-6">
            {label}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-10 leading-tight">
            {title}
          </h2>

          {/* CTA BUTTON – same style as previous */}
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
      </div>
    </section>
  );
};

export default ServiceCtaBanner;
