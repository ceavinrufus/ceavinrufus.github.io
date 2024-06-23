"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple">my projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link ? "Visit\xa0website" : `View\xa0on\xa0Github`}
              href={item.link || item.github}
            >
              <Link
                href={item.link || item.github}
                target="_blank"
                className="absolute top-0 left-0 z-40 h-full w-full"
              />
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" fill />
                </div>
                <Image
                  src={"/projects" + item.img}
                  alt="cover"
                  className="z-10 absolute rounded-t-xl -bottom-2 rotate-[2deg]"
                  width={368}
                  height={200}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

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
                      <Image
                        src={"/stack" + icon}
                        fill
                        alt="icon5"
                        className="p-2"
                      />
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
                        <Image
                          src={"/stack" + item.iconLists[4]}
                          fill
                          alt="icon5"
                          className="p-2"
                        />
                      ) : (
                        <p>{item.iconLists.length - 4}+</p>
                      )}
                    </div>
                  )}
                </div>

                <Link
                  href={item.github}
                  target="_blank"
                  className="border border-white/[.2] rounded-full z-50 bg-black flex justify-center items-center p-2 gap-2"
                >
                  <p className="flex md:text-xs text-sm text-purple">
                    View on Github
                  </p>
                  <Image
                    height={24}
                    width={24}
                    src={"/git.svg"}
                    alt="icon5"
                    className=""
                  />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
