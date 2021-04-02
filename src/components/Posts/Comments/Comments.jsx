import React from "react"
import s from "./Comments.module.css"
import FormComment from "../../Form/FormComment";


const Comments = ({comments, deletePost, id}, ...props) => {
    let i = 0
    const deleteP = () => {
        deletePost(id);
    }
    return (<div>
        <button onClick={deleteP}>delete Post</button>
        {(comments.length > 0)
            ? <div>{comments.map(c => <div key={c.postId + i++} className={s.comments}>
                    <div>{c.body}</div>
                </div>
            )}</div>
            : <div>There are no comments for this post yet</div>}
        <FormComment id={id}/>

    </div>)
}

export default Comments