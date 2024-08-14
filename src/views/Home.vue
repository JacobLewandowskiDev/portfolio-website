<script>
import Card from "../components/Card.vue";
import Navigation from "../components/Navigation.vue";
import FlowField from "../components/FlowField.vue";

export default {
  components: {
    Card: Card,
    Navigation: Navigation,
    FlowField: FlowField,
  },

  data() {
    return {
      cards: [
        {
          index: 0,
          description: "Learn more About me.",
          link: "About",
          name: "About me",
        },
        {
          index: 1,
          description: "View my Coding Projects.",
          link: "Portfolio",
          name: "View Projects",
        },
      ],
      showFlowField: window.innerWidth >= 680, // Change also the value in methods: handleResize() method when modifying.
    };
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  destroyed() {
    window.cancelAnimationFrame(this.id);
    this.id = undefined;
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.showFlowField = window.innerWidth >= 680;
    },
  },
};
</script>

<template>
  <div class="page">
    <FlowField v-if="showFlowField" />
    <Navigation />
    <div class="page__container">
      <div class="page__container__content">
        <h1 class="page__container__content__name">Jakub Lewandowski</h1>
        <div class="page__container__content__tiles">
          <Card v-for="(card, index) in cards" :key="index" :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
  background: linear-gradient(
    171deg,
    rgba(0, 0, 0, 1) 40%,
    rgba(56, 56, 56) 100%
  );
}

.page__container {
  width: 100%;
  height: 100%;
  position: relative;
}

.page__container__content {
  display: flex;
  flex-direction: column;
  width: max-content;
  align-items: center;
  z-index: 10;
}

.page__container__content__name {
  display: flex;
  width: 100%;
  line-height: 1;
  word-break: keep-all;
  text-align: center;
  padding: 1rem 0;
  justify-content: flex-end;
  align-items: center;
}

.page__container__content__tiles {
  display: flex;
  justify-content: center;
  width: fit-content;
  padding-top: 1.3rem;
  align-items: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 1089px) {
  .page__container__content__name {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 970px) {
  .page__container__content__tiles {
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .page__container__content__name {
    justify-content: center;
  }
}

@media screen and (max-width: 665px) {
  .page {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background: var(--background-color);
  }

  .page__container__content {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-height: 506px) {
  .page__container__content__name {
    margin-top: 2rem;
  }

  .page__container {
    height: 100%;
  }

  .page {
    height: 100%;
  }
}

@media screen and (max-width: 470px) {
  .page {
    background: var(--background-color);
  }

  .page__container__content__name {
    font-size: 1.7rem;
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 435px) {
  .card:last-child {
    margin-top: 1.3rem;
  }
}
</style>
