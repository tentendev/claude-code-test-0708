'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Services from '@/components/Services'
import Results from '@/components/Results'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Results />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}