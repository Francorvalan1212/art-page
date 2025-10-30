"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import "../styles/Header.css"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div className="header-logo" whileHover={{ scale: 1.05 }} onClick={() => scrollToSection("hero")}>
          <span className="logo-text">Aurum</span>
          <span className="logo-dot">.</span>
        </motion.div>

        <nav className="header-nav desktop">
          <a onClick={() => scrollToSection("gallery")}>Galería</a>
          <a onClick={() => scrollToSection("about")}>Estudio</a>
          <a onClick={() => scrollToSection("contact")}>Contacto</a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="header-nav mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a onClick={() => scrollToSection("gallery")}>Galería</a>
            <a onClick={() => scrollToSection("about")}>Estudio</a>
            <a onClick={() => scrollToSection("contact")}>Contacto</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
