"use client"
import { motion } from "framer-motion"
import "../styles/Loader.css"

const Loader = () => {
  return (
    <motion.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="loader-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="loader-logo"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="35" stroke="url(#gold-gradient)" strokeWidth="2" />
            <circle cx="40" cy="40" r="25" stroke="url(#gold-gradient)" strokeWidth="1.5" opacity="0.5" />
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#f4d03f" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.h1
          className="loader-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Aurum Studio
        </motion.h1>
        <motion.p
          className="loader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Arte Digital Excepcional
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Loader
