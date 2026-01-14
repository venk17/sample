import { ArrowRight } from "lucide-react";

const WeAreSection = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden mb-24">
      {/* BACKGROUND (SOFT BLUR + COLOR BLEND LIKE DELOITTE) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#c76a2a,transparent_45%),radial-gradient(circle_at_80%_50%,#0f766e,transparent_45%)]"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* LABEL - 14px, weight 600, tracking-[0.3em] */}
        <div className="text-sm font-semibold tracking-[0.3em] uppercase mb-8 text-white/90">
          WE ARE
        </div>

        {/* MAIN TEXT - 36px mobile, 48px desktop, weight 300, tracking-tight */}
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-relaxed max-w-5xl mx-auto mb-14 text-white">
          Tens of thousands of creative and technology professionals across 47
          studios around the world
        </h2>

        {/* BUTTON - 14px, weight 500 */}
        <a
          href="/careers"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 group/button"
        >
          Join our team
          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
        </a>

        {/* Additional metrics/stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            {/* Stat number - 36px, weight 300 */}
            <div className="text-4xl font-light text-white mb-2">47</div>
            
            {/* Stat label - 14px, weight 400 */}
            <div className="text-sm text-white/80">Global Studios</div>
          </div>
          
          <div className="text-center">
            {/* Stat number - 36px, weight 300 */}
            <div className="text-4xl font-light text-white mb-2">24</div>
            
            {/* Stat label - 14px, weight 400 */}
            <div className="text-sm text-white/80">Countries</div>
          </div>
          
          <div className="text-center">
            {/* Stat number - 36px, weight 300 */}
            <div className="text-4xl font-light text-white mb-2">15+</div>
            
            {/* Stat label - 14px, weight 400 */}
            <div className="text-sm text-white/80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreSection;