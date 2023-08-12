import React from "react";
import { useEffect, useState } from "react";


export default function Vans() {

    const [vans,setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => console.log(data.vans))
    }, [])


    return (
        <h1>Van host page</h1>
    )
}