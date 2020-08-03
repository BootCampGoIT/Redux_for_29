// const testOBJ = { id: "dfds", title: "dsfsdfsd", content: "dfsdfd" }

const postReducer = (state = { posts: [], filter: '' }, action) => {
    switch (action.type) {
        case "ADD_NEW_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        case "DELETE_POST":
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.payload)]
            }
        case "FILTER_DATA":
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;

    }
}


export default postReducer;