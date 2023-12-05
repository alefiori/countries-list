import { describe, expect, it, vi } from 'vitest'
import { mockCountries } from '../../tests/mocks'
import { render } from '@testing-library/react'
import { CountriesList } from '..'

vi.mock('../../utils', () => ({
  useStore: () => ({
    filteredCountries: mockCountries,
  }),
}))

describe('CountriesList component', () => {
  it('should render a table with a header and a body', () => {
    const { container } = render(<CountriesList />)
    const table = container.querySelector('table')
    const thead = container.querySelector('thead')
    const tbody = container.querySelector('tbody')
    expect(table).toBeInTheDocument()
    expect(thead).toBeInTheDocument()
    expect(tbody).toBeInTheDocument()
  })
  it('should render a row for each country', () => {
    const { container } = render(<CountriesList />)
    const rows = container.querySelectorAll('tbody tr')
    expect(rows).toHaveLength(mockCountries.length)
  })
  it('should render the country code and name in each row', () => {
    const { container } = render(<CountriesList />)
    const rows = container.querySelectorAll('tbody tr')
    rows.forEach((row, index) => {
      const [code, name] = row.querySelectorAll('td')
      expect(code).toHaveTextContent(mockCountries[index].code)
      expect(name).toHaveTextContent(mockCountries[index].name)
    })
  })
})
