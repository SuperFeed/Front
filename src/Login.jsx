import React from 'react'
import FacebookLogin from 'react-facebook-login'

const APP_ID = process.env.NODE_ENV === 'production'
  ? '1704028006536118'
  : '1704068519865400'

export default function Login () {
  return <FacebookLogin
    appId={APP_ID}
    autoLoad
    callback={(_) => console.log(_)}
  />
}
