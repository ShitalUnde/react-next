import React from 'react'
import Card from '../ui/Card';
import classes from './MeetupItem.module.css'

function MeetupItem(props) {

    function activateLasers(e) {
        alert(e)
    }

    console.log("%%%%%%%", props);
    return (
        <li >
            <Card>
            <div>
                {/* <img src={props.image} alt={props.alt}/> */}
            </div>
            <h3 >{props.title}</h3>
            {/* <address>{props.address}</address> */}
            {/* <p>{props.description}</p> */}
            <div>
                <button onClick={(e) => activateLasers(props.title)}>Add to Faviourite</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem