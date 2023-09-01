import { render, screen } from '@testing-library/react'
import React from 'react'

import HomePage from '@/app/page'

describe('home', () => {
  it('renders a heading', () => {
    expect.hasAssertions()
    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      name: /hello world!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
