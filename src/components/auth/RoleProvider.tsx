import React from 'react'
import { useSelector } from 'react-redux'

function RoleProvider({ children, role }: any) {

    let auth = useSelector((state: any) => state.auth);
    let hasRole = false;

    if(auth.roles == undefined) {
        return <></>
    }

    auth.roles?.forEach((r: string) => {
        if (r === role) {
            hasRole = true;
        }
    })

    if (hasRole)
        return children
    else
        return <></>
}

export default RoleProvider