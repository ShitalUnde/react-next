import React from 'react'
import classes from './MeetupItem.module.css'

function NewMeetsupItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.alt}/>
            </div>
            <h3 className={classes.content}>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
            <div className={classes.actions}>
               <button>Add to Faviourite</button>
            </div>
        </li>
    )
}

export default NewMeetsupItem