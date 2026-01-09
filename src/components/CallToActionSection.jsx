import { ArrowRight, Sparkles } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-800 px-8 py-20 lg:px-16 lg:py-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-green-600/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Ready to Transform?</span>
            </div>

            <h2 className="text-h1 text-white mb-6">
              We are the architects of your digital future
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of forward-thinking organizations who trust us to navigate 
              their digital transformation journey and unlock new possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#capabilities" className="btn btn-outline-white text-lg px-8 py-4">
                Explore Capabilities
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Global Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">500M+</div>
                <div className="text-gray-400 text-sm">Users Reached</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;