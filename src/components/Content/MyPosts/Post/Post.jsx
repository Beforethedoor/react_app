import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.item}>
        <img src='https://discordemoji.com/assets/emoji/1688_hideri_ahegao.png'/>
        {props.message}
    </div>
  );
}

export default Post;
