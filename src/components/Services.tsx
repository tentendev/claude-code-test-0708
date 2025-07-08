'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Services.module.css'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      title: 'Technical AI Optimization',
      features: [
        'Structured data implementation',
        'Entity markup optimization',
        'AI crawlability enhancement',
        'Response time optimization'
      ]
    },
    {
      title: 'Content Intelligence',
      features: [
        'Entity-based content strategy',
        'AI-friendly content structuring',
        'Multi-format content creation',
        'Contextual relationship building'
      ],
      featured: true
    },
    {
      title: 'AI Authority & PR',
      features: [
        'Strategic brand mentions',
        'AI-focused digital PR',
        'Cross-platform presence',
        'Trust signal amplification'
      ]
    }
  ]

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <motion.div 
          ref={ref}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Complete GEO Services</h2>
          <p className={styles.sectionSubtitle}>Everything you need to dominate AI search</p>
        </motion.div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles.serviceCard} ${service.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {service.featured && <div className={styles.featuredBadge}>Most Popular</div>}
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <ul className={styles.serviceList}>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}