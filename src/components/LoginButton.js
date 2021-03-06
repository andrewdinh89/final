import React from 'react'
import {Auth0Provider} from "@auth0/auth0-react"
const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    return (
        <button onClick={() => loginWithRedirect}>
          Log in   
        </button>
    )
}

export default LoginButton
