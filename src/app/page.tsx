"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AutoSlide } from "@/components/AutoSlide"
import { slidesContent } from "@/data/slides-content"
import { 
  QuizPopup, 
  QuizButton,
  slideQuizzes
} from "@/components/Gamification"

// Nomes das transições para exibição
const transitionNames: Record<string, string> = {
  "zoom-rotate": "Zoom Rotate",
  "slide-blur": "Slide Blur",
  "flip-3d": "Flip 3D",
  "curtain": "Cortina",
  "explosion": "Explosão",
  "diagonal": "Diagonal",
  "portal": "Portal",
  "flip-x": "Flip X",
  "morph": "Morph",
  "spiral": "Espiral"
}

// Cores de background para cada slide
const slideBackgrounds = [
  { from: "#001020", via: "#001F3F", to: "#00301a" },
  { from: "#000a1a", via: "#001030", to: "#001a25" },
  { from: "#001a0d", via: "#002515", to: "#001a25" },
  { from: "#001020", via: "#001a30", to: "#001525" },
  { from: "#001520", via: "#00202f", to: "#001a25" },
  { from: "#001a0d", via: "#002010", to: "#001a15" },
  { from: "#001520", via: "#001a30", to: "#00201a" },
  { from: "#001020", via: "#001a0d", to: "#000a1a" },
  { from: "#000a1a", via: "#001030", to: "#001a0d" },
  { from: "#001a0d", via: "#002515", to: "#001020" },
  { from: "#000a1a", via: "#001020", to: "#001a0d" },
  { from: "#001020", via: "#001a30", to: "#000a1a" },
  { from: "#001a0d", via: "#000a1a", to: "#001020" },
  { from: "#000a1a", via: "#001030", to: "#001a0d" },
  { from: "#000a1a", via: "#001020", to: "#001a0d" },
  { from: "#001a0d", via: "#002515", to: "#001020" },
  { from: "#001020", via: "#001a2a", to: "#001520" },
  { from: "#001520", via: "#002020", to: "#001a15" },
]

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [answeredQuizzes, setAnsweredQuizzes] = useState<Set<number>>(new Set())
  const isScrolling = useRef(false)

  const totalSlides = slidesContent.length

  // Verificar se o slide atual tem quiz disponível
  const hasQuizForCurrentSlide = slideQuizzes[currentSlide] !== undefined && !answeredQuizzes.has(currentSlide)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides && !isScrolling.current) {
      isScrolling.current = true
      setCurrentSlide(index)
      setTimeout(() => {
        isScrolling.current = false
      }, 400)
    }
  }, [totalSlides])

  // Navegação por scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling.current) return

      if (e.deltaY > 30) {
        goToSlide(currentSlide + 1)
      } else if (e.deltaY < -30) {
        goToSlide(currentSlide - 1)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [currentSlide, goToSlide])

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault()
        goToSlide(currentSlide + 1)
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault()
        goToSlide(currentSlide - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, goToSlide])

  // Handler do quiz
  const handleQuizComplete = useCallback(() => {
    setAnsweredQuizzes(prev => new Set([...prev, currentSlide]))
  }, [currentSlide])

  const currentBg = slideBackgrounds[currentSlide] || slideBackgrounds[0]
  const currentSlideData = slidesContent[currentSlide]
  const progress = (currentSlide + 1) / totalSlides

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Quiz popup */}
      <QuizPopup
        isOpen={showQuiz}
        onClose={() => {
          setShowQuiz(false)
          handleQuizComplete()
        }}
        onCorrect={handleQuizComplete}
        slideIndex={currentSlide}
      />

      {/* Background animado */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{
          background: `linear-gradient(135deg, ${currentBg.from} 0%, ${currentBg.via} 50%, ${currentBg.to} 100%)`
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Slide atual */}
      <AnimatePresence mode="wait">
        <AutoSlide key={currentSlide} slide={currentSlideData} />
      </AnimatePresence>

      {/* Indicadores de slide na lateral */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {slidesContent.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-spring h-6"
                : "bg-white/30 h-1.5 hover:bg-white/50"
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            title={slide.title}
          />
        ))}
      </div>

      {/* Barra de progresso no topo */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-spring z-50"
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.3 }}
      />

      {/* Info do slide */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs z-50 flex flex-col items-center gap-0.5">
        <span className="text-spring text-[10px] uppercase tracking-wider">
          {transitionNames[currentSlideData.transition]}
        </span>
        <span>{currentSlide + 1} / {totalSlides}</span>
      </div>

      {/* Hint de scroll - só aparece no primeiro slide */}
      {currentSlide === 0 && (
        <motion.div
          className="fixed bottom-14 left-1/2 -translate-x-1/2 text-white/40 text-xs z-50 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1 },
            y: { repeat: Infinity, duration: 1.5 }
          }}
        >
          <span>Role para navegar</span>
          <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      )}

      {/* Botão do Quiz */}
      <QuizButton 
        onClick={() => setShowQuiz(true)} 
        hasQuiz={hasQuizForCurrentSlide}
      />
    </div>
  )
}
