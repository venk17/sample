import { useState } from "react";
import ReportListItem from "./ReportListItem";
import { industryReports } from "../../data/reportsData";

const ITEMS_PER_LOAD = 4;

const ReportsListSection = () => {
  const [visible, setVisible] = useState(ITEMS_PER_LOAD);

  const showMore = () => {
    setVisible(prev => prev + ITEMS_PER_LOAD);
  };

  return (
    <section>
      {industryReports.slice(0, visible).map((report, index) => (
        <ReportListItem
          key={report.id}
          report={report}
          index={index}
        />
      ))}

      {visible < industryReports.length && (
        <div className="text-center my-16">
          <button
            onClick={showMore}
            className="border px-12 py-3 tracking-widest hover:bg-black hover:text-white transition"
          >
            SHOW MORE
          </button>
        </div>
      )}
    </section>
  );
};

export default ReportsListSection;
