<template>
  <Content>
    <IngredientSearch />
    <RecipeList v-bind:recipes="recipes" />
  </Content>
</template>

<script>
import axios from "axios";

import Content from "../components/Layout/Content";
import IngredientSearch from "../components/RecipeFinder/IngredientSearch";
import RecipeList from "../components/RecipeFinder/RecipeList";

export default {
  name: "RecipeFinder",
  components: {
    Content,
    RecipeList,
    IngredientSearch,
  },
  data() {
    return {
      recipes: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.spoonacular.com/recipes/findByIngredients?apiKey=951bb07fac7e4a42820f41e9e3f73ece&ingredients=apples,+flour,+sugar&number=10"
      )
      .then((res) => (this.recipes = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>