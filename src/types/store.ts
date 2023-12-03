import { Countries } from '.'

export type Store = {
  isLoading: boolean
  countries: Countries
  currentSearch: string
  filteredCountries: Countries
  fetchCountries: () => Promise<void>
  setCurrentSearch: (_: string) => void
}
