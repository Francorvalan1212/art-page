"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">Conecta con Nosotros</h2>
          <p className="contact-subtitle">¿Tienes una pregunta o quieres colaborar? Nos encantaría escucharte</p>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="form-group">
            <label htmlFor="name" className={focused.name || formData.name ? "focused" : ""}>
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused({ ...focused, name: true })}
              onBlur={() => setFocused({ ...focused, name: false })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className={focused.email || formData.email ? "focused" : ""}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused({ ...focused, email: true })}
              onBlur={() => setFocused({ ...focused, email: false })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className={focused.message || formData.message ? "focused" : ""}>
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused({ ...focused, message: true })}
              onBlur={() => setFocused({ ...focused, message: false })}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Enviar Mensaje</span>
            <Send size={20} />
          </motion.button>
        </motion.form>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="contact-info-item">
            <h3>Email</h3>
            <p>contacto@aurumstudio.com</p>
          </div>
          <div className="contact-info-item">
            <h3>Ubicación</h3>
            <p>Barcelona, España</p>
          </div>
          <div className="contact-info-item">
            <h3>Horario</h3>
            <p>Lun - Vie: 10:00 - 18:00</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
