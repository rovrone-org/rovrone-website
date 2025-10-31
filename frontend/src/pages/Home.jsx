import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import './Home.css'

function Home({ site }) {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('/data/services.json')
      .then((r) => r.json())
      .then((json) => {
        if (Array.isArray(json)) setServices(json)
      })
      .catch((err) => console.error('Failed to load services', err))
  }, [])

  return (
    <div className="home-page">
      <Hero hero={site?.hero} />

      <section className="section bg-surface">
        <div className="container">
          <div className="grid-2 items-center gap-xl">
            <div className="vision-content">
              <h2 className="section-title">Engineering Intelligence</h2>
              <p className="section-lead">Empowering Innovation Through Applied Robotics and AI</p>
              <p className="mt-md">At RovrOne Labs, we focus on building reliable, maintainable systems for industry and research.</p>
            </div>
            <div className="vision-image">
              <img src="/images/innovation-lab.jpg" alt="RovrOne Innovation Lab" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title">Our Solutions</h2>
            <p className="section-lead">Comprehensive Robotics and AI Services</p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <article key={s.id} className="service-card card">
                <div className="service-icon">
                  <img src={s.icon || '/icons/innovation.svg'} alt={s.title} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <a href={`/services#${s.id}`} className="learn-more">Learn More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container text-center">
          <h2 className="section-title">Why Choose RovrOne</h2>
          <p className="section-lead">Local manufacturing, practical engineering, and responsive support.</p>
        </div>
      </section>
    </div>
  )
}

export default Home

