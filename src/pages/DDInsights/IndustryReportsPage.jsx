import { useState } from "react";
import ReportsHero from "../../components/DDInsights/ReportsHero";
import ReportsHeader from "../../components/DDInsights/ReportsHeader";
import ReportsFilterPanel from "../../components/DDInsights/ReportsFilterPanel";
import ReportsListSection from "../../components/DDInsights/ReportsListSection";
import { industryReports } from "../../data/reportsData";

const IndustryReportsPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
         {/* HERO SECTION */}
      <ReportsHero />

      <ReportsHeader
        count={industryReports.length}
        onFilterClick={() => setOpen(!open)}
      />

      <ReportsFilterPanel open={open} />

      <ReportsListSection />

    </main>
  );
};

export default IndustryReportsPage;
