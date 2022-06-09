import { url, data, headers } from '../utils/constants/request'
import axios from 'axios'

interface Authorization {
  access_token: string,
  token_type: string,
  scope: string,
  expires_in: number,
  refresh_token: string
}

export async function fetchAccessToken(code: string): Promise<Authorization> { 
  data.code = code
  const data_config = new URLSearchParams(data)

  return await axios.post<Authorization>(url, data_config, { headers })
  .then(res => res.data)
  .catch(error => {throw error})
}
