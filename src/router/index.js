import Vue from 'vue'
import Router from 'vue-router'
import favoriteList from '@/components/FavoriteList'
import nowPlayingList from '@/components/NowPlayingList'
import topRatedList from '@/components/TopRatedList'
import upcomingList from '@/components/UpcomingList'



Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ],
  mode: 'history'
})
