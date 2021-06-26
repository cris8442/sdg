<template>
  <Menubar :model="items">
    <router-link v-bind:to="item.url">{{ item.label }}</router-link>
  </Menubar>
</template>

<script>
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

export default {
  name: "Menu",
  props: {},
  components: {
    Menubar,
  },
  data() {
    return {
      items: [
        {
          label: "Gènere Femení",
          icon: "pi pi-fw pi-chart-line",
          url: "/#/femeni",
        },
        {
          label: "Gènere Masculí",
          icon: "pi pi-fw pi-chart-line",
          url: "/#/masculi",
        },
        {
          label: "Tots",
          icon: "pi pi-fw pi-users",
          url: "/#/tots",
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
};

</script>