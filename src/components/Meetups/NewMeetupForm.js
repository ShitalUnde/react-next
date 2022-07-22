import  React, {useRef} from "react";
import Card from "../ui/Card"
 

function NewMeetupForm() {
    useRef()
    function submitHandler () {
        console.log("sumit")
    }
    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type='text'  required id="title" />
                </div>
                <br/>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type='text' required id="address" />
                </div>
                <div>
                    <button> Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm