<script>
import Navigation from "../components/Navigation.vue";
import Projects from "../components/Projects.vue";

export default {
  components: {
    Navigation,
    Projects,
  },
};
</script>

<template>
  <Navigation />
  <div class="page">
    <div class="page__container">
      <h1 class="page__container__title">Project Portfolio</h1>
      <Projects />
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
  min-height: 90vh;
  justify-content: flex-start;
}

@media screen and (max-width: 1024px) {
  .page__container {
    width: 95vw;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;
  }

  .page__container__title {
    font-size: 2rem;
    padding-bottom: 1rem;
    text-align: center;
  }
}
</style>
