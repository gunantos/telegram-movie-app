export const mockMovies = [
  // Shorts
  {
    id: 's1',
    type: 'shorts',
    title: 'Behind the Scenes: Action Stunt',
    thumbnail: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop',
    uploadedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    views: 154320
  },
  {
    id: 's2',
    type: 'shorts',
    title: 'Comedic Bloopers: The Funniest Takes',
    thumbnail: 'https://images.unsplash.com/photo-1559136652-09aa0f0fbede?q=80&w=1200&auto=format&fit=crop',
    uploadedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    views: 84500
  },
  // Film
  {
    id: 'f1',
    type: 'film',
    title: 'The Last Horizon',
    thumbnail: 'https://images.unsplash.com/photo-1523247194612-795c9e0764d6?q=80&w=1200&auto=format&fit=crop',
    uploadedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    views: 1240032
  },
  {
    id: 'f2',
    type: 'film',
    title: 'City of Dreams',
    thumbnail: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68e?q=80&w=1200&auto=format&fit=crop',
    uploadedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    views: 532120
  },
  // Series
  {
    id: 'se1',
    type: 'series',
    title: 'Mystic Chronicles S1E1',
    thumbnail: 'https://images.unsplash.com/photo-1521482333634-9ad8830492a5?q=80&w=1200&auto=format&fit=crop',
    uploadedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    views: 745320
  },
  {
    id: 'se2',
    type: 'series',
    title: 'Mystic Chronicles S1E2',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop',
    uploadedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    views: 689210
  },
  // Cartoon
  {
    id: 'c1',
    type: 'cartoon',
    title: 'Adventures of Pip & Pop',
    thumbnail: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop',
    uploadedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    views: 120450
  },
  {
    id: 'c2',
    type: 'cartoon',
    title: 'The Rainbow Squad',
    thumbnail: 'https://images.unsplash.com/photo-1566125882327-4b6bcd44f4fc?q=80&w=1200&auto=format&fit=crop',
    uploadedAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(),
    views: 90560
  }
]
