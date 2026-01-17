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

          <a
            href={buttonLink}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm tracking-wider hover:bg-gray-900 transition"
          >
            {buttonText}
            <ArrowRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
};

export default ServiceCtaBanner;
