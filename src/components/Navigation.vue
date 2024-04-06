<script>
export default {
  computed: {
    notHomePage() {
      return this.$route.name !== 'Home';
    },

    isAboutPage() {
      return this.$route.name === 'About';
    },

    isPortfolioPage() {
      return this.$route.name === 'Portfolio';
    },

    isBlogPage() {
      return this.$route.name === 'Blog';
    }
  },

  data() {
    return {
      displayEmailOverlay: false,
    };
  },

  methods: {
    showEmailOverlay() {
      this.displayEmailOverlay = true;
    },
    hideEmailOverlay() {
      this.displayEmailOverlay = false;
    },
  },
};
</script>

<template>
  <div class="menu">
    <ul class="menu__media">
    <li class="menu__media__item" @click="showEmailOverlay">
      <span class="menu__media__item__link">
        <svg class="menu__media__item__link__icon" style="margin-left: 0.05rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
        </svg>
      </span>
    </li>

    <li class="menu__media__item">
      <a href="https://www.linkedin.com/in/jakub-lewandowski-011001" target="_blank" class="menu__media__item__link">
        <svg class="menu__media__item__link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
        </svg>
      </a>
    </li>

    <li class="menu__media__item">
      <a href="https://github.com/JacobLewandowskiDev" target="_blank" class="menu__media__item__link" style="width: 1.5rem">
        <svg class="menu__media__item__link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
      </a>
    </li>
  </ul>

  <ul class="menu__media" style="right: 0" v-if="notHomePage">
    <li class="menu__media__item">
      <router-link class="menu__media__item__link" :to="{ name: 'Home' }" type="button">
        <svg class="menu__media__item__link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
        </svg>
      </router-link>
    </li>

    <li class="menu__media__item" v-if="!isPortfolioPage">
      <router-link class="menu__media__item__link" :to="{ name: 'Portfolio' }" type="button">
        <svg class="menu__media__item__link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
        </svg>
      </router-link>
    </li>
    
    <li class="menu__media__item" v-if="!isBlogPage">
      <router-link class="menu__media__item__link" :to="{ name: 'Blog' }" type="button">
        <img class="menu__media__item__link__icon" style="width: 1rem; border-radius: 50%" src="../assets/blog-icon.svg"/>
      </router-link>
    </li>

    <li class="menu__media__item" v-if="!isAboutPage">
      <router-link class="menu__media__item__link" :to="{ name: 'About' }" type="button">
        <svg class="menu__media__item__link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
        </svg>
      </router-link>
    </li>
  </ul>
  </div>
  <div class="email--overlay" v-if="displayEmailOverlay" :class="{ 'email--overlay--show': displayEmailOverlay }">
    <span class="email--overlay__close" @click="hideEmailOverlay">X</span>
    <div class="email--overlay__content">
      <h1>Let's chat over email</h1>
      <br />
      <h2>jakublewandowskidev@gmail.com</h2>
    </div>
  </div>
</template>

<style scoped>
.menu {
  box-shadow: .3rem .6rem .9rem rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(.3rem);
  -webkit-backdrop-filter: blur(.2rem);
  background-color: var(--menu-background-color); 
  width: var(--menu-width);
  height: var(--menu-height); 
  position: fixed; 
  z-index: 10;
  top: 0;
  left: 0
}

.menu__media {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: inherit;
  list-style-type: none;
  z-index: 10;
}

.menu__media__item {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 0.7rem;
  background-color: var(--menu-icon-background-color);
  border: var(--menu-icon-border);
  border-radius: 50%;
  cursor: pointer;
  fill: var(--menu-icon-fill-color);
  transition: linear 0.1s;
}

.menu__media__item__link {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  fill: inherit;
  margin: auto;
  width: 1.4rem;
  padding: 0.2rem;
}

.menu__media__item:hover {
  background-color: var(--menu-icon-background-color);
  border: var(--menu-icon-border-hover);
  fill: var(--menu-icon-fill-color-hover);
  box-shadow: 0px 0px .8rem rgba(255, 255, 255, 0.4);
}

.menu__media__item:active {
  border: var(--menu-icon-border-active);
  background-color: var(--menu-icon-background-color);
  box-shadow: 0px 0px .8rem #37c6ff;
  fill: var(--menu-icon-fill-color-active);
}

.email--overlay {
  display: none;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: var(--background-color);
  z-index: 100;
  animation: "hideEmail 0.2s linear forwards";
}

.email--overlay__content {
  width: 75%;
}

.email--overlay--show {
  display: flex;
  opacity: 1;
  animation: showEmail 0.2s linear forwards;
}

.email--overlay__close {
  color: var(--card-link-text-color);
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-weight: bold;
  font-size: 1.6rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.05s linear;
  border: var(--menu-icon-border);
  border-radius: 50%;
}

.email--overlay__close:hover {
  color: var(--card-link-text-color-hover);
  border: var(--menu-icon-border-hover);
}

.email--overlay__close:active {
  color: #37c6ff;
  border: .1rem solid var(--menu-icon-border-active);
  box-shadow: 0px 0px .8rem #37c6ff;
}

@keyframes showEmail {
  0% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}
</style>
