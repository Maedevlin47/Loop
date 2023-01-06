import React, {useState} from 'react';


function EventListCard({event}) {

    const [handleButton, setHandleButton] = useState(true);
    // (<button onClick={handleClick}>{plusOne ? "Lone Ranger" : "More Friends, More fun"}</button>);

    function useButton () {
        setHandleButton(handleButton => !handleButton)
    }

    return (
        <div>

     <h1>Title: {event.title}</h1>
    <p>Description: {event.description}</p>
     <p>Attire: {event.attire}</p>
      <button onClick = {useButton}>{handleButton ? "Lone Wolf" : "More friends, more fun" }</button>
            
        </div>
    );
}

export default EventListCard;