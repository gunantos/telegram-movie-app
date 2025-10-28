import React from 'react'

const FilterControls = ({ sort, date, onSortChange, onDateChange, onReset }) => {
  return (
    <div className="filter-controls">
      <select className="filter-select" value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="views_desc">Views terbanyak</option>
        <option value="views_asc">Views terendah</option>
        <option value="date_desc">Terbaru</option>
        <option value="date_asc">Terlama</option>
      </select>

      <select className="filter-select" value={date} onChange={(e) => onDateChange(e.target.value)}>
        <option value="any">Semua waktu</option>
        <option value="24h">24 jam terakhir</option>
        <option value="7d">7 hari terakhir</option>
        <option value="30d">30 hari terakhir</option>
      </select>

      <button className="filter-reset" onClick={onReset}>Reset</button>
    </div>
  )
}

export default FilterControls
