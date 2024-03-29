<script>
import Skilltree from "./Skilltree.vue";
export default {
  components: {
    Skilltree,
  },
};
</script>

<template>
  <div class="resume">
    <div class="resume__jakub">
      <img
        class="resume__jakub__img"
        src="../assets/handsome_devil_transtparent.png"
      />
      <h2 class="resume__jakub__name">Jacob Lewandowski</h2>
    </div>
    <Skilltree />
    <div class="resume__history"></div>
  </div>
</template>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid yellow;
  width: 70%;
}

.resume__jakub {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.resume__jakub__img {
  display: inline;
  width: 12rem;
  height: 12rem;
  border: 4px solid rgb(255, 255, 255);
  border-radius: 50%;
  margin-right: 5%;
}

.resume__jakub__name {
  font-size: 2.5rem;
}

.resume__history {
  display: grid;
  grid-template-rows: 1fr 2fr;
  border: 2px solid greenyellow;
  margin-top: 2rem;
}
</style>
