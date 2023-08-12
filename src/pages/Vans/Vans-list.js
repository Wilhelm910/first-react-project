import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VansList() {

    const [vans, setVans] = useState([])


    useEffect(() => {
        fetch("api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])


    const vanElements = vans.map((item) => {
        return (
            <div className="van"
                key={item.id}>
                <Link to={`${item.id}`}>
                    <img className="vans--img" src={item.imageUrl} />
                </Link>
                <h4>{item.name}</h4>
                <p>Euro {item.price} <span>day</span></p>
                <p className={`van--type ${item.type}`}>{item.type}</p>
            </div>
        )
    })

    return (
        <div>
            <h3 className="van--description">Explore our van options</h3>
            <div className="van--filter-options">
                <p className="filter-btn">Simple</p>
                <p className="filter-btn">Luxury</p>
                <p className="filter-btn">Rugged</p>
                <p className="clear-filter-btn">Clear filter</p>
            </div>
            <div className="vans-container">
                {vanElements}
            </div>
        </div>
    )
}