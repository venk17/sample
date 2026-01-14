import React, { useState, useEffect, useRef } from 'react';
import { Users, Target, Award, Globe, ChevronLeft, ChevronRight, Pause, Play, Building, Lightbulb, Handshake, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const videoRefs = useRef([]);

  // More professional and suitable videos for About page
  const heroVideos = [
    {
      id: 1,
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-multi-ethnic-business-people-in-a-meeting-4353-large.mp4",
      title: "Our People",
      subtitle: "Exceptional talent driving innovation",
      icon: <Users className="w-6 h-6" />,
      stats: "200+ Experts"
    },
    {
      id: 2,
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-business-team-working-together-in-a-modern-office-4354-large.mp4",
      title: "Collaboration",
      subtitle: "Working together for extraordinary results",
      icon: <Handshake className="w-6 h-6" />,
      stats: "500+ Projects"
    },
    {
      id: 3,
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-office-space-with-robots-and-holograms-4490-large.mp4",
      title: "Innovation",
      subtitle: "Shaping the future of technology",
      icon: <Lightbulb className="w-6 h-6" />,
      stats: "50+ Patents"
    },
    {
      id: 4,
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-modern-office-building-exterior-4304-large.mp4",
      title: "Global Presence",
      subtitle: "Delivering excellence worldwide",
      icon: <Building className="w-6 h-6" />,
      stats: "15+ Countries"
    },
    {
      id: 5,
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-business-growth-chart-overlay-on-a-city-at-dusk-4097-large.mp4",
      title: "Growth & Success",
      subtitle: "Empowering businesses to thrive",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "98% Success Rate"
    }
  ];

  // Auto-rotate videos
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, heroVideos.length]);

  // Play/pause current video
  useEffect(() => {
    if (videoRefs.current[currentVideoIndex]) {
      if (isPlaying) {
        videoRefs.current[currentVideoIndex].play().catch(console.error);
      } else {
        videoRefs.current[currentVideoIndex].pause();
      }
    }
  }, [currentVideoIndex, isPlaying]);

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? heroVideos.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setIsAutoPlay(false);
  };

  const goToVideo = (index) => {
    setIsAutoPlay(false);
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Video Carousel Hero Section */}
      <div className="relative h-[85vh] overflow-hidden">
        {/* Video Container */}
        <div className="relative w-full h-full">
          {heroVideos.map((video, index) => (
            <div
              key={video.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                autoPlay={index === currentVideoIndex}
                muted
                loop
                playsInline
                onEnded={() => {
                  if (index === currentVideoIndex && isAutoPlay) {
                    setCurrentVideoIndex((prev) => 
                      prev === heroVideos.length - 1 ? 0 : prev + 1
                    );
                  }
                }}
              >
                <source src={video.videoSrc} type="video/mp4" />
              </video>
              
              {/* Professional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Video Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-6xl px-4">
                  {/* Stats badge */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                      {video.icon}
                      <span className="text-sm font-semibold">{video.stats}</span>
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-medium text-white/90">About Us</span>
                    </div>
                  </div>
                  
                  {/* Main title with animation */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                      {video.title}
                    </span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-2xl md:text-3xl text-white/90 mb-10 font-light max-w-3xl mx-auto">
                    {video.subtitle}
                  </p>
                  
                  {/* Learn more button */}
                  <button 
                    onClick={() => document.getElementById('mission-section').scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Discover Our Story
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Carousel Controls */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="group p-4 bg-white/15 backdrop-blur-md rounded-full hover:bg-white/25 transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="group p-5 bg-white/15 backdrop-blur-md rounded-full hover:bg-white/25 transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 text-white" />
            ) : (
              <Play className="w-7 h-7 text-white" />
            )}
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="group p-4 bg-white/15 backdrop-blur-md rounded-full hover:bg-white/25 transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Carousel Indicators with Titles */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
          {heroVideos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToVideo(index)}
              className="group relative flex flex-col items-center"
              aria-label={`Go to ${video.title}`}
            >
              <div className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentVideoIndex 
                  ? 'w-12 bg-white shadow-lg' 
                  : 'w-6 bg-white/40 hover:bg-white/60'
              }`} />
              {/* Video title on hover */}
              <div className="absolute -top-8 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {video.title}
              </div>
            </button>
          ))}
        </div>

        {/* Video Counter */}
        <div className="absolute top-8 right-8">
          <div className="px-5 py-2.5 bg-black/50 backdrop-blur-lg rounded-full border border-white/10">
            <span className="text-white text-sm font-medium">
              {String(currentVideoIndex + 1).padStart(2, '0')} / {String(heroVideos.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/70 font-medium">SCROLL</span>
            <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="mission-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive sustainable growth, 
                enhance customer experiences, and create lasting value in an ever-evolving 
                technological landscape through innovation and expertise.
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-16 -translate-x-16" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the global leader in digital innovation, setting new standards 
                for excellence and transforming industries through technology that 
                makes a meaningful difference while maintaining sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-700 font-bold">OUR JOURNEY</span>
              <div className="w-6 h-px bg-blue-300" />
              <span className="text-purple-700 font-bold">LEGACY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Story</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A journey of relentless innovation, exponential growth, and transformative impact
            </p>
          </div>
          
          <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 overflow-hidden">
            {/* Timeline Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "2015", label: "Year Founded", color: "text-blue-600" },
                { number: "200+", label: "Global Experts", color: "text-purple-600" },
                { number: "50+", label: "Countries Served", color: "text-green-600" },
                { number: "500+", label: "Projects Delivered", color: "text-orange-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-5xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  In 2015, Digital Dynamics was founded by visionary technologists with a shared 
                  mission: to bridge the gap between traditional business operations and the 
                  limitless potential of digital innovation.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  What began as a passionate startup has evolved into a global powerhouse with 
                  over 200 elite experts spanning three continents. Our journey has been marked 
                  by breakthrough innovations, enduring partnerships, and an unwavering 
                  commitment to pushing technological boundaries.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Today, we partner with Fortune 500 leaders, disruptive startups, and visionary 
                  enterprises across all sectors, delivering solutions that don't just transform 
                  businesses—they redefine entire industries and shape the digital future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
              <span className="text-green-700 font-bold">CORE PRINCIPLES</span>
              <div className="w-6 h-px bg-green-300" />
              <span className="text-emerald-700 font-bold">VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Values</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              The guiding principles that shape our culture and drive our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: "Collaborative Excellence",
                description: "We foster environments where diverse perspectives converge to create extraordinary outcomes through collective intelligence and shared purpose.",
                gradient: "from-blue-100 to-blue-50",
                hover: "hover:shadow-blue-100"
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Uncompromising Quality",
                description: "We pursue perfection in every detail, delivering exceptional quality and exceeding expectations as our standard operating procedure.",
                gradient: "from-purple-100 to-purple-50",
                hover: "hover:shadow-purple-100"
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Boundless Innovation",
                description: "We relentlessly explore uncharted territories, embracing emerging technologies to pioneer industry-defining solutions that shape tomorrow.",
                gradient: "from-green-100 to-green-50",
                hover: "hover:shadow-green-100"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${value.gradient} rounded-3xl p-10 border border-gray-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group`}
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <div className="text-gray-800">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;