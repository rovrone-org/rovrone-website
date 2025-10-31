import React, { useEffect, useState } from 'react'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((json) => {
        if (json && json.success) setProducts(json.data)
      })
      .catch((err) => console.error('Failed to fetch products', err))
  }, [])

  return (
    <section className="container">
      <h1>Products & Flagships</h1>
      <p>We design and ship hardware platforms for industry and research. Below are flagship examples.</p>
      <div className="products-grid">
        {products.map((p) => (
          <article key={p.id} className="product-card">
            <h3>{p.title}</h3>
            {p.summary && <p>{p.summary}</p>}
            {p.specs && (
              <ul>
                {Object.entries(p.specs).map(([k, v]) => (
                  <li key={k}><strong>{k}:</strong> {v}</li>
                ))}
              </ul>
            )}
            {p.brochure && (
              <p><a href={p.brochure} target="_blank" rel="noreferrer">Download brochure</a></p>
            )}
            <p><a href={`/products/${p.id}`}>View details</a></p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products
