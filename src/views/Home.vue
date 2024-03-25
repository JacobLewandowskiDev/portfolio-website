<script>
import Card from "../components/Card.vue";
import Navigation from "../components/Navigation.vue";
export default {
  components: {
    Card: Card,
    Navigation: Navigation
  },
};
</script>

<template>
  <header>
    <Navigation/>
  </header>
  <div class="page-container">
    <h1 class="name">Jacob Lewandowski</h1>
    <div class="page-container__tiles">
      <Card class="card" />
      <Card class="card" />
      <Card class="card" />
    </div>
  </div>
</template>

<style scoped>
.name {
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: center;
  line-height: 1;
  margin-top: 10vh;
  word-break: keep-all;
  height: 30vh;
}

.page-container__tiles {
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
  margin-top: -2rem;
}
</style>
