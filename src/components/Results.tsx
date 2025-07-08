'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Results.module.css'

export default function Results() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const caseStudies = [
    {
      industry: 'E-commerce',
      duration: '3 months',
      results: [
        { number: '312%', label: 'increase in AI-driven traffic' },
        { number: '$1.2M', label: 'additional revenue' }
      ]
    },
    {
      industry: 'SaaS',
      duration: '6 months',
      results: [
        { number: '89%', label: 'AI visibility score' },
        { number: '4.7x', label: 'lead quality improvement' }
      ]
    }
  ]

  return (
    <section className={styles.results}>
      <div className={styles.container}>
        <motion.div 
          ref={ref}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Real Results, Real Revenue</h2>
          <p className={styles.sectionSubtitle}>Our GEO strategies deliver measurable impact</p>
        </motion.div>
        
        <div className={styles.caseStudies}>
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className={styles.caseStudy}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.caseStudyHeader}>
                <span className={styles.industry}>{study.industry}</span>
                <span className={styles.duration}>{study.duration}</span>
              </div>
              <div className={styles.caseStudyResults}>
                {study.results.map((result, i) => (
                  <div key={i} className={styles.resultMetric}>
                    <div className={styles.resultNumber}>{result.number}</div>
                    <div className={styles.resultLabel}>{result.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}