import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer({ site }) {
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState(null)

	async function subscribe(e) {
		e.preventDefault()
		setStatus('sending')
		try {
			// In static/deploy previews we may not have a backend available.
			// Simulate subscription locally and show a success message.
			await new Promise((r) => setTimeout(r, 600))
			setStatus('subscribed')
			setEmail('')
		} catch (err) {
			console.error(err)
			setStatus('error')
		}
	}

	return (
		<footer className="site-footer">
			<div className="container">
				<div>{site?.name || 'RovrOne'}</div>
				<div className="footer-links">
					<Link to="/privacy">Privacy</Link>
					<span> · </span>
					<Link to="/terms">Terms</Link>
				</div>
				<div>
					<form onSubmit={subscribe} className="subscribe-form" style={{display:'flex', gap:8, alignItems:'center'}}>
						<input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{padding:'6px 8px', borderRadius:6}} />
						<button type="submit">Subscribe</button>
					</form>
					{status === 'sending' && <div>Sending...</div>}
					{status === 'subscribed' && <div>Subscribed</div>}
					{status === 'error' && <div>Subscription error</div>}
				</div>
				<div>© {new Date().getFullYear()}</div>
			</div>
		</footer>
	)
}

export default Footer

