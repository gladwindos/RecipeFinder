<template>
  <b-card
    :title="recipe.title"
    :img-src="
      recipe.image
        ? recipe.image
        : 'https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png'
    "
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-4 recipe-item"
    @click="selectRecipe"
  >
    <b-card-text>
      <span
        v-bind:key="ingredient.id"
        v-for="ingredient in recipe.usedIngredients"
        style="color: green"
      >
        {{ ingredient.name }},</span
      >
      <br />
      <span
        v-bind:key="ingredient.id"
        v-for="ingredient in recipe.missedIngredients"
        style="color: red"
      >
        {{ ingredient.name }},</span
      >
    </b-card-text>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RecipeListItem",
  props: ["recipe"],
  methods: {
    ...mapActions(["fetchActiveRecipeSteps"]),
    selectRecipe(e) {
      e.preventDefault();

      this.fetchActiveRecipeSteps(this.recipe);

      this.$router.push({ path: `recipe/${this.recipe.id}/` });
    },
  },
};
</script>

<style>
.recipe-item {
  margin: auto;
  cursor: pointer;
}

.recipe-item:hover {
  opacity: 0.5;
}
</style>