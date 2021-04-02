import React from "react"
import s from "./Post.module.css"
import {NavLink} from "react-router-dom";
import Comments from "./Comments/Comments";


const Posts = ({posts, comments, deletePost}, ...props) => {


    return (<div>

        <div>{posts.map(p => <div key={p.id} className={s.post}>
                <div>{p.id}</div>
                <NavLink to={"/posts/" + p.id}>
                    <div className={s.title}>{p.title}</div>
                </NavLink>
                <div>{p.body}</div>
            </div>
        )}</div>
        {(posts.length === 1)
            ? <Comments comments={comments} deletePost={deletePost} id={posts[0].id}/>
            : <div></div>
        }


    </div>)
}

export default Posts

