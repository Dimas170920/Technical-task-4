import React from "react"
import {compose} from "redux";
import {connect} from "react-redux";
import {deleteComments, deletePost, requestComments, requestPosts} from "../../redux/posts-reducer";
import {withRouter} from "react-router-dom";
import Posts from "./Posts";

const PostsContainer = ({
                            requestPosts,
                            requestComments,
                            deleteComments,
                            deletePost,
                            posts,
                            comments,
                            match
                        }, ...props) => {
    let post = posts;
    let postId = match.params.postId;

    if (post.length === 0) {
        requestPosts();
    }

    if (postId) {
        post = posts.filter(p => p.id === Number(postId))
        if (comments.length === 0 && post[0] !== undefined) {
            requestComments(post[0].id)
        }
    } else {
        if (comments.length !== 0) {
            deleteComments()
        }
    }
    return <Posts posts={post} comments={comments} deletePost={deletePost}/>
}

let mapStateToProps = (state) => {

    return {
        posts: state.postsPage.posts,
        comments: state.postsPage.comments
    }
}

export default compose(
    connect(mapStateToProps, {requestPosts, requestComments, deleteComments, deletePost})
    , withRouter)
(PostsContainer)