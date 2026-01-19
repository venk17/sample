import { Search } from "lucide-react";

const sectors = [
  "All Sectors",
  "Digital Transformation",
  "Artificial Intelligence",
  "E-commerce",
  "Finance",
  "Sustainability",
  "Healthcare",
  "Cybersecurity",
  "Manufacturing",
  "Workplace"
];

const reportTypes = [
  "All Types",
  "Market Research",
  "Research Report",
  "Market Forecast",
  "Quarterly Report",
  "Industry Index",
  "Market Analysis",
  "Data Analysis"
];

const years = ["All Years", "2024", "2023", "2022", "2021"];

const ReportsFilterPanel = ({ open }) => {
  if (!open) return null;

  return (
    <div className="mt-10 border-t pt-10">

      {/* Search */}
      <div className="flex items-center gap-3 border-b pb-4 mb-10">
        <Search size={18} className="text-gray-400" />
        <input
          placeholder="SEARCH"
          className="w-full outline-none text-sm tracking-widest placeholder-gray-400"
        />
      </div>

      {/* SECTOR */}
      <div className="mb-10">
        <h4 className="text-xs tracking-[0.3em] mb-4">SECTOR</h4>
        <div className="flex flex-wrap gap-3">
          {sectors.map((item, i) => (
            <FilterPill key={i} active={i === 0}>
              {item}
            </FilterPill>
          ))}
        </div>
      </div>

      {/* REPORT TYPE */}
      <div className="mb-10">
        <h4 className="text-xs tracking-[0.3em] mb-4">REPORT TYPE</h4>
        <div className="flex flex-wrap gap-3">
          {reportTypes.map((item, i) => (
            <FilterPill key={i} active={i === 0}>
              {item}
            </FilterPill>
          ))}
        </div>
      </div>

      {/* YEAR */}
      <div>
        <h4 className="text-xs tracking-[0.3em] mb-4">YEAR</h4>

        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex gap-3 flex-wrap">
            {years.map((item, i) => (
              <FilterPill key={i} active={i === 0}>
                {item}
              </FilterPill>
            ))}
          </div>

          <button className="text-xs tracking-widest text-gray-400 hover:text-black transition">
            CLEAR FILTERS
          </button>
        </div>
      </div>

    </div>
  );
};

export default ReportsFilterPanel;

/* ---------- Pill Button ---------- */

const FilterPill = ({ children, active }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full border text-sm whitespace-nowrap transition
        ${
          active
            ? "bg-black text-white border-black"
            : "border-black hover:bg-black hover:text-white"
        }`}
    >
      {children}
    </button>
  );
};
