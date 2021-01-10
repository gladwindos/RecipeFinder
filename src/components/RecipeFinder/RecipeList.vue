<template>
  <b-container class="recipe-list">
    <b-row>
      <b-col
        v-bind:key="recipe.id"
        v-for="recipe in recipes"
        sm="12"
        md="6"
        lg="4"
      >
        <RecipeListItem v-bind:recipe="recipe" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipeListItem from "./RecipeListItem";

export default {
  name: "RecipeList",
  components: { RecipeListItem },
  props: ["recipes"],
};
</script>

<style>
.recipe-list {
  padding: 30px;
}
</style>