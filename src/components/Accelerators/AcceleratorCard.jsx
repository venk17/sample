const AcceleratorCard = ({ item }) => {
  return (
    <div>
      {/* Gradient box */}
      <div
        className={`h-[160px] rounded-xl flex items-center justify-center text-white text-center text-2xl font-semibold px-6 bg-gradient-to-r ${item.gradient}`}
      >
        {item.title}
      </div>

      {/* Content */}
      <div className="mt-6">
        <p className="tracking-widest text-sm mb-3 uppercase">
          EXPLORE <span className="ml-2">→</span>
        </p>

        <p className="text-[22px] leading-relaxed text-gray-900">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default AcceleratorCard;
