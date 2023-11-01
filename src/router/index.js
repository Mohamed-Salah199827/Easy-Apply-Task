import { createRouter, createWebHistory } from 'vue-router'
import Posts from "../views/Posts.vue";
import Post from '../components/Post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
       path: '/post/:id',
       name: 'post',
       component: Post
     },
    
    
  ]
})

export default router
