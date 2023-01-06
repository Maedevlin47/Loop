import { useState } from "react"
import { useEffect } from "react"

function EventList({allEvents, setAllEvents}) {

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
    const [handleButton, setHandleButton] = useState(true);
    // (<button onClick={handleClick}>{plusOne ? "Lone Ranger" : "More Friends, More fun"}</button>);

    function useButton () {
        setHandleButton(handleButton => !handleButton)
    }

    const allEventList = allEvents.map((event, i)=>{
        return(
            <div key={i}>
                <h1>Title: {event.title}</h1>
                <p>Description: {event.description}</p>
                <p>Attire: {event.attire}</p>
                <button onClick = {useButton}>{handleButton ? "Lone Wolf" : "More friends, more fun" }</button>
            </div>
        )
    })


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
            <h2>
                All the events for you!
            </h2>
            <h3>{showAllEvents}</h3>
            {/* <button onClick = {useButton}>{handleButton ? "Lone Wolf" : "More friends, more fun" }</button> */}
            {allEventList}
        </div>
            
    )
}   

export default EventList;



