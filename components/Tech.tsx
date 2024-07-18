import React from "react";

import BallCanvas from "./TechStackBall";

export const technologies = [
  {
    name: "Supabase",
    icon: "/supabase.svg",
  },
  {
    name: "NextJS",
    icon: "/next.svg",
  },
  {
    name: "Ollama",
    icon: "/ollama.svg",
  },
  {
    name: "FastAPI",
    icon: "/fastapi.svg",
  },
  {
    name: "TailwindCSS",
    icon: "/tail.svg",
  },
  {
    name: "TypeScript",
    icon: "/ts.svg",
  },
  {
    name: "Shadcn",
    icon: "/shadcn.svg",
  },
  {
    name: "Clerk",
    icon: "/c.svg",
  },
  {
    name: "ReactJS",
    icon: "/re.svg",
  },
  {
    name: "ThreeJS",
    icon: "/three.svg",
  },
  {
    name: "CSS",
    icon: "/css.svg",
  },
  {
    name: "JavaScript",
    icon: "/js.svg",
  },
  {
    name: "MongoDB",
    icon: "/mongodb.png",
  },
  {
    name: "SwiperJS",
    icon: "/swiper.svg",
  },
  {
    name: "Redux",
    icon: "/redux.png",
  },
  {
    name: "Framer Motion",
    icon: "/fm.svg",
  },
  {
    name: "HTML",
    icon: "/html.svg",
  },
  {
    name: "Docker",
    icon: "/docker.png",
  },
  {
    name: "Git",
    icon: "/git.png",
  },
  {
    name: "Figma",
    icon: "/figma.png",
  },
];

const Tech = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Tools and <span className="text-purple">tech stacks</span> that I used
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center" key={technology.name}>
            <div className="w-16 h-16 md:w-20 md:h-20">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="lg:text-xl lg:font-normal font-light text-[10px] md:text-sm">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
