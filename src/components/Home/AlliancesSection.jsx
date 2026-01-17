import { useState, useEffect, useRef } from "react";

const AlliancesSection = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);

  const partners = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png", url: "https://google.com" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png", url: "https://meta.com" },
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/320px-Shopify_logo_2018.svg.png", url: "https://shopify.com" },
    { name: "WordPress", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/320px-WordPress_blue_logo.svg.png", url: "https://wordpress.org" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png", url: "https://aws.amazon.com" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/320px-Adobe_Corporate_logo.svg.png", url: "https://adobe.com" },
    { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/320px-Figma-logo.svg.png", url: "https://figma.com" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/320px-Salesforce.com_logo.svg.png", url: "https://salesforce.com" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/320px-SAP_2011_logo.svg.png", url: "https://sap.com" },
    { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/320px-Notion-logo.svg.png", url: "https://notion.so" },
    { name: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Zoho_Logo_2022.svg/320px-Zoho_Logo_2022.svg.png", url: "https://zoho.com" }
  ];

  const doubledPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let isPaused = false;

    const animateScroll = () => {
      if (!isPaused) {
        scrollPosition -= 0.5;
        const scrollWidth = scrollContainer.scrollWidth / 2;
        if (Math.abs(scrollPosition) >= scrollWidth) scrollPosition = 0;
        scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
      }
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    };

    const handleEnter = () => (isPaused = true);
    const handleLeave = () => (isPaused = false);

    containerRef.current.addEventListener("mouseenter", handleEnter);
    containerRef.current.addEventListener("mouseleave", handleLeave);

    animationFrameRef.current = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">

        {/* LABEL */}
        <h3 className="uppercase tracking-[0.35em] text-[30px] font-bold mb-6 text-black text-center">
          Strategic Partnerships
        </h3>

        {/* MAIN HEADING */}
        <h2 className="text-[42px] lg:text-[56px] font-light tracking-tight leading-[1.08] text-black mb-6 text-center">
          Our Trusted <span className="text-blue-600 font-normal">Technology Partners</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[15px] text-gray-600 max-w-3xl mx-auto leading-relaxed text-center mb-16">
          We collaborate with industry-leading platforms to deliver cutting-edge solutions and drive digital transformation for our clients.
        </p>

        {/* MARQUEE */}
        <div className="relative mb-20">
          <div ref={containerRef} className="overflow-hidden py-4">
            <div ref={scrollRef} className="flex items-center gap-6 w-max">

              {doubledPartners.map((partner, index) => (
                <a key={index} href={partner.url} target="_blank" rel="noreferrer" className="flex-shrink-0">
                  <div className="bg-white rounded-2xl p-6 w-48 h-40 flex flex-col items-center justify-center border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">

                    <div className="h-20 flex items-center justify-center mb-4">
                      <img src={partner.logo} alt={partner.name} className="max-h-12 object-contain" />
                    </div>

                    <span className="text-[14px] font-medium text-gray-700">
                      {partner.name}
                    </span>

                  </div>
                </a>
              ))}

            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mb-24">

          <h3 className="text-[28px] font-light text-black tracking-tight text-center mb-6">
            Benefits of Our Partnerships
          </h3>

          <p className="text-[15px] text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Our strategic alliances enable us to deliver exceptional value through exclusive access and expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              ["Early Access", "Get early access to new features, betas, and product updates before general release."],
              ["Certified Experts", "Our team includes certified specialists with deep expertise in partner platforms."],
              ["API Access", "Exclusive API access and integration capabilities for seamless connectivity."],
              ["Co-Marketing", "Joint marketing initiatives and go-to-market strategies for mutual growth."]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">

                <h4 className="text-[16px] font-medium text-black mb-2">
                  {title}
                </h4>

                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {desc}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">

          <h3 className="text-[32px] lg:text-[40px] font-light tracking-tight mb-4">
            Interested in Partnership?
          </h3>

          <p className="text-[15px] text-blue-100 mb-8">
            Join our network of technology partners and unlock new business opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full text-[14px] font-medium hover:bg-gray-100 transition">
              Become a Partner
            </a>

            <a href="/partners" className="border-2 border-white text-white px-8 py-3 rounded-full text-[14px] font-medium hover:bg-white/10 transition">
              View All Partnerships
            </a>

          </div>

          <p className="mt-6 text-[14px] text-blue-200">
            Contact us at <span className="font-medium">partnerships@yourbrand.com</span>
          </p>

        </div>

      </div>
    </section>
  );
};

export default AlliancesSection;
