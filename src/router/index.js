import Vue from "vue";
import VueRouter from "vue-router";
import RecipeFinder from "../views/RecipeFinder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RecipeFinder",
    component: RecipeFinder,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
