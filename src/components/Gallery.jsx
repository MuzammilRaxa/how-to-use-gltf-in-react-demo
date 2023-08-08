import { useState, useRef } from 'react';
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelLoader = ({ modelPath }) => {
  const modelRef = useRef();
  
  const modelUrl = new URL(modelPath, import.meta.url)
  const gltf = useLoader(GLTFLoader, modelUrl);

  useEffect(() => {
    modelRef.current = gltf.scene;
  }, [gltf.scene]);

  return <primitive object={modelRef.current} />;
};

const ImageGallery = () => {
  const [models, setModels] = useState([]);

 
  const preloadedModels = [
    '/diomond/scene.gltf', 
    '/diomond/scene.gltf', 
  ];

  return (
    <div className="flex flex-wrap">
      {preloadedModels.map((modelPath, index) => (
        <div key={`preloaded-${index}`} className="w-full p-2 cursor-pointer">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <ModelLoader modelPath={modelPath} />
            </Suspense>
          </Canvas>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
