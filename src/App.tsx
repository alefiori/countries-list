import { FC, useEffect } from 'react'
import { CountriesList, SearchBar, Spinner } from './components'
import { useStore } from './utils'

export const App: FC = () => {
  const { isLoading, fetchCountries, error } = useStore()

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])

  if (isLoading) return <Spinner />

  return (
    <main className="relative min-h-screen p-4 max-w-5xl m-auto">
      <h1 className=" text-center my-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-5xl">
        Countries List
      </h1>
      <SearchBar />
      {error ? <p className="mt-2 text-s text-red-600 text-center font-medium">{error}</p> : <CountriesList />}
    </main>
  )
}
