import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Index from "../views/Index";
import TodoList from "../views/TodoList";
import User from "../views/User";
import UserAdd from "../components/User/UserAdd";
import UserList from "../components/User/UserList";
import Content from "../components/Content"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/TodoList",
    name: "TodoList",
    component: TodoList
  },
  {
    path: "/User",
    name: "User",
    component: User,
    children: [
      //子路由配置
      {
        path: "/User/UserAdd",
        name: "UserAdd",
        component: UserAdd,
      }, {
        path: "/User/UserList",
        name: "UserList",
        component: UserList,
      }
    ]
  },
  {
    path: "/content/:aid",
    name: "Content",
    component: Content
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
