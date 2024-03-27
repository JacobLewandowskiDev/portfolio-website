<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <img
      class="card__img"
      v-if="card.index === 0"
      src="../assets/code-icon.svg"
    />
    <img
      class="card__img"
      style="border-radius: 50%"
      v-if="card.index === 1"
      src="../assets/aboutme-icon.svg"
    />
    <img
      class="card__img"
      v-if="card.index === 2"
      src="../assets/blog-icon.svg"
    />
    <p class="card__description">{{ card.description }}</p>
    <router-link class="card__link" :to="card.link" type="button">{{
      card.name
    }}</router-link>
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
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 25%;
}

.card__description {
  text-align: center;
  width: 85%;
  font-size: 0.8rem;
}

.card__link {
  position: absolute;
  color: var(--card-link-text-color);
  text-decoration: none;
  width: 70%;
  text-align: center;
  text-wrap: nowrap;
  word-break: keep-all;
  bottom: 10%;
  padding: 0.5rem;
  background-color: var(--card-link-bg-color);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  border-radius: .4rem;
  font-weight: 600;
  transition: linear .1s;
  border: 1px solid #ffffff38;
}

.card__link:hover {
  background-color: var(--card-link-bg-color-hover);
  color: var(--card-link-text-color-hover);
}


.card__link:active {
  background-color: var(--card-link-bg-color-active);
  box-shadow: 0px 0px 20px #37C6FF;
  border: 1px solid #37C6FF;
}

</style>
