'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Pricing.module.css'

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const plans = [
    {
      title: 'Starter',
      price: '2,500',
      features: [
        'AI optimization for 3 platforms',
        'Monthly content optimization',
        'Basic entity mapping',
        'Performance dashboard',
        'Email support'
      ]
    },
    {
      title: 'Professional',
      price: '5,000',
      featured: true,
      features: [
        'All AI platforms included',
        'Weekly content optimization',
        'Advanced entity architecture',
        'AI PR campaigns',
        'Real-time monitoring',
        'Dedicated account manager'
      ]
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: [
        'White-glove service',
        'Custom AI strategies',
        'Multi-brand support',
        'API integration',
        'On-site training',
        'SLA guarantees'
      ]
    }
  ]

  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <motion.div 
          ref={ref}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Start Dominating AI Search Today</h2>
          <p className={styles.sectionSubtitle}>Transparent pricing, no hidden fees</p>
        </motion.div>
        
        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.featured && <div className={styles.featuredBadge}>Best Value</div>}
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>{plan.title}</h3>
                <div className={styles.pricingPrice}>
                  {plan.price !== 'Custom' && <span className={styles.currency}>$</span>}
                  <span className={styles.amount}>{plan.price}</span>
                  {plan.price !== 'Custom' && <span className={styles.period}>/month</span>}
                </div>
              </div>
              <ul className={styles.pricingFeatures}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={`${styles.pricingButton} ${plan.featured ? styles.primary : ''}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}