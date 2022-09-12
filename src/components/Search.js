import React, { useState } from 'react';
import './Anime.css'

function Search({posts}) {


     // the value of the search field 
  const [search, setSearch] = useState('');

  //   the search result
    const [foundAnime, setFoundAnime] = useState(posts);
  
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
          // console.log(posts)
        const results = posts.filter((post) => {
          // console.log(post)
          return post.title.toLowerCase().startsWith(keyword.toLowerCase());
         
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundAnime(results);
      //   console.log(results)
      } else {
          setFoundAnime(posts);
        // If the text field is empty, show all users
      }
  
      setSearch(keyword);
    };
  return (
    <>
     <input
        type="search"
        value={search}
        onChange={filter}
        className="input"
        placeholder="Filter"/>

     <div className='container'>
    {foundAnime && foundAnime.length > 0 ? (
          foundAnime.map((post,id) => (
        <div key={id} className = 'posts'>
        <img src={post.images.jpg.image_url} alt="products" />
        <p>  {post.title}</p>
        </div>
     ))
     ) :  (
        <h1>No results found!</h1>
      )}
   </div>
    </>
  )
}

export default Search
