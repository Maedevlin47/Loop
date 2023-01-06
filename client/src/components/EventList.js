import { useState } from "react"
import { useEffect } from "react"
import EventListCard from "./EventListCard";

function EventList({allEvents, setAllEvents, handleDeleteEvent}) {

    // const [userId, setUserId]=useState('')
    // const [eventId, setEventId]=useState('')
    // const [plusOne, setPlusOne] =useState('')
    const [plusOne, setPlusOne] = useState({
        user_id: "",
        event_id: "",
        plus_one: ""
        });
    

    function showAllEvents(allNewEvents) {
        const updatedAllEvents = [...allEvents, allNewEvents];
        setAllEvents(updatedAllEvents);
    }

    function handleClick(e) {
        e.preventDefault();

        fetch('/event_settings', {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            // body: JSON.stringify(plusOne)
            }).then((r) => {setPlusOne(!plusOne);
                // navigate('/eventcard')
    
            })  
        }  


    // function handleClick(e) {
    //     e.preventDefault();

    //     fetch('/event_settings', {
    //         method: "POST",
    //         headers: {"Content-Type": "Application/json"},
    //         body: JSON.stringify(plusOne)
    //         }).then((r) => {setPlusOne(!plusOne);
    //             // navigate('/eventcard')
    
    //         })  
    //     }    
            // .then (response => response.json())
    //         .then((r) => {
    //             if (r.ok) {
    //                 r.json().then((newPlusOne) => {setPlusOne([...allEvents, newPlusOne])
    //                 })
    //             } else {
    //                 r.json().then(json => {
    //                     console.log(json)
    //                 })
    //             }
                    
    //         })
    // }


    return (
        <div>
            {
                allEvents.map(event => <EventListCard event={event} key={event.id} setAllEvents={setAllEvents} handleDeleteEvent={handleDeleteEvent}/>)
            }
            

        </div>
            
    )
}   

export default EventList;



