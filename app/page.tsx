import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CATFramework from "@/components/CATFramework";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <WhoShouldJoin />
        <CATFramework />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <CTABanner />
        <LeadForm />
      </main>

      <Footer />
    </>
  );
}