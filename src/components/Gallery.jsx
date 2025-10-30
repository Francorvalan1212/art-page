"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart } from "lucide-react"
import "../styles/Gallery.css"

const artworks = [
  {
    id: 1,
    title: "Ethereal Dreams",
    artist: "Sofia Martínez",
    price: "$2,500",
    image: "/abstract-digital-art-ethereal-dreams-gold-purple.jpg",
    description: "Una exploración de la consciencia a través de formas abstractas y colores vibrantes.",
  },
  {
    id: 2,
    title: "Urban Pulse",
    artist: "Carlos Rivera",
    price: "$3,200",
    image: "/cyberpunk-city-neon-lights-digital-art.jpg",
    description: "La energía de la ciudad moderna capturada en píxeles y luz.",
  },
  {
    id: 3,
    title: "Cosmic Harmony",
    artist: "Luna Chen",
    price: "$4,100",
    image: "/space-nebula-cosmic-digital-art-gold.jpg",
    description: "Un viaje visual a través del cosmos y sus infinitas posibilidades.",
  },
  {
    id: 4,
    title: "Digital Renaissance",
    artist: "Marco Bellini",
    price: "$5,500",
    image: "/renaissance-art-meets-digital-glitch.jpg",
    description: "La fusión perfecta entre el arte clásico y la era digital.",
  },
  {
    id: 5,
    title: "Neon Serenity",
    artist: "Yuki Tanaka",
    price: "$2,800",
    image: "/zen-garden-neon-lights-minimalist.jpg",
    description: "Tranquilidad moderna expresada a través de luz y geometría.",
  },
  {
    id: 6,
    title: "Fractured Reality",
    artist: "Ana Volkov",
    price: "$3,900",
    image: "/abstract-fractured-reality-geometric-gold.jpg",
    description: "Una deconstrucción visual de nuestra percepción de la realidad.",
  },
]

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState(null)
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gallery-title">Colección Destacada</h2>
          <p className="gallery-subtitle">Obras seleccionadas de artistas digitales emergentes y establecidos</p>
        </motion.div>

        <div className="gallery-grid">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedArt(art)}
            >
              <div className="gallery-item-image">
                <img src={art.image || "/placeholder.svg"} alt={art.title} />
                <div className="gallery-item-overlay">
                  <button
                    className="favorite-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(art.id)
                    }}
                  >
                    <Heart
                      size={24}
                      fill={favorites.includes(art.id) ? "#d4af37" : "none"}
                      stroke={favorites.includes(art.id) ? "#d4af37" : "#fff"}
                    />
                  </button>
                </div>
              </div>
              <div className="gallery-item-info">
                <h3 className="gallery-item-title">{art.title}</h3>
                <p className="gallery-item-artist">{art.artist}</p>
                <p className="gallery-item-price">{art.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedArt && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArt(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedArt(null)}>
                <X size={24} />
              </button>

              <div className="modal-image">
                <img src={selectedArt.image || "/placeholder.svg"} alt={selectedArt.title} />
              </div>

              <div className="modal-info">
                <h2 className="modal-title">{selectedArt.title}</h2>
                <p className="modal-artist">Por {selectedArt.artist}</p>
                <p className="modal-description">{selectedArt.description}</p>
                <div className="modal-footer">
                  <p className="modal-price">{selectedArt.price}</p>
                  <button className="modal-cta">Adquirir Obra</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
