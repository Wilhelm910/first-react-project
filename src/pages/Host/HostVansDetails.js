import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";


export default function HostVansDetails() {

    const params = useParams()

    const [vansDetails, setVansDetails] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVansDetails(data.vans[0]))
    }, [params.id])

    if (!vansDetails) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Link to=".." relative="path" className="back-btn" > &larr; Back to all vans..</Link>
            <div>
                <img className="host-vans-details--img" src={vansDetails.imageUrl} />
                <p className="host-vans-details--content"><b>Name:</b> {vansDetails.name}</p>
                <p className="host-vans-details--content"><b>Description:</b> {vansDetails.description}</p>
                <p className="host-vans-details--content"><b>Price:</b> Euro {vansDetails.price}/day</p>
                <p className="host-vans-details--content"><b>Type:</b> {vansDetails.type}</p>
            </div>
            <div>
                <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="." end>Detail</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="pricing">Pricing</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="photos">Photos</NavLink>
            </div>
            <Outlet />
        </div>
    )
}