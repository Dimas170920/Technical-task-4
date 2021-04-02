import React from "react"
import {useForm} from 'react-hook-form';
import {compose} from "redux";
import {connect} from "react-redux";
import {createPost} from "../../redux/posts-reducer";

const FormPost = ({createPost}, ...props) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data, e) => {
        e.target.reset()
        if (data.title && data.body) {
            createPost(data.title, data.body)
        }

    }

    if (errors) {
        //console.log(errors)
    }
    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><input placeholder="Title" name="title" ref={register}/></div>
                <div><input placeholder="Body" name="body" ref={register}/></div>
                <div>
                    <button>Create</button>
                </div>

            </form>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {createPost})
)(FormPost)