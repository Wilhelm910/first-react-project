import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader(request) {
    await requireAuth(request)
    return getHostVans()
}

export default function Vans() {

    const vans = useLoaderData()
    /*
        const [vans, setVans] = useState([])
    
        useEffect(() => {
            fetch("/api/host/vans")
                .then(res => res.json())
                .then(data => setVans(data.vans))
        }, [])
    */
    const drawVans = vans.map((item) => {
        return (
            <NavLink key={item.id} className="host-vans--container" to={`${item.id}`}>
                <img className="host-vans--img" src={item.imageUrl} />
                <div>
                    <h1 className="host-vans--name">{item.name}</h1>
                    <p>Euro {item.price}/day</p>
                </div>
            </NavLink>
        )
    })

    return (
        <div> {drawVans}</div>
    )
}  