const ReportsHeader = ({ count, onFilterClick }) => {
  return (
    <div className="flex justify-between items-center mb-16">

      <h2 className="text-2xl tracking-widest">
        DD INSIGHTS <span className="text-gray-400">({count})</span>
      </h2>

      <button
        onClick={onFilterClick}
        className="border px-6 py-2 tracking-widest flex items-center gap-2"
      >
        FILTERS
      </button>

    </div>
  );
};

export default ReportsHeader;
