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
    const [data, setData] = useState([])

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await fetch(
    //                 `https://jsonplaceholder.typicode.com/posts`
    //             );
    //             if (!response.ok) {
    //                 throw new Error(
    //                     `This is an HTTP error: The status is ${response.status}`
    //                 );
    //             }
    //             let actualData = await response.json();
    //             // setData(actualData);
    //             console.log(actualData);
    //             // setError(null);
    //         } catch (err) {
    //             // setError(err.message);
    //             // setData(null);
    //         } finally {
    //             // setLoading(false);
    //         }
    //     }
    //     getData()
    // }, [])

    useEffect(() => {

        try {
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then(data => data.json()).then(data => setData(data))

        } catch (error) {
            console.log(error);
        }

    }, [])


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

export default AllMeetupsPage