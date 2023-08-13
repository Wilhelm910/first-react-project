import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

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
        <div>
            {
                vans.length > 0 ?
                    (
                        <div>
                            {drawVans}
                        </div>
                    )
                    :
                    <h2>Loading ...</h2>
            }
        </div>
    )
}  