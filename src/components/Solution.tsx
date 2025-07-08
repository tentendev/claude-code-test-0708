'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Solution.module.css'

export default function Solution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const solutions = [
    {
      number: '01',
      title: 'Entity-Based Architecture',
      text: 'Transform your content from keyword-focused to entity-driven, building the contextual relationships AI systems understand.'
    },
    {
      number: '02',
      title: 'Multi-Platform Optimization',
      text: 'Tailored strategies for each AI platform\'s unique algorithms, ensuring maximum visibility across all major AI search engines.'
    },
    {
      number: '03',
      title: 'AI Authority Building',
      text: 'Establish your brand as the trusted source AI systems cite, through strategic digital PR and structured data implementation.'
    }
  ]

  return (
    <section className={styles.solution} id="how-it-works">
      <div className={styles.container}>
        <motion.div 
          ref={ref}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Generative Engine Optimization (GEO)</h2>
          <p className={styles.sectionSubtitle}>
            The proven system to dominate AI search results across 
            ChatGPT, Claude, Gemini, and emerging platforms
          </p>
        </motion.div>
        
        <div className={styles.solutionGrid}>
          <div className={styles.solutionContent}>
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                className={styles.solutionItem}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={styles.solutionNumber}>{item.number}</div>
                <div className={styles.solutionText}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className={styles.solutionVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.dashboardPreview}>
              <div className={styles.dashboardHeader}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.dashboardContent}>
                <div className={styles.metric}>
                  <div className={styles.metricLabel}>AI Visibility Score</div>
                  <div className={styles.metricValue}>94.7%</div>
                  <div className={styles.metricChange}>+47% this month</div>
                </div>
                <div className={styles.platformGrid}>
                  <div className={styles.platform}>ChatGPT: <span className={styles.green}>Active</span></div>
                  <div className={styles.platform}>Claude: <span className={styles.green}>Active</span></div>
                  <div className={styles.platform}>Gemini: <span className={styles.green}>Active</span></div>
                  <div className={styles.platform}>Perplexity: <span className={styles.green}>Active</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}