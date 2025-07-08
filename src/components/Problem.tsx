'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Problem.module.css'

export default function Problem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const cards = [
    {
      icon: '🤖',
      title: 'AI Engines Think Differently',
      text: 'Traditional keywords don\'t work. AI understands entities, relationships, and context—not just matching terms.'
    },
    {
      icon: '📊',
      title: 'Zero Visibility = Zero Revenue',
      text: 'When AI doesn\'t recommend you, you lose high-intent buyers who trust AI recommendations over traditional search.'
    },
    {
      icon: '⚡',
      title: 'The Gap Widens Daily',
      text: 'Every day without GEO, competitors strengthen their AI authority while you become increasingly invisible.'
    }
  ]

  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <motion.div 
          ref={ref}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>The AI Search Revolution Is Here</h2>
          <p className={styles.sectionSubtitle}>And most businesses are completely unprepared</p>
        </motion.div>
        
        <div className={styles.grid3}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}