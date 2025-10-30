import React from 'react'

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <h3>{service.title}</h3>
      <p>{service.short}</p>
    </div>
  )
}

export default ServiceCard
