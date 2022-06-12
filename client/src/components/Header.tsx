import { useEffect, useLayoutEffect, useState } from "react"

import { useAuthContext } from "hooks/useAuth"
import { usePlayerContext } from "hooks/usePlayer"

import { LoginButton } from "components/LoginButton"
import { ProfileButton } from "components/ProfileButton"

import FastAverageColor from "fast-average-color"

import "assets/css/Header.css"

interface HeaderProps {
  auth?: string
  setAuth: React.Dispatch<React.SetStateAction<string | undefined>>
  track: Spotify.Track
}

export function Header({ auth, setAuth, track }: HeaderProps) {
  const [headerColor, setHeaderColor] = useState("#121212")

  useLayoutEffect(() => {
    if (auth) {
      const fac = new FastAverageColor()
      fac.getColorAsync(track.album.images[1].url).then((color) => {
        setHeaderColor(color.rgba)
      })
    }
  }, [track, auth])

  return (
    <header
      className="-ml-px flex items-center justify-between h-16 py-4 px-8 box-border bg-gradient-to-t 
      from-[#18181800] via-[#0000000e] to-[#0000007e]"
      style={{ backgroundColor: headerColor }}
    >
      <div className="header-back-forward"></div>
      <div className="header-middle"></div>
      {auth ? <ProfileButton auth={auth} /> : <LoginButton setAuth={setAuth} />}
    </header>
  )
}
