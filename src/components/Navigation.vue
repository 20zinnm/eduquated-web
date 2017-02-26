<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">{{$route.name}}</h2>
    </md-toolbar>
    <md-sidenav class="main-sidebar md-left md-fixed" md-swipeable ref="main-sidebar">
      <md-toolbar class="md-small">


        <div class="md-toolbar-container">
          <h3 class="md-title">St. Mark's School of Texas</h3>
        </div>
      </md-toolbar>
      <md-card>
        <md-card-header>
          <md-avatar>
            <img src="https://vuematerial.github.io/assets/avatar-2.jpg" alt="Avatar">
          </md-avatar>
          <div class="md-title">Meyer Zinn</div>
          <div class="md-subhead">Student</div>
        </md-card-header>
        <md-card-actions>
          <md-button>Settings</md-button>
          <md-button>Log Out</md-button>
        </md-card-actions>
      </md-card>
      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item>
            <router-link exact to="/homework">Homework</router-link>
          </md-list-item>
          <md-list-item>
            <router-link exact to="/schedule">Schedule</router-link>
          </md-list-item>
        </md-list>
      </div>
      <!--<md-list>-->
      <!--<md-list-item>-->
      <!--<md-avatar>-->
      <!--<img src="https://placeimg.com/40/40/people/1" alt="People">-->
      <!--</md-avatar>-->

      <!--<div class="md-list-text-container">-->
      <!--<span>Meyer Zinn</span>-->
      <!--<span>9th Grade</span>-->
      <!--</div>-->
      <!--<md-button class="md-icon-button md-list-action">-->
      <!--<md-icon class="md-primary">settings</md-icon>-->
      <!--</md-button>-->
      <!--</md-list-item>-->
      <!--</md-list>-->
      <!--<p style="padding-left: 8px">-->
      <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>-->
    </md-sidenav>
  </div>
</template>
<script>
  export default {
    name: 'navigation',
    methods: {
      toggleSidenav () {
        this.$refs['main-sidebar'].toggle()
      },
      closeSidenav () {
        this.$refs['main-sidebar'].close()
      }
    },
    watch: {
      $route: function () {
        this.closeSidenav()
      }
    }

  }
</script>
<style lang="scss">
  $sizebar-size: 280px;

  .main-sidebar.md-sidenav {
    .md-sidenav-content {
      width: $sizebar-size;
      display: flex;
      flex-flow: column;
      overflow: hidden;
      @media (min-width: 1281px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
      }
    }
    .md-backdrop {
      @media (min-width: 1281px) {
        opacity: 0;
        pointer-events: none;
      }
    }
    .main-sidebar-links {
      overflow: auto;
      flex: 1;
      .md-inset .md-list-item-container {
        padding-left: 36px;
      }
      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
