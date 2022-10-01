import React from "react"
import {NavLink} from "react-router-dom"

import "./Header.css"

export default function Header (){

    return (
        <nav className="nav-container">
            <ul className="nav-ul_container">
                <li className="li-nav"> <NavLink className="nav-li" to='/home'> Home </NavLink> </li>
                <li className="li-nav"> <NavLink className="nav-li" to='/game'> Game </NavLink> </li>
                <li className="li-nav"> <NavLink className="nav-li" to='/about'> About </NavLink> </li>
                <li className="li-nav"> <NavLink className="nav-li" to='/settings'> Settings </NavLink> </li>
            </ul>
           
    </nav>
    )
}