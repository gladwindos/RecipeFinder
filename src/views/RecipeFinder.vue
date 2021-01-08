<template>
  <div class="main">
    <Sidebar>
      <IngredientSearch />
      <IngredientOutput />
    </Sidebar>
    <Content>
      <RecipeList />
    </Content>
  </div>
</template>

<script>
import Sidebar from "../components/Layout/Sidebar";
import Content from "../components/Layout/Content";
import IngredientSearch from "../components/RecipeFinder/IngredientSearch";
import IngredientOutput from "../components/RecipeFinder/IngredientOutput";
import RecipeList from "../components/RecipeFinder/RecipeList";

export default {
  name: "RecipeFinder",
  components: {
    Sidebar,
    Content,
    RecipeList,
    IngredientSearch,
    IngredientOutput,
  },
};
</script>

<style>
.main {
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
}
</style>