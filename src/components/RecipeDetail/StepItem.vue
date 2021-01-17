<template>
  <b-card class="step-item" :title="`Step ${step.number}`">
    <b-card-text>
      {{ step.step }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "StepItem",
  props: ["step"],
};
</script>

<style>
.step-item {
  margin-bottom: 30px;
}
</style>