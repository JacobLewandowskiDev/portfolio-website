<script>
import Navigation from "../components/Navigation.vue";
import Resume from "../components/Resume.vue";

export default {
  components: {
    Navigation,
    Resume,
  },
};
</script>

<template>
  <div class="page">
    <Navigation />
    <div class="page__container">
      <Resume />
    </div>
  </div>
</template>

<style scoped></style>
