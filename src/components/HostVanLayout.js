import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HostVanLayout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="." end>Info</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="pricing">Pricing</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="photos">Photos</NavLink>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}