import { ArrowRight, Sparkles } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-800 px-8 py-20 lg:px-16 lg:py-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-green-600/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Section label - 14px, weight 500 with icon */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Ready to Transform?</span>
            </div>

            {/* Main heading - 36px mobile, 48px desktop, weight 300, tracking-tight */}
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-6">
              We are the architects of your digital future
            </h2>

            {/* Description text - 14px, weight 400 */}
            <p className="text-sm text-gray-300 mb-10 max-w-2xl mx-auto">
              Join hundreds of forward-thinking organizations who trust us to navigate 
              their digital transformation journey and unlock new possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA - 14px, weight 500 */}
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 text-sm group/primary"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover/primary:translate-x-1 transition-transform" />
              </a>
              
              {/* Secondary CTA - 14px, weight 500 */}
              <a 
                href="/capabilities" 
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-sm"
              >
                Explore Capabilities
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
              <div className="text-center">
                {/* Stat number - 24px, weight 700 (bold for emphasis in dark background) */}
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                
                {/* Stat label - 14px, weight 400 */}
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Global Support</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500M+</div>
                <div className="text-sm text-gray-400">Users Reached</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;