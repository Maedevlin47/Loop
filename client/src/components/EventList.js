import { useState } from "react"
import { useEffect } from "react"

function EventList({allEvents, setAllEvents}) {

    function showAllEvents(allNewEvents) {
        const updatedAllEvents = [...allEvents, allNewEvents];
        setAllEvents(updatedAllEvents);
    }
    const allEventList = allEvents.map((event, i)=>{
        return(
            <div key={i}>
                <h1>Title: {event.title}</h1>
                <p>Description: {event.description}</p>
                <p>Attire: {event.attire}</p>
            </div>
        )
    })


    return (
        <div>
            <h2>
                All the events for you!
            </h2>
            <h3>{showAllEvents}</h3>
            {allEventList}
        </div>
            
    )
}   

export default EventList;



