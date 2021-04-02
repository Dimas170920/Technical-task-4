import {postsAPI} from "../api/api";

const SET_POSTS = "SET_POSTS"
const SET_COMMENTS = "SET_COMMENTS"
const CLEAN_COMMENTS = "CLEAN_COMMENTS"
const DELETE_POSTS = "DELETE_POSTS"


let initialState = {
    posts: [],
    comments: []

};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.posts}
        case SET_COMMENTS:
            return {...state, comments: action.comments}
        case CLEAN_COMMENTS:
            return {...state, comments: []}
        case DELETE_POSTS:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        default:
            return state;
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setComments = (comments) => ({type: SET_COMMENTS, comments})
export const cleanComments = () => ({type: CLEAN_COMMENTS})
export const deleteOnePost = (id) => ({type: DELETE_POSTS, id})

export const requestPosts = () => {
    return (dispatch) => {
        postsAPI.getPosts().then(data => {
            dispatch(setPosts(data));
        });


    }
}


export const requestComments = (id) => {
    return (dispatch) => {
        postsAPI.getComments(id).then(data => {
            console.log(id);
            (data.length === 0)
                ? dispatch(setComments([{body: "There are no comments for this post yet", postId: 0}]))
                : dispatch(setComments(data));


        });


    }
}
export const deleteComments = () => {
    return (dispatch) => {
        dispatch(cleanComments())
    }
}

export const createPost = (title, body) => {
    return (dispatch) => {
        postsAPI.createPost(title, body).then(data => {
            requestPosts();
        })

    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        postsAPI.deletePost(id).then(data => {
            dispatch(deleteOnePost(id))

        })
    }
}

export const createComment = (id, body) => {
    return (dispatch) => {
        postsAPI.createComment(id, body).then(data => {
            requestComments(id);
        })


    }
}


export default postsReducer;