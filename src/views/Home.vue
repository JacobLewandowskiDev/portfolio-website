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
          description: "Preview my Resume.",
          link: "Resume",
          name: "My Resume",
        },
      ]
    };
  },
};
</script>

<template>
  <header>
    <Navigation/>
  </header>
  <div class="page--container">
    <h1 class="page--container__name">Jacob Lewandowski</h1>
    <div class="page--container__tiles">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </div>
</template>

<style scoped>
.page--container__name {
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: center;
  line-height: 1;
  word-break: keep-all;
  height: 30vh;
}

.page--container__tiles {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 50vh;
  width: 100%;
  margin: 0 auto;
}

.card:nth-child(2) {
  margin-top: -3rem;
}
</style>
