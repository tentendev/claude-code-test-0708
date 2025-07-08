'use client'

import { useEffect, useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Tenten</span>
          </div>
          <div className={styles.navLinks}>
            <a 
              href="#how-it-works" 
              className={styles.navLink}
              onClick={(e) => scrollToSection(e, '#how-it-works')}
            >
              How it works
            </a>
            <a 
              href="#services" 
              className={styles.navLink}
              onClick={(e) => scrollToSection(e, '#services')}
            >
              Services
            </a>
            <a 
              href="#pricing" 
              className={styles.navLink}
              onClick={(e) => scrollToSection(e, '#pricing')}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className={styles.navLink}
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Contact
            </a>
          </div>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </div>
    </nav>
  )
}