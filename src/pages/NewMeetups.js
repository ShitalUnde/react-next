import React from 'react'
import NewMeetupForm from '../components/Meetups/NewMeetupForm'

function NewMeetsupPage(props) {

    function addMeetupHandler(meetupData) {
        
        fetch("https://fakestoreapi.com/carts",
            {
                method: "POST",
                cache: "no-cache",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(meetupData)
            })
            .then(response=> response.json())
    }

    return (
        <section>
            <div>All new Meetups Page</div>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetsupPage