import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Canvas, Camera, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, 'old_mg_car/scene.gltf'); // pwd : public 폴더. 얘를 기준으로 위치 기입
  // const gltf = useLoader(GLTFLoader, '../src/pages/old_mg_car/scene.gltf');
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

function Home() {
  return (
    <div style={{ height: '500px' }}>
      <Canvas height='100%' style={{ backgroundColor: 'black' }}>
        <ambientLight />
        <OrbitControls />
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <ambientLight intensity={0.5} /> */}
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <mesh position={[0, 0, 0]}>
          <Stars />
          <meshStandardMaterial color={0x00ff00} />
          <Model />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Home;
