import React from "react";
import {useState} from "react"

export default function EventListForm({user, event}) {
    console.log(user, event.event_settings)
    const [errors, setErrors] = useState([])
    // const [comment, setComment] = useState("")
    
    const [plusOne, setPlusOne] = useState("");
    console.log(plusOne)

        function handleSubmit(e) {
            e.preventDefault();
            const newPlusOneData ={
                user_id: user.id,
                event_id: event.id,
                plus_one: plusOne
            }
            fetch("/event_settings",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newPlusOneData),
                }) 
            .then((r) => {
                if (r.ok) {
                    r.json()
                    .then((newPlusOneData) => {setPlusOne([...event.event_settings, newPlusOneData])
                })
                } 
                else {
                    r.json().then(json => {
                        console.log(json)
                        setErrors(json.error)
                    })
                }
            })

        }

        return (
            <div>
                <form onSubmit ={handleSubmit}>
                    <label>Bringing someone?</label>
                    <input
                        type="text"
                        name="plusOne"
                        placeholder="Add name of plus one"
                        autoComplete="off" 
                        value={plusOne}
                        onChange={e=>setPlusOne(e.target.value)}
                    />
                    <button type="submit">Add friend!</button>
                </form>
            {errors? <div className = "error-message">{errors}</div>: null}
            </div>
        )
}
