import { useState } from "react";

import InsightsHero from "../../components/DDInsights/InsightsHero";
import BlogCardCarousel from "../../components/DDInsights/BlogCardCarousel";

import InsightsHeader from "../../components/DDInsights/InsightsHeader";
import InsightsFilterPanel from "../../components/DDInsights/InsightsFilterPanel";
import InsightsListSection from "../../components/DDInsights/InsightsListSection";

import { insightsListData } from "../../data/blogData";

const BlogPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      {/* Hero */}
      <InsightsHero />

      {/* Carousel */}
      <BlogCardCarousel />

      {/* DD INSIGHTS Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Header with Filter button */}
        <InsightsHeader
          count={insightsListData.length}
          onFilterClick={() => setOpen(!open)}
        />

        {/* Filter panel */}
        <InsightsFilterPanel open={open} />

        {/* Blog list */}
        <InsightsListSection />

      </section>
    </main>
  );
};

export default BlogPage;
