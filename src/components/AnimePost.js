import React from 'react'
import './Anime.css'
import { useDrag } from "react-dnd";

function AnimePost({posts, id}) { 
  // console.log(posts)
      const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
    
      // if (loading) {
      //   return <h2>Loading...</h2>;
       
      // }
  return (
    <div className='container'>  
    {posts.map((post, id) => (
       <div key={id} className = 'posts'> 
       <img src={post.images.jpg.image_url} 
      width="150px"  ref={drag}  style={{ border: isDragging ? "5px solid pink" : "0px" }}
       alt="anime" />
       <p>  {post.title}</p>
       <p>{post.score}/10</p>
       <p>{post.studios.name}</p>
       {/* <button>+ Add to watchlist</button> */}
       </div>
      ))}
    </div>
  )
}

export default AnimePost
