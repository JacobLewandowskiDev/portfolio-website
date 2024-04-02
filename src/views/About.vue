<script>
import Navigation from "../components/Navigation.vue";
import Resume from "../components/Resume.vue";

export default {
  components: {
    Navigation,
    Resume,
  },
};
</script>

<template>
  <div class="page">
    <Navigation />
    <div class="page__container">
      <div class="aboutme">
        <h1 class="resume__title">About me</h1>
        <div class="resume__jakub">
          <img
            class="resume__jakub__img"
            src="../assets/handsome_devil_transtparent.png"
          />
          <div class="resume__jakub__summary">
            <h2 class="resume__jakub__summary__name">Jacob Lewandowski</h2>
            <p class="resume__jakub__summary__desc">
              Hi, I'm Jacob, a self-taught full-stack Software Engineer with a
              love for coding and all things nerdy. I'm passionate about diving
              deep into the world of programming, solving problems, and crafting
              simple, yet elegant solutions. Constantly on the lookout for new
              challenges, fueled by my hunger for knowledge. Whether it's
              unraveling complex algorithms or indulging in a bit of code
              simplicity, I'm always up for the adventure. So, let's embark on
              this journey together, armed with curiosity, my skill set, and a
              few dad jokes along the way!
            </p>
            <div class="resume__jakub__summary__citation">
              <h3 class="resume__jakub__summary__citation__text">
                "Little by little, one travels far."
              </h3>
              <p class="resume__jakub__summary__citation__author">
                ~ J.R.R. Tolkien
              </p>
            </div>
          </div>
        </div>
      </div>

      <Resume />
    </div>
  </div>
</template>

<style scoped>
.aboutme {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.resume__title {
  text-align: center;
}

.resume__jakub {
  display: flex;
  height: 70%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.resume__jakub__img {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin-right: 5%;
}

.resume__jakub__summary {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 65%;
  height: auto;
}

.resume__jakub__summary__name {
  font-size: 2.5rem;
}

.resume__jakub__summary__desc {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--p-color);
}

.resume__jakub__summary__citation {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
}
</style>
