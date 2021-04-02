import React from "react"
import {useForm} from 'react-hook-form';
import {compose} from "redux";
import {connect} from "react-redux";
import {createComment} from "../../redux/posts-reducer";


const FormComment = ({id, createComment}, ...props) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data, e) => {
        e.target.reset()
        if (data.body) {
            createComment(id, data.body)
        }

    }

    if (errors) {
        //console.log(errors)
    }
    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><input placeholder="Body" name="body" ref={register}/></div>
                <div>
                    <button>Create Comments</button>
                </div>

            </form>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {createComment})
)(FormComment)