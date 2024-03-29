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
    <header>
      <Navigation />
    </header>
    <div class="page__container">
      <h1>About me</h1>
      <Resume />
    </div>
  </div>
</template>

<style scoped>
.page__container {
  border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
