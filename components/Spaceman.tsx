"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "./Loader";

interface SpacemanProps {
  scale: [number, number, number];
  position: [number, number, number];
  rotationX?: number;
  rotationY?: number;
}

const Spaceman = ({
  scale,
  position,
  rotationX = 0,
  rotationY = 2.2,
}: SpacemanProps) => {
  const spacemanRef = useRef<any>();
  const { scene, animations } = useGLTF("/assets/3d/spaceman.glb");
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    if (!actions["Idle"]) return;

    actions["Idle"].play();
  }, [actions]);

  return (
    <mesh
      ref={spacemanRef}
      position={position}
      scale={scale}
      rotation={[5, 1.2, 1.4]}
      // rotation={[5, 1.2, 1]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

interface SpacemanCanvasProps {
  scrollContainer: React.RefObject<HTMLDivElement>;
}

const SpacemanCanvas = ({ scrollContainer }: SpacemanCanvasProps) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState<[number, number, number]>([2, 2, 2]);
  const [position, setPosition] = useState<[number, number, number]>([
    0.2, -0.7, 0,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainer.current) return;

      const scrollTop = scrollContainer.current.scrollTop;
      const rotationXValue = scrollTop * -0.0006;
      const rotationYValue = scrollTop * -0.00075;
      setRotationX(rotationXValue);
      setRotationY(rotationYValue);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([1.66, 1.66, 1.66]);
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([2, 2, 2]);
        setPosition([0.2, -0.7, 0]);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas
      className={`w-full h-screen bg-transparent z-10`}
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />

        <Spaceman
          rotationX={rotationX}
          rotationY={rotationY}
          scale={scale}
          position={position}
        />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
