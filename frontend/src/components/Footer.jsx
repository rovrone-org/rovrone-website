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
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			})
			const json = await res.json()
			if (json.success) {
				setStatus('subscribed')
				setEmail('')
			} else {
				setStatus('error')
			}
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

