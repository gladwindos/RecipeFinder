<template>
  <div>
    <div v-bind:key="recipe.id" v-for="recipe in recipes">
      <RecipeListItem v-bind:recipe='recipe' />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RecipeListItem from "./RecipeListItem";

export default {
  name: "RecipeList",
  components: { RecipeListItem },
  data() {
    return {
      recipes: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.spoonacular.com/recipes/findByIngredients?apiKey=951bb07fac7e4a42820f41e9e3f73ece&ingredients=apples,+flour,+sugar&number=5"
      )
      .then((res) => (this.recipes = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>