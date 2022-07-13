import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
    console.log(props)
    const [modalIsOpen, setModelIsOpen] = useState(false);

    function deleteHandler(e) {
        // console.log("Hello", e);
        setModelIsOpen(true);
    }

    function closeModalHandler() {
        setModelIsOpen(false);

    }
    // console.log(modalIsOpen, "*****************");
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button onClick={(e) => deleteHandler(props.text)} className="btn">Delete</button>
            </div>
            {/* { showModal ? <Modal/> : null} */}
            {modalIsOpen && <Modal onCancel={closeModalHandler} onSubmit={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

        </div>
    );
}

export default Todo