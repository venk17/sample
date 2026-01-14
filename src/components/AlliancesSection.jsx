import { useState, useEffect, useRef } from "react";

const AlliancesSection = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const partners = [
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png",
      url: "https://google.com"
    },
    { 
      name: "Meta", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png",
      url: "https://meta.com"
    },
    { 
      name: "Shopify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/320px-Shopify_logo_2018.svg.png",
      url: "https://shopify.com"
    },
    { 
      name: "WordPress", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/320px-WordPress_blue_logo.svg.png",
      url: "https://wordpress.org"
    },
    { 
      name: "AWS", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png",
      url: "https://aws.amazon.com"
    },
    { 
      name: "Adobe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/320px-Adobe_Corporate_logo.svg.png",
      url: "https://adobe.com"
    },
    { 
      name: "Figma", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/320px-Figma-logo.svg.png",
      url: "https://figma.com"
    },
    { 
      name: "Salesforce", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/320px-Salesforce.com_logo.svg.png",
      url: "https://salesforce.com"
    },
    { 
      name: "SAP", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/320px-SAP_2011_logo.svg.png",
      url: "https://sap.com"
    },
    { 
      name: "Notion", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/320px-Notion-logo.svg.png",
      url: "https://notion.so"
    },
    { 
      name: "Zoho", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Zoho_Logo_2022.svg/320px-Zoho_Logo_2022.svg.png",
      url: "https://zoho.com"
    }
  ];

  // Double the partners array for seamless infinite scroll
  const doubledPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here (pixels per frame)
    let isPaused = false;

    const animateScroll = () => {
      if (!isPaused) {
        scrollPosition -= scrollSpeed;
        
        // Reset scroll position when scrolled through one set of partners
        if (Math.abs(scrollPosition) >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Pause animation on hover
    const handleMouseEnter = () => {
      isPaused = true;
      scrollContainer.style.transition = 'transform 0.3s ease-out';
    };

    const handleMouseLeave = () => {
      isPaused = false;
      scrollContainer.style.transition = 'transform 0.1s linear';
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Start animation
    animateScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Technology Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Trusted <span className="text-blue-600">Technology Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading platforms to deliver cutting-edge solutions 
            and drive digital transformation for our clients.
          </p>
        </div>

        {/* Auto-scrolling Partners Marquee */}
        <div className="relative mb-16">
          <div 
            ref={containerRef}
            className="relative overflow-hidden py-4"
          >
            <div 
              ref={scrollRef}
              className="flex items-center gap-6 w-max"
              style={{ willChange: 'transform' }}
            >
              {doubledPartners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0"
                  onMouseEnter={() => setHoveredPartner(index % partners.length)}
                  onMouseLeave={() => setHoveredPartner(null)}
                >
                  <div className="bg-white rounded-2xl p-6 w-48 h-40 flex flex-col items-center justify-center border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    {/* Logo Container */}
                    <div className="w-full h-20 flex items-center justify-center mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-12 w-auto object-contain opacity-100 transition-all duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const container = e.target.parentElement;
                          container.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              <div class="text-xl font-bold text-gray-700">
                                ${partner.name}
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    
                    {/* Partner Name */}
                    <div className="text-center">
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                        {partner.name}
                      </span>
                    </div>

                    {/* Hover Indicator */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-1 bg-blue-500 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>
            <span className="text-sm text-gray-500">Auto-scrolling partners</span>
          </div>
        </div>

        {/* Static Grid for Mobile/Tablet */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16 lg:hidden">
          {partners.slice(0, 12).map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="bg-white rounded-2xl p-4 h-36 flex flex-col items-center justify-center border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="w-full h-16 flex items-center justify-center mb-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 w-auto object-contain opacity-100 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const container = e.target.parentElement;
                      container.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <div class="text-lg font-bold text-gray-700">
                            ${partner.name}
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                <div className="text-center">
                  <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Our Partnerships
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strategic alliances enable us to deliver exceptional value through exclusive access and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Early Access</h4>
              <p className="text-gray-600 text-sm">
                Get early access to new features, betas, and product updates before general release.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Certified Experts</h4>
              <p className="text-gray-600 text-sm">
                Our team includes certified specialists with deep expertise in partner platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">API Access</h4>
              <p className="text-gray-600 text-sm">
                Exclusive API access and integration capabilities for seamless connectivity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Co-Marketing</h4>
              <p className="text-gray-600 text-sm">
                Joint marketing initiatives and go-to-market strategies for mutual growth.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Interested in Partnership?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Join our network of technology partners and unlock new business opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Become a Partner
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/partners"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                View All Partnerships
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              Contact us at <span className="font-bold">partnerships@yourbrand.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlliancesSection;