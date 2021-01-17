<template>
  <Content>
    <IngredientSearch />
    <RecipeList />
  </Content>
</template>

<script>
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
};
</script>

<style>
</style>