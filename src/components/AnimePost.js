import React from 'react'
import './Anime.css'

function AnimePost({posts, loading}) { 
    if (loading) {
        return <h2>Loading...</h2>;
      }
    
  return (
    <div className='container'>
    {posts.map((post, id) => (
       <div key={id} className = 'posts'>
       <img src={post.images.jpg.image_url} alt="products" />
       <p>  {post.title}</p>
       </div>
      ))}
    </div>
  )
}

export default AnimePost
