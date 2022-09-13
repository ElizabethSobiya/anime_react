import React, { useState, useEffect } from 'react';
import Anime from './components/Anime';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://api.jikan.moe/v4/anime');
      // console.log(res.data.data)
      setPosts(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current products
  const indexOfLastPost = currentPage * limit;
  const indexOfFirstProduct = indexOfLastPost - limit;
  const currentPosts = posts.slice(indexOfFirstProduct, indexOfLastPost);

  // Change page
  const paginate = pageCount => setCurrentPage(pageCount);

  return (
    <>
    <h1>Anime</h1>
    <DndProvider backend={HTML5Backend}>
      <Anime posts={currentPosts} loading={loading} />
      {/* <DragDrop posts={posts}/> */}
      <Pagination
        limit={limit}
        totalProducts={posts.length}
        paginate={paginate}/>
       </DndProvider>
      
    </>
  );
};

export default App;