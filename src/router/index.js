import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";
import UnderConstruction from "../views/UnderConstruction.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About, alias: '/About' },
    { path: "/portfolio", name: "Portfolio", component: Portfolio, alias: '/Portfolio' },
    { path: "/under-construction", name: "UnderConstruction", component: UnderConstruction, alias: '/UnderConstruction' },
  ],
});

export default router;
