<script>
export default {
  props: {
    role: {
      type: Object,
      required: true,
    },
    roleIndex: {
      type: Number,
      required: true,
    },
  },

  computed: {
    isEven() {
      return this.$props.roleIndex % 2 === 0;
    },

    formattedResponsibilities() {
      return this.role.responsibilities.replace(/\n/g, "<br><br>");
    },
  },
};
</script>

<template>
  <div class="job">
    <h4 class="job__info">
      {{ role.companyName }} | {{ role.jobTitle }} | {{ role.date }}
    </h4>
    <span v-if="isEven" class="job__point--right"></span>
    <span v-else class="job__point--left"></span>
  </div>
  <p class="description" v-html="formattedResponsibilities"></p>
</template>

<style scoped>
.job {
  font-family: Helvetica;
  position: relative;
  text-align: left;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--job-title-background);
  word-break: keep-all;
  border-bottom: 0.1rem solid var(--job-border-color);
}

.job__info {
  padding: 0.4rem;
  text-align: center;
}

.job__point--left,
.job__point--right {
  position: absolute;
  width: var(--job-point-diameter);
  height: var(--job-point-diameter);
  background-color: var(--job-point-color);
  box-shadow: 0px 0px 0.8rem #37c6ff;
  border-radius: 50%;
  bottom: -0.3rem;
}

.job__point--left {
  left: -0.35rem;
}

.job__point--right {
  right: -0.35rem;
}

.description {
  height: fit-content;
  padding: 0.4rem;
  line-height: 0.8rem;
}

@media screen and (max-width: 620px) {
  .job__point--left,
  .job__point--right {
    display: none;
  }
}
</style>
