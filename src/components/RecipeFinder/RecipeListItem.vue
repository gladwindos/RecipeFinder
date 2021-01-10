<template>
  <b-card
    :title="recipe.title"
    :img-src="recipe.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2 recipe-item"
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
export default {
  name: "RecipeListItem",
  props: ["recipe"],
  methods: {
    selectRecipe(e) {
      e.preventDefault();
      console.log(this.recipe.title);
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