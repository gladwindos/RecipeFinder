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
  {
    path: "/recipe/:id",
    name: "RecipeDetail",
    component: () => import(/* webpackChunkName: "about" */ '../views/RecipeDetail.vue')
  },
];

const router = new VueRouter({
  routes,
});

export default router;
