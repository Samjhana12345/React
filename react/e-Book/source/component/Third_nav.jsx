import React from 'react'
import Categories from '../data/Categories'


function Third_nav() {
  return (
    <>
      <div id='section-2'>
        <div id='heading'>
          <h4>Genres</h4>
          <p>Browse Our Extensive Collection of Books Across Different Genres.</p>
        </div>
        <div id='genres'>
          {Categories.map((c) =>
            <a className='py-1 px-2'><ul><li><a href='#'>{c}</a></li></ul></a>
          )}
        </div>

      </div>
    </>
  )
}

export default Third_nav