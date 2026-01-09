import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TransformationSection from './components/TransformationSection';
import ClientImpactSection from './components/ClientImpactSection';
import ServicesSection from './components/ServicesSection';
import InsightsSection from './components/InsightsSection';
import AlliancesSection from './components/AlliancesSection';
import WeAreSection from './components/WeAreSection';
import LocationsSection from './components/LocationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TransformationSection />
        <ClientImpactSection />
        <ServicesSection />
        <InsightsSection />
        <AlliancesSection />
        <WeAreSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;