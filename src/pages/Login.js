import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    const url = new URL(request.url)
    return url.searchParams.get("message")
}


export default function Login() {

    const [status, setStatus] = useState("idle")
    const message = useLoaderData()

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })


    function handleData(event) {
        const { name, value } = event.target
        setLoginFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        setStatus("submitting")
        event.preventDefault()
        loginUser(loginFormData)
            .then(data => console.log(data))
            .catch()
            .finally(() => setStatus("idle"))
    }

    return (
        <div className="login--container">
            <h2>Sign in to your account</h2>
            {message ?? <h3>{message}</h3>}
            <form className="login--form" onSubmit={handleSubmit}>
                <input
                    className="login--input"
                    type="email"
                    placeholder="Email Adress"
                    name="email"
                    onChange={handleData}
                    value={loginFormData.email}
                />
                <input
                    className="login--input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleData}
                    value={loginFormData.password}
                />
                <button disabled={status == "submitting"} className="login--btn">{status != "submitting" ? "Log in" : "Logging in"}</button>
            </form>
        </div>
    )
}