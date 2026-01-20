import React from 'react'
import heroVideo from "../../assets/videos/accelelators.mp4";
import ServiceHero from "../../components/Services/ServiceHero";
import IndustriesIntroSection from '../../components/Industries/IndustriesIntroSection';
import IndustriesCardsSection from '../../components/Industries/IndustriesCardsSection';

function IndustriesPage() {
  return (
    <main>
        <ServiceHero
          title="Industries"
          subtitle="Making an impact in every corner of the market"
          videoSrc={heroVideo}
        />
        
      <IndustriesIntroSection />
      <IndustriesCardsSection />
    </main>
  )
}

export default IndustriesPage