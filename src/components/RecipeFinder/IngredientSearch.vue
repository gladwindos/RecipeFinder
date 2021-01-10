<template>
  <b-form class="search-form">
    <b-form-tags
      v-model="ingredients"
      class="searchbar"
      placeholder="Enter new ingredients separated by a comma"
      separator=","
      remove-on-delete
    ></b-form-tags>
    <b-button type="submit" variant="primary">Search for recipe</b-button>
  </b-form>
</template>

<script>
export default {
  name: "IngredientSearch",
  data() {
    return {
      ingredients: [],
    };
  },
};
</script>

<style>
.search-form {
  background: #f5f7fa;
  text-align: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.searchbar {
  margin-bottom: 20px;
  max-width: 1000px;
}
</style>