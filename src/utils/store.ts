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
    set((state) => ({ currentSearch, filteredCountries: filterByCode(state.countries, currentSearch) })),
  fetchCountries: async () => {
    try {
      const { countries } = await getCountries()
      set({ countries, filteredCountries: countries, isLoading: false })
    } catch (_) {
      set({ isLoading: false })
    }
  },
}))
