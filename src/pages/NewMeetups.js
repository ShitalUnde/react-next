import React from 'react'
import NewMeetupForm from '../components/Meetups/NewMeetupForm'
import { useNavigate } from 'react-router-dom'

function NewMeetsupPage(props) {
    const history = useNavigate();
    function addMeetupHandler(meetupData) {

        fetch("https://fakestoreapi.com/carts",
            {
                method: "POST",
                cache: "no-cache",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(meetupData)
            })
            .then(response => {
                response.json()
                history("/")
            })

    }

    return (
        <section>
            <div>All new Meetups Page</div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetsupPage