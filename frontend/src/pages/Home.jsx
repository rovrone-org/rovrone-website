import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import './Home.css'

function Home({ site }) {
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
		<div className="home-page">
			<Hero hero={site?.hero} />
			
			{/* Vision Section */}
			<section className="section bg-surface">
				<div className="container">
					<div className="grid-2 items-center gap-xl">
						<div className="vision-content">
							<h2 className="section-title">Engineering Intelligence</h2>
							<p className="section-lead">Empowering Innovation Through Advanced Robotics and AI Solutions</p>
							<p className="mt-md">At RovrOne Labs, we're pioneering the future of autonomous systems, developing cutting-edge solutions that bridge the gap between human ingenuity and machine capability.</p>
							<div className="stats-grid">
								<div className="stat-item">
									<span className="stat-number">10+</span>
									<span className="stat-label">Years Experience</span>
								</div>
								<div className="stat-item">
									<span className="stat-number">100+</span>
									<span className="stat-label">Projects Delivered</span>
								</div>
								<div className="stat-item">
									<span className="stat-number">24/7</span>
									<span className="stat-label">Support</span>
								</div>
							</div>
						</div>
						<div className="vision-image">
							<img src="/images/innovation-lab.jpg" alt="RovrOne Innovation Lab" className="rounded-lg shadow-lg" />
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
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
									<img src={s.icon} alt={s.title} />
								</div>
								<h3>{s.title}</h3>
								<p>{s.short}</p>
								<a href={`/services#${s.id}`} className="learn-more">Learn More →</a>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="section bg-surface">
				<div className="container">
					<div className="text-center mb-xl">
						<h2 className="section-title">Why Choose RovrOne</h2>
						<p className="section-lead">Leading the Future of Autonomous Systems</p>
					</div>
					<div className="grid-4">
						<div className="feature-card">
							<div className="feature-icon">
								<img src="/icons/innovation.svg" alt="Innovation" />
							</div>
							<h3>Innovation First</h3>
							<p>Pioneering solutions with cutting-edge technology and research</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon">
								<img src="/icons/expertise.svg" alt="Expertise" />
							</div>
							<h3>Expert Team</h3>
							<p>Highly skilled professionals with deep industry expertise</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon">
								<img src="/icons/quality.svg" alt="Quality" />
							</div>
							<h3>Quality Assured</h3>
							<p>Rigorous testing and validation processes</p>
						</div>
						<div className="feature-card">
							<div className="feature-icon">
								<img src="/icons/support.svg" alt="Support" />
							</div>
							<h3>24/7 Support</h3>
							<p>Round-the-clock technical assistance and maintenance</p>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies */}
			<section className="section">
				<div className="container">
					<div className="text-center mb-xl">
						<h2 className="section-title">Success Stories</h2>
						<p className="section-lead">Real-World Impact of Our Solutions</p>
					</div>
					<div className="grid-2">
						<article className="case-study-card">
							<img src="/images/case-study-1.jpg" alt="Industrial Automation" className="case-study-image" />
							<div className="case-study-content">
								<h3>Industrial Automation Excellence</h3>
								<p>How we helped a manufacturing giant achieve 200% efficiency increase</p>
								<a href="/case-studies/industrial-automation" className="button button-primary">Read Case Study</a>
							</div>
						</article>
						<article className="case-study-card">
							<img src="/images/case-study-2.jpg" alt="Drone Solutions" className="case-study-image" />
							<div className="case-study-content">
								<h3>Advanced Drone Solutions</h3>
								<p>Revolutionizing aerial inspection and monitoring systems</p>
								<a href="/case-studies/drone-solutions" className="button button-primary">Read Case Study</a>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section cta-section">
				<div className="container text-center">
					<h2 className="section-title">Ready to Transform Your Operations?</h2>
					<p className="section-lead mb-xl">Let's discuss how our solutions can drive your success</p>
					<div className="cta-buttons">
						<a href="/contact" className="button button-primary">Get Started</a>
						<a href="/products" className="button button-secondary">Explore Products</a>
					</div>
				</div>
			</section>
		</div>
	)
	function Home({ site }) {
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
			<div className="home-page">
				<Hero hero={site?.hero} />
				
				{/* Vision Section */}
				<section className="section bg-surface">
					<div className="container">
						<div className="grid-2 items-center gap-xl">
							<div className="vision-content">
								<h2 className="section-title">Engineering Intelligence</h2>
								<p className="section-lead">Empowering Innovation Through Advanced Robotics and AI Solutions</p>
								<p className="mt-md">At RovrOne Labs, we're pioneering the future of autonomous systems, developing cutting-edge solutions that bridge the gap between human ingenuity and machine capability.</p>
								<div className="stats-grid">
									<div className="stat-item">
										<span className="stat-number">10+</span>
										<span className="stat-label">Years Experience</span>
									</div>
									<div className="stat-item">
										<span className="stat-number">100+</span>
										<span className="stat-label">Projects Delivered</span>
									</div>
									<div className="stat-item">
										<span className="stat-number">24/7</span>
										<span className="stat-label">Support</span>
									</div>
								</div>
							</div>
							<div className="vision-image">
								<img src="/images/innovation-lab.jpg" alt="RovrOne Innovation Lab" className="rounded-lg shadow-lg" />
							</div>
						</div>
					</div>
				</section>
	
				{/* Services Section */}
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
										<img src={s.icon} alt={s.title} />
									</div>
									<h3>{s.title}</h3>
									<p>{s.short}</p>
									<a href={`/services#${s.id}`} className="learn-more">Learn More →</a>
								</article>
							))}
						</div>
					</div>
				</section>
	
				{/* Why Choose Us */}
				<section className="section bg-surface">
					<div className="container">
						<div className="text-center mb-xl">
							<h2 className="section-title">Why Choose RovrOne</h2>
							<p className="section-lead">Leading the Future of Autonomous Systems</p>
						</div>
						<div className="grid-4">
							<div className="feature-card">
								<div className="feature-icon">
									<svg className="icon-innovation" viewBox="0 0 24 24">{/* Add SVG path */}</svg>
								</div>
								<h3>Innovation First</h3>
								<p>Pioneering solutions with cutting-edge technology and research</p>
							</div>
							<div className="feature-card">
								<div className="feature-icon">
									<svg className="icon-expertise" viewBox="0 0 24 24">{/* Add SVG path */}</svg>
								</div>
								<h3>Expert Team</h3>
								<p>Highly skilled professionals with deep industry expertise</p>
							</div>
							<div className="feature-card">
								<div className="feature-icon">
									<svg className="icon-quality" viewBox="0 0 24 24">{/* Add SVG path */}</svg>
								</div>
								<h3>Quality Assured</h3>
								<p>Rigorous testing and validation processes</p>
							</div>
							<div className="feature-card">
								<div className="feature-icon">
									<svg className="icon-support" viewBox="0 0 24 24">{/* Add SVG path */}</svg>
								</div>
								<h3>24/7 Support</h3>
								<p>Round-the-clock technical assistance and maintenance</p>
							</div>
						</div>
					</div>
				</section>
	
				{/* Case Studies */}
				<section className="section">
					<div className="container">
						<div className="text-center mb-xl">
							<h2 className="section-title">Success Stories</h2>
							<p className="section-lead">Real-World Impact of Our Solutions</p>
						</div>
						<div className="grid-2">
							<article className="case-study-card">
								<img src="/images/case-study-1.jpg" alt="Industrial Automation" className="case-study-image" />
								<div className="case-study-content">
									<h3>Industrial Automation Excellence</h3>
									<p>How we helped a manufacturing giant achieve 200% efficiency increase</p>
									<a href="/case-studies/industrial-automation" className="button button-primary">Read Case Study</a>
								</div>
							</article>
							<article className="case-study-card">
								<img src="/images/case-study-2.jpg" alt="Drone Solutions" className="case-study-image" />
								<div className="case-study-content">
									<h3>Advanced Drone Solutions</h3>
									<p>Revolutionizing aerial inspection and monitoring systems</p>
									<a href="/case-studies/drone-solutions" className="button button-primary">Read Case Study</a>
								</div>
							</article>
						</div>
					</div>
				</section>
	
				{/* CTA Section */}
				<section className="section cta-section">
					<div className="container text-center">
						<h2 className="section-title">Ready to Transform Your Operations?</h2>
						<p className="section-lead mb-xl">Let's discuss how our solutions can drive your success</p>
						<div className="cta-buttons">
							<a href="/contact" className="button button-primary">Get Started</a>
							<a href="/products" className="button button-secondary">Explore Products</a>
						</div>
					</div>
				</section>
			</div>
		)
}
}
export default Home

