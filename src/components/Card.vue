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
  width: 300px;
  height: 350px;
  margin: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  padding: 20px;
}
</style>
