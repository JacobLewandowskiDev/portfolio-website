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
      style="border-radius: 50%"
      v-if="card.index === 0"
      src="../assets/about-icon.svg"
    />
    <img
      class="card__img"
      v-if="card.index === 1"
      src="../assets/code-icon.svg"
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
  margin: 0 1.5rem;
  border-right: 0.1rem solid;
  border-bottom: 0.1rem solid;
  border-color: var(--card-border-color);
  border-radius: 24px;
  padding: 2rem;
  background: linear-gradient(150deg, rgb(62 62 62 / 42%) 55%, rgb(88 88 88) 94%);
  box-shadow: 0.3rem 0.6rem 0.9rem rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.25rem);
  -webkit-backdrop-filter: blur(0.9rem);
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
  box-shadow: 0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.6rem);
  -webkit-backdrop-filter: blur(0.6rem);
  border-radius: 0.4rem;
  font-weight: 600;
  transition: linear 0.1s;
  border: 0.1rem solid #ffffff38;
}

.card__link:hover {
  background-color: var(--card-link-bg-color-hover);
  color: var(--card-link-text-color-hover);
}

.card__link:active {
  background-color: var(--card-link-bg-color-active);
  box-shadow: 0 0 0.6rem #37c6ff;
  border: 0.1rem solid #37c6ff;
}

@media screen and (max-width: 1089px) {
  .card {
    margin: 0 0.2rem;
  }
}

@media screen and (max-width: 970px) {
  .card {
    margin: 1rem 1rem;
    padding: 1rem;
    height: 12rem;
    width: 8rem;
  }

  .card__img {
    width: 3rem;
    height: 3rem;
    margin-bottom: 5%;
  }
}

@media screen and (max-width: 779px) {
  .card {
    margin: 0rem 0.25rem;
  }
}

@media screen and (max-width: 665px) {
  .card {
    margin: 1rem 0.25rem;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      150deg,
      rgb(62 62 62 / 42%) 55%,
      rgb(88 88 88) 94%
    );
  }
}

@media screen and (max-height: 506px) {
  .card {
    margin: 0 0.25rem;
  }
}

@media screen and (max-width: 470px) {
  .card {
    all: initial;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 10rem;
  }

  .card__img {
    border: 0.2rem solid var(--card-mobile-border-color);
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    padding: 0.2rem;
    background: linear-gradient(45deg, rgb(62 62 62 / 42%) 55%, rgb(88 88 88) 94%);
    box-shadow: 0.3rem 0.6rem 0.9rem rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(0.25rem);
    -webkit-backdrop-filter: blur(0.9rem);
  }

  .card__link {
    margin-top: 1rem;
    width: 80%;
    font-family: var(--button-font);
    font-size: .8rem;
    background-color: #ffffff62;
    box-shadow: 0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(0.6rem);
    -webkit-backdrop-filter: blur(0.6rem);
    border: 0.12rem solid #ffffff54;
    border-radius: 0.4rem;
    position: relative;
  }

  .card__description {
    display: none;
  }

  .card__link:active {
    border: 0.12rem solid #37c6ff;
}
}

@media screen and (max-width: 437px) {
  .card__img {
    width: 6rem;
    height: 6rem;
  }

  .card__link {
    font-size: .6rem;
    width: 5rem;
  }
}

@media screen and (max-width: 360px) {
   .card__img {
    width: 7rem;
    height: 7rem;
  }

  .card__link {
    font-size: .6rem;
    width: 6rem;
  }

}

</style>
