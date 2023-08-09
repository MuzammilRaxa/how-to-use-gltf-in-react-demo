import { useState, useRef } from "react";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelLoader = ({ modelName }) => {

  return (
    <div className="canvas-container bg-slate-300 h-[40vh]">
      {selectedModel && (
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.9} args={["#ebb907"]} />

            <directionalLight
              args={["#f9d860"]}
              position={[10, 10, 5]}
              intensity={1}
            />
            <spotLight position={[0, 1, 1]} angle={0.15} penumbra={1} />
            {/* <Model
                modelPath={selectedModel.path}
                scale={[0.08, 0.08, 0.08]}
                rotation={rotationSpeed}
              /> */}
            <SimpleRingModel />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              // camera={true}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default ImageGallery;
