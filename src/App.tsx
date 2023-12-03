import { FC, useEffect } from 'react'
import { CountriesList, SearchBar } from './components'
import { useStore } from './utils'

export const App: FC = () => {
  const { isLoading, fetchCountries } = useStore()

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])

  return (
    <main>
      <h1>Countries list</h1>
      <SearchBar />
      {isLoading ? <p>Loading...</p> : <CountriesList />}
    </main>
  )
}
