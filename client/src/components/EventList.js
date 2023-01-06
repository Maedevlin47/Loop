// import { useState } from "react"
// import { useEffect } from "react"
import EventListCard from "./EventListCard";


function EventList({allEvents, setAllEvents, handleDeleteEvent, user}) {

    return (
        <div>
            {
                allEvents.map(event => <EventListCard event={event} key={event.id} handleDeleteEvent={handleDeleteEvent} user = {user}/>)
            }
            
            

        </div>
            
    )
}   
export default EventList;



