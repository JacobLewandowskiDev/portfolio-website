import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Blog from "../views/Blog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/blog", name: "Blog", component: Blog },
    { path: "/projects", name: "Projects", component: Projects, props: true },
  ],
});

export default router;
