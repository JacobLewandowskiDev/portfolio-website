<script>
import Card from "../components/Card.vue";
import Navigation from "../components/Navigation.vue";
export default {
  components: {
    Card: Card,
    Navigation: Navigation,
  },

  data() {
    return {
      cards: [
        {
          index: 0,
          description: "Take a tour of my coding projects.",
          link: "Projects",
          name: "View Projects",
        },
        {
          index: 1,
          description: "Learn more about me.",
          link: "About",
          name: "About me",
        },
        {
          index: 2,
          description: "Preview my blog.",
          link: "Blog",
          name: "My blog",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="page">
    <Navigation />
    <div class="page__container">
      <h1 class="page__container__name">Jacob Lewandowski</h1>
      <div class="page__container__tiles">
        <Card v-for="(card, index) in cards" :key="index" :card="card" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
  background: linear-gradient(180deg, rgb(0, 0, 0) 50%, rgb(64, 64, 64) 100%);
}

.page__container__name {
  display: flex;
  width: fit-content;
  margin-left: 15rem;
  line-height: 1;
  word-break: keep-all;
  margin-bottom: 4rem;
}

.page__container__tiles {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card:nth-child(2) {
  margin-top: -3rem;
}
</style>
