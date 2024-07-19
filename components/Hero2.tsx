import React, { useEffect, useRef } from "react";
import Position from "./Position";
import SpacemanCanvas from "./Spaceman";
import Monster from "./Monster";

const Hero2 = ({
  scrollContainer,
}: {
  scrollContainer: React.RefObject<HTMLDivElement>;
}) => {
  const starsRef = useRef<any>(null);

  const handleScroll = () => {
    if (starsRef.current) {
      const scrollPosition = window.scrollY;
      const scale = 1.5 - scrollPosition / 3000; // Adjust the divisor to control the zoom speed
      starsRef.current.style.transform = `scale(${scale})`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="parallax">
      <div className="parallax__content absolute top-[5%] sm:top-[10%] lg:top-[16%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <div className="flex-1 lg:mb-0">
          <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] leading-[110px]">
            Ceavin Rufus
          </h1>
          <Position />
        </div>
      </div>

      {/* <img
        ref={starsRef}
        className="parallax__stars"
        src="/assets/parallax/1Stars.svg"
        alt=""
      /> */}
      <img
        className="parallax__planets"
        src="/assets/parallax/2Planets.svg"
        alt=""
      />
      <img
        className="parallax__mountain1"
        src="/assets/parallax/3Mountain.svg"
        alt=""
      />
      <img
        className="parallax__mountain2"
        src="/assets/parallax/4Mountain.svg"
        alt=""
      />
      <img
        className="parallax__crater"
        src="/assets/parallax/5Crater.svg"
        alt=""
      />
      <img className="parallax__sun" src="/assets/parallax/6Sun.svg" alt="" />
      <div
        ref={starsRef}
        className="parallax__monster scale-150 fixed top-0 left-0"
      >
        <Monster />
      </div>
      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero2;
