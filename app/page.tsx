"use client";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Monster from "@/components/Monster";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { useRef } from "react";

export default function Home() {
  const wrapperRef = useRef(null);

  return (
    <main className="relative bg-black-100 mx-auto overflow-clip">
      <FloatingNav navItems={navItems} />
      <div className="" ref={wrapperRef}>
        <Hero2 scrollContainer={wrapperRef} />
        <div className="bg-gradient-home flex flex-col items-center relative z-10 w-full mt-[-20px]">
          {/* <Hero /> */}
          <div className="relative max-w-7xl w-full">
            <Grid />
            <RecentProjects />
            <Experience />
            {/* <Clients /> */}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
