import React from 'react'
import { Navigate } from 'react-router-dom'
// @ts-ignore
export default function NeedAuth({user, children}) {

    if (user) {
        return children
    } else {
        <Navigate to='/not-authorized'/>
    }
}

