'use client'

import React from 'react';
import { motion } from 'framer-motion';
import LottieLoader from '../Components/LottieLoader';

const HomePage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Welcome to ELEVATE 2025
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300 max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Join us for an unforgettable experience where innovation meets inspiration. Explore the future, today.
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default HomePage;