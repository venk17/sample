import React from "react";

const partnerDescriptions = {
  Google: "Built for scale, speed, and intelligent decision making",
  Meta: "Connecting brands with billions through meaningful experiences",
  Shopify: "Powering modern commerce for fast-growing businesses",
  WordPress: "Flexible content platforms for digital-first brands",
  AWS: "Secure, scalable cloud infrastructure for the enterprise",
  Adobe: "Engineered for trust, personalized for loyalty",
  Figma: "Collaborative design at the speed of modern teams",
  Salesforce: "Customer success powered by real-time intelligence",
  SAP: "Enterprise business planning in a connected world",
  Notion: "One workspace for modern knowledge teams",
  Zoho: "Smart business software for growing companies"
};

const AlliancePartnersSection = ({ partners }) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">

          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Logo */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 object-contain mb-10"
              />

              {/* Small label */}
              <div className="flex items-center gap-2 text-[12px] tracking-[0.3em] text-gray-500 mb-6">
                <span>{partner.name.toUpperCase()}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>

              {/* Big typography text */}
              <p className="text-black font-normal leading-tight tracking-tight
                            text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] max-w-sm">
                {partnerDescriptions[partner.name] || "Strategic technology partner"}
              </p>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AlliancePartnersSection;
