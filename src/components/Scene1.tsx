"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Stats, OrbitControls, ScrollControls, Scroll } from '@react-three/drei'
import { Suspense } from "react"

import Sphere from './objects/Sphere'
import Floor from './objects/Floor'
import Boxes from "./objects/Boxes"

export default function Scene1() {

  return (
    <div className="scene-wrapper">
        <Canvas style={{backgroundColor : "black"}} camera={{position : [40, 40, 40]}}>
          <Suspense fallback={null}>
  
  
  
              {/* <ambientLight></ambientLight>
  
              <Floor></Floor>
              <Boxes></Boxes>
              <OrbitControls  enableDamping={false} /> */}
  
  
  
  
  
              <ScrollControls damping={0} pages={3}>
                <Scroll>
                  <Boxes></Boxes>

                </Scroll>
  
  
              <Scroll html>
                  <h1>Page 2 Content</h1>
                  <h1>Page 3 Content</h1>
              </Scroll>
            </ScrollControls>
          </Suspense>

        </Canvas>
    </div>
  )
}


