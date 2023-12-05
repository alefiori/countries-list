import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { SearchBar } from '..'

const setCurrentSearch = vi.fn()

vi.mock('../../utils', () => ({
  useStore: () => ({
    currentSearch: '__CURRENT_SEARCH__',
    setCurrentSearch,
  }),
}))

describe('SearchBar component', () => {
  it('should render an input field with a placeholder', () => {
    const { container } = render(<SearchBar />)
    const input = container.querySelector('input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Filter Countries by Code...')
  })
  it('should call setCurrentSearch on change', () => {
    const { container } = render(<SearchBar />)
    const input = container.querySelector('input')!
    fireEvent.change(input, { target: { value: '__NEW_SEARCH__' } })
    expect(setCurrentSearch).toHaveBeenCalledOnce()
  })
  it('should use the current search value', () => {
    const { container } = render(<SearchBar />)
    const input = container.querySelector('input')!
    expect(input).toHaveValue('__CURRENT_SEARCH__')
  })
})
