import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobListings from '../components/JobListings.vue';
import AddJob from '../views/AddJob.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobListings,
    },
    {
      path: '/jobs/add',
      name: 'addJobs',
      component: AddJob,
    },
  ],
});

export default router;
