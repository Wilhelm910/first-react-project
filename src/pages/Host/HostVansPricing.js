import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {

    const [van, setVan] = useOutletContext();

    return (
        <div>
            <p className="host-vans-details--content"><b>Price:</b> Euro {van.price}/day</p>
        </div>
    )
}