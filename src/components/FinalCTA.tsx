'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className={styles.finalCta}>
      <div className={styles.container}>
        <motion.div 
          ref={ref}
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.ctaTitle}>
            Every Day Without GEO Costs You Customers
          </h2>
          <p className={styles.ctaSubtitle}>
            Join forward-thinking businesses already dominating AI search results
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Start Free AI Audit</button>
            <span className={styles.ctaNote}>No credit card required • Results in 48 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}