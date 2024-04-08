<script>
import Projects from "../data/projectInfo.json";

export default {
  data() {
    return {
      projects: Projects,
      currentProject: 0,
      isDetails: false,
    };
  },

  methods: {
    prevProject() {
      console.log("prev button clicked");
      if (this.currentProject > 0) {
        this.currentProject--;
      }
    },

    nextProject() {
      console.log("next button clicked");
      if (this.currentProject < this.projects.length - 1) {
        this.currentProject++;
      }
    },

    toggleDetails() {
      this.isDetails = !this.isDetails;
    },
  },
};
</script>

<template>
  <div class="project">
    <div class="project__info">
      <img
        class="project__info__img"
        :src="projects[currentProject].imgUrl"
        @click="toggleDetails"
      />
      <h2 class="project__info__title">{{ projects[currentProject].name }}</h2>
    </div>
    <div class="project__selection">
      <button
        class="project__selection__button"
        :class="{
          'project__selection__button--inactive': currentProject === 0,
        }"
        :disabled="currentProject === 0"
        @click="prevProject"
      >
        &lt;
      </button>
      <p class="project__selection__number">{{ currentProject + 1 }}</p>
      <button
        class="project__selection__button"
        :class="{
          'project__selection__button--inactive':
            currentProject === projects.length - 1,
        }"
        :disabled="currentProject === projects.length - 1"
        @click="nextProject"
      >
        &gt;
      </button>
    </div>
  </div>
  <div class="details" :class="{ 'details--active': isDetails }">
    <div class="details__close" @click="toggleDetails">X</div>
    <div class="details__info">
      <h2>{{ projects[currentProject].name }}</h2>
      <br />
      <div class="details__info__links">
        <a
          class="details__info__links__link"
          :href="projects[currentProject].github_url"
          target="_blank"
        >
          GitHub Repo</a
        >
        <a
          class="details__info__links__link"
          :href="projects[currentProject].live_url"
          target="_blank"
        >
          Live Version</a
        >
      </div>
      <br />
      <h3>Project Tech Stack</h3>
      <div class="details__info__techstack">

      </div>
      <br />
      <h3>Project Description</h3>
      <p class="details__info__description">{{ projects[currentProject].description }}</p>
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
  border-radius: 0.3rem;
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
  bottom: 0.1rem;
  background-color: #00000094;
  width: 99.9%;
  border-radius: 0.3rem;
}

.project__selection {
  padding-top: 0.2rem;
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
  border-radius: 0.3rem;
  font-size: 1.5rem;
  color: var(--project-selection-color);
}

.project__selection__button:hover:not(.project__selection__button--inactive) {
  background-color: var(--project-selection-button-bg-hover);
}

.project__selection__button:active:not(.project__selection__button--inactive) {
  background-color: var(--project-selection-button-bg-active);
  color: var(--project-selection-button-color-active);
  box-shadow: 0px 0px 0.8rem #37c6ff;
}

.project__selection__button--inactive {
  background-color: var(--project-selection-button-bg-inactive);
  color: var(--project-selection-button-color-inactive);
  cursor: default;
}

.project__selection__number {
  text-align: center;
  font-size: 1rem;
  width: 4rem;
  padding: 0 1rem;
}

.details {
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: -8vh;
  z-index: 10;
  background: #0a0a0a;
}

.details--active {
  display: flex;
}

.details__close {
  color: var(--card-link-text-color);
  text-align: center;
  position: absolute;
  top: 2vh;
  right: 3rem;
  font-weight: bold;
  font-size: 1.6rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.05s linear;
  border: var(--menu-icon-border);
  border-radius: 50%;
}

.details__close:hover {
  color: var(--card-link-text-color-hover);
  border: var(--menu-icon-border-hover);
}

.details__close:active {
  color: #37c6ff;
  border: 0.1rem solid var(--menu-icon-border-active);
  box-shadow: 0px 0px 0.8rem #37c6ff;
}

.details__info {
  width: 50%;
  height: 90vh;
  max-height: 90vh;
  overflow: auto;
  padding: 0.5rem;
}

.details__info__links {
  display: flex;
  justify-content: center;
  word-break: keep-all;
}

.details__info__links__link {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--button-bg);
  color: var(--font-color);
  text-decoration: none;
  font: var(--button-font);
  font-weight: bold;
  width: 6rem;
  height: 3rem;
  margin: 0 2rem;
  text-align: center;
  border: var(--button-border);
  border-radius: 0.3rem;
}

.details__info__links__link:hover {
  background: var(--button-bg-hover);
}

.details__info__links__link:active {
  box-shadow: 0px 0px 0.8rem #37c6ff;
}

::-webkit-scrollbar {
  width: 0.2rem;
}

::-webkit-scrollbar-track {
  background: #4e4e4e;
}

::-webkit-scrollbar-thumb {
  background: #37c6ff;
}

::-webkit-scrollbar-thumb:hover {
  background: #37c6ff;
}
</style>
