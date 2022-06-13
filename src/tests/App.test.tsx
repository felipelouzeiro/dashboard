import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from '../app/pages/dashboard/components/header/Header'

describe('Header Component', () => {
  it('should render title', () => {
    render(<Header />)

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
  it('should render subtitle', () => {
    render(<Header />)

    expect(screen.getByText('Desafio Técnico Frontend')).toBeInTheDocument()
  })
  it('should render button', () => {
    render(<Header />)

    expect(screen.getByText('Filtrar')).toBeInTheDocument()
  })
})
