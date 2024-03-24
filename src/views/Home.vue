<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card: Card,
  },
};
</script>

<template>
  <header class="contact">
    <img class="contact__icon" src="../assets/envelope-solid-icon.svg">
    <img class="contact__icon" src="../assets/github-icon.svg">
    <img class="contact__icon" src="../assets/linkedin-icon.svg">
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
  text-align: right;
  border: 2px solid yellow;
  height: 40vh;
}

.page-container__tiles {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 40vh;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
}

.card:nth-child(2) {
  margin-top: -15px;
}
</style>
