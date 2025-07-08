import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Tenten</span>
            </div>
            <p className={styles.footerTagline}>
              Pioneering the future of AI search optimization
            </p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Services</h4>
              <a href="#">Technical Optimization</a>
              <a href="#">Content Strategy</a>
              <a href="#">AI Authority Building</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Case Studies</a>
              <a href="#">Blog</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Contact</h4>
              <a href="mailto:hello@tenten.co">hello@tenten.co</a>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Tenten.co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}