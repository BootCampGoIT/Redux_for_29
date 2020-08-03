import React from 'react';
import css from './PostsList.module.css';
import PostsListItem from '../postsList/postsListItem/PostsListItem';


const PostsList = ({ posts = [], deletePost }) => {
    return (
        <ul className={css.postList}>
            {posts.map(post => <PostsListItem key={post.id} post={post} deletePost={deletePost}/>)}
        </ul>
    );
}

export default PostsList;