import express from 'express'

import { fetchAccessToken } from './api/endpoints'

export const routes = express.Router()

const RES = {
  NO_CODE: "no code provided",
  BAD_CODE: "invalid code"
}

interface ILogin {
  query: {
    code: string
  }
}
routes.get('/login', (req: ILogin, res) => {
  const code = req.query.code
  fetchAccessToken(code)
  .then(
    token => 
    res.status(201).send(token)
  )
  .catch(
    error => 
    res.status(400).send(error)
  )
})