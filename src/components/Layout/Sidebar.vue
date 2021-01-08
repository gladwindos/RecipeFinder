<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  background: red;
}
</style>