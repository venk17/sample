import { ArrowRight } from "lucide-react";

const WeAreSection = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND (SOFT BLUR + COLOR BLEND LIKE DELOITTE) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#c76a2a,transparent_45%),radial-gradient(circle_at_80%_50%,#0f766e,transparent_45%)]"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-6">

        {/* LABEL */}
        <div className="text-sm font-bold tracking-widest uppercase italic mb-8">
          WE ARE
        </div>

        {/* MAIN TEXT */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed max-w-5xl mx-auto mb-14">
          Tens of thousands of creative and technology professionals across 47
          studios around the world
        </h2>

        {/* BUTTON */}
        <a
          href="#careers"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white text-white text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          Join our team
          <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
};

export default WeAreSection;
