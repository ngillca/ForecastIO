import React from "react";
import { motion } from 'framer-motion';
import styles from './Header.module.css'

export default function Header({ text }) {
  return (
    <>
      <motion.h1 className={styles.content}>{text}</motion.h1>
    </>
  );
}
