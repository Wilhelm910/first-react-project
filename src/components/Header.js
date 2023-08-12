import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div>
                <Link className='nav--headline' to="/">#Vanlife</Link>
            </div>
            <nav>
                <NavLink className={({isActive}) => isActive ? "nav--link active" : "nav--link"} to="host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? "nav--link active" : "nav--link"} to="about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "nav--link active" : "nav--link"} to="vanslist">Van</NavLink>
            </nav>
        </header>
    )
}