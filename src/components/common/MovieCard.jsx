import React, { useState } from 'react'

const formatViews = (n) => {
  if (n >= 1_000_000) return `${(n/1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n/1_000).toFixed(1)}K`
  return `${n}`
}

const MovieCard = ({ movie, onClick }) => {
  const [loaded, setLoaded] = useState(false)

  const highViews = movie.views >= 100000

  return (
    <article className="movie-card" onClick={() => onClick?.(movie)} tabIndex={0} role="button" aria-label={`Play ${movie.title}`}>
      <div className="movie-card-image-container">
        <img
          className={`movie-card-image ${loaded ? 'loaded' : ''}`}
          src={movie.thumbnail}
          alt={movie.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <div className="movie-card-overlay">
          <button className="play-button" aria-label="Play">
            ▶
          </button>
        </div>
      </div>
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div className="movie-card-info">
          <div className="movie-card-date">
            <span>{new Date(movie.uploadedAt).toLocaleDateString('id-ID')}</span>
          </div>
          <div className={`movie-card-views ${highViews ? 'high-views' : ''}`}>
            <span>{formatViews(movie.views)} views</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
