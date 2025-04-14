import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, resetRotation }) => {
  const [decal] = useTexture([imgUrl]);
  const ballRef = useRef(); // Ref for controlling the ball mesh

  // Smoothly reset ball rotation to its original position when resetRotation is true
  useFrame(() => {
    if (resetRotation.current) {
      ballRef.current.rotation.x += (0 - ballRef.current.rotation.x) * 0.05; // Reset X rotation
      ballRef.current.rotation.y += (0 - ballRef.current.rotation.y) * 0.05; // Reset Y rotation
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} // Adjust decal position to face forward
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const orbitRef = useRef(); // Ref for OrbitControls to track interaction
  const resetRotation = useRef(false); // Flag to trigger rotation reset

  // Detect when the user stops interacting and trigger reset
  useEffect(() => {
    const handleEnd = () => {
      resetRotation.current = true; // Start resetting when user stops rotating
    };

    if (orbitRef.current) {
      orbitRef.current.addEventListener("end", handleEnd);

      // Clean up event listener on component unmount
      return () => orbitRef.current.removeEventListener("end", handleEnd);
    }
  }, []);

  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls ref={orbitRef} enableZoom={false} />
        <Ball imgUrl={icon} resetRotation={resetRotation} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
