<script>
export default {

};
</script>

<template>
  <div class="card">
    <img class="card__img" src="" />
    <p class="card__description">Description</p>
    <router-link class="card__link" :to="{ Link }" type="button">About</router-link>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 12rem;
  height: 15rem;
  margin: 0 1rem;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: var(--card-border-color);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
}

.card__link {
  position: absolute;
  color: var(--font-color);
  text-decoration: none;
  background-color: var(--card-link-bg-color);
  /* border: 2px solid yellow; */
  padding: .5rem 1rem;
  border-radius: .5rem;
  bottom: 20%;
}

</style>
