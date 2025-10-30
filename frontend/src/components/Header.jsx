import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header({ site }) {
	const [open, setOpen] = useState(false)
	const title = site?.name || 'RovrOne'
	return (
		<header className="site-header">
			<div className="container">
				<div className="brand">
					<Link to="/" className="brand-link">
						<img src="/rov-logo.jpg" alt={title} className="brand-logo" />
					</Link>
				</div>

				<nav className="nav">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/services">Services</Link>
					<Link to="/products">Products</Link>
					<Link to="/drone-school">Drone School</Link>
					<Link to="/contact">Contact</Link>
				</nav>

				<button className="menu-toggle" onClick={() => setOpen((s) => !s)} aria-label="menu">☰</button>
			</div>
			{open && (
				<div className="nav-mobile">
					<Link to="/" onClick={() => setOpen(false)}>Home</Link>
					<Link to="/about" onClick={() => setOpen(false)}>About</Link>
					<Link to="/services" onClick={() => setOpen(false)}>Services</Link>
					<Link to="/products" onClick={() => setOpen(false)}>Products</Link>
					<Link to="/drone-school" onClick={() => setOpen(false)}>Drone School</Link>
					<Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
				</div>
			)}
		</header>
	)
}

export default Header

