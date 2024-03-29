import React, { useEffect, useState } from 'react'
import data from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';

const savedPosts = data.savedPosts;

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, [])

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
          return post.name.toLowerCase().includes(name);
        })
        setFetchedPosts(filteredPosts)
      }
    return (
        <div className = {css.Content}>
  
          <div className = {css.TitleBar}>
              <h1>My Photos</h1>
              <form>
                <label>Search:</label>
                <input onChange={(event) => handleChange(event)} type='search' id='searchInput' placeholder="By Author"/>
                <h4>Posts found: {fetchedPosts.length}</h4>
              </form>
          </div>
  
          <div className = {css.SearchResults}>
            {
              isLoaded ?
              <PostItem savedPosts={fetchedPosts} />
              : <Loader/>
            }
          </div>
        </div>
      )
}

export default ContentHooks