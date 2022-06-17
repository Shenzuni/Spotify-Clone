import { code_url } from "../utils/constants/code_url"
import {
  currentUsersProfile,
  SaveTracks,
  UnsaveTracks,
  CheckSavedTracks,
} from "api/endpoints"

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
  setProfile: (profile: SpotifyApi.CurrentUsersProfileResponse) => void
) {
  const profile = await currentUsersProfile(auth)
  setProfile(profile)
}

export async function handleCheckSavedTracks(auth: string, ids: string[]) {
  if (auth === "local") {
    return ids.map(() => false)
  } else {
    return await CheckSavedTracks(auth, ids.join()).then((res) => res)
  }
}
export async function handleSaveTracks(auth: string, ids: string[]) {
  SaveTracks(auth, ids.join())
}
export function handleUnsaveTracks(auth: string, ids: string[]) {
  UnsaveTracks(auth, ids.join())
}
