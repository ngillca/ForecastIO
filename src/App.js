import React, { Suspense, useState, useCallback, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import Forecast from "./components/Forecast";
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

  // forecast data load-in
  const [showForecast, setShowForecast] = useState(false);
  setTimeout(() => {
    setShowForecast(true);
  }, 10000);

  // assing length for intro
  const [isLoadingP, setIsLoadingP] = useState(1.4);

  // assing length for intro
  const [isLoadingFetch, setIsLoadingFetch] = useState(2.8);

  // forecast paragraph load-in
  const [showP, setShowP] = useState(true);
  setTimeout(() => {
    setIsLoadingP(0);
    setShowP(false);
  }, 7500);

  // forecast loading load-in
  const [showLoading, setShowLoading] = useState(true);
  setTimeout(() => {
    setIsLoadingFetch(0);
    setShowLoading(false);
  }, 7500);

  return (
    <div className="App">
      <AnimatePresence>
        {showHeader && (
          <motion.div initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}>
            <Header text={"ForecastIO"} />
            {showForecast && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Forecast />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {showHeader && (
        <AnimatePresence>
          <motion.div
            initial={{ y: "-210vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", delay: 0.1, stiffness: 22 }}
          >
            <Canvas style={{ height: "500px" }}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={2} />
              <Suspense fallback={null}>
                <Box />
              </Suspense>
            </Canvas>
          </motion.div>
        </AnimatePresence>
      )}
      <AnimatePresence>
        {showP && (
          <motion.div
            className="bodytext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: `${isLoadingP}` }}
            exit={{ opacity: 0 }}
          >
            <motion.h1> Welcome to your daily Forecast</motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showLoading && (
          <motion.div
            className="bodytext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: `${isLoadingFetch}` }}
            exit={{ opacity: 0 }}
          >
            <motion.h3>fetching forecast . . .</motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showLoading && (
          <motion.div
            initial={{ y: "-210vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", delay: 0, stiffness: 22 }}
            exit={{ opacity: 0 }}
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
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
