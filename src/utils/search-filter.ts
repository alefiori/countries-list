import { Countries } from '../types'

export const filterByCode = (countries: Countries, search: string) => {
  if (!search.trim()) {
    return countries
  }
  return countries.filter(({ code }) => code.toLowerCase().includes(search.trim().toLowerCase()))
}
