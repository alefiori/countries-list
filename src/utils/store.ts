import { create } from 'zustand'
import { Store } from '../types'
import { filterByCode, getCountries } from '.'

export const useStore = create<Store>()((set) => ({
  isLoading: true,
  error: '',
  countries: [],
  currentSearch: '',
  filteredCountries: [],
  setCurrentSearch: (currentSearch) =>
    set(({ countries }) => {
      if (!countries.length) return { currentSearch }
      const filteredCountries = filterByCode(countries, currentSearch)
      if (!filteredCountries.length)
        return { currentSearch, error: 'No matching countries found. Please adjust your search.' }
      return { currentSearch, filteredCountries, error: '' }
    }),
  fetchCountries: async () => {
    try {
      const { countries } = await getCountries()
      if (!countries.length) throw new Error()
      set({ countries, filteredCountries: countries, isLoading: false })
    } catch (_) {
      set({ isLoading: false, error: 'Failed to fetch countries. Please try again later.' })
    }
  },
}))
