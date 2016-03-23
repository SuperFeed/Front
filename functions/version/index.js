import λ from 'apex.js'

export const method = 'GET'
export const path = '/superfeed_version'
export const handler = () => ({
  version: 1
})

export default λ(handler)
