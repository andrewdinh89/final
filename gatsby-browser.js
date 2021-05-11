/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { Auth0Provider} from "@auth0/auth0-react"
import { navigate } from "gatsby"
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