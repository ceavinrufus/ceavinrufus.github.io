"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Menampilkan nav saat sedang scrolling
      setVisible(true);

      // Menghapus timer jika ada
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Mengatur timer untuk menyembunyikan nav setelah 3 detik
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  });

  // Menghapus timer saat komponen unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 md:top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2 gap-8 md:gap-4 items-center justify-center",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex justify-center text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 py-2"
            )}
          >
            <button onClick={() => setSelected(idx)}>
              <Image
                width={16}
                height={16}
                alt={navItem.name}
                src={"/assets/navIcons" + navItem.icon}
                className="block sm:hidden text-white"
              />
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </button>
            {selected === idx && (
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            )}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
