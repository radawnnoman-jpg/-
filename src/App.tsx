import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import Services from './components/Services';
import AfaqStore from './components/AfaqStore';
import HackathonDashboard from './components/HackathonDashboard';
import MarketingStrategy from './components/MarketingStrategy';
import Vision2030 from './components/Vision2030';
import CEOStatement from './components/CEOStatement';
import FinancialReports from './components/FinancialReports';
import BranchesMap from './components/BranchesMap';
import WhyAfaq from './components/WhyAfaq';
import AboutCompany from './components/AboutCompany';
import StrategicRecommendations from './components/StrategicRecommendations';
import NeutralAdvisorAndReputation from './components/NeutralAdvisorAndReputation';
import CustomerJourney from './components/CustomerJourney';
import MarketingKPIs from './components/MarketingKPIs';
import ExpertArticles from './components/ExpertArticles';
import BlogSection from './components/BlogSection';
import PeriodicSurvey from './components/PeriodicSurvey';
import SocialMediaHub from './components/SocialMediaHub';
import ContactSupport from './components/ContactSupport';
import References from './components/References';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

import AcademicReport from './components/AcademicReport';

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <QuickActions />
        <Services />
        <AfaqStore />
        <HackathonDashboard />
        <MarketingStrategy />
        <CustomerJourney />
        <MarketingKPIs />
        <Vision2030 />
        <CEOStatement />
        <FinancialReports />
        <BranchesMap />
        <WhyAfaq />
        <AboutCompany />
        <StrategicRecommendations />
        <NeutralAdvisorAndReputation />
        <ExpertArticles />
        <BlogSection />
        <SocialMediaHub />
        <PeriodicSurvey />
        <ContactSupport />
        <References />
      </main>

      <Footer />
      <ChatWidget />
      <AcademicReport />
    </div>
  );
}
