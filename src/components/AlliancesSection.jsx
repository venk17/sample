const AlliancesSection = () => {
  const partners = [
    { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" },
    { name: "SAP", logo: "https://cdn.simpleicons.org/sap/0FAAFF" },
    { name: "Google", logo: "https://cdn.simpleicons.org/google/000000" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/96BF48" },
    { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/000000" },
    { name: "Apple", logo: "https://cdn.simpleicons.org/apple/000000" },
    { name: "IBM", logo: "https://cdn.simpleicons.org/ibm/000000" },
    { name: "Oracle", logo: "https://cdn.simpleicons.org/oracle/F80000" },
    { name: "Sprinklr", logo: "https://cdn.simpleicons.org/sprinklr/000000" },
    { name: "Twilio", logo: "https://cdn.simpleicons.org/twilio/F22F46" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">

      {/* BIG HEADING */}
      <div className="px-10 mb-16">
        <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase italic text-black">
          Our Alliances
        </h2>
      </div>

      {/* FULL WIDTH MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-28 marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AlliancesSection;
