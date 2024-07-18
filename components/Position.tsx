import React from "react";

const produceSpans = (text: string, animation: string) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px]  leading-[32px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">
        <div
          className="text first absolute right-0 md:right-1 lg:left-2 2xl:left-3 flex"
          aria-label="Software Developer"
        >
          {produceSpans("Web Developer", "animate-textRotate1")}
        </div>
        <div
          className="text second absolute right-0 md:right-1 lg:left-2 2xl:left-3 flex"
          aria-label="Content Creator"
        >
          {produceSpans("Mobile App Developer", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
