<script>
import projectInfo from "../data/projectInfo.json";
import denarius from "../assets/denarius-app.png";
import calculator from "../assets/calculator-app.png";
import chatroom from "../assets/chatroom-app.png";
import gwent from "../assets/gwent-app.png";
import prodTracker from "../assets/prodtracker-app.png";
import tripleSevenCapital from "../assets/tripleseven-app.png";

export default {
  data() {
    return {
      projects: projectInfo,
      currentProject: 0,
      isDetails: false,
    };
  },

  methods: {
    prevProject() {
      if (this.currentProject > 0) {
        this.currentProject--;
      }
    },

    nextProject() {
      if (this.currentProject < this.projects.length - 1) {
        this.currentProject++;
      }
    },

    toggleDetails() {
      this.isDetails = !this.isDetails;
    },

    // Image index pulled from projectInfo.json file. Make sure to make the index match with correct IMG url in assets.
    getImg(image) {
      switch (image) {
        case "0":
        return gwent;
        case "1":
          return tripleSevenCapital;
        case "2":
          return prodTracker;
        case "3":
          return chatroom;
        case "4":
          return denarius;
        case "5":
          return calculator;
      }
    },
  },
};
</script>

<template>
  <div class="project">
    <div class="project__info">
      <img
        class="project__info__img"
        :src="getImg(projects[currentProject].image)"
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
      <div class="details__info__div">
        <h2>{{ projects[currentProject].name }}</h2>
        <img
          class="details__info__div__mini"
          :src="getImg(projects[currentProject].image)"
        />

        <h3>Access the Project:</h3>
        <div class="details__info__div__links">
          <a
            v-if="projects[currentProject].github_url"
            class="details__info__div__links__link"
            :href="projects[currentProject].github_url"
            target="_blank"
          >
            GitHub Repo
          </a>
          <a
            class="details__info__div__links__link"
            :href="projects[currentProject].live_url"
            target="_blank"
          >
            Live Version</a
          >
        </div>
        <br />
        <h3>Project Tech Stack</h3>
        <ul class="details__info__div__techstack">
          <li v-for="tech in projects[currentProject].techstack">
            {{ tech.name }}
          </li>
        </ul>
        <br />
        <h3>Project Description</h3>
        <p class="details__info__div__description">
          {{ projects[currentProject].description }}
        </p>
        <br/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 58%;
  min-width: 30rem;
  border-radius: 0.3rem;
}

.project__info {
  position: relative;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border: var(--project-image-border);
  border-radius: 0.3rem;
}

.project__info__img {
  width: 100%;
  border-bottom: none;
  border-radius: 0.3rem;
  cursor: pointer;
}

.project__info__title {
  position: absolute;
  bottom: 0.05rem;
  background-color: #00000094;
  width: 100%;
  font-size: 1.2rem;
  word-break: keep-all;
  border-radius: 0.3rem;
}

.project__selection {
  padding-top: 0.5rem;
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
  min-width: 50px;
  height: 2rem;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  color: var(--project-selection-color);
  transition: ease 0.2s;
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
  min-height: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: #0a0a0a;
  padding-bottom: 0.3rem;
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
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
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
  width: 100%;
  height: 90vh;
  max-height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.5rem;
}

.details__info__div {
  width: 50%;
  margin: auto;
}

.details__info__div__mini {
  display: flex;
  width: 55%;
  min-width: 16rem;
  border: var(--project-image-border);
  border-radius: 0.4rem;
  margin: 0.5rem auto;
  opacity: 0.8;
}

.details__info__div__links {
  display: flex;
  justify-content: center;
  word-break: keep-all;
  margin: 0.25rem 0 1rem 0;
}

.details__info__div__links__link {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--button-bg);
  color: var(--font-color);
  text-decoration: none;
  font: var(--button-font);
  font-weight: bold;
  width: 6rem;
  min-width: 4rem;
  height: 2rem;
  margin: 0 1rem;
  text-align: center;
  border: var(--button-border);
  border-radius: 0.3rem;
  transition: ease 0.2s;
}

.details__info__div__techstack {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
}

.details__info__div__techstack li {
  background: var(--techstack-bg);
  border: var(--techstack-border);
  width: 5rem;
  min-width: 5rem;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.1rem;
  text-align: center;
  font-weight: bold;
  margin: 0.3rem;
}

.details__info__div__description {
  text-indent: 3rem;
  width: 75%;
  margin: auto;
}

.details__info__div__links__link:hover {
  background: var(--button-bg-hover);
}

.details__info__div__links__link:active {
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

@media screen and (max-width: 1024px) {
  .project {
    width: 80%;
    min-width: 10rem;
  }

  .project__info__title {
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 0.1rem;
    bottom: 0.05rem;
  }

  .details__info__div {
    width: 75%;
  }

  .details__close {
    right: 1rem;
  }
}

@media screen and (max-width: 770px) {
  .details__info__div {
    width: 95%;
  }
}

@media screen and (max-width: 470px) {
  h1 {
    font-size: 2rem;
    line-height: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  .details__info__div__mini {
    min-width: 12rem;
  }

  .details__info__div__techstack {
    width: 100%;
  }
}

@media screen and (max-width: 426px) {
  .project__info__title {
    font-size: 0.8rem;
    line-height: 0.8rem;
    bottom: 0;
    border-radius: 0;
  }

  .details__info__div__mini {
    min-width: initial;
    width: 100%;
  }

  .details__info__div__links__link {
    margin: 0 0.25rem;
  }
}
</style>
