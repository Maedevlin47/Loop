import { useState } from "react"
import { useEffect } from "react"

function EventList() {
    
    const [allEvents, setAllEvents] = useState([])
    console.log(allEvents);

    useEffect(() => {
    fetch("/events")
        .then((eventsarray) => {
            setAllEvents(eventsarray);       
    })   
    }, [])
    
    function showAllEvents(allNewEvents) {
        const updatedAllEvents = [...allEvents, allNewEvents];
        setAllEvents(updatedAllEvents);
    
    
    }
    return (
        <div>
            <h1>
                All the events for you!
            </h1>
            <h2>{showAllEvents}</h2>
        </div>
            
    )
}   

export default EventList;



