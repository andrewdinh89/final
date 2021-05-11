/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { Auth0Provider} from "@auth0/auth0-react"

export const wrapRootElement = ({element}) => {
    return (
        <Auth0Provider
            domain="dev-ys7odhhp.us.auth0.com"
            clientID="epfJcm1SoWqv5uyPUV5BVyVi346qMOhv"
            redirectUri="http://localhost:8000/blog"
        >
          {element}  
        </Auth0Provider>
    )
}