import React, { useEffect, useMemo, useState } from 'react'
import Header from '../common/Header'
import TabNavigation from '../common/TabNavigation'
import SearchBar from '../common/SearchBar'
import FilterControls from '../common/FilterControls'
import MovieGrid from '../common/MovieGrid'
import { MOVIE_TABS } from '../../utils/constants'
import { mockMovies } from '../../data/mockMovies'

const Home = () => {
  const [activeTab, setActiveTab] = useState(MOVIE_TABS.FILM)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('views_desc')
  const [date, setDate] = useState('any')
  const [isLoading, setIsLoading] = useState(false)

  // Simulate fetching data (replace with API call later)
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [activeTab, search, sort, date])

  const filteredMovies = useMemo(() => {
    let items = mockMovies.filter(m => m.type === activeTab)

    if (search) {
      const term = search.toLowerCase()
      items = items.filter(m => m.title.toLowerCase().includes(term))
    }

    if (date !== 'any') {
      const now = new Date()
      items = items.filter(m => {
        const d = new Date(m.uploadedAt)
        const diffDays = (now - d) / (1000 * 60 * 60 * 24)
        if (date === '24h') return diffDays <= 1
        if (date === '7d') return diffDays <= 7
        if (date === '30d') return diffDays <= 30
        return true
      })
    }

    if (sort === 'views_desc') items.sort((a, b) => b.views - a.views)
    if (sort === 'views_asc') items.sort((a, b) => a.views - b.views)
    if (sort === 'date_desc') items.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
    if (sort === 'date_asc') items.sort((a, b) => new Date(a.uploadedAt) - new Date(b.uploadedAt))

    return items
  }, [activeTab, search, sort, date])

  const handleReset = () => {
    setSearch('')
    setSort('views_desc')
    setDate('any')
  }

  return (
    <div className="home">
      <Header title="Movie App" />

      <TabNavigation
        tabs={[{
          key: MOVIE_TABS.SHORTS,
          label: 'Shorts'
        }, {
          key: MOVIE_TABS.FILM,
          label: 'Film'
        }, {
          key: MOVIE_TABS.SERIES,
          label: 'Series'
        }, {
          key: MOVIE_TABS.CARTOON,
          label: 'Cartun'
        }]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="search-controls container">
        <SearchBar value={search} onChange={setSearch} placeholder="Cari judul..." />
        <FilterControls
          sort={sort}
          date={date}
          onSortChange={setSort}
          onDateChange={setDate}
          onReset={handleReset}
        />
      </div>

      <MovieGrid movies={filteredMovies} isLoading={isLoading} />
    </div>
  )
}

export default Home
