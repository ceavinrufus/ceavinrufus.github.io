import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";

const ExperienceTitle = ({
  role,
  company,
  type = "Internship",
}: {
  role: string;
  company?: string;
  type?: string;
}) => {
  return (
    <div className="mb-4">
      <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl lg:text-2xl font-normal">
        {role} {company ? "@" : ""}{" "}
        <span className="text-purple"> {company}</span>
      </p>
      <p className="text-sm md:text-lg lg:text-xl text-white-100 font-semibold">
        {type}
      </p>
    </div>
  );
};

const ExperienceListContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg xl:texl-xl">
      {children}
    </div>
  );
};

export function Experiences() {
  const data = [
    {
      title: "August 2021 - Present",
      content: (
        <div>
          <ExperienceTitle role="Software Engineer" type="Freelance" />
          <div className="mb-8">
            <ExperienceListContent>
              ✅ Delivered custom web solutions for 10+ clients across personal,
              organizational, and event-based projects.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Developed responsive websites and web applications tailored to
              diverse client requirements and specifications.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Built event management systems and organizational websites to
              enhance digital presence and functionality.
            </ExperienceListContent>
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2025 - Present",
      content: (
        <div>
          <ExperienceTitle role="Software Engineer" company="GDP Labs" />
          <div className="mb-8"></div>
        </div>
      ),
    },
    {
      title: "May 2025 - Aug 2025",
      content: (
        <div>
          <ExperienceTitle role="Research Staff" company="Systatum" />
          <div className="mb-8">
            <ExperienceListContent>
              ✅ Research on Gara programming language
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Built custom parser for the Gara programming language using
              Golang
            </ExperienceListContent>
          </div>
        </div>
      ),
    },
    {
      title: "October 2024 - May 2025",
      content: (
        <div>
          <ExperienceTitle
            role="Software & Blockchain Developer"
            company="DeTrip"
          />
          <div className="mb-8">
            <ExperienceListContent>
              ✅ Implemented an anonymous reservation system using decentralized
              Self-Sovereign Identity and ZKProof to enhance the security of the
              platform, improving privacy for 100% of users.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Developed smart contract using Solidity to handle
              cryptocurrency payment and dispute process in the platform.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Created and executed unit tests with Jest to ensure the
              reliability and correctness of smart contracts and backend APIs,
              achieving 99% test coverage and minimizing regressions.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Designed and developed a new microservice to manage
              host-specific features.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Deployed microservices in Kubernetes, achieving seamless
              scalability and high availability across all services.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Doubled website performance for better speed and UX.
            </ExperienceListContent>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/experienceImages/detrip.jpg"
              alt="DeTrip"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2024 - December 2024",
      content: (
        <div>
          <ExperienceTitle
            role="Software Engineer"
            company="Bank Rakyat Indonesia (BRI)"
            type="Contract"
          />
          <div className="mb-8">
            <ExperienceListContent>
              ✅ Constructed a data-driven dashboard using NextJS, Laravel, and
              PostgreSQL.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Developed a comprehensive dashboard for the procurement
              division, streamlining operations and improving efficiency by 25%.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Gathered requirements from 3+ departments within the division
              to ensure the dashboard met all operational needs.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Deployed the website on an on-premise server to ensure secure,
              internal-only access.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Socialized the features of the website with 100+ employees,
              ensuring all were trained and understood how to use the platform
              effectively.
            </ExperienceListContent>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/experienceImages/bri.jpg"
              alt="BRI"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 2024 - August 2024",
      content: (
        <div>
          <ExperienceTitle
            role="Software Engineer"
            company="Telkom Indonesia"
            type="Internship"
          />
          <div className="mb-8">
            <ExperienceListContent>
              ✅ Built an automation bot that reduced network traffic
              disturbance reporting time by 30%, improving operational
              efficiency.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Constructed a data-driven dashboard using Vue3, Nest.js,
              PostgreSQL, and Prisma that enhanced service operations
              decision-making through actionable insights.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Developed an employee service schedule system that improved
              scheduling efficiency by 60% through an intuitive user interface.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Implemented monorepo architecture using Turborepo to streamline
              development processes 2 times faster.
            </ExperienceListContent>
            <ExperienceListContent>
              ✅ Orchestrated GitLab CI/CD pipelines, resulting in a 30%
              reduction in build times.
            </ExperienceListContent>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/projectImages/siaga-servo.png"
              alt="Siaga servo"
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
        I&apos;ve been working on IT field for the past 4 years. Here&apos;s a
        highlight of my journey.
      </p>
      <Timeline data={data} />
    </section>
  );
}
