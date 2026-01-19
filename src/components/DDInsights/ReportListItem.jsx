const ReportListItem = ({ report, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`${isEven ? "bg-white" : "bg-gray-100"} py-14`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="tracking-widest text-sm mb-3 uppercase">
            {report.sector}
          </p>

          <h2 className="text-4xl font-light mb-6 leading-tight">
            {report.title}
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {report.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="bg-gray-200 px-3 py-1 rounded-full">
              {report.reportType}
            </span>
            <span>{report.publishDate}</span>
            <span>•</span>
            <span>{report.pages} pages</span>
            <span className="ml-auto text-xl">→</span>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              {report.publisher.charAt(0)}
            </div>
            <span className="text-sm text-gray-700">{report.publisher}</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={report.coverImage}
          alt={report.title}
          className="w-full h-[340px] object-cover"
        />
      </div>
    </div>
  );
};

export default ReportListItem;
