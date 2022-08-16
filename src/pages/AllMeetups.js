import React, { useEffect, useState } from 'react'
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
    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState([])

    useEffect(() => {

        try {
            // fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            // .then((data) => {
            //     return data.json()
            // })
            // .then(data => {
            //     setIsLoading(true)
            //     setData(data)
            //     setIsLoading(false)
            // })

            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            .then((data) => {
                return data.json()
            })
            .then(data => {
                setIsLoading(true)
                setData(data)
                setIsLoading(false)
            })


        } catch (error) {
            console.log(error);
        }

    }, [])

        if(isLoading) {
            return (
                <section>
                    <p>Loading....</p>
                </section>
            )
        }
        else {
            return (
                <div>All Meetups Page
                    {/* <ul>
                        {DUMMY_DATA.map((meetup) =>{
                            return <li key={meetup.id}>
                               Title: {meetup.type}
                            </li>
                        })}
                    </ul> */}
        
                    <MeetupList meetups={data} />
                </div>
        
        
            )
        }
}

export default AllMeetupsPage