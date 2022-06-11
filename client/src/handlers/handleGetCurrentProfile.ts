import { currentUsersProfile } from "api/endpoints";
import { PROFILE } from "utils/constants/local";

export default async function handleGetCurrentProfile(
  auth: string,
  setProfile: (name?: string, image?: string) => void
) {
  let data;
  if (auth === "local") {
    data = PROFILE;
  } else {
    data = await currentUsersProfile(auth).then((res) => res);
  }

  const name = data.display_name;
  const image = data.images && data.images[0].url;

  setProfile(name, image);
}
