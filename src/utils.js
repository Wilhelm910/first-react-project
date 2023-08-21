import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const pathname = new URL(request.request.url).pathname
    console.log(pathname)
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
        //return redirect("/login")
        const response = redirect(`/login?message=You must login first&redirectTo=${pathname}`)
        response.body = true  // It's silly, but it works
        return response
    }
    return null
}