import { useSelector } from 'react-redux'
import css from './SearchBox.module.css'

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.filter)
  return (
    <div className={css.searchBox}>
      <p>Find contact by name</p>
      <input type="text" value={value} onChange={(event) => onFilter(event.target.value)} />
    </div>
  )
}