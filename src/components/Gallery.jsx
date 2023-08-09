import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RingTowModel } from "./models/RingModel2";
import { RingOneModel } from "./models/RingModel1";
import { RingThreeModel } from "./models/RingModel3";
import { RingFiveModel } from "./models/RingModel5";
// import SimpleRingModel from "./models/SimpleRingModel"; // Import your model components
// Import other model components similarly

const ModelLoader = ({ modelName }) => {
  // Create a mapping of model names to their corresponding components
  const modelComponents = {
    ring1: RingOneModel,
    ring2: RingTowModel,
    ring3: RingThreeModel,
    ring5: RingFiveModel,
    // Add more mappings for other model names
  };
  const modelScale = {
    ring1: 0.01,
    ring2: 0.8,
    ring3: 0.01,
    ring5: 0.01,
    // Add more mappings for other model names
  };

  const ModelComponent = modelComponents[modelName]; // Get the corresponding component

  return (
    <div className="canvas-container bg-amber-100 h-[40vh]">
      {ModelComponent && (
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={1} args={["#ffd643"]} />
            <directionalLight
              args={["#fff4c9"]}
              position={[10, 10, 5]}
              intensity={1}
            />
            <spotLight position={[0, 1, 1]} angle={0.15} penumbra={1} />
            {/* Render the selected model */}
            <ModelComponent  />
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

export default ModelLoader;

// import { useState, useRef } from "react";
// import { Suspense } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const ModelLoader = ({ modelName }) => {
//   const [selectedModel, setSelectedModel] = useState(modelName);

//   return (
//     <div className="canvas-container bg-slate-300 h-[40vh]">
//       {selectedModel && (
//         <Canvas>
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.9} args={["#ebb907"]} />
//             <directionalLight
//               args={["#f9d860"]}
//               position={[10, 10, 5]}
//               intensity={1}
//             />
//             <spotLight position={[0, 1, 1]} angle={0.15} penumbra={1} />
//             {/* <Model
//                 modelPath={selectedModel.path}
//                 scale={[0.08, 0.08, 0.08]}
//                 rotation={rotationSpeed}
//               /> */}
//             {selectedModel === "ring1" && <SimpleRingModel />  }
//             <OrbitControls
//               enablePan={true}
//               enableZoom={true}
//               enableRotate={true}
//               // camera={true}
//             />
//           </Suspense>
//         </Canvas>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;
