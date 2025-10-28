import React from 'react'
import MovieCard from './MovieCard'

const MovieGrid = ({ movies = [], isLoading }) => {
  if (isLoading) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="component-loading">
              <div className="spinner" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!movies.length) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="empty-state">
              <svg className="empty-state-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
              </svg>
              <h3 className="empty-state-title">Tidak ada video</h3>
              <p className="empty-state-description">Coba ubah kata kunci pencarian atau filter untuk menemukan video yang diinginkan.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-6 col-sm-2 col-md-3 col-lg-4 col-xl-6">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieGrid
