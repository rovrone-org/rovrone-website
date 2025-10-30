import React from 'react'
import './DroneSchool.css'

function DroneSchool() {
  const courses = [
    {
      id: 'pilot-basic',
      title: 'Pilot Foundations',
      length: '2 weeks',
      summary: 'Theory, simulator practice and supervised flight hours for new pilots. Covers air law, safety and mission planning.',
      bullets: ['Air law & safety', 'Flight fundamentals', 'Simulator sessions', '5 supervised flight hours'],
    },
    {
      id: 'pilot-advanced',
      title: 'Advanced Operations',
      length: '4 weeks',
      summary: 'Advanced BVLOS training, sensor integration and mission execution for industrial inspection.',
      bullets: ['BVLOS & risk mitigation', 'Sensor payload integration', 'Mission automation', 'Operational checklists'],
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Avionics',
      length: '3 weeks',
      summary: 'Hands-on maintenance curriculum for technicians: avionics, airframes and field repairs.',
      bullets: ['Routine inspection', 'Avionics troubleshooting', 'Battery & power systems', 'Field repair workflows'],
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      length: '3 weeks',
      summary: 'Processing aerial data for mapping, inspection and machine learning workflows.',
      bullets: ['Photogrammetry basics', 'Inspection analytics', 'Data pipelines', 'Model validation'],
    },
  ]

  return (
    <div className="drone-school-page">
      <section className="container hero">
        <div className="hero-content">
          <h1>RovrOne Drone School</h1>
          <p className="lead">Practical training for pilots, technicians and data teams. Built from field experience and designed for industry outcomes.</p>
          <div className="hero-ctas">
            <a href="/contact?subject=Drone%20School%20Enquiry" className="button button-primary">Enquire about courses</a>
            <a href="/careers" className="button button-secondary">Join our instructors</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/drone-school-hero.jpg" alt="Drone school" />
        </div>
      </section>

      <section className="section container curriculum">
        <div className="text-center mb-lg">
          <h2 className="section-title">Curriculum & Courses</h2>
          <p className="section-lead">Modular courses that combine classroom theory, simulation and field exercises to deliver competence and safety.</p>
        </div>

        <div className="grid-2 course-grid">
          <div>
            {courses.map((c) => (
              <article key={c.id} className="course-card card">
                <div className="course-head">
                  <h3>{c.title}</h3>
                  <span className="course-length">{c.length}</span>
                </div>
                <p className="muted">{c.summary}</p>
                <ul className="course-bullets">
                  {c.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="course-actions">
                  <a className="button" href={`/pdfs/${c.id}-syllabus.pdf`} target="_blank" rel="noreferrer">Download syllabus</a>
                  <a className="button button-primary" href={`/contact?subject=${encodeURIComponent('Enquiry: ' + c.title)}&message=${encodeURIComponent('Hi, I\'m interested in enrolling in ' + c.title + '. Please send details and next start dates.')}`}>Enrol / Enquire</a>
                </div>
              </article>
            ))}
          </div>

          <aside className="school-aside">
            <div className="card">
              <h3>Why train with RovrOne</h3>
              <ul>
                <li>Field-tested curriculum developed from real deployments</li>
                <li>Industry-recognized certificates and partner credits</li>
                <li>Small cohorts with near-real mission scenarios</li>
              </ul>
            </div>

            <div className="card testimonials">
              <h3>Testimonials</h3>
              <blockquote>
                "RovrOne's training gave our team the confidence to run BVLOS operations safely." — Site Manager, EnergyCo
              </blockquote>
              <blockquote>
                "Excellent balance of theory and hands-on time." — Graduate, 2024 cohort
              </blockquote>
            </div>

            <div className="card">
              <h3>Schedule & Pricing</h3>
              <p className="muted">We run monthly cohorts and bespoke corporate programs. Contact us for pricing and group discounts.</p>
              <a href="/contact?subject=Drone%20School%20Pricing" className="button button-primary">Request pricing</a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default DroneSchool
