import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    // Load the products JSON and find the requested id locally so the page
    // works when the backend API is not available in production.
    fetch('/data/products.json')
      .then((r) => r.json())
      .then((list) => {
        if (!Array.isArray(list)) return setError(['Invalid products data'])
        const found = list.find((p) => p.id === id)
        if (found) setProduct(found)
        else setError([`Product not found: ${id}`])
      })
      .catch((err) => setError([err.message || 'Failed to load products']))
  }, [id])

  if (error) return <section className="container"><h1>Product</h1><p>Error: {error.join('; ')}</p></section>
  if (!product) return <section className="container"><h1>Product</h1><p>Loading...</p></section>

  return (
    <section className="container">
      <h1>{product.title}</h1>
      {product.summary && <p>{product.summary}</p>}
      {product.description && <p>{product.description}</p>}
      {product.specs && (
        <div>
          <h3>Specifications</h3>
          <ul>
            {Object.entries(product.specs).map(([k, v]) => (
              <li key={k}><strong>{k}:</strong> {v}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default ProductDetail
