import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App component', () => {
  it('should render', () => {
    const app = render(<App />)
    expect(app).toBeDefined()
  })
})
