<script>
import Navigation from "../components/Navigation.vue";
import JavaDevPost from "../blogPosts/JavaDevPost.vue";

export default {
  components: {
    Navigation,
    JavaDevPost,
  },
};
</script>

<template>
  <Navigation />
  <div class="page">
    <div class="page__container">
      <h1 class="page__container__title">DevCorner</h1>
      <h2 class="page__container__subtitle">A Developers Journal</h2>
      <div class="page__container__blog">
        <JavaDevPost />
        <br>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
}

.page__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.page__container__subtitle {
  margin-bottom: 2rem;
}

.page__container__blog {
  width: 75%;
  height: 100%;
}

@media screen and (max-width:1024px) {
  .page__container {
    margin-top: 4rem;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .page__container__blog {
    width: 95%;
    margin: 0 auto;
  }

  .page__container__subtitle {
    width: 100%;
  }
}
</style>
