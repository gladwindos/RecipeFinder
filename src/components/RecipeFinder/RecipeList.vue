<template>
  <b-container class="recipe-list">
    <b-row>
      <b-col
        v-bind:key="recipe.title"
        v-for="recipe in fetchedRecipes"
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RecipeList",
  components: { RecipeListItem },
  computed: mapGetters(["fetchedRecipes"]),
  methods: mapActions(["fetchRandomRecipes"]),
  created() {
    this.fetchRandomRecipes();
  },
};
</script>

<style>
.recipe-list {
  padding: 30px;
}
</style>