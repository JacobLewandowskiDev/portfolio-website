<script>
import SkillList from "../data/skills.json";

export default {
  data() {
    return {
      skills: [],
    };
  },

  mounted() {
    this.skills = SkillList;
  },
};
</script>

<template>
  <div class="skilltree">
    <h2 class="skilltree__title">Areas Of Expertise & Skills</h2>
    <ul class="skilltree__list">
      <li class="skilltree__list__skill" v-for="skill in skills" :key="skill.name">
        <svg class="skilltree__list__skill__icon" v-html="skill.icon"></svg>
        <p class="skilltree__list__skill__name">{{ skill.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.skilltree__title {
  border-bottom: 0.1rem solid #ffffff;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.skilltree__list {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding-top: 1rem;
}

.skilltree__list__skill {
  width: 6rem;
  height: 6rem;
  min-width: 0.5rem;
  min-height: 0.5rem;
  transition: all 0.2s ease;
  display: grid;
  grid-template-rows: 3fr 1fr;
  justify-items: center;
  align-items: center;
}

.skilltree__list__skill__icon {
  fill: var(--skilltree-icon-color);
  width: 60%;
  height: 60%;
  transition: linear .2s ease;
}

.skilltree__list__skill__name {
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--skilltree-skill-color);
}
</style>
