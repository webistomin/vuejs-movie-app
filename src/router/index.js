import Vue from 'vue'
import Router from 'vue-router'
import favoriteList from '@/components/FavoriteList'
import nowPlayingList from '@/components/NowPlayingList'
import topRatedList from '@/components/TopRatedList'
import upcomingList from '@/components/UpcomingList'
import notFound from '@/components/NotFound'
import home from '@/components/Home'
import movie from '@/components/Movie'
import store from '../store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: home
    },
    {
      path: '/favorite-movies',
      component: favoriteList
    },
    {
      path: '/now-playing-movies',
      component: nowPlayingList
    },
    {
      path: '/top-rated-movies',
      component: topRatedList
    },
    {
      path: '/upcoming-movies',
      component: upcomingList
    },
    {
      path: '/movie/:id',
      component: movie,
    },
    {
      path: '*',
      component: notFound
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
