import React from 'react'
import MeetupList from '../components/Meetups/MeetupList';
const DUMMY_DATA = [
    {
        "id": 1,
        "color": "purple",
        "title": "minivan",
        "registration": new Date('2017-01-03'),
        "description": 7
    },
    {
        "id": 2,
        "title": "station wagon",
        "color": "red",
        "registration": new Date('2018-03-03'),
        "description": 5
    },
]
function AllMeetupsPage() {
    return (
        <div>All Meetups Page
            {/* <ul>
                {DUMMY_DATA.map((meetup) =>{
                    return <li key={meetup.id}>
                       Title: {meetup.type}
                    </li>
                })}
            </ul> */}

            <MeetupList meetups={DUMMY_DATA} />
        </div>


    )
}

export default AllMeetupsPage