import { useState } from "react"
import { useEffect } from "react"
import EventListCard from "./EventListCard";

function EventList({allEvents, setAllEvents, handleDeleteEvent}) {

    const [plusOne, setPlusOne] = useState({
        user_id: "",
        event_id: "",
        plus_one: ""
        });
    

    function showAllEvents(allNewEvents) {
        const updatedAllEvents = [...allEvents, allNewEvents];
        setAllEvents(updatedAllEvents);
    }

     

    return (
        <div>
            {
                allEvents.map(event => <EventListCard event={event} key={event.id} handleDeleteEvent={handleDeleteEvent}/>)
            }
            

        </div>
            
    )
}   
export default EventList;



  

