import React from 'react'
import ServiceHero from '../../components/Services/ServiceHero';
import AcceleratorsIntroSection  from "../../components/Accelerators/AcceleratorsIntroSection";
import AcceleratorsGridSection from '../../components/Accelerators/AcceleratorsGridSection';
import heroVideo from "../../assets/videos/accelelators.mp4"

function AcceleratorsPage() {
  return (
    <main>
        <ServiceHero
        title="Our Accelerators"
        subtitle="Ignite transformation, unlock potentia"
        videoSrc={heroVideo}
        />
        <AcceleratorsIntroSection />
         <AcceleratorsGridSection />
    </main>
  )
}

export default AcceleratorsPage