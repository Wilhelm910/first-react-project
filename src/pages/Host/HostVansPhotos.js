import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {

    const [van, setVan] = useOutletContext();
    const imgStyle = {
        width: "100px",
        borderRadius: "8px"
    }


    return (
        <div>
            <img style={imgStyle} src={van.imageUrl} />
        </div>
    )
}