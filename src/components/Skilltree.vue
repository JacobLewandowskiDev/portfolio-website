<script>
import SkillList from '../data/skills.json';

export default {
    data() {
        return {
        skills: []
        };
    },

    mounted() {
        this.skills = SkillList;
    }
}
</script>

<template>
  <h2 class="skilltree--title">Areas Of Expertise & Skills</h2>
  <ul class="skilltree">
    <li class="skilltree__skill" v-for="skill in skills" :key="skill.name">
        <svg class='skilltree__skill__icon' v-html="skill.icon"></svg>
        <p class="skilltree__skill__name">{{ skill.name }}</p>
    </li>
  </ul>
</template>

<style scoped>
.skilltree--title {
    border-bottom: 3px solid #ffffff;
    width: 90%;
    margin: 0 auto;
}

.skilltree {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 2px solid orange;
}

.skilltree__skill {
    border: 2px solid aqua;
    width: 6rem;
    height: 6rem;
    min-width: 45px;
    min-height: 45px;
    transition: all .2s ease;
    display: grid;
    grid-template-rows: 3fr 1fr;
}

.skilltree__skill__icon {
    fill: var(--skilltree-skill-color);
    width: 80%;
    height: 80%;
    margin: auto;
}

.skilltree__skill__name {
    height: 40%;
    widows: 100%;
    font-weight: bold;
    color: var(--skilltree-skill-color);
}
</style>
