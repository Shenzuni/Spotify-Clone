import 'dotenv/config'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI || ''

const auth_base64 = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")

export const url = "https://accounts.spotify.com/api/token"
export let data = {
  grant_type: "authorization_code", 
  redirect_uri: REDIRECT_URI,
  code: ""
}
export const headers = {
  "Authorization": "Basic " + auth_base64,
  "Content-Type": "application/x-www-form-urlencoded"
}
