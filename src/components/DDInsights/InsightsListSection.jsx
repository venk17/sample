import { useState } from "react";
import { insightsListData } from "../../data/blogData";
import InsightsListItem from "./InsightsListItem";

const ITEMS_PER_PAGE = 4;

const InsightsListSection = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleItems = insightsListData.slice(0, visibleCount);

  return (
    <section>
      {visibleItems.map((item, index) => (
        <InsightsListItem key={item.id} item={item} index={index} />
      ))}

      {visibleCount < insightsListData.length && (
        <div className="text-center my-16">
          <button
            onClick={handleShowMore}
            className="border px-10 py-3 tracking-widest hover:bg-black hover:text-white transition"
          >
            SHOW MORE
          </button>
        </div>
      )}
    </section>
  );
};

export default InsightsListSection;
