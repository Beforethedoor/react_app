import React from 'react';
import s from './Content.module.css';
import ContentInfo from './ContentInfo/ContentInfo';
import MyPosts from './MyPosts/MyPosts';

function Content() {
  return (
    <div>
    <ContentInfo />
    <MyPosts />
    </div>
  );
}

export default Content;
