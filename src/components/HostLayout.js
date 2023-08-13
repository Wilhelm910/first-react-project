import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HostLayout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="." end>Dashboard</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="vans">Vans</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="income">Income</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="reviews">Reviews</NavLink>
                </nav>
            </header>
            <Outlet />
        </div>
    )
} 