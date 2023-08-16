import React from "react";
import { NavLink } from "react-router-dom";


export default function NotFound() {
    return (
        <div className="not-found--content">
            <h1 className="not-found--text">Sorry, the page you were looking for was not found</h1>
            <NavLink className="not-found--return-btn" to="/">Return to home</NavLink>
        </div>
    )
}