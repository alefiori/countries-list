import { FC } from 'react'
import { useStore } from '../../utils'

export const CountriesList: FC = () => {
  const { filteredCountries } = useStore()

  if (!filteredCountries.length) {
    return <p>No countries found</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredCountries.map(({ name, code }, index) => (
          <tr key={index}>
            <td>{code}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
