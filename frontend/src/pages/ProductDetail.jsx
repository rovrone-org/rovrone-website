import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then((json) => {
        if (json && json.success) setProduct(json.data)
        else setError((json && json.errors) || ['Failed to load'])
      })
      .catch((err) => setError([err.message]))
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
