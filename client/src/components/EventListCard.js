import React, {useState} from 'react';

const headers = {
    Accepts: "application/json",
        "Content-Type" : "application/json"}

function EventListCard({event, handleDeleteEvent}) {

    const [handleButton, setHandleButton] = useState(true);
    // (<button onClick={handleClick}>{plusOne ? "Lone Ranger" : "More Friends, More fun"}</button>);

    function useButton () {
        setHandleButton(handleButton => !handleButton)
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
      <button onClick = {useButton}>{handleButton ? "Lone Wolf" : "More friends, more fun" }</button>
      <button onClick={()=>handleDelete(event.id)}>DeleteButton</button>
            
        </div>
    );
}

export default EventListCard;