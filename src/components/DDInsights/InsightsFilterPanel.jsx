import { Search } from "lucide-react";

const topics = [
  "Artificial intelligence (AI)", "Branding", "Business strategy", "C-suite",
  "Creativity", "Consulting", "Consumer engagement", "Customer service",
  "Customer experience", "Consumer loyalty", "Design and UX",
  "Digital transformation", "Digital trends", "eCommerce", "Financial Services",
  "Future of work", "Generative AI", "Health Care", "Marketing strategy",
  "Media and advertising", "Purpose", "Resilience", "Retail", "Sales strategy",
  "Social responsibility", "Sustainability & Climate", "Tech trends",
  "Telecommunications media & entertainment", "Workforce transformation"
];

const types = ["Interview", "Perspective", "Research", "Award"];

const InsightsFilterPanel = ({ open }) => {
  if (!open) return null;

  return (
    <div className="mt-10 border-t pt-10">

      {/* Search */}
      <div className="flex items-center gap-3 border-b pb-4 mb-8">
        <Search size={18} className="text-gray-400" />
        <input
          placeholder="SEARCH"
          className="w-full outline-none text-sm tracking-widest"
        />
      </div>

      {/* TOPIC */}
      <div className="mb-10">
        <h4 className="text-xs tracking-widest mb-4">TOPIC</h4>

        <div className="flex flex-wrap gap-3">
          <FilterPill active>All Topics</FilterPill>

          {topics.map((item) => (
            <FilterPill key={item}>{item}</FilterPill>
          ))}
        </div>
      </div>

      {/* TYPE */}
      <div>
        <h4 className="text-xs tracking-widest mb-4">TYPE</h4>

        <div className="flex flex-wrap gap-3 items-center justify-between">

          <div className="flex gap-3 flex-wrap">
            <FilterPill active>All Types</FilterPill>

            {types.map((item) => (
              <FilterPill key={item}>{item}</FilterPill>
            ))}
          </div>

          <button className="text-xs tracking-widest text-gray-400 hover:text-black">
            CLEAR FILTERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsFilterPanel;

const FilterPill = ({ children, active }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full border text-sm whitespace-nowrap transition
        ${active
          ? "bg-black text-white border-black"
          : "border-black hover:bg-black hover:text-white"
        }`}
    >
      {children}
    </button>
  );
};
