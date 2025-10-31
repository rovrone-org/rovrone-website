import React from 'react'
import './About.css'

function About() {
	return (
		<div className="about-page">
			<section className="container page intro">
				<h1>About RovrOne Labs</h1>
				<p className="lead">Engineering Intelligence — empowering innovation with dependable robotics platforms and trusted operational expertise.</p>

				<div className="grid-2 items-center">
					<div>
						<h2>Our mission</h2>
						<p>
							We design and deliver production-ready aerial and ground systems that solve complex inspection,
							surveying and autonomy challenges. Our interdisciplinary team blends systems engineering, ML research,
							and field operations to move projects from prototype to continuous production.
						</p>

						<h3>Our values</h3>
						<ul>
							<li>Safety-first, systems-driven engineering</li>
							<li>Pragmatic research — real-world impact</li>
							<li>Customer partnership and operational focus</li>
						</ul>
					</div>
					<div className="vision-figure">
						<img src="/images/about-hero.jpg" alt="RovrOne team working" />
					</div>
				</div>
			</section>

			<section className="section bg-surface team-section">
				<div className="container">
					<div className="text-center mb-xl">
						<h2>Leadership & Team</h2>
						<p className="section-lead">Experienced engineers, operators and researchers focused on delivering results.</p>
					</div>

					<div className="grid-3">
						<article className="team-card card">
							<img src="/images/team/Mohd_Ahmar.jpg" alt="Mohammad Ahmar Ansari" className="team-photo" />
							<h3>Mohammad Ahmar Ansari</h3>
							<p className="role">Founder & Director</p>
							<p>Systems engineer with 12+ years in autonomy and product development. Leads company strategy and client partnerships.</p>
						</article>

						<article className="team-card card">
							<img src="/images/team/siddhant.jpg" alt="Siddhant Shaw" className="team-photo" />
							<h3>Siddhant Shaw</h3>
							<p className="role">Head of Robotics and Drone & Director</p>
							<p>Expert in avionics and flight systems, oversees hardware development and field deployments.</p>
						</article>

						<article className="team-card card">
							<img src="/images/team/Abhinav_Pavithran.jpg" alt="Abhinav Pavithran" className="team-photo" />
							<h3>Abhinav Pavithran</h3>
							<p className="role">Director</p>
							<p>Experienced in GenAI and Computer Vision, focusing on product development and operational excellence.</p>
						</article>
					</div>
				</div>
			</section>

			<section className="section certifications">
				<div className="container">
					<div className="text-center mb-lg">
						<h2>Certifications & Partners</h2>
						<p className="section-lead">We adhere to industry safety and quality standards and collaborate with academic and industrial partners.</p>
					</div>

					<div className="cert-grid">
						<div className="cert-item">
							<img src="/images/certs/iso.svg" alt="ISO" />
							<p>ISO-compliant manufacturing</p>
						</div>
						<div className="cert-item">
							<img src="/images/certs/asa.svg" alt="ASA" />
							<p>Aerial systems accreditation</p>
						</div>
						<div className="cert-item">
							<img src="/images/certs/partner.svg" alt="Partner" />
							<p>Research partnerships</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section contact-cta">
							<div className="container text-center">
							<h2>Work with us</h2>
							<p className="section-lead">Have a project that needs robust autonomy or inspection workflows? Let's talk.</p>
							{/* Pre-fill contact form from About CTA */}
							<a
								href={`/contact?source=about&subject=${encodeURIComponent('Project inquiry from About page')}&message=${encodeURIComponent("Hi, I'm interested in a project that requires RovrOne's autonomy and inspection solutions. Please get in touch to discuss scope and timelines.")}`}
								className="button button-primary"
							>
								Contact our team
							</a>
						</div>
			</section>
		</div>
	)
}

export default About

