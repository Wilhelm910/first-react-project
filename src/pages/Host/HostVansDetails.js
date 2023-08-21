import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
    await requireAuth(request)
    return getHostVans(params.id)
}

export default function HostVansDetails() {

    const data = useLoaderData()
    const vansDetails = data[0]
   
    /* const params = useParams()
 
     const [vansDetails, setVansDetails] = useState(null)
 
     useEffect(() => {
         fetch(`/api/host/vans/${params.id}`)
             .then(res => res.json())
             .then(data => setVansDetails(data.vans[0]))
     }, [params.id])
 
     if (!vansDetails) {
         return <h1>Loading...</h1>
     }
 */
    return (
        <div>
            <Link to=".." relative="path" className="back-btn" > &larr; Back to all vans..</Link>
            <div style={{ display: "flex" }}>
                <img className="host-vans-details--img" src={vansDetails.imageUrl} />
                <div className="host-vans-details--container">
                    <p className={`van--type ${vansDetails.type}`}>{vansDetails.type}</p>
                    <p><b>{vansDetails.name}</b></p>
                    <p> Euro <b>{vansDetails.price}</b>/day</p>
                </div>
            </div>
            <div className="host-vans-details--navigation">
                <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="." end>Detail</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="pricing">Pricing</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav--link active" : "nav--link"} to="photos">Photos</NavLink>
            </div>
            <Outlet context={[vansDetails]} />
        </div>
    )
}