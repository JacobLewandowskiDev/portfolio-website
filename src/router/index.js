import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Resume from "../views/Resume.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/resume", name: "Resume", component: Resume },
    { path: "/projects", name: "Projects", component: Projects, props: true },
  ],
});

export default router;
