import {getHeaders, handleErrors} from './fetchDefaults'

function logIn(username, password) {
  let b64 = btoa(`${username}:${password}`)
  return fetch('http://localhost:3000/api/v1/users/current', {
    headers: new Headers({authorization: `Basic ${b64}`})
  })
  .then(handleErrors)
  .then(res => res.json())
}

function getCurrent() {
  console.log(getHeaders())
  return fetch('http://localhost:3000/api/v1/users/current', {
    headers: getHeaders()
  })
  .then(handleErrors)
  .then(res => res.json())
}

const userApi = {
  logIn,
  getCurrent,
}

export default userApi;
