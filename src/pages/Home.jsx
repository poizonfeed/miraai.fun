import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../sections/Hero.jsx";
import Benefits from "../sections/Benefits.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";
import FAQ from "../sections/FAQ.jsx";
import FinalCTA from "../sections/FinalCTA.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
