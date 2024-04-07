<script></script>

<template>
  <div class="project">
    <div class="project__info">
      <img class="project__info__img" :src="{imgUrl}" />
      <h2 class="project__info__title">{{title}}</h2>
    </div>
    <div class="project__selection">
      <button class="project__selection__button">&lt;</button>
      <p class="project__selection__number">1</p>
      <button class="project__selection__button">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-radius: 0.3rem;
}

.project__info {
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: max-content;
  height: 100%;
  border: var(--project-image-border);
  border-radius: .3rem;
}

.project__info__img {
  width: 40rem;
  height: 23rem;
  border-bottom: none;
  border-radius: 0.3rem;
  cursor: pointer;
}

.project__info__selection {
  display: flex;
}

.project__info__title {
  position: absolute;
  bottom: .1rem;
  background-color: #00000094;
  width: 99.9%;
  border-radius: 0.3rem;
}

.project__selection {
  padding-top: .2rem;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project__selection__button {
  background-color: var(--project-selection-button-bg);
  margin: auto;
  padding: 0px;
  cursor: pointer;
  border: var(--project-image-border);
  width: 3rem;
  height: 2rem;
  border-radius: .3rem;
  font-size: 1.5rem;
  color: var(--project-selection-color);
}

.project__selection__button:hover {
  background-color: var(--project-selection-button-bg-active);
} 

.project__selection__button--active {
  background-color: var(--project-selection-button-bg);
}

.project__selection__number {
  text-align: center;
  font-size: 1rem;
  width: 4rem;
  padding: 0 1rem;
}
</style>
