

const addNewPost = (post) => {
    return {
        type: "ADD_NEW_POST",
        payload: post
    }
}

const deletePost = (id) => {
    return {
        type: "DELETE_POST",
        payload: id
    }
}

const getFilterValue = (string) => {
    return {
        type: "FILTER_DATA",
        payload: string
    }
}
export { addNewPost, deletePost, getFilterValue }

