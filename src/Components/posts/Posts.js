import React from 'react';
import PostsForm from './postsForm/PostsForm';
import PostsList from './postsList/PostsList';
import { connect } from 'react-redux';
import { addNewPost, deletePost, getFilterValue } from '../../redux/posts/postActions';
import css from './Posts.module.css';
import Filter from './filter/Filter';



const Posts = ({ posts, addNewPost, deletePost, filter, getFilterValue }) => {
    return (
        <div className={css.posts}>
            <PostsForm addNewPost={addNewPost} />
            <PostsList posts={posts} deletePost={deletePost} />
            <Filter filter={filter} getFilterValue={getFilterValue}/>

        </div>
    );
}


// ===========================================
const mapStateToProps = (state) => {
    console.log(state); //=====>
    return {
        posts: state.posts.posts,
        filter: state.posts.filter
    }
}

const mapDispatchToProps = { addNewPost, deletePost, getFilterValue }


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
