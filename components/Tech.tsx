import React from "react";

import { technologies } from "@/data/techStack";
import Image from "next/image";

const Tech = () => {
  return (
    <section id="tech" className="py-20">
      <h1 className="heading">
        Tools and <span className="text-purple">tech stacks</span> that I used
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
        {technologies.map((technology) => (
          <div
            className="flex flex-col items-center gap-2 md:gap-3"
            key={technology.name}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
              <Image
                alt={technology.name}
                src={"/assets/stackIcons" + technology.icon}
                fill
              />
            </div>
            <p className="font-light text-white/50 text-[10px] md:text-sm">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
