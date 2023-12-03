import { describe, expect, it } from 'vitest'
import { filterByCode } from '../utils'
import { mockCountries } from './mocks'

describe('Search Filter', () => {
  it('should filter countries by code', () => {
    const filteredCountries = filterByCode(mockCountries, 'IT')
    expect(filteredCountries.length).toBe(1)
    expect(filteredCountries[0].name).toBe('Italy')
  })
  it('should return all countries', () => {
    const filteredCountries = filterByCode(mockCountries, '')
    expect(filteredCountries).toEqual(mockCountries)
  })
  it('should return empty array', () => {
    const filteredCountries = filterByCode(mockCountries, 'XX')
    expect(filteredCountries).toEqual([])
  })
})
