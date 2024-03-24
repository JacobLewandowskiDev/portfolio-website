<script>
export default {};
</script>

<template>
  <div class="card">
    <img src="" />
    <p>Description</p>
    <router-link to="{{ link }}" type="button">About</router-link>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 350px;
  margin: 25px 40px;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: var(--card-border-color);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
}



</style>
