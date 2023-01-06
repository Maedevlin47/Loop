import React, {useState} from 'react';

const headers = {
    Accept: "application/json",
        "Content-Type" : "application/json"}

function EventListCard({event, handleDeleteEvent}) {

    const [handleButton, setHandleButton] = useState(true);
    const [eventData, setEventData] = useState(event)


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
    <button onClick = {useButton}>{handleButton ? "Lone wolf" : "More friends, more fun" }</button>
    <button onClick={()=>handleDelete(event.id)}>DeleteButton</button>
    <button className= 'fancy-button'onClick={()=>updateLikes(eventData)}>Like</button>
            
        </div>
    );
}

export default EventListCard;