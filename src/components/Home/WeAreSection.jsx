import { ArrowRight } from "lucide-react";

const WeAreSection = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden mb-24">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#c76a2a,transparent_45%),radial-gradient(circle_at_80%_50%,#0f766e,transparent_45%)]" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* LABEL */}
        <div className="text-[15px] font-bold tracking-[0.35em] uppercase mb-10 text-white/90">
          WE ARE
        </div>

        {/* MAIN HEADING */}
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] max-w-5xl mx-auto mb-14 text-white">
          Tens of thousands of creative and technology professionals across 47
          studios around the world
        </h2>

        {/* CTA BUTTON */}
        <a
          href="/careers"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white text-white text-[14px] font-medium hover:bg-white hover:text-black transition-all duration-300 group/button"
        >
          Join our team
          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
        </a>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">

          <div className="text-center">
            <div className="text-4xl font-light text-white mb-2">47</div>
            <div className="text-[14px] text-white/80">Global Studios</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-light text-white mb-2">24</div>
            <div className="text-[14px] text-white/80">Countries</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-light text-white mb-2">15+</div>
            <div className="text-[14px] text-white/80">Years Experience</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeAreSection;
