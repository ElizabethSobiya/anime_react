import React, { useState } from 'react';
import './Anime.css'
import AnimePost from './AnimePost';
import Genre from './Genre';
import './SearchBar.css'
import './Genre.css'


const Anime = ({ posts }) => {
  

  // the value of the search field 
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState(posts);

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

 

  // const filterByGenre = (items) => {
  //   const genre =  posts.filter((currData)=> {
  //     // console.log(currData.genres.name)
  //     return currData.source === items;
      
  //   })
  //   setFilterData(genre)
  //   console.log(genre)  
  //   console.log('hi')
  // }


  return (
   <>
   <div className='search-container'>  
   <input
        type="search"
        value={search}
        onChange={filter}
        className="search-input"
        placeholder="Filter"/>
        <a href="/#" class="search-btn">
                <i class="fas fa-search"></i>      
        </a>
   </div>
   {/* <button onClick={()=> filterByGenre('Original')} className={'btn'} >Action</button> */}
          
       {/* <AnimePost posts={posts} loading= {loading}/> */}
      
       <div className='anime'>   
       <div className='genre'>
       <Genre posts={posts}/>   
       </div>
       <div className='container'>
                {foundAnime && foundAnime.length > 0 ? (
                       foundAnime.map((post,id) => (
                 <div key={id} className = 'posts'>
                   <img src={post.images.jpg.image_url} alt="products" />
                     <p className='content'>  {post.title}</p>
                     <p className='content'>{post.score}/10</p>
                       {/* <button>+ Add to watchlist</button> */}
                  </div>))
     ) :  (
        <AnimePost posts={posts}/>
      )}
   </div>
       </div>


   </>
  );
};

export default Anime;