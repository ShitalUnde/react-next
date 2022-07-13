import React from "react";

function Modal(props) {
    // console.log(props)
    function cancelHandler() {
        props.onCancel();
    }

    function submitHandler() {
        console.log(props)
        props.onSubmit();
    }

    return <div className="modal">
        <p>Are you Sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
        <button className="btn" onClick={submitHandler}>Confirm</button>
    </div>
}

export default Modal;