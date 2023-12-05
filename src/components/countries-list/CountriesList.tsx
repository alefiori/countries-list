import { FC } from 'react'
import { useStore } from '../../utils'

export const CountriesList: FC = () => {
  const { filteredCountries } = useStore()

  return (
    <table className="w-full text-sm text-left text-gray-500 table-fixed">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-3 w-20 lg:w-40">
            Code
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredCountries.map(({ name, code }, index) => (
          <tr key={index} className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">{code}</td>
            <td className="px-6 py-4">{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
