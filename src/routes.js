import Home from './Home'
import Login from './Login'

export default {
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/login', component: Login }
  ]
}
