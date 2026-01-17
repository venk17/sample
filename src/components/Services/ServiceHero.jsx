import { Linkedin, Twitter, Mail, Link as LinkIcon } from "lucide-react";

const ServiceHero = ({ title, subtitle, videoSrc }) => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden text-white">

      {/* VIDEO BG */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* LEFT SOCIAL BAR */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">

        <span className="text-xs tracking-widest rotate-90 mb-6 opacity-80">
          SHARE
        </span>

        <SocialIcon><Linkedin size={16} /></SocialIcon>
        <SocialIcon><Twitter size={16} /></SocialIcon>
        <SocialIcon><Mail size={16} /></SocialIcon>
        <SocialIcon><LinkIcon size={16} /></SocialIcon>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-16">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            {subtitle}
          </p>

        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ children }) => (
  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
    {children}
  </div>
);

export default ServiceHero;
