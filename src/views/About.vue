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
        <h1 class="aboutme__title">About me</h1>
        <div class="aboutme__jakub">
          <img
            class="aboutme__jakub__img"
            src="../assets/handsome_devil_transtparent.png"
          />
          <div class="aboutme__jakub__summary">
            <h2 class="aboutme__jakub__summary__name">Jacob Lewandowski</h2>
            <p class="aboutme__jakub__summary__desc">
              Hi, I'm Jacob, a self-taught Full-Stack Software Engineer with a
              love for coding and all things nerdy. I'm passionate about diving
              deep into the world of programming, solving problems, and crafting
              simple, yet elegant solutions. Constantly on the lookout for new
              challenges, fueled by my hunger for knowledge. Whether it's
              unraveling complex algorithms or indulging in a bit of code
              simplicity, I'm always up for the adventure. So, let's embark on
              this journey together, armed with curiosity, my skill set, and a
              few dad jokes along the way!
            </p>
            <div class="aboutme__jakub__summary__citation">
              <h3 class="aboutme__jakub__summary__citation__text">
                "Little by little, one travels far."
              </h3>
              <p class="aboutme__jakub__summary__citation__author">
                ~ J.R.R. Tolkien
              </p>
            </div>
          </div>
        </div>
      </div>
      <Resume class="resume"/>
    </div>
  </div>
</template>

<style scoped>
.page__container {
  border: .1rem solid red;
}

.aboutme {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: .1rem solid yellow;
}

.aboutme__title {
  text-align: center;
}

.aboutme__jakub {
  display: flex;
  height: 70%;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  border: .1rem solid orange;
}

.aboutme__jakub__img {
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  margin-right: 2%;
}

.aboutme__jakub__summary {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 65%;
  height: auto;
}

.aboutme__jakub__summary__name {
  font-size: 2.5rem;
}

.aboutme__jakub__summary__desc {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--p-color);
}

.aboutme__jakub__summary__citation {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 1rem;
}

.resume {
  padding-bottom: 2rem;
}

@media screen and (max-width: 1024px) {
  .page__container {
    width: 100%;
  }

  .aboutme__jakub {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .aboutme__jakub {
    flex-direction: column;
  }
}
</style>
