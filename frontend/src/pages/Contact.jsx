import React from 'react'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <section className="container page">
      <h1>Contact</h1>
      <p>Get in touch for product enquiries, quotes or training programs. We respond to business enquiries within two working days.</p>
      <ContactForm />
      <div style={{marginTop:18}}>
        <h3>Contact details</h3>
        <p>Email: hello@rovrone.com</p>
        <p>Phone: +91-800-000-0000</p>
        <p>Address: Bengaluru, India</p>
      </div>
    </section>
  )
}

export default Contact
