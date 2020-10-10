import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
        <div>
            Posts
            <Post message='Hello world!'/>
            <Post message='Its Jonny!'/>
            <Post message='I like hentai!'/>
        </div>
  );
}

export default MyPosts;
