import { code_url } from "../utils/constants/code_url"

declare global {
  interface Window {
    setAuth: (auth: string) => void
  }
}

export default function handleLogin(setAuth: (auth: string) => void) {
  window.setAuth = setAuth
  const config = 'popup=true,width=650,height=900'
  window.open(code_url, '', config)
}
