"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              Aurum<span>.</span>
            </h3>
            <p className="footer-tagline">Donde el arte digital cobra vida</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Explorar</h4>
              <a href="#gallery">Galería</a>
              <a href="#about">Sobre Nosotros</a>
              <a href="#contact">Contacto</a>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Términos de Uso</a>
              <a href="#">Privacidad</a>
              <a href="#">Cookies</a>
            </div>

            <div className="footer-column">
              <h4>Síguenos</h4>
              <div className="footer-social">
                <motion.a href="#" whileHover={{ scale: 1.1, color: "#d4af37" }} transition={{ duration: 0.2 }}>
                  <Instagram size={20} />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.1, color: "#d4af37" }} transition={{ duration: 0.2 }}>
                  <Twitter size={20} />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.1, color: "#d4af37" }} transition={{ duration: 0.2 }}>
                  <Facebook size={20} />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.1, color: "#d4af37" }} transition={{ duration: 0.2 }}>
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aurum Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
