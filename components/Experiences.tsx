import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function Experiences() {
  const data = [
    {
      title: "September 2024 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg lg:text-xl font-normal mb-4">
            Software Engineer Internship @{" "}
            <span className="text-purple"> Bank Rakyat Indonesia (BRI)</span>
          </p>
        </div>
      ),
    },
    {
      title: "June 2024 - August 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg lg:text-xl font-normal mb-4">
            Software Engineer Internship @{" "}
            <span className="text-purple"> Telkom Indonesia</span>
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Built an automation bot that reduced network traffic
              disturbance reporting time by 30%, improving operational
              efficiency.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Constructed a data-driven dashboard using Vue3, Nest.js,
              PostgreSQL, and Prisma that enhanced service operations
              decision-making through actionable insights.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed an employee service schedule system that improved
              scheduling efficiency by 60% through an intuitive user interface.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Implemented monorepo architecture using Turborepo to streamline
              development processes 2 times faster.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Orchestrated GitLab CI/CD pipelines, resulting in a 30%
              reduction in build times.
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/assets/projectImages/siaga-servo.png"
              alt="hero template"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section
      id="experiences"
      className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10"
    >
      <h1 className="heading mb-4">
        Changelog from <span className="text-purple">my journey</span>
      </h1>
      <p className="text-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        I&apos;ve been working on IT field for the past 2 years. Here&apos;s a
        highlight of my journey.
      </p>
      <Timeline data={data} />
    </section>
  );
}
