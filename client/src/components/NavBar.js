import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({user}) {
    return(
        <div>
        {user?
                
            (
            <div className="loggedin">
            <NavLink className="events" to="/events">Event List</NavLink>
            <NavLink className="logout" to="/logout">Logout</NavLink>
            </div>
            ) : (
            <div className="loggedout">
            <NavLink className="login" to="/login">Login</NavLink>
            <NavLink className="signup" to="/signup">Signup</NavLink>
            </div>
            )
        }
        </div>
    )
}
