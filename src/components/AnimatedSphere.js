import React from 'react'

import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere() {
  return (
   
    <Sphere visible args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial color='purple' attach='material' distort={0.3} speed={5} roughness={1} />
    </Sphere>
   
  )
}
