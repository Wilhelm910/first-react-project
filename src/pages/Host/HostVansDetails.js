import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function HostVansDetails() {

    const params = useParams()

    const [vansDetails, setVansDetails] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVansDetails(data.vans[0]))
    }, [params.id])

    console.log(vansDetails)

    if (!vansDetails) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            <img className="host-vans-details--img" src={vansDetails.imageUrl} />
            <p><b>Name:</b> {vansDetails.name}</p>
            <p><b>Description:</b> {vansDetails.description}</p>
        </div>
    )
}