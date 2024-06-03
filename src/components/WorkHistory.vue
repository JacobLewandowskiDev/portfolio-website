<script>
import ResumeHistory from "../data/resumeHistory.json";
import ResumeRole from "./ResumeRole.vue";

export default {
  components: {
    ResumeHistory,
    ResumeRole,
  },

  data() {
    return {
      career: ResumeHistory,
    };
  },
};
</script>

<template>
  <div class="history">
    <h2 class="history__title">Professional Experience</h2>
    <ul class="history__box">
      <li
        v-for="(role, index) in career"
        :key="index"
        class="history__box__role"
      >
        <ResumeRole :role="role" :roleIndex="index" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.history {
  margin-top: 1.5rem;
}

.history__title {
  border-bottom: 0.1rem solid #ffffff;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.history__box {
  position: relative;
  margin-top: 1rem;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.history__box__role {
  border-right: 0.1rem solid var(--job-border-color);
  width: 50%;
  margin-left: 0.08rem;
}

.history__box__role:nth-child(even) {
  margin-left: auto;
  border: none;
  border-left: 0.1rem solid var(--job-border-color);
}

@media screen and (max-width: 620px) {
  .history__box__role {
    border-right: none;
    width: 100%;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 620px) {
  .history__title {
    font-size: 1rem;
  }
  }

  .history__box__role:nth-child(even) {
    margin-left: 0;
    border-left: none;
  }
}
</style>
