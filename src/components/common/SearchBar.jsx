import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search"
      />
      <Search size={18} className="search-icon" />
    </div>
  )
}

export default SearchBar
