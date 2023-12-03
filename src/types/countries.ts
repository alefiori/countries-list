export type Country = {
  name: string
  code: string
}

export type Countries = ReadonlyArray<Country>

export type CountriesResponse = {
  countries: Countries
}
