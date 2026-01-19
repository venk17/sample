import { ArrowRight, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroVideo1 from "../../assets/videos/herobg1.mp4";
import heroVideo3 from "../../assets/videos/hero3.mp4";


const slides = [
  {
    type: "video",
    src: heroVideo1
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  }, 
  {
    type: "video",
    src: heroVideo3
  }
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);

  /* AUTO SLIDE */
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  /* VIDEO PLAY / PAUSE CONTROL */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeSlide && isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, [activeSlide, isPlaying]);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* BACKGROUND SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "image" ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          ) : (
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={slide.src}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 text-white">
        <p className="uppercase tracking-widest text-sm mb-6">
          C SPACE AT CES
        </p>

        <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-10">
          Innovation loves company, and so do we
        </h1>

        <a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm">
          Join our livestream
          <ArrowRight size={16} />
        </a>
      </div>

      {/* LEFT INDICATORS + PLAY/PAUSE */}
      <div className="absolute bottom-10 left-8 flex items-center gap-4 z-20">
        {/* INDICATORS */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: index === activeSlide ? "80px" : "56px",
                background:
                  index === activeSlide
                    ? "#86bc25"
                    : "rgba(255,255,255,0.4)"
              }}
            />
          ))}
        </div>

        {/* PLAY / PAUSE */}
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md bg-white/20"
        >
          {isPlaying ? <Pause color="white" /> : <Play color="white" />}
        </button>
      </div>

      {/* CENTER DOWN ARROW */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
  <ChevronDown size={28} color="white" />
</div>

    </section>
  );
};

export default HeroSection;
