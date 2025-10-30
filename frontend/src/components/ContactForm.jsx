import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ContactForm() {
	const location = useLocation()
	const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
	const [status, setStatus] = useState(null)

	useEffect(() => {
		// read URL search params and prefill form when present
		const params = new URLSearchParams(location.search)
		const pre = {}
		const keys = ['name', 'email', 'phone', 'subject', 'message']
		keys.forEach((k) => {
			const v = params.get(k)
			if (v) pre[k] = v
		})
		if (Object.keys(pre).length) {
			setForm((s) => ({ ...s, ...pre }))
		}
	}, [location.search])

	function update(e) {
		setForm((s) => ({ ...s, [e.target.name]: e.target.value }))
	}

	async function submit(e) {
		e.preventDefault()
		setStatus('sending')
			try {
				// include subject in payload if present
				const payload = { ...form }
				const res = await fetch('/api/contact', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				})
			const json = await res.json()
			if (json.success) {
				setStatus('sent')
					setForm({ name: '', email: '', phone: '', subject: '', message: '' })
			} else {
				setStatus('error')
			}
		} catch (err) {
			console.error(err)
			setStatus('error')
		}
	}

	return (
		<form className="contact-form" onSubmit={submit}>
			<div>
				<label>Name</label>
				<input name="name" value={form.name} onChange={update} required />
			</div>
			<div>
				<label>Email</label>
				<input name="email" type="email" value={form.email} onChange={update} required />
			</div>
			<div>
				<label>Phone</label>
				<input name="phone" value={form.phone} onChange={update} />
			</div>
			<div>
				<label>Message</label>
				<textarea name="message" value={form.message} onChange={update} required />
			</div>
			<div>
				<button type="submit">Send</button>
				{status === 'sending' && <span> Sending...</span>}
				{status === 'sent' && <span> Sent. Thank you.</span>}
				{status === 'error' && <span> Error. Try again.</span>}
			</div>
		</form>
	)
}

export default ContactForm

