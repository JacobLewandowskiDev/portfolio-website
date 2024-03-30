<script>
import Skilltree from "./Skilltree.vue";
export default {
  components: {
    Skilltree,
  },
};
</script>

<template>
  <h1>About me</h1>
  <div class="resume">
    <div class="resume__jakub">
      <img
        class="resume__jakub__img"
        src="../assets/handsome_devil_transtparent.png"
      />
      <div class="resume__jakub__summary">
        <h2 class="resume__jakub__summary__name">Jacob Lewandowski</h2>
        <p class="resume__jakub__summary__desc">
          Hi, I'm Jacob, a self-taught full-stack Software Engineer with a love
          for coding and all things nerdy. I'm passionate about diving deep into
          the world of programming, solving problems, and crafting simple, yet
          elegant solutions. Constantly on the lookout for new challenges,
          fueled by my hunger for knowledge. Whether it's unraveling complex
          algorithms or indulging in a bit of code simplicity, I'm always up for
          the adventure. So, let's embark on this journey together, armed with
          curiosity, my skill set, and a few dad jokes along the way!
        </p>
      </div>
    </div>
    <Skilltree />
    <div class="resume__history">
    
    </div>
  </div>
</template>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.resume__jakub {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.resume__jakub__img {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin-right: 5%;
}

.resume__jakub__summary {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 65%;
}

.resume__jakub__summary__name {
  font-size: 2.5rem;
}

.resume__jakub__summary__desc {
  font-size: 0.8rem;
  line-height: 1.3;
}
</style>
