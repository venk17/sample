import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from "./components/CookieConsent";
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import BusinessMarketIntelligence from './pages/services/BusinessMarketIntelligence';
import BrandStrategy from './pages/services/BrandStrategy';
import DigitalExperience from './pages/services/DigitalExperience';
import GrowthMarketing from './pages/services/GrowthMarketing';
import OrganisationCapability from './pages/services/OrganisationCapability';
import AIAutomation from './pages/services/AIAutomation';
import InsightsPage from "./pages/InsightsPage"
import BlogPage from "./pages/Insights/Blog";
import CaseStudiesPage from "./pages/Insights/CaseStudies";
import IndustryReportsPage from "./pages/Insights/IndustryReports";
import BlogDetailPage from "./pages/Insights/BlogDetail";
import CaseStudyDetailPage from "./pages/Insights/CaseStudyDetail";
import AboutPage  from "./pages/WhoWeAre/AboutPage";
import TeamPage from './pages/WhoWeAre/TeamPage';
import CareersPage from './pages/WhoWeAre/CareersPage';
import PartnersPage from './pages/PartnersPage';
import ScrollProgressBar from './components/ScrollProgressBar';




function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ScrollProgressBar/>
        
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
             <Route path="/partners" element={<PartnersPage/>} />
            
            {/* Services Overview */}
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Individual Service Pages */}
            <Route path="/services/business-market-intelligence" element={<BusinessMarketIntelligence />} />
            <Route path="/services/brand-strategy" element={<BrandStrategy />} />
            <Route path="/services/digital-experience" element={<DigitalExperience />} />
            <Route path="/services/growth-marketing" element={<GrowthMarketing />} />
            <Route path="/services/organisation-capability" element={<OrganisationCapability />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            
            {/* Fallback route - redirect to home if no match */}
            <Route path="*" element={<Home />} />

            {/* Insights Routes */}
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/blog" element={<BlogPage />} />
            <Route path="/insights/cases" element={<CaseStudiesPage />} />
            <Route path="/insights/reports" element={<IndustryReportsPage />} />
        
            {/* Individual detail pages (optional) */}
            <Route path="/insights/blog/:id" element={<BlogDetailPage />} />
            <Route path="/insights/cases/:id" element={<CaseStudyDetailPage />} />
            
            {/*who we are */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />




          </Routes>
        </main>

        <Footer />
         {/* 👇 Cookie Popup here */}
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;