import { Countries } from '.'

export type Store = {
  isLoading: boolean
  error: string
  countries: Countries
  currentSearch: string
  filteredCountries: Countries
  fetchCountries: () => Promise<void>
  setCurrentSearch: (_: string) => void
}
