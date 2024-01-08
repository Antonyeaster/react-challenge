import React, { Component } from 'react';
import data from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';

const savedPosts = data.savedPosts;

export class Content extends Component {
    constructor(props) {
      super(props)
    
    }
  render() {
    return (
      <div className = {css.Content}>

        <div className = {css.TitleBar}>
            <h1>My Photos</h1>
        </div>

        <div className = {css.SearchResults}>
            <PostItem savedPosts={savedPosts}/>
        </div>
      </div>
    )
  }
}

export default Content