import { useState, createContext, ReactNode } from "react"

type AuthContextType = {
  auth: string | undefined
  setAuth: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const AuthContext = createContext({} as AuthContextType)

export default function AuthProvider(
  { children }: { children: ReactNode }
) {
  const [auth, setAuth] = useState<string>()

  return (
    <AuthContext.Provider
      value={{
        auth, setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}