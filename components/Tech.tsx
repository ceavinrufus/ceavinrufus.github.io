import React from "react";

import { technologies } from "@/data/techStack";
import { InfiniteMovingTechStacks } from "./ui/InfiniteMovingTechStacks";

const Tech = () => {
  return (
    <section id="tech" className="py-20">
      <h1 className="heading">
        Tools and <span className="text-purple">tech stacks</span> that I used
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
        <InfiniteMovingTechStacks
          items={technologies.slice(0, technologies.length / 4)}
        />
        <InfiniteMovingTechStacks
          items={technologies.slice(
            technologies.length / 4,
            technologies.length / 2
          )}
          direction="right"
        />
        <InfiniteMovingTechStacks
          items={technologies.slice(
            technologies.length / 2,
            (3 * technologies.length) / 4
          )}
        />
        <InfiniteMovingTechStacks
          items={technologies.slice((3 * technologies.length) / 4)}
          direction="right"
        />
      </div>
    </section>
  );
};

export default Tech;
