import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import useAuth from "../hooks/useAuth";

const IsAuthenticated = ({ children }: { children: JSX.Element }) => {
    const {loadUser} = useAuth()
    const user = loadUser();
    const location = useLocation()

    if (user) {
        return <Navigate to="/home-page" state={{ from: location }} />
    }

    return children
}

export default IsAuthenticated
