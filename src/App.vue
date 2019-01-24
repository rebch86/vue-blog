<template>
  <div id="app">
    <v-app>

      <v-navigation-drawer v-model="drawer" fixed dark app clipped width="220" mobile-break-point="550" class="custom-background">
        <v-list dense>
          <template v-for="(item, index) in items">
            <v-list-tile :key="item.title" :to="item.path" ripple active-class="default-class">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider dark :key="index"/>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar dark dense app fixed clipped-left class="custom-toolbar">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text" @click="$router.push({path: '/'})" style="cursor: pointer">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <div id="nav">
        <router-link to="/">Home</router-link>
      </div>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
      <v-footer class="custom-toolbar pa-4" dark>
        <v-spacer></v-spacer>
        <div>&copy; 2019.01 Created By rebch86.(Made of vue / vuetify)</div>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
  export default {
    mounted() {
    },
    data() {
      return {
        title: "rebch86's Blog",
        drawer: false,
        items: [
          {title: '처음으로', icon: 'dashboard', path: '/'},
          {title: 'About', icon: 'account_box', path: '/about'},
          {title: 'Vue', icon: 'library_books', path: '/study/vue'},
          {title: 'JavaScript', icon: 'library_books', path: '/study/js'},
          {title: 'NodeJS', icon: 'library_books', path: '/study/node'}
        ]
      }
    },
    methods: {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

  .custom-toolbar {
    background: linear-gradient(90deg, rgba(58,58,68,1) 0%, rgba(71,71,110,1) 35%, rgba(0,5,60,1) 100%) !important;
  }

  .custom-background {
    background: #47476e !important;
  }

</style>
