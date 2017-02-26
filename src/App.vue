<template>
  <div id="app" class="container">
    <navigation></navigation>
    <transition name="md-router" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  //  import RouterLink from 'vue-router';
  import Navigation from 'components/Navigation.vue'

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">
  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
    background-color: #fff;
  }
</style>
