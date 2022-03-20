import React, { Suspense } from 'react';

import './App.css';

import Header from './components/Header'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

import Box from './components/Box';
import AnimatedSphere from './components/AnimatedSphere';

function App() {
  return (
    <div className="App">
      <Header />
      <Canvas style={{ height: '600px' }} > 
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null} >
          <Box />
        </Suspense>
        {/* Need to fix positioning because theyre stacking on eachother */}
        {/* <Suspense fallback={null} >
          <AnimatedSphere />
        </Suspense> */}
       
      </Canvas>

      <Canvas style={{ height: '600px' }} > 
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null} >
          <AnimatedSphere />
        </Suspense>
       
      </Canvas>
    </div>
  );
}

export default App;
