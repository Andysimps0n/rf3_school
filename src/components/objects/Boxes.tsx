"use client"

import { useState } from "react"
import * as THREE from 'three';


export default function Boxes(){
    const [boxNumber, setBoxNumber] = useState(Array(5).fill(0));
    
    return (
        
        boxNumber.map((_, i)=> {
            
            let randX = Math.floor(Math.random() * 20) - 0
            let randY = Math.floor(Math.random() * 20) - 0
            let randZ = Math.floor(Math.random() * 20) - 0
            let randColor = Math.random()
            const color = new THREE.Color();
            
    
          return (
            <mesh key={i} rotation={[randX, randY, randZ]} position={[randX, randY, randZ]}>
              <boxGeometry args={[3,3,3]}></boxGeometry>
              <meshBasicMaterial color={color.setHex( randColor * 0xffffff )}></meshBasicMaterial>
            </mesh>
          )
        })
  )
}