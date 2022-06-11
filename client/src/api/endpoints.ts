import axios, { AxiosRequestConfig } from "axios";

function config(auth: string): AxiosRequestConfig {
  const config = {
    headers: {
      Authorization: "Bearer " + auth,
    }
  };
  return config
}

export async function currentUsersProfile(auth: string) {
  return await axios
    .get<SpotifyApi.CurrentUsersProfileResponse>(
      "https://api.spotify.com/v1/me",
      config(auth)
    )
    .then((res) => res.data);
}
export async function playerResume(auth: string) {
  axios.get<SpotifyApi.VoidResponse>(
    "https://api.spotify.com/v1/me/player/play",
    config(auth)
  );
}
export async function playerPause(auth: string) {
  axios.put<SpotifyApi.VoidResponse>(
    "https://api.spotify.com/v1/me/player/pause",
    config(auth)
  );
}
export async function playerSeek(position_ms: number, auth: string) {
  axios.put<SpotifyApi.VoidResponse>(
    "https://api.spotify.com/v1/me/player/seek",
    { position_ms },
    config(auth)
  );
}
export async function transferPlaybackDevice(
  device_ids: string[],
  play: boolean,
  auth: string
) {
  axios.put<SpotifyApi.VoidResponse>(
    "https://api.spotify.com/v1/me/player",
    { device_ids, play },
    config(auth)
  );
}
// export const GetPlaybackDevice = async (auth) => {
//   return await axios({
//     url: "https://api.spotify.com/v1/me/player",
//     method: "get",
//     headers: {
//       Authorization: "Bearer " + auth
//     }
//   })
//   .then(res => res.data)
//   .catch(error => {throw error})
// }
// export const TrackIsSaved = async (auth, ids) => {
//   return await axios({
//     url: "https://api.spotify.com/v1/me/tracks/contains",
//     method: "get",
//     params: {
//       ids
//     },
//     headers: {
//       Authorization: "Bearer " + auth
//     }
//   })
//   .then(res => res.data)
//   .catch(error => {throw error})
// }
// export const SaveTracks = async (auth, ids) => {
//   return await axios ({
//     url: "https://api.spotify.com/v1/me/tracks",
//     method: "put",
//     params: { ids },
//     headers: {
//       Authorization: "Bearer " + auth
//     }
//   })
// }
// export const UnsaveTracks = async (auth, ids) => {
//   return await axios ({
//     url: "https://api.spotify.com/v1/me/tracks",
//     method: "delete",
//     params: { ids },
//     headers: {
//       Authorization: "Bearer " + auth
//     }
//   })
// }
