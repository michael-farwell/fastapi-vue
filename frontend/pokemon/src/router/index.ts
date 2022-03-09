import { createRouter, createWebHistory } from "vue-router";

console.log(import.meta.env);

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTING_URL as string),
  routes: [],
});

export default router;
