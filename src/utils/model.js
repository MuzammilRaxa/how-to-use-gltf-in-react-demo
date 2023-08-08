export default Model = ({ modelPath, customColors, ...props }) => {
    const group = useRef();
    const { nodes, materials } = useGLTF(modelPath);

    useFrame((state, delta) => {
        group.current.rotation.y += rotation * delta; // Rotate model over time
    });

    return (
        <group ref={group} {...props} dispose={null} scale={3}>
            <mesh geometry={nodes.mesh.geometry} material={materials.material} />
        </group>
    );
}