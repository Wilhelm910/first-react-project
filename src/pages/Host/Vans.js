import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { NavLink, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader(request) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}

export default function Vans() {

    const vansPromise = useLoaderData()
    /*
        const [vans, setVans] = useState([])
    
        useEffect(() => {
            fetch("/api/host/vans")
                .then(res => res.json())
                .then(data => setVans(data.vans))
        }, [])
    */


    return (
        <Suspense fallback={<h3>Vans loading ...</h3>}>
            <Await resolve={vansPromise.vans}>
                {(vans) => {
                    const drawVans = vans.map((item) => {
                        return (
                            <NavLink key={item.id} className="host-vans--container" to={`${item.id}`}>
                                <img className="host-vans--img" src={item.imageUrl} />
                                <div>
                                    <h1 className="host-vans--name">{item.name}</h1>
                                    <p>Euro {item.price}/day</p>
                                </div>
                            </NavLink>
                        )
                    })
                    return (
                        <div> {drawVans}</div>
                    )
                }}
            </Await>
        </Suspense>
    )

}  