import React from 'react'
import './hero.css'

function Hero({ hero }) {
	if (!hero) return null
	return (
		<section className="hero page">
			<div className="container">
				<div style={{maxWidth:720, margin:'0 auto', textAlign:'center'}}>
					<h1 style={{fontSize:'2.4rem', fontWeight:800, letterSpacing:'-0.02em'}}>{hero.title}</h1>
					<p style={{color:'var(--text-muted)', marginTop:8}}>{hero.subtitle}</p>
					{hero.cta && <div style={{marginTop:18}}><a className="btn" href="/contact">{hero.cta}</a></div>}
				</div>
			</div>
		</section>
	)
}

export default Hero

