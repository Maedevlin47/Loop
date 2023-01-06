import React, {useState} from 'react';
import EventListForm from "./EventListForm";

const headers = {
    Accept: "application/json",
        "Content-Type" : "application/json"}

function EventListCard({event, handleDeleteEvent, user}) {

    const [handleButton, setHandleButton] = useState(true);
    const [eventData, setEventData] = useState(event)

    const friends = event.event_settings.map(data => {
        return(
            <div>
                <p>{data.plus_one}</p>           
            </div>
        )
    })

    function useButton () {
        setHandleButton(handleButton => !handleButton)
    }

    function updateLikes() {
        fetch(`/events/${event.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ likes: ++event.likes }),
        }).then((r) =>r.json())
        .then(((data)=>{
            setEventData({...data})
        }))
    }

    function handleDelete(id){
        handleDeleteEvent(id)
        fetch(`events/${id}`,{
            method: 'DELETE',
            headers,
        })
    }

    return (
        <div>
    <h1>Title: {event.title}</h1>
        <p>Description: {event.description}</p>
        <p>Attire: {event.attire}</p>
        <p>Likes: {event.likes}</p>
        <div>{friends}</div>
    <button onClick = {useButton}>{handleButton ? "Lone wolf" : "More friends, more fun" }</button>
    <button onClick={()=>handleDelete(event.id)}>DeleteButton</button>
    <button className= 'fancy-button'onClick={()=>updateLikes(eventData)}>Like</button>
    <EventListForm user={user} event = {event}/>
        </div>
    );
}

export default EventListCard;