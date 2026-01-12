import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import SecurityBadges from "./components/SecurityBadges";
import BentoGrid from "./components/BentoGrid";
import Timeline from "./components/Timeline";
import CaseStudies from "./components/CaseStudies";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <SecurityBadges />
      <BentoGrid />
      <Timeline />
      <CaseStudies />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <BackToTop />
    </main>
  );
}
