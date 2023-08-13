import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {

    const [van, setVan] = useOutletContext();

    return (
        <div>
            <p className="host-vans-details--content"><b>Name:</b> {van.name}</p>
            <p className="host-vans-details--content"><b>Description:</b> {van.description}</p>
            <p className="host-vans-details--content"><b>Price:</b> Euro {van.price}/day</p>
            <p className="host-vans-details--content"><b>Type:</b> {van.type}</p>
        </div>
    )
}