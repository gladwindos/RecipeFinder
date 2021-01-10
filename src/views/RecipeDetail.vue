<template>
  <div>recipe: {{recipe}}</div>
</template>

<script>
export default {
  name: "RecipeDetail",
  data() {
    return {
      recipe: "",
    };
  },
  created() {
    this.recipe = this.$route.params.id;
  },
};
</script>

<style>
</style>