import React from 'react'
import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF,  } from '@react-three/drei'

import CanvasLoader from './CanvasLoader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive object={earth.scene} scale={2.5} position={[0, 0, 0]} rotation-y={0} />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }}
    >
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
       autoRotate
       enableZoom={false}
       MaxPolarAngle={Math.PI / 2}
       MinPolarAngle={Math.PI / 2}
      />
      <Earth/>

      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas;