'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Timer, Utensils, Trophy, ChevronLeft, ChevronRight, Info } from 'lucide-react'

export default function Component() {
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameOver, setGameOver] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const menuItems = [
    {
      name: "Chorizo Tradicional",
      price: 5000,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-11%20at%2011.57.18%20AM-4jCd8TopO9VM3S16VJDnxn9qlAAcwe.jpeg",
      description: "Chorizo 100% de cerdo, preparado artesanalmente mediante un proceso especial de amasado que permite reunir todos los sabores de nuestras especias seleccionadas."
    },
    {
      name: "Tamal Especial",
      price: 6000,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-11%20at%2011.57.17%20AM%20(2)-Fx2IhMW9CxqkfRsperzmxPTFVJ9rmr.jpeg",
      description: "Tamal elaborado con masa de maíz y arvejas, relleno de cerdo. La masa es cocida a fuego lento durante 6 a 7 horas para lograr su textura perfecta."
    },
    {
      name: "Empanada de Arroz con Chorizo",
      price: 3000,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-13%20at%209.49.37%20AM-sk0gXhjjftxsLYe6XgDztmRgkZbxXW.jpeg",
      description: "Deliciosa empanada rellena de arroz y nuestro chorizo especial, perfectamente frita hasta lograr un dorado crujiente."
    },
    {
      name: "Morcilla con Papa Chorreada",
      price: 4500,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-13%20at%209.49.36%20AM-XXKQlPnkJDxdj6XZUaUwCQdaD9tsRi.jpeg",
      description: "Morcilla artesanal elaborada por una respetada señora de nuestra comunidad, servida con papa chorreada. Apoyamos el talento local."
    },
    {
      name: "Huevo Cocido con Papa Chorreada",
      price: 3000,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-13%20at%209.49.36%20AM%20(1)-g6eLX9dpZkCQtcp0J3b1tQzYxBXYJZ.jpeg",
      description: "Huevos cocidos perfectamente acompañados de nuestra deliciosa papa chorreada, una combinación tradicional."
    }
  ]

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setTimeLeft(30)
    setGameOver(false)
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] to-[#FFE66D]">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-11%20at%2011.57.17%20AM-Bq0BLZfkR0bvqIVhHUvMic4N8v36Mf.jpeg')] bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFF8F0] opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              className="text-6xl font-bold mb-4 text-shadow"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              La Boquilla
            </motion.h1>
            <motion.p
              className="text-2xl mb-8 text-shadow"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Más de 40 años de tradición en San Vicente de Chucuri
            </motion.p>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#4A4E69]">Nuestro Menú</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-[#FF6B6B] mb-4">${item.price.toLocaleString()}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="mt-auto flex items-center gap-2 hover:bg-[#FF6B6B] hover:text-white transition-colors"
                      >
                        <Info className="w-4 h-4" />
                        Ver Detalles
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{item.name}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mini Game Section */}
        <section className="py-20 bg-[#4A4E69] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">¡Juega y Gana!</h2>
            <p className="text-xl mb-8">Ayuda al chef a preparar los pedidos lo más rápido posible</p>
            
            {!gameStarted && !gameOver && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={startGame}
                  className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-4 rounded-full text-xl"
                >
                  <Utensils className="mr-2" /> Comenzar Juego
                </Button>
              </motion.div>
            )}

            {gameStarted && !gameOver && (
              <div className="max-w-md mx-auto">
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <Trophy className="mr-2" />
                    <span className="text-xl">Puntos: {score}</span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="mr-2" />
                    <span className="text-xl">Tiempo: {timeLeft}s</span>
                  </div>
                </div>
                
                <motion.div 
                  className="grid grid-cols-3 gap-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  {menuItems.slice(0, 3).map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        onClick={() => setScore(s => s + 1)}
                        className="bg-[#FFE66D] hover:bg-[#FFD93D] text-black h-24 w-full rounded-lg"
                      >
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {gameOver && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold mb-4">¡Juego Terminado!</h3>
                <p className="text-xl mb-4">Puntaje Final: {score}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={startGame}
                    className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-4 rounded-full text-xl"
                  >
                    Jugar de Nuevo
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}