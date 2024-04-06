<script></script>

<template>
  <div class="project">
    <div class="project__info">
      <img class="project__info__img" src="../assets/gwent-app.png" />
      <h2 class="project__info__selection__title">Title</h2>
      <div class="project__info__selection">
        <button class="project__info__selection__button">&#8592;</button>
        <button class="project__info__selection__button">&#8594;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
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
}

.project__info__img {
  width: 40rem;
  height: 23rem;
  border: var(--project-image-border);
  border-radius: 0.3rem;
  cursor: pointer;
}

.project__info__selection {
  display: flex;
}

.project__info__selection__title {
  position: absolute;
  bottom: 1rem;
  background-color: aqua;
  width: 100%;
  border-radius: .3rem;
}

.project__info__selection__button {
  margin: auto;
  padding: 0px;
  line-height: 1rem;
  cursor: pointer;
  border: 0.1rem solid yellow;
  width: 4rem;
  font-size: 2rem;
}
</style>
