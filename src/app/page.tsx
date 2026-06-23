import About from "./components/About";
import BeforeTheSpark from "./components/BeforeTheSpark";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Judges from "./components/Judges";
import Nav from "./components/Nav";
import RoadToDemo from "./components/RoadToDemo";
import SnapAndFrame from "./components/SnapAndFrame";
import UnderConstruction from "./components/UnderConstruction";
import WhatGoesDown from "./components/WhatGoesDown";
import WhereAndWhen from "./components/WhereAndWhen";
import WhoIsThisFor from "./components/WhoIsThisFor";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-navy-900">
        <Hero />
        <About />
        <WhatGoesDown />
        <WhoIsThisFor />
        <Judges />
        <RoadToDemo />
        <WhereAndWhen />
        <Faq />
        <SnapAndFrame />
        <BeforeTheSpark />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
