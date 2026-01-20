import React from "react";
import heroVideo from "../../assets/videos/accelelators.mp4";
import ServiceHero from "../../components/Services/ServiceHero";
import AllianceIntroSection from "../../components/Alliance/AllianceIntroSection";
import AlliancePartnersSection from "../../components/Alliance/AlliancePartnersSection";

const partners = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png", url: "https://google.com" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png", url: "https://meta.com" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/320px-Shopify_logo_2018.svg.png", url: "https://shopify.com" },
  { name: "WordPress", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/320px-WordPress_blue_logo.svg.png", url: "https://wordpress.org" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png", url: "https://aws.amazon.com" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/320px-Adobe_Corporate_logo.svg.png", url: "https://adobe.com" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/320px-Figma-logo.svg.png", url: "https://figma.com" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/320px-Salesforce.com_logo.svg.png", url: "https://salesforce.com" },
  { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/320px-SAP_2011_logo.svg.png", url: "https://sap.com" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/320px-Notion-logo.svg.png", url: "https://notion.so" },
  { name: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Zoho_Logo_2022.svg/320px-Zoho_Logo_2022.svg.png", url: "https://zoho.com" }
];

function AlliancePage() {
  return (
    <main>
      <ServiceHero
        title="Our Alliances"
        subtitle="The power of collaboration"
        videoSrc={heroVideo}
      />

      <AllianceIntroSection />

      <AlliancePartnersSection partners={partners} />
    </main>
  );
}

export default AlliancePage;
