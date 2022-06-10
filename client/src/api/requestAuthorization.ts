import axios from "axios"

interface Authorization {
  access_token: string,
  token_type: string,
  scope: string,
  expires_in: number,
  refresh_token: string
}

export async function requestAuthorization(code: string) {
  return (
    await axios.get<Authorization>(
      import.meta.env.VITE_SERVER_URL + '/login',
      { params: { code } }
    )
    .then(res => res.data)
  )
}
