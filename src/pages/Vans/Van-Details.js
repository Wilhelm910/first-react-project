import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function VanDetails() {

    const [van, setVan] = useState(null)
    const params = useParams()
    const location = useLocation().state.search
    console.log(location)


    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
  


    return (
        <div>
            <Link to={location ? `..?${location}` : ".."} relative="path" className="back-btn" > &larr; Back to all vans..</Link>
            {van ? (
                <div className="vanDetail--container">
                    <div className="vanDetail--img-container">
                        <img className="vanDetail--img" src={van.imageUrl} />
                    </div>
                    <p className={`van--type ${van.type}`}>{van.type}</p>
                    <p>Euro {van.price} <span>day</span></p>
                    <p>{van.description}
                    </p>
                    <div className="vanDetail--img-container">
                        <button className="find-van-btn">Rent this van</button>
                    </div>
                </div>
            )
                : <h3>is Loading...</h3>
            }
        </div>
    )
}