import { ChangeEventHandler, FC, useCallback } from 'react'
import { useStore } from '../../utils'

export const SearchBar: FC = () => {
  const { currentSearch, setCurrentSearch } = useStore()

  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => setCurrentSearch(value),
    [setCurrentSearch],
  )

  return (
    <div>
      <input type="text" placeholder="Search" value={currentSearch} onChange={onChange} />
    </div>
  )
}
