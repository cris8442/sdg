<template>
  <div id="app">
    <head>
      <meta charset="utf-8" />
      <title>PrimeVue Demo</title>
      <link
        href="https://unpkg.com/primevue/resources/themes/saga-blue/theme.css"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/primevue/resources/primevue.min.css"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/primeicons/primeicons.css"
        rel="stylesheet"
      />
    </head>
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    Menu,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
