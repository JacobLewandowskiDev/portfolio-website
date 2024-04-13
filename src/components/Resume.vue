<script>
import Skilltree from "./Skilltree.vue";
import WorkHistory from "./WorkHistory.vue";

export default {
  components: {
    Skilltree,
    WorkHistory,
  },
};
</script>

<template>
  <div class="resume">
    <Skilltree class="resume__skills" />
    <WorkHistory class="resume__history" />
  </div>
</template>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
}

.resume__skills {
  margin-top: 1rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.resume__history {
  margin-top: 3rem;
  width: 90%;
}
</style>
