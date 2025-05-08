export default function Floor() {
    return (
        <mesh position={[0, -10, 0]}>
            <boxGeometry args={[100, 1, 100]}></boxGeometry>
            <meshLambertMaterial color={0x008000}></meshLambertMaterial>
        </mesh>
    )

}