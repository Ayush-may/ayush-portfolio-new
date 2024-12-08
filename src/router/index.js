import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Project from '../components/Project.vue' 
import Home from '../components/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Project',
    component: Project
  },
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

export default router