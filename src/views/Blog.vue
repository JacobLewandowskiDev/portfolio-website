<script>
import Navigation from "../components/Navigation.vue";
import JavaDevPost from "../blogPosts/JavaDevPost.vue";

export default {
  components: {
    Navigation,
    JavaDevPost
  },
};
</script>

<template>
  <Navigation />
  <div class="page">
    <div class="page__container">
      <h1 class="page__container__title">DevCorner</h1>
      <h2 class="page__container__subtitle">The Developer Blog</h2>
      <div class="page__container__blog">
        <JavaDevPost />
        <br>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  border: 0.1rem solid yellow;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
}

.page__container {
  border: 0.1rem solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.page__container__subtitle {
  margin-bottom: 2rem;
}

.page__container__blog {
  border: 0.1rem solid orange;
  width: 90%;
  height: 100%;
}
</style>
