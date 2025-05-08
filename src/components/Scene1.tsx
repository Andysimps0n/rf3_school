"use client"

import {useEffect, useRef} from 'react'
import * as THREE from 'three'

import { Canvas, useFrame } from "@react-three/fiber"
import { Stats, OrbitControls } from '@react-three/drei'

export default function Scene1() {


  return (
    <div className="scene-wrapper">
        <Canvas 
            style={{backgroundColor : "black"}} 
            gl={{ antialias: true }}
            camera={{position : [8, 8, 8]}}
            >



              <AnimatedSphere></AnimatedSphere>

            <OrbitControls  enableDamping={false} />
        </Canvas>
    </div>
  )
}


function AnimatedSphere() {
  const sphereMesh = useRef<THREE.Mesh>(null!)


  useFrame(()=>{
    sphereMesh.current.rotation.x += 0.01
  })

  return (
    <mesh ref={sphereMesh}>
      <sphereGeometry args={[3, 12, 12]}></sphereGeometry>
      <meshBasicMaterial wireframe></meshBasicMaterial>
  </mesh>
  )

}