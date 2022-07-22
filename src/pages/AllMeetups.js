import React from 'react'
import MeetupList from '../components/Meetups/MeetupList';
const DUMMY_DATA = [
    {
        "id":1,
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
      },
      {
        "id":2,
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      },
]
function AllMeetupsPage() {
    return (
        <div>All Meetups Page
            {/* <ul>
                {DUMMY_DATA.map((meetup) =>{
                    return <li key={meetup.id}>
                       COlor: {meetup.color}
                    </li>
                })}
            </ul> */}
        </div>

        
    )
}

export default AllMeetupsPage