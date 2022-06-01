<template>
  <router-view v-if="!logged" />
  <template v-else>
    <AppDashboard />
  </template>
</template>
<script>
import AppDashboard from "./views/AppDashboard.vue";
export default {
  name: "App",
  components: {
    AppDashboard,
  },
  data: () => ({
    logged: false,
  }),
};
</script>
<style lang="scss">
</style>
