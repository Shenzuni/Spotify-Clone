import { useEffect, useState } from "react"

import handleGetCurrentProfile from "handlers/handleGetCurrentProfile"

import "assets/css/ProfileButton.css"

interface ProfileButtonProps {
  auth: string
}

export default function ProfileButton({ auth }: ProfileButtonProps) {
  const [name, setName] = useState<string>()
  const [image, setImage] = useState<string>()

  useEffect(() => {
    handleGetCurrentProfile(auth, setName, setImage)
  }, [auth])

  return (
    <div className="profile-button">
      <img alt="profile" src={image} />
      {name}
    </div>
  )
}