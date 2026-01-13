import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import SecurityBadges from "./components/SecurityBadges";
import BentoGrid from "./components/BentoGrid";
import Timeline from "./components/Timeline";
import CaseStudies from "./components/CaseStudies";
import PricingSection from "./components/PricingSection";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <TrustBar />
      <SecurityBadges />
      <BentoGrid />
      <Timeline />
      <CaseStudies />
      <PricingSection />
      <FAQ />
      <ContactForm />
      <Footer />
      <BackToTop />
    </main>
  );
}
