<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card: Card,
  },
};
</script>

<template>
  <div class="page-container">
    <h1 class="page-container__name">Jacob Lewandowski</h1>

    <div class="page-container__tiles">
      <Card class="card"/>
      <Card class="card" />
      <Card class="card" />
    </div>
  </div>
</template>

<style scoped>
.page-container__name {
    text-align: right;
    border: 2px solid yellow;
    height: 30vh;
}

.page-container__tiles{
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 70vh;
    width: 80%;
    margin: 0 auto;
    margin: 2px solid purple;
}

.card:nth-child(2) {
    margin-top: 50px;
}
</style>
