import React from 'react'
import App from '.'
import { render } from '@testing-library/react'

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()
  })
})
