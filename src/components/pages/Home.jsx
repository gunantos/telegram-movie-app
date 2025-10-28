import React, { useEffect, useMemo, useState } from 'react'
import Header from '../common/Header'
import MovieGridMantine from '../common/MovieGridMantine'
import { MOVIE_TABS } from '../../utils/constants'
import { mockMovies } from '../../data/mockMovies'
import { motion } from 'motion/react'

const Home = () => {
  const [activeTab, setActiveTab] = useState(MOVIE_TABS.FILM)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('views_desc')
  const [date, setDate] = useState('any')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
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

  return (
    <div className="home">
      <Header title="Movie App" />

      <motion.div
        key={`${activeTab}-${sort}-${date}-${search}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <MovieGridMantine
          movies={filteredMovies}
          isLoading={isLoading}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          date={date}
          setDate={setDate}
        />
      </motion.div>
    </div>
  )
}

export default Home
