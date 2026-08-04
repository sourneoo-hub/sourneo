import SkipLink from "@/components/ui/SkipLink";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import QuoteSurvey from "@/components/sections/QuoteSurvey";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <QuoteSurvey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
