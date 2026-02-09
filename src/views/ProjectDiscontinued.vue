<script></script>

<template>
  <div class="container">
    <h2>Thank you for your interest in the project.</h2>
    <br>
    <h3>The live version support of this project has been terminated in favour of another project.</h3>
    <br />
    <router-link class="backToMain" :to="{ name: 'Home' }" type="button"
      >Back to Main Page</router-link
    >
  </div>
</template>

<style scoped>
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
}

.container h3 {
  background-color: #72727242;
  padding: 0 .8rem;
  font-size: 1rem;
}

.backToMain {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--button-bg);
  color: var(--font-color);
  text-decoration: none;
  font: var(--button-font);
  font-weight: bold;
  width: 8rem;
  min-width: 4rem;
  height: 2rem;
  margin: 0 1rem;
  text-align: center;
  border: var(--button-border);
  border-radius: 0.3rem;
  transition: ease 0.2s;
}

.backToMain:hover {
  background: var(--button-bg-hover);
}

.backToMain:active {
  box-shadow: 0px 0px 0.8rem #37c6ff;
}
</style>
