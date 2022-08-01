import  React, {useRef} from "react";
import Card from "../ui/Card"
 

function NewMeetupForm(props) {
    const titleInputRef = useRef()
    const addressInputRef = useRef()


    function submitHandler (event) {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredAddress= addressInputRef.current.value

        const meetupData = {
                userId:8,
                date:"2020-02-03",
                products:[
                    {productId:5,quantity:1},
                    {productId:1,quantity:5}
                ]  
        }


       // console.log(meetupData)

        // fetch("https://fakestoreapi.com/carts",
        //     {
        //         method: "POST",
        //         cache: "no-cache",
        //         headers:{
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(meetupData)
        //     })
        //     .then(response=> response.json())

        props.onAddMeetup(meetupData);
    }
    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type='text' ref={titleInputRef} required id="title" />
                </div>
                <br/>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type='text' ref={addressInputRef} required id="address" />
                </div>
                <div>
                    <button> Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm