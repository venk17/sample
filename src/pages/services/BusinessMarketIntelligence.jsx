import ServiceHero from "../../components/Services/ServiceHero";
import BusinessIntroSection from "../../components/Services/BusinessIntroSection";
import ServiceHelpSection from "../../components/Services/ServiceHelpSection";

const helpItems = [
  {
    title: "Customer & Commercial Strategy",
    description:
      "We help you define your agenda. Our researchers and strategists help develop initiatives that fuel innovation, drive growth, reduce costs, and accelerate time-to-value.",
    services: [
      "Brand and experience strategy",
      "Customer engagement strategy",
      "Go-to-market planning",
      "Social and influencer strategy",
      "Campaign content development",
    ],
  },
  {
    title: "Creative & Experience Design",
    description:
      "Designing world-class customer experiences across digital platforms.",
    services: ["UX design", "UI design", "Design systems"],
  },
  {
    title: "Digital Transformation",
    description:
      "We modernize your technology and operations to enable scalable digital growth and innovation.",
    services: [
      "Digital roadmap",
      "Technology modernization",
      "Cloud migration",
      "Process automation",
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "Turning data into actionable insights to improve decision-making and business performance.",
    services: [
      "Business intelligence",
      "Customer analytics",
      "AI & machine learning",
      "Data platforms",
    ],
  },
];

const BusinessMarketIntelligence = () => {
  return (
    <main className="overflow-hidden">
      <ServiceHero
        title="Customer & Commercial Strategy"
        subtitle="Reshaping unprecedented challenges into strategic wins"
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <BusinessIntroSection />

      <ServiceHelpSection
        title="Here's how we can help you"
        items={helpItems}
      />

      {/* Next sections here */}
    </main>
  );
};

export default BusinessMarketIntelligence;
