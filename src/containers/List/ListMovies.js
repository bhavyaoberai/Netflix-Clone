import React from 'react'

export const ListMovies = (props) => {
    const {
        title
    } = props.videoInfo

  return (
    <div>
        {
            title
        }
    </div>
  )
}
