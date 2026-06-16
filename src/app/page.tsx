import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatGoesDown from "./components/WhatGoesDown";
import WhoIsThisFor from "./components/WhoIsThisFor";
import Judges from "./components/Judges";
import RoadToDemo from "./components/RoadToDemo";
import WhereAndWhen from "./components/WhereAndWhen";
import Faq from "./components/Faq";
import SnapAndFrame from "./components/SnapAndFrame";
import BeforeTheSpark from "./components/BeforeTheSpark";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

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
