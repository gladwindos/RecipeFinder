<template>
  <div class="recipe-detail">
    <RecipeIngredients :ingredients="activeRecipe.ingredients" :image="activeRecipe.image" />
    <RecipeSteps :title="activeRecipe.title" :steps="activeRecipe.steps" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import RecipeSteps from "../components/RecipeDetail/RecipeSteps";
import RecipeIngredients from "../components/RecipeDetail/RecipeIngredients";

export default {
  name: "RecipeDetail",
  components: { RecipeSteps, RecipeIngredients },
  methods: {
    ...mapActions(["fetchRecipeSteps"]),
  },
  computed: mapGetters(["activeRecipe"]),
};
</script>

<style>
.recipe-detail {
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
}
</style>