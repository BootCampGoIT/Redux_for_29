import React from 'react';
import PostsForm from './postsForm/PostsForm';
import PostsList from './postsList/PostsList';
import { connect } from 'react-redux';
import { addNewPost, deletePost, getFilterValue } from '../../redux/posts/postActions';
import css from './Posts.module.css';
import Filter from './filter/Filter';

const filterData = (posts, filter) => {
    return posts.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
}


const Posts = ({ posts, addNewPost, deletePost, filter, getFilterValue }) => {
    return (
        <div className={css.posts}>
            <div className={css.services}>
                <h2>Add new post</h2>
                <PostsForm addNewPost={addNewPost} />
                <h2>Filter</h2>
                <Filter filter={filter} getFilterValue={getFilterValue} />
            </div>
            <div className={css.services}>
            {(posts.length !== 0) ? <h2>Posts</h2> : ""}
            {posts && <PostsList posts={filterData(posts, filter)} deletePost={deletePost} />}
            </div>
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
