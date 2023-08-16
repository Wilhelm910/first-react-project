import React from "react";
import { useState } from "react";


export default function Login() {

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
        event.preventDefault()
        console.log(loginFormData)
    }

    return (
        <div className="login--container">
            <h2>Sign in to your account</h2>
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
                <button className="login--btn">Log in</button>
            </form>
        </div>
    )
}