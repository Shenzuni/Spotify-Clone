import { useEffect, useContext } from "react"

import { requestAuthorization } from "api/server"

import { AuthContext } from "context/authContext"

export function useAuthContext() {
  const context = useContext(AuthContext)
  return context
}

export function useAuth() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code")
    const parent = window.opener

    if (code && parent) {
      requestAuthorization(code).then(({ access_token }) => {
        window.opener.setAuth(access_token)
        window.close()
      })
    }
  }, [])
}
