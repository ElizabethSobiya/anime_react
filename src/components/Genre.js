import React, {useState} from 'react';
import './Anime.css'

function Genre({posts}) {

  const [filterData, setFilterData] = useState(posts);

  const filterByGenre = (items) => {
    const genre =  posts.filter((currData)=> {
      console.log(currData.genres.name)
      return currData.genres.name === items;
    })
    setFilterData(genre)
    console.log(genre)  
  }
    
  return (
   <>
    <div className='genre'>
        <button onClick={()=> filterByGenre('Action')} >Action</button>
        <button>Adventure</button>
        <button>Comedy</button>
        <button>Comedy</button>
        <button>Sci-Fi</button>
       </div>
   </>
  )
}

export default Genre
