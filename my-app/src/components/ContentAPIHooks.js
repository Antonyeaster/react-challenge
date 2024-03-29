import React, {useState, useEffect} from 'react'
import css from './css/Content.module.css';
import PostItem from './PostItemAPI';
import API_KEY from '../secrets';
import axios from 'axios';
import Loader from './Loader';


function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
    const fetchedPosts = response.data.hits;

      setIsLoaded(true);
      setPosts(fetchedPosts);
      setSavedPosts(fetchedPosts);
  }

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name);
    })
    setPosts(filteredPosts);
  }

  return (
    <div className = {css.Content}>

      <div className = {css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label>Search:</label>
            <input onChange={(event) => handleChange(event)} type='search' id='searchInput' />
            <h4>Posts found: {posts.length}</h4>
          </form>
      </div>

      <div className = {css.SearchResults}>
        {
          isLoaded ?
          <PostItem savedPosts={posts} />
          : <Loader/>
        }
      </div>
    </div>
  )
}

export default ContentAPIHooks