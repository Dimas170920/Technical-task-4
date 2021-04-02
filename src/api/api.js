import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com',

})

export const postsAPI = {
    getPosts() {
        return instance.get("posts")
            .then(response => response.data);

    },

    getComments(id) {
        return instance.get("posts/" + id + "/comments")
            .then(response => response.data);

    },

    createPost(title, body) {
        return instance.post("/posts", {title, body})
    },

    deletePost(id) {
        return instance.delete("/posts/" + id)
    },

    createComment(postId, body) {
        return instance.post("/comments", {postId, body})
    },

}