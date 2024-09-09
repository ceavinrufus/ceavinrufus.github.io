"use client";

import React, { useRef } from "react";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import RecentProjects from "@/components/RecentProjects";
import { TracingBeam } from "./ui/TracingBeam";
import Tech from "./Tech";
import { Experiences } from "./Experiences";

const HomeContent = () => {
  const wrapperRef = useRef(null);
  return (
    <div className="" ref={wrapperRef}>
      <Hero2 scrollContainer={wrapperRef} />
      <div className="bg-gradient-home sm:px-5 flex flex-col items-center relative z-10 w-full">
        {/* <Hero /> */}
        <div className="relative max-w-7xl w-full sm:px-0 px-10">
          <Grid />
          <Tech />
          <RecentProjects />
          <Experiences />
          <Services />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
