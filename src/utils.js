import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = false

    if (!isLoggedIn) {

        //return redirect("/login")
        const response = redirect("/login?message=You must login first")
        response.body = true  // It's silly, but it works
        return response
    }
}