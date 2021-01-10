<template>
  <b-card
    :title="recipe.title"
    :img-src="recipe.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2 recipe-item"
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

    <b-button href="#" variant="primary">View Recipe</b-button>
  </b-card>
</template>

<script>
export default {
  name: "RecipeListItem",
  props: ["recipe"],
};
</script>

<style>
.recipe-item {
  margin: auto;
}
</style>