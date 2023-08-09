import React, { useState, useRef, useEffect, Suspense } from "react";
import "./index.css";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import SceneInit from "./utils/SceneInit";
import { useTexture } from "@react-three/drei";
import { RingTowModel } from "./components/models/RingModel2";
import ModelLoader from "./components/Gallery";

function Model({ modelPath, rotation, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelPath);
  console.log("Node--->", nodes);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* <mesh geometry={nodes.defaultOBJcleanermaterialmergergles.geometry} material={nodes.defaultOBJcleanermaterialmergergles.material} /> */}
      <mesh
        geometry={nodes.Object_2.geometry}
        material={nodes.Object_2.material}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={nodes.Object_3.material}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={nodes.Object_4.material}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={nodes.Object_5.material}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={nodes.Object_6.material}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={nodes.Object_7.material}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={nodes.Object_8.material}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={nodes.Object_9.material}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={nodes.Object_10.material}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={nodes.Object_11.material}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={nodes.Object_12.material}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={nodes.Object_13.material}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={nodes.Object_14.material}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={nodes.Object_15.material}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={nodes.Object_16.material}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={nodes.Object_17.material}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={nodes.Object_18.material}
      />
      <mesh
        geometry={nodes.Object_19.geometry}
        material={nodes.Object_19.material}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={nodes.Object_20.material}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={nodes.Object_21.material}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={nodes.Object_22.material}
      />
    </group>
  );
}

const initialModels = [
  // { name: "diomond", path: "/blue-diomond/scene.gltf" },
  { name: "ring1", path: "/bracelet/scene.gltf" },
  { name: "ring2", path: "/bracelet/bracelet.glb" },
  { name: "ring3", path: "/rings/ring-1.glb" },
  { name: "ring5", path: "/rings/ruby-ring.glb" },
  // Add more models here...
];

const defaultRotationSpeed = 0.005;

function App() {
  const [models] = useState(initialModels);
  const [selectedModel, setSelectedModel] = useState(null);
  const [rotationSpeed, setRotationSpeed] = useState(defaultRotationSpeed);

  const handleModelClick = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="App px-2">
      <div className="model-gallery space-x-2 p-2">
        {models.map((model) => (
          <button
            className="bg-slate-300 rounded-lg p-1"
            key={model.name}
            onClick={() => handleModelClick(model.name)}
          >
            {model.name}
          </button>
        ))}
      </div>

      <div className="canvas-container bg-slate-300 h-[40vh]">
        {selectedModel && <ModelLoader modelName={selectedModel} />}
        {/* {selectedModel && (
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.9} args={["#ebb907"]} />

              <directionalLight
                args={["#f9d860"]}
                position={[10, 10, 5]}
                intensity={1}
              />
              <spotLight position={[0, 1, 1]} angle={0.15} penumbra={1} />
              <Model
                modelPath={selectedModel.path}
                scale={[0.08, 0.08, 0.08]}
                rotation={rotationSpeed}
              />
               <RingTowModel />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                // camera={true}
              />
            </Suspense>
          </Canvas>
        )} */}

        <div className="rotation-controls">
          <label htmlFor="rotation-speed">Rotation Speed:</label>
          <input
            type="range"
            id="rotation-speed"
            value={rotationSpeed}
            min="0.001"
            max="0.02"
            step="0.001"
            onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
