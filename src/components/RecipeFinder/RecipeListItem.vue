<template>
  <div>
      {{ recipe.title }}
  </div>
</template>

<script>
export default {
  name: "RecipeListItem",
  props: ["recipe"],
};
</script>

<style>
</style>