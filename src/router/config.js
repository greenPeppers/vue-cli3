import {
  navRouterDictionary,
  routerDictionary,
} from './routerDictionary'

export default [{
  path: '/',
  redirect: {
    name: 'home'
  },
}, {
  path: '/home',
  name: 'home',
  meta: navRouterDictionary.home,
  props: true,
  component: () => import( /* webpackChunkName: "home" */ '@/views/home'),
}]