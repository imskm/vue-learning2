import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue';
import CandidateIndexPage from '@/pages/candidate/IndexPage.vue';
import CandidateShowPage from '@/pages/candidate/ShowPage.vue';
import CandidateEditPage from '@/pages/candidate/EditPage.vue';
import CandidateCreatePage from '@/pages/candidate/CreatePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/candidates',
      name: 'candidate.list',
      component: CandidateIndexPage
    },
    {
      path: '/candidates/:id',
      name: 'candidate.detail',
      component: CandidateShowPage
    },
    {
      path: '/candidates/create',
      name: 'candidate.create',
      component: CandidateCreatePage,
      meta: {
        showNavbar: false,
      },
    },
    {
      path: '/candidates/:id/edit',
      name: 'candidate.edit',
      component: CandidateEditPage
    },
  ]
})

export default router
