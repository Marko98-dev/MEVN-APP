import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

const isLoggedIn = false;

const routes = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tasks',
      name: 'tasks-all',
      component: () => import(/* webpackChunkName: "TasksAll" */ '../views/tasks/TasksAll.vue'),
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/edit',
      name: 'edit-task',
      component: () => import(/* webpackChunkName: "EditTasks" */ '../views/tasks/TaskEdit.vue'),
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/create',
      name: 'create-task',
      component: () => import(/* webpackChunkName: "CreateTask" */ '../views/tasks/TaskCreate.vue'),
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/authentication/Login.vue'),
      beforeEnter: (to, from, next) => {
        if (!isLoggedIn) {
          next();
        } else {
          next('/');
        }
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ '../views/authentication/Register.vue'),
      beforeEnter: (to, from, next) => {
        if (!isLoggedIn) {
          next();
        } else {
          next('/');
        }
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  linkActiveClass: 'active',
  mode: 'history',
});

// routes.beforeEach((to, from, nest) => {});

export default routes;
