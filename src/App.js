import React, { Suspense, useState, useCallback, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";

import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";

const names = ["Welcome to your daily Forecast", "loading forecast . . ."];

function App() {
  // header load-in
  const [showHeader, setShowHeader] = useState(false);
  setTimeout(() => {
    setShowHeader(true);
  }, 8000);

  // forecast paragraph load-in
  const [showP, setShowP] = useState(true);
  setTimeout(() => {
    setShowP(false);
  }, 8000);

  // forecast loading load-in
  const [showLoading, setShowLoading] = useState(true);
  setTimeout(() => {
    setShowLoading(false);
  }, 8000);

  // const [isTime, setTime] = useState(true);
  // const [newName, setnewName] = useState("Welcome to your daily Forecast ");

  // const shuffle = useCallback(() => {
  //   const index = Math.floor(Math.random() * names.length);
  //   setTime(false);
  //   setnewName(names[1]);
  // }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(shuffle, 4000);
  //   return () => clearInterval(intervalID);
  // }, [shuffle]);

  return (
    <div className="App">
      <AnimatePresence>
        {showHeader && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Header text={"ForecastIO"} />
          </motion.div>
        )}
      </AnimatePresence>



      <AnimatePresence>
        {showP && (
          <motion.div className='bodytext'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.h1>Welcome to your Forecast</motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {showLoading && (
          <motion.div className='bodytext'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            <motion.h1>Loading forecast</motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <Canvas style={{ height: '600px' }} > 
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null} >
          <Box />
        </Suspense> */}
      {/* Need to fix positioning because theyre stacking on eachother */}
      {/* <Suspense fallback={null} >
          <AnimatedSphere />
        </Suspense> */}

      {/* </Canvas> */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="bodytext"
      > */}
        {/* transition text to fetching forecast after 3s */}
        {/* <motion.h1>{isTime ? newName : newName}</motion.h1>
      </motion.div> */}
      {/* <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 4 }}
      >
        <h1>fetching forecast</h1>
      </motion.div> */}

      <motion.div 
        initial={{ y: "-210vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 0.9, stiffness: 22 }}
      >
        <Canvas style={{ height: "500px" }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={2} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* <Canvas style={{ height: '600px' }} > 
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null} >
          <AnimatedSphere />
        </Suspense>
       
      </Canvas> */}
    </div>
  );
}

export default App;
