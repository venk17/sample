const InsightsHeader = ({ count, onFilterClick }) => {
  return (
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-xl tracking-widest">
        DD INSIGHTS <span className="text-gray-400">({count})</span>
      </h2>

      <button
        onClick={onFilterClick}
        className="border px-6 py-2 tracking-widest flex items-center gap-2 hover:bg-black hover:text-white transition"
      >
        FILTERS
        <span>☰</span>
      </button>
    </div>
  );
};

export default InsightsHeader;
