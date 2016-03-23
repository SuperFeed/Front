import λ from 'apex.js'

export const method = 'GET'
export const path = '/superfeed_getPosts'
export const handler = () => ({
  posts: [
    { author: 'ryan', text: 'hello!' },
    { author: 'dan', text: 'hola!' }
  ]
})

export default λ(handler)
