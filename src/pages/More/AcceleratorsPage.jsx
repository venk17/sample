import React from 'react'
import ServiceHero from '../../components/Services/ServiceHero';
import AcceleratorsIntroSection  from "../../components/Accelerators/AcceleratorsIntroSection";
import AcceleratorsGridSection from '../../components/Accelerators/AcceleratorsGridSection';

function AcceleratorsPage() {
  return (
    <main>
        <ServiceHero
        title="Our Accelerators"
        subtitle="Ignite transformation, unlock potentia"
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <AcceleratorsIntroSection />
         <AcceleratorsGridSection />
    </main>
  )
}

export default AcceleratorsPage