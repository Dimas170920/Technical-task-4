import './App.css';
import React from "react";
import PostsContainer from "./components/Posts/PostsContainer";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import FormPost from "./components/Form/FormPost";
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

export default function App() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (<Router>
            <div>

                <nav>
                    <Link to="/posts">All Post</Link>
                </nav>

                <Route path='/posts/:postId?' render={() => <PostsContainer/>}/>
                <div>
                    <button onClick={openModal}>Open Modal</button>

                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}

                    >
                        <button onClick={closeModal}>close</button>
                        <h2 ref={_subtitle => (subtitle = _subtitle)}>Create Post</h2>
                        <FormPost/>
                    </Modal>
                </div>
            </div>
        </Router>
    );
}


