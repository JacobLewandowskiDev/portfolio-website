<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div class="card">
    <img class="card__img" v-if="card.index === 0" src="../assets/code-icon.svg">
    <img class="card__img" v-if="card.index === 1" src="../assets/aboutme-icon.svg">
    <img class="card__img" v-if="card.index === 2" src="../assets/blog-icon.svg">
    <p class="card__description"> {{ card.description }}</p>
    <router-link class="card__link" :to="card.link" type="button">{{ card.name }}</router-link>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
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

.card__img {
  align-items: top;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  padding: .2rem;
}

.card__link {
  color: var(--font-color);
  text-decoration: none;
  bottom: 20%;
}

</style>
