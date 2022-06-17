import { useEffect, useState } from "react"

import { useAuthContext } from "hooks/useAuth"

import { handleGetCurrentProfile } from "handlers"

import { DropdownIcon, InvertedDropdownIcon } from "assets/svg"
import { PROFILE } from "utils/constants/local_profile"

export function ProfileButton() {
  const { auth } = useAuthContext()
  const [profile, setProfile] =
    useState<SpotifyApi.CurrentUsersProfileResponse>(PROFILE)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    auth && auth !== "local" && handleGetCurrentProfile(auth, setProfile)
  }, [auth])

  return (
    <button
      className="flex items-center gap-2 bg-[#000000b3] p-0.5 rounded-full hover:cursor-pointer 
        font-bold text-sm hover:bg-[#282828]"
      onClick={() => setDropdown((prev) => !prev)}
    >
      <img
        className="h-7 w-7 rounded-full"
        alt="profile"
        src={profile.images && profile?.images[0].url}
      />
      <span title={profile.display_name}>{profile.display_name}</span>
      <div className="mr-1.5">
        {dropdown ? DropdownIcon : InvertedDropdownIcon}
      </div>
    </button>
  )
}
