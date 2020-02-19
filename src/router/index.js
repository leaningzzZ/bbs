import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage/homePage.vue'
import PostPage from "../components/Posting/postPage.vue"
import AboutMe from "../components/AboutMe/aboutMe"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/HomePage'
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/PostPage',
    name: 'PostPage',
    component: PostPage
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: AboutMe
  },
]

const router = new VueRouter({
  routes
})

export default router
