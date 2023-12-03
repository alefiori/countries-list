import request, { gql } from 'graphql-request'
import { CountriesResponse } from '../types'

const API_URL = 'https://countries.trevorblades.com/'

const COUNTRIES_QUERY = gql`
  query GetCountries {
    countries {
      name
      code
    }
  }
`

export const getCountries = (): Promise<CountriesResponse> => request(API_URL, COUNTRIES_QUERY)
