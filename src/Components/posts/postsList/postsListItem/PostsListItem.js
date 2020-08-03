import React from 'react';
import css from "./PostsListItem.module.css";

const PostsListItem = ({ post, deletePost }) => {
    return (
        <li className={css.postListItem}>
            <button id={post.id} className={css.postListItemButtonDelete} onClick={(e)=> deletePost(e.target.id)}>X</button>
            <h2 className={css.postListItemTitle}>{post.title}</h2>
            <p className={css.postListItemContent}>{post.content}</p>
        </li>
    );
}

export default PostsListItem;