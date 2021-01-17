<template>
  <div class="recipe-steps">
    <h1>{{ title }}</h1>

    <b-container class="recipe-list">
      <b-row>
        <b-col
          v-bind:key="step.number"
          v-for="step in steps"
          sm="12"
          class="px-0"
        >
          <StepItem v-bind:step="step" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import StepItem from "./StepItem";

export default {
  name: "RecipeSteps",
  components: { StepItem },
  props: ['title', 'steps']
};
</script>

<style>
.recipe-steps {
  padding: 30px;
}
</style>