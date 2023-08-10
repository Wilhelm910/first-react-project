import React from "react";
import { useEffect, useState } from "react";

export default function VansList() {

    const [vans, setVans] = useState([])


    useEffect(() => {
        fetch("api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map((item) => {
        return (
            <div
                key={item.id}>
                <img className="vans--img" src={item.imageUrl} />
                <h3>{item.name}</h3>
                <p>{item.price} <span>day</span></p>
            </div>
        )
    })

    return (
        <div>
            {vanElements}
        </div>
    )
}