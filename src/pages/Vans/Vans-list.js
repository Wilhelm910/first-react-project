import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { NavLink, Link, useSearchParams, defer, Await } from "react-router-dom";
import { getVans } from "../../api";
import { useLoaderData } from "react-router-dom";

export function loader() {
    return defer({ vans: getVans() })
}


export default function VansList() {

    const dataPromise = useLoaderData()

    //  const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")
    // const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    /*
        useEffect(() => {
            async function loadVans() {
                setLoading(true)
                try {
                    const data = await getVans()
                    setVans(data)
                } catch (err) {
                    console.log(err)
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
            loadVans()
        }, [])
    */



    /* const filteredVans = typeFilter ? vans.filter(item =>
         item.type.toLowerCase() === typeFilter
     ) : vans
 
 
     const vanElements = filteredVans.map((item) => {
         return (
             <div className="van"
                 key={item.id}>
                 <Link to={`${item.id}`} state={{ search: searchParams.toString(), type: typeFilter }}>
                     <img className="vans--img" src={item.imageUrl} />
                 </Link>
                 <h4>{item.name}</h4>
                 <p>Euro {item.price} <span>day</span></p>
                 <p className={`van--type ${item.type}`}>{item.type}</p>
             </div>
         )
     })
 */




    function searchString(key, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }
        return `?${sp.toString()}`
    }

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    /*
        if (loading) {
            return <h1>Loading..</h1>
        }
    */
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    function renderVansElements(vans) {

        console.log(vans)
        const filteredVans = typeFilter ? vans.filter(item =>
            item.type.toLowerCase() === typeFilter
        ) : vans


        const vanElements = filteredVans.map((item) => {
            return (
                <div className="van"
                    key={item.id}>
                    <Link to={`${item.id}`} state={{ search: searchParams.toString(), type: typeFilter }}>
                        <img className="vans--img" src={item.imageUrl} />
                    </Link>
                    <h4>{item.name}</h4>
                    <p>Euro {item.price} <span>day</span></p>
                    <p className={`van--type ${item.type}`}>{item.type}</p>
                </div>
            )
        })
        return (
            <>
                <div className="van--filter-options">
                    <NavLink className={`filter-btn ${typeFilter === "simple" ? "selected" : null}`} to={searchString("type", "simple")}>Simple</NavLink>
                    <NavLink className={`filter-btn ${typeFilter === "luxury" ? "selected" : null}`} to={searchString("type", "luxury")}>Luxury</NavLink>
                    <NavLink className={`filter-btn ${typeFilter === "rugged" ? "selected" : null}`} to={searchString("type", "rugged")}>Rugged</NavLink>
                    {typeFilter ? (<NavLink className="clear-filter-btn" to={searchString("type", null)}>Clear filter</NavLink>) : null}
                    <button className="filter-btn" onClick={() => handleFilterChange("type", "simple")}>Simple</button>
                    <button className="filter-btn" onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>
                    <button className="filter-btn" onClick={() => handleFilterChange("type", "rugged")}>Rugged</button>
                    <button className="clear-filter-btn" onClick={() => handleFilterChange("type", null)}>Clear filter</button>
                </div>
                <div className="van--filter-options">
                    <NavLink className="filter-btn" to="?type=simple">Simple</NavLink>
                    <NavLink className="filter-btn" to="?type=luxury">Luxury</NavLink>
                    <NavLink className="filter-btn" to="?type=rugged">Rugged</NavLink>
                    <NavLink className="clear-filter-btn" to=".">Clear filter</NavLink>
                    <button className="filter-btn" onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
                    <button className="filter-btn" onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
                    <button className="filter-btn" onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
                    <button className="clear-filter-btn" onClick={() => setSearchParams({})}>Clear filter</button>
                </div>
                <div className="vans-container">
                    {vanElements}
                </div>
            </>
        )

    }

    return (
        <div>
            <h3 className="van--description">Explore our van options</h3>
            <Suspense fallback={<h3>Vans loading ...</h3>}>
                <Await resolve={dataPromise.vans}>
                    {renderVansElements}

                </Await>
            </Suspense>
        </div >
    )
}