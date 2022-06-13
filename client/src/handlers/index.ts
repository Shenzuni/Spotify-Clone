import { code_url } from "../utils/constants/code_url"
import { PROFILE } from "utils/constants/local"
import { currentUsersProfile } from "api/endpoints"
import { CheckTrackSaved } from "api/endpoints"

declare global {
  interface Window {
    setAuth: (auth: string) => void
  }
}

export function handleToggleShuffle() {}

export function handleLogin(setAuth: (auth: string) => void) {
  window.setAuth = setAuth
  const config = "popup=true,width=650,height=900"
  window.open(code_url, "", config)
}

export async function handleGetCurrentProfile(
  auth: string,
  setProfile: (name?: string, image?: string) => void
) {
  let data
  if (auth === "local") {
    data = PROFILE
  } else {
    data = await currentUsersProfile(auth).then((res) => res)
  }

  const name = data.display_name
  const image = data.images && data.images[0].url

  setProfile(name, image)
}

export async function handleCheckSaved(auth: string, ids: string[]) {
  if (auth === "local") {
    return ids.map(() => false)
  } else {
    return await CheckTrackSaved(auth, ids.join()).then((res) => res)
  }
}
