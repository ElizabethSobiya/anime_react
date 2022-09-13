import React, {useState} from 'react';
import './Genre.css'

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
    <div >
      <h1>Filter by Genre</h1>
        <button onClick={()=> filterByGenre('Action')}className={'btn'} >Action</button>
        <button className={'btn'}>Adventure</button>
        <button className={'btn'}>Comedy</button>
        <button className={'btn'}>Sci-Fi</button>
       </div>
   </>
  )
}

export default Genre
