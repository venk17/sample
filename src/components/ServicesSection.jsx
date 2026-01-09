import { useState, useMemo } from "react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("strategy");

  const tabs = [
    { id: "strategy", label: "Customer Strategy" },
    { id: "advertising", label: "Advertising" },
    { id: "marketing", label: "Marketing" },
    { id: "commerce", label: "Digital Commerce" },
    { id: "sales", label: "Sales" },
    { id: "service", label: "Service" },
    { id: "product", label: "Digital Product" }
  ];

  /* 🔹 EACH SERVICE = 5 UNIQUE IMAGES */
  const visualContent = {
    strategy: {
      images: [
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
      ],
      labels: { 1: "TrustID™", 2: "BrandWorth™" }
    },

    advertising: {
      images: [
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
        "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg"
      ],
      labels: { 1: "AdStudio™", 2: "MediaIQ™" }
    },

    marketing: {
      images: [
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
        "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
        "https://images.pexels.com/photos/3184376/pexels-photo-3184376.jpeg",
        "https://images.pexels.com/photos/3184389/pexels-photo-3184389.jpeg",
        "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg"
      ],
      labels: { 1: "Growth™", 2: "Engage™" }
    },

    commerce: {
      images: [
        "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg",
        "https://images.pexels.com/photos/3184461/pexels-photo-3184461.jpeg",
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
        "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg",
        "https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg"
      ],
      labels: { 1: "ShopIQ™", 2: "OrderFlow™" }
    },

    sales: {
      images: [
        "https://images.pexels.com/photos/3184441/pexels-photo-3184441.jpeg",
        "https://images.pexels.com/photos/3184440/pexels-photo-3184440.jpeg",
        "https://images.pexels.com/photos/3184439/pexels-photo-3184439.jpeg",
        "https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg",
        "https://images.pexels.com/photos/3184437/pexels-photo-3184437.jpeg"
      ],
      labels: { 1: "SalesCloud™", 2: "Pipeline™" }
    },

    service: {
      images: [
        "https://images.pexels.com/photos/3184426/pexels-photo-3184426.jpeg",
        "https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg",
        "https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg",
        "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg",
        "https://images.pexels.com/photos/3184422/pexels-photo-3184422.jpeg"
      ],
      labels: { 1: "SupportIQ™", 2: "CareFlow™" }
    },

    product: {
      images: [
        "https://images.pexels.com/photos/3184412/pexels-photo-3184412.jpeg",
        "https://images.pexels.com/photos/3184411/pexels-photo-3184411.jpeg",
        "https://images.pexels.com/photos/3184410/pexels-photo-3184410.jpeg",
        "https://images.pexels.com/photos/3184409/pexels-photo-3184409.jpeg",
        "https://images.pexels.com/photos/3184408/pexels-photo-3184408.jpeg"
      ],
      labels: { 1: "DesignLab™", 2: "Proto™" }
    }
  };

  const current = useMemo(
    () => visualContent[activeTab],
    [activeTab]
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <p className="uppercase italic tracking-widest text-sm font-semibold mb-6">
          What We Do
        </p>

        {/* TABS */}
        <div className="border-b border-gray-200 mb-10">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-[15px] font-medium border-b-2 transition ${
                  activeTab === tab.id
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* BIG IMAGE */}
          <div className="col-span-2 row-span-2">
            <div className="aspect-square overflow-hidden">
              <img
                src={current.images[0]}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SMALL IMAGES */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <img
                src={current.images[i]}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />

              {current.labels[i] && (
                <span className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {current.labels[i]}
                </span>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
