import React from "react";
import { useState } from "react";
import { useLoaderData, useActionData, useNavigation, useNavigate, Form, redirect } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    const url = new URL(request.url)
    return url.searchParams.get("message")
}

export async function action(obj) {
    const redirectTo = new URL(obj.request.url).searchParams.get("redirectTo")
    const formData = await obj.request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({ email, password })
 
        localStorage.setItem('loggedIn', 'true');
        const response = redirect(redirectTo ? redirectTo : "/host")
        response.body = true  // It's silly, but it works
        return response
    } catch (err) {
        return err.message
    }




    return null
}


export default function Login() {
    const navigation = useNavigation()
    console.log(navigation.state)
    const errorMessage = useActionData()
    // const [error, setError] = useState(null)
  //  const [status, setStatus] = useState("idle")
    const message = useLoaderData()
    /*   const [loginFormData, setLoginFormData] = useState({
           email: "",
           password: ""
       })
       const navigate = useNavigate()
   */
    /*
        function handleData(event) {
            const { name, value } = event.target
            setLoginFormData(prevData => {
                return {
                    ...prevData,
                    [name]: value
                }
            })
        }*/
    /*
        function handleSubmit(event) {
            setStatus("submitting")
            setError(null)
            event.preventDefault()
            loginUser(loginFormData)
                .then(data => {navigate("/host", {replace: true})})
                .catch(err => setError(err))
                .finally(() => setStatus("idle"))
        }
    */
    return (
        <div className="login--container">
            <h2>Sign in to your account</h2>
            {message ?? <h3>{message}</h3>}
            {errorMessage ?? <h3>{errorMessage}</h3>}
            <Form replace method="post" className="login--form" /*onSubmit={handleSubmit}*/>
                <input
                    className="login--input"
                    type="email"
                    placeholder="Email Adress"
                    name="email"
                //  onChange={handleData}
                // value={loginFormData.email}
                />
                <input
                    className="login--input"
                    type="password"
                    placeholder="Password"
                    name="password"
                //  onChange={handleData}
                //  value={loginFormData.password}
                />
                <button disabled={navigation.state == "submitting"} className="login--btn">{navigation.state != "submitting" ? "Log in" : "Logging in"}</button>
            </Form>
        </div>
    )
}