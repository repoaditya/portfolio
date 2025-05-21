import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, SpotLight } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const { viewport } = useThree();

  useFrame(({ clock, mouse }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      // Add subtle movement based on mouse position
      sphereRef.current.position.x = (mouse.x * viewport.width) / 5;
      sphereRef.current.position.y = (mouse.y * viewport.height) / 5;
    }
    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(clock.getElapsedTime()) * 2;
      spotLightRef.current.position.y = Math.cos(clock.getElapsedTime()) * 2;
    }
  });

  return (
    <>
      <Sphere ref={sphereRef} args={[1, 100, 100]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#4B9CD3"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <SpotLight
        ref={spotLightRef}
        distance={20}
        angle={0.5}
        attenuation={5}
        anglePower={5}
        intensity={2}
        position={[2, 2, 2]}
        color="#4B9CD3"
      />
    </>
  );
}

function MovingLights() {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (light1.current) {
      light1.current.position.x = Math.sin(time * 0.6) * 3;
      light1.current.position.y = Math.cos(time * 0.4) * 3;
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(time * 0.6) * 3;
      light2.current.position.y = Math.sin(time * 0.4) * 3;
    }
  });

  return (
    <>
      <pointLight ref={light1} color="#4B9CD3" intensity={0.5} />
      <pointLight ref={light2} color="#0066cc" intensity={0.5} />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#111827']} />
        <fog attach="fog" args={['#111827', 5, 15]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <MovingLights />
        <AnimatedSphere />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
} 