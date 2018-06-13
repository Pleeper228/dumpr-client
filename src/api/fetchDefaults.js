const defaultHeaders = new Headers()

export function addHeader(key, value) {
  defaultHeaders.set(key, value)
}

export function getHeaders() {
  return defaultHeaders
}

export function setAuthHeader(username, password) {
  let b64 = btoa(`${username}:${password}`)
  defaultHeaders.set('authorization', `Basic ${b64}`)
  defaultHeaders.set('Content-Type', 'application/json')
}

export function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response
}
