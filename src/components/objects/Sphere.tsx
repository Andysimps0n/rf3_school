

export default function Sphere() {
  return (
    <mesh >
      <sphereGeometry args={[3, 12, 12]}></sphereGeometry>
      <meshBasicMaterial wireframe></meshBasicMaterial>
  </mesh>
  )

}