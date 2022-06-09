import { currentUsersProfile } from "api/endpoints"
import { PROFILE } from "utils/constants/local"

export default async function handleGetCurrentProfile(
  auth: string,
  setName: (name?: string) => void, 
  setImage: (image?: string) => void
) {
  let data
  if (auth === 'caco') {
    data = PROFILE
  }
  else {
    data = await currentUsersProfile(auth)
    .then(res => res)
  }
  setName(data.display_name)
  setImage((data.images && data.images[0].url) || '')
}