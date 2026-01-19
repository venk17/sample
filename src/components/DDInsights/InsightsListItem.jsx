const InsightsListItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className={`${isEven ? "bg-white" : "bg-[#f6f6f6]"} py-20`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Category */}
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
            {item.category}
          </p>

          {/* Title */}
          <h2 className="text-4xl font-light leading-tight mb-6">
            {item.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            {item.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-10">
            <span className="bg-gray-100 px-3 py-1 rounded-full capitalize">
              {item.type}
            </span>
            <span>• {item.date}</span>
            <span>• {item.readTime}</span>

            <span className="ml-4 text-xl">→</span>
          </div>

          <hr className="mb-6" />

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center font-medium">
              {item.authorInitials}
            </div>

            <span className="text-sm text-gray-700">
              {item.author}
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[420px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default InsightsListItem;
