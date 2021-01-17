<template>
  <div class="recipe-ingredients">
    <img :src="image" alt="" />
    <b-container>
      <h3>Ingredients</h3>
      <b-row>
        <b-col sm="12">
          <ul>
            <li v-bind:key="ingredient.id" v-for="ingredient in ingredients">
              {{ ingredient.name }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "RecipeIngredients",
  props: ["ingredients", "image"],
};
</script>

<style>
.recipe-ingredients {
  background: #f5f7fa;
}

.recipe-ingredients img {
  width: 100%;
  padding-bottom: 30px;
}

.recipe-ingredients ul {
  padding-left: 0;
}

.recipe-ingredients li {
  list-style: none;
  margin-bottom: 5px;
}
</style>