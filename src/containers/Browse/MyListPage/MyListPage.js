import React from 'react'

function MyListPage() {
  return (
    <div>
      <h1>My Movie List</h1>
      {movieList.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>
          <p>{movie.year}</p>
          <p>{movie.seasons} Seasons</p>
         
        </div>
      ))}
    </div>
  )
}

export default MyListPage
