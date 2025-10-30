"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Palette, Sparkles, Users } from "lucide-react"
import "../styles/About.css"

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section id="about" className="about" ref={containerRef}>
      <div className="about-background">
        <motion.div className="about-gradient" style={{ y, opacity }} />
      </div>

      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">Sobre Aurum Studio</h2>
          <p className="about-lead">
            Un espacio donde el arte digital cobra vida a través de la innovación, la creatividad y la excelencia
            técnica
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Fundado en 2020, Aurum Studio nació de la visión de crear un puente entre el arte tradicional y las
              posibilidades infinitas del medio digital. Nuestro nombre, derivado del latín para "oro", refleja nuestro
              compromiso con la excelencia y el valor duradero del arte.
            </p>
            <p>
              Trabajamos con artistas de todo el mundo, curando una colección que desafía las convenciones y explora
              nuevas fronteras creativas. Cada obra en nuestra galería es seleccionada por su capacidad de inspirar,
              provocar y transformar la percepción del espectador.
            </p>
          </motion.div>

          <div className="about-features">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <Palette size={32} />
              </div>
              <h3>Curación Experta</h3>
              <p>Selección meticulosa de obras que representan lo mejor del arte digital contemporáneo</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <Sparkles size={32} />
              </div>
              <h3>Innovación Constante</h3>
              <p>Exploramos nuevas tecnologías y técnicas para presentar el arte de formas únicas</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Comunidad Global</h3>
              <p>Conectamos artistas y coleccionistas de todo el mundo en un espacio compartido</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
