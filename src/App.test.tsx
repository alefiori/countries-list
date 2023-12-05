import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { App } from './App'

const useStore = vi.hoisted(() => ({
  isLoading: false,
  fetchCountries: vi.fn(),
  error: '',
}))
vi.mock('./utils', () => ({ useStore: () => useStore }))

vi.mock('./components', () => ({
  CountriesList: () => <div>CountriesList</div>,
  SearchBar: () => <div>SearchBar</div>,
  Spinner: () => <div>Spinner</div>,
}))

describe('App component', () => {
  it('should render', () => {
    const app = render(<App />)
    expect(app).toBeDefined()
  })
  it('should render the title', async () => {
    const { findByText } = render(<App />)
    const title = await findByText('Countries List')
    expect(title).toBeInTheDocument()
  })
  it('should render the search bar', async () => {
    const { findByText } = render(<App />)
    const searchBar = await findByText('SearchBar')
    expect(searchBar).toBeInTheDocument()
  })
  it('should render the countries list', async () => {
    const { findByText } = render(<App />)
    const countriesList = await findByText('CountriesList')
    expect(countriesList).toBeInTheDocument()
  })
  it('should render the spinner', async () => {
    useStore.isLoading = true
    const { findByText } = render(<App />)
    const spinner = await findByText('Spinner')
    expect(spinner).toBeInTheDocument()
  })
  it('should render the error', async () => {
    useStore.isLoading = false
    useStore.error = 'error'
    const { findByText } = render(<App />)
    const error = await findByText('error')
    expect(error).toBeInTheDocument()
  })
})
