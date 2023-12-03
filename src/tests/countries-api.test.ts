import { HttpResponse, graphql } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import { getCountries } from '../utils'
import { mockCountries } from './mocks'

const listHandler = graphql.query('GetCountries', () => HttpResponse.json({ data: { countries: mockCountries } }))
const emptyHandler = graphql.query('GetCountries', () => HttpResponse.json({ data: { countries: [] } }))
const errorHandler = graphql.query('GetCountries', () => HttpResponse.json({ errors: [{ message: 'Server error' }] }))

const server = setupServer()

describe('Countries API', () => {
  beforeAll(() => server.listen())
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())
  it('should return a list of countries', async () => {
    server.use(listHandler)
    const { countries } = await getCountries()
    expect(countries).toEqual(mockCountries)
  })
  it('should return an empty list of countries', async () => {
    server.use(emptyHandler)
    const { countries } = await getCountries()
    expect(countries).toEqual([])
  })
  it('should throw an error', async () => {
    server.use(errorHandler)
    await expect(getCountries()).rejects.toThrow('Server error')
  })
})
