import React from 'react'

const MovieCard = (props) => {
  return (
    <div className='card'>
        <div className='poster'>
        <img src="" alt="" />
        </div>

        <div className='info'>
            <p className='title'>{props.title}</p>
            <p className='vote'></p>
        </div>

        
    </div>
  )
}

export default MovieCard