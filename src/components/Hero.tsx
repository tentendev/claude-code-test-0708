'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const animateCounter = (target: number, isDecimal: boolean = false) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!isVisible) return
      
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current < target) {
          setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
        } else {
          setCount(target)
          clearInterval(timer)
        }
      }, 16)
      
      return () => clearInterval(timer)
    }, [isVisible])
    
    return count
  }

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>
            Is Your Business <span className={styles.highlight}>Invisible</span> to AI Search?
          </h1>
          <p className={styles.heroSubtitle}>
            While competitors dominate ChatGPT, Claude, and Gemini responses, 
            traditional SEO leaves you behind in the AI revolution.
          </p>
          
          <motion.div 
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className={styles.stat}>
              <div className={styles.statNumber}>{animateCounter(93)}%</div>
              <div className={styles.statLabel}>of businesses miss AI-driven traffic</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{animateCounter(4.2, true)}x</div>
              <div className={styles.statLabel}>higher conversion from AI searches</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>${animateCounter(2.3, true)}M</div>
              <div className={styles.statLabel}>average revenue impact</div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.heroCta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className={styles.primaryButton}>Start AI Optimization</button>
            <button className={styles.secondaryButton}>View Case Studies</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}