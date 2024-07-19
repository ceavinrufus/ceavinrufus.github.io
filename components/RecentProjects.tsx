import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import Link from "next/link";
import { WobbleCard } from "./ui/WobbleCard";
import { TechStackTooltip } from "./TechStackTooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import stackMapper from "@/utils/stackMapper";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple">my projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
        {projects.map((item) => (
          <WobbleCard
            key={item.id}
            className="flex items-center justify-center sm:w-96 w-[80vw] h-full flex-row"
          >
            {/* title={item.link ? "Visit\xa0website" : `View\xa0on\xa0Github`}
              href={item.link || item.github} */}

            <div className="flex flex-col h-full">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[250px] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" fill />
                </div>
                <Image
                  src={"/assets/projectImages" + item.img}
                  alt="cover"
                  className="z-10 absolute rounded-t-xl -bottom-2 rotate-[2deg]"
                  width={368}
                  height={200}
                />
              </div>

              <Link
                href={item.link || item.github || ""}
                className="flex gap-2 group justify-between items-center"
              >
                <p className="font-bold group-hover:underline lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </p>
                <div className="relative md:size-4 size-3">
                  <Image
                    src={"/arrow.svg"}
                    alt="arrow"
                    className="z-10 group-hover:block"
                    fill
                  />
                </div>
              </Link>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.slice(0, 4).map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <TechStackTooltip image={icon} />
                    </div>
                  ))}
                  {item.iconLists.length >= 5 && (
                    <div
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * 5 + 2}px)`,
                      }}
                    >
                      {item.iconLists.length == 5 ? (
                        <TechStackTooltip image={item.iconLists[4]} />
                      ) : (
                        <TooltipProvider>
                          <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                              <p className="text-xs lg:text-base">
                                {item.iconLists.length - 4}+
                              </p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {item.iconLists
                                  .slice(4)
                                  .map((icon) => stackMapper(icon))
                                  .join(", ")}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  )}
                </div>

                {item.github && (
                  <Link
                    href={item.github}
                    target="_blank"
                    className="border border-white/[.2] rounded-full z-50 bg-black flex justify-center items-center p-2 gap-2"
                  >
                    <p className="flex text-xs md:text-sm  text-purple">
                      View on Github
                    </p>
                    <Image
                      height={24}
                      width={24}
                      src={"/assets/socmedIcons/git.svg"}
                      alt="icon5"
                      className=""
                    />
                  </Link>
                )}
              </div>
            </div>
          </WobbleCard>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
