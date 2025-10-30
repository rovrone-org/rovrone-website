import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header'

test('renders site title in header', () => {
  const site = { name: 'RovrOne Labs' }
  render(
    <MemoryRouter>
      <Header site={site} />
    </MemoryRouter>
  )
  expect(screen.getByText(/RovrOne Labs/i)).toBeInTheDocument()
})
