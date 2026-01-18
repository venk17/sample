import ServiceHero from "../../components/Services/ServiceHero";
import BusinessIntroSectionBtn from "../../components/Services/BusinessIntroSectionBtn";
import ServiceHelpSection from "../../components/Services/ServiceHelpSection";
import ServiceQuoteSection from "../../components/Services/ServiceQuoteSection";
import AlliancesSection from "../../components/Services/AlliancesSection";
import ServiceCtaBanner from "../../components/Services/ServiceCtaBanner";
import ServiceCapabilitiesCarousel from "../../components/Services/ServiceCapabilitiesCarousel";
import QuoteBanner from "../../components/Services/QuoteBanner";
import FeaturedAccelerators from "../../components/Services/FeaturedAccelerators";
import OurWorkSection from "../../components/Services/OurWorkSection";
import QuoteCtaSection from "../../components/Services/QuoteCtaSection";
import InsightCardsSection from "../../components/Services/InsightCardsSection";

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

const acceleratorsData = [
  {
    name: "TrustID™",
    description:
      "The Human Experience (HX™) TrustID™ is a data-driven tool that identifies trust strengths and deficits—so you can start closing the gaps. What's your business' trust score?",
    link: "#"
  },
  {
    name: "BrandWorth™",
    description:
      "BrandWorth™ is a powerful new way to measure the impact of brand investment. Make brand a C-suite priority and drive growth for your business.",
    link: "#"
  },
  {
    name: "Human Experience™",
    description:
      "HX™ helps leaders who are responsible for their organization’s customer, workforce, and partner experiences create valuable solutions that put humans first.",
    link: "#"
  }
];

const workData = [
  {
    image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg",
    category: "Fan Experience",
    client: "WNBA",
    link: "#"
  },
  {
    image: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg",
    category: "Customer Journey",
    client: "SoFi Stadium",
    link: "#"
  },
  {
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    category: "Experience Strategy",
    client: "New Balance",
    link: "#"
  }
];
const Insightdata = [
  {
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    category: "Innovation Strategies",
    title: "Make your organization innovation-ready with four bold strategies"
  },
  {
    image: "https://images.pexels.com/photos/7709086/pexels-photo-7709086.jpeg",
    category: "Marketing Beyond Podcast",
    title: "Hear ways to write BetterBriefs that drive better marketing results"
  },
  {
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    category: "Generative AI",
    title: "Transforming retail and consumer brands with GenAI"
  },
  {
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    category: "Generative AI",
    title: "Transforming retail and consumer brands with GenAI"
  },
  {
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    category: "Generative AI",
    title: "Transforming retail and consumer brands with GenAI"
  }
];
const alliancesData = [
  {
    name: "Adobe",
    description: "Transforming next-gen digital commerce",
    link: "/alliances/adobe"
  },
  {
    name: "commercetools",
    description: "Composable commerce platform for modern brands",
    link: "/alliances/commercetools"
  },
  {
    name: "Salesforce",
    description: "Customer 360 digital solutions",
    link: "/alliances/salesforce"
  },
  {
    name: "SAP",
    description: "Enterprise commerce & ERP integration",
    link: "/alliances/sap"
  },
  {
    name: "Shopify",
    description: "Scalable ecommerce for fast-growing brands",
    link: "/alliances/shopify"
  }
];

const  DigitalExperience= () => {
  return (
    <main className="overflow-hidden">
      <ServiceHero
        title="Customer & Commercial Strategy"
        subtitle="Reshaping unprecedented challenges into strategic wins"
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <BusinessIntroSectionBtn />
      <ServiceQuoteSection
        quote="The collaboration and experience across retail and digital experiences from Deloitte Digital enabled us to transform our company—and not just deliver a digital store but truly deliver for the fearlessly independent."
        name="Damien Leigh"
        role="SVP Direct to Consumer, New Balance"
      />

      <ServiceHelpSection
        title="Here's how we can help you"
        items={helpItems}
      />
      <AlliancesSection
        title="The power of our alliances and accelerators"
        subtitle="We can't do it alone. We've created strong alliances and accelerators with top industry and technology leaders."
        items={alliancesData}
        buttonText="Explore all our alliances"
        buttonLink="/alliances"
     />
      
      <ServiceCtaBanner
        label="GET INNOVATIVE"
        title="Explore the Ten Types of Innovation"
        buttonText="TEN TYPES OF INNOVATION"
        buttonLink="/innovation"
      />
      <ServiceCapabilitiesCarousel/>
      <QuoteBanner
        quote="Today's customers are more empowered, wielding the power of choice and influence. To thrive, companies must embrace innovation, adaptability, and a keen understanding of what fosters trust through their products, services, and experiences."
        author="Jon Valenti"
        role="Principal, Deloitte Digital"
      />
      <FeaturedAccelerators
        title="Featured Accelerators"
        items={acceleratorsData}
      />
      <OurWorkSection
        title="Our work in action"
        subtitle="We create customer solutions that evolve with the times. Here's how."
        items={workData}
      />
      <QuoteCtaSection
          quote="We believe brands are financial assets, not just marketing assets. So we're helping clients develop data-driven strategies that benchmark the opportunity and enable the brand to transform the business."
          author="Maggie Gross"
          role="Principal, Deloitte Digital"
          buttonText="IT'S TIME TO STRATEGIZE"
          buttonLink="/contact"
      />
      <InsightCardsSection items={Insightdata} />
      {/* Next sections here */}
    </main>
  );
};

export default  DigitalExperience;
