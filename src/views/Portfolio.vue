<script>
import Navigation from "../components/Navigation.vue";
import Project from "../components/Projects.vue";

export default {
  components: {
    Navigation,
    Project,
  },
};
</script>

<template>
  <Navigation />
  <div class="page">
    <div class="page__container">
      <h1 class="page__container__title">Project Portfolio</h1>
      <Project />
    </div>
  </div>
</template>

<style scoped>
.page {
  height: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  position: relative;
}

.page__container {
  height: 100%;
}

.page__container__projects {
  height: 100%;
}
</style>
