import { useEffect, useState } from "react"

import handleGetCurrentProfile from "handlers/handleGetCurrentProfile"

import { DropdownIcon, InvertedDropdownIcon } from "assets/svg"

interface ProfileButtonProps {
  auth: string
}

export function ProfileButton({ auth }: ProfileButtonProps) {
  const [name, setName] = useState<string>()
  const [image, setImage] = useState<string>()

  const [dropdown, setDropdown] = useState(false)

  const setProfile = (name?: string, image?: string) => {
    setName(name)
    setImage(image)
  }

  useEffect(() => {
    handleGetCurrentProfile(auth, setProfile)
  }, [auth])

  return name ? (
    <button
      className="flex items-center gap-2 bg-[#000000b3] p-0.5 rounded-full hover:cursor-pointer 
        font-[spotify-bold] text-sm hover:bg-[#282828]"
      onClick={() => setDropdown((prev) => !prev)}
    >
      <img className="h-7 w-7 rounded-full" alt="profile" src={image} />
      <span>{name}</span>
      <div className="mr-1.5">
        {dropdown ? <DropdownIcon /> : <InvertedDropdownIcon />}
      </div>
    </button>
  ) : null
}
