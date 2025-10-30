import React, { useEffect, useState } from 'react'
import './Services.css'

function Services() {
	const [services, setServices] = useState([])

	useEffect(() => {
		fetch('/api/services')
			.then((r) => r.json())
			.then((json) => {
				if (json && json.success) setServices(json.data)
			})
			.catch((err) => console.error('Failed to fetch services', err))
	}, [])

	return (
		<div className="services-page">
			<section className="container hero">
				<div className="hero-content">
					<h1>Professional Services</h1>
					<p className="lead">From system design to deployment and continuous operations — RovrOne provides engineering, integration and operational services that bring autonomy to production environments.</p>
					<div className="hero-ctas">
						<a href="/contact?subject=General%20Services%20Enquiry" className="button button-primary">Request a Consultation</a>
						<a href="/products" className="button button-secondary">Explore Products</a>
					</div>
				</div>
				<div className="hero-visual">
					<img src="/images/services-hero.jpg" alt="RovrOne services" />
				</div>
			</section>

			<section className="section container">
				<div className="text-center mb-lg">
					<h2 className="section-title">Our Services</h2>
					<p className="section-lead">We combine research, engineering and field experience to deliver solutions across the full lifecycle.</p>
				</div>

				<div className="services-grid grid-3">
					{services.map((s) => (
						<article key={s.id} className="service-card card">
							<div className="service-card-head">
								<img src={s.icon || '/icons/innovation.svg'} alt={s.title} className="service-icon" />
								<div>
									<h3>{s.title}</h3>
									<p className="muted">{s.short}</p>
								</div>
							</div>

							<div className="service-body">
								{s.features && s.features.length ? (
									<ul className="service-features">
										{s.features.map((f, i) => (
											<li key={i}>{f}</li>
										))}
									</ul>
								) : (
									<p>{s.full}</p>
								)}

								<div className="service-actions">
									{s.brochure ? (
										<a href={`/pdfs/${s.brochure}`} className="button" target="_blank" rel="noreferrer">Download Brochure</a>
									) : (
										<a href="/pdfs/Engineering-Intelligence-Empowering-Innovation.pdf" className="button" target="_blank" rel="noreferrer">Download Brochure</a>
									)}

									<a
										className="button button-primary"
										href={`/contact?subject=${encodeURIComponent('Quote request: ' + s.title)}&message=${encodeURIComponent('Hi,\n\nI\'d like a quote for the service: ' + s.title + '. Please contact me to discuss requirements and timelines.\n\nThanks.')}`}
									>
										Request a quote
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	)
}

export default Services

