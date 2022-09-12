import React, { useState, useEffect } from 'react';
import Anime from './components/Anime';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(6);

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
      <Anime posts={posts} loading={loading} />
      <Pagination
        limit={limit}
        totalProducts={posts.length}
        paginate={paginate}/>
    </>
  );
};

export default App;