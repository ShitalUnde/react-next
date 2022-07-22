import React from 'react'
import NewMeetsupItem from './MeetupItem';
import classes from './MeetupList.module.css'

function MeetList(props) {
    return (
      <ul className={classes.list}>
        {props.meetups.map(meetup => <NewMeetsupItem 
                key={meetup.id} 
                id={ meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
                />
            )}
      </ul>
    )
}

export default MeetList;