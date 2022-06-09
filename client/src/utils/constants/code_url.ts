const client_id = process.env.REACT_APP_CLIENT_ID || ''
const redirect_uri = window.location.protocol + "//" + window.location.host
const url = 'https://accounts.spotify.com/authorize?'
const params = {
  scope: `streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state`,
  client_id,
  response_type: 'code',
  redirect_uri
}
const searchParams = new URLSearchParams(params)
export const code_url = url + searchParams