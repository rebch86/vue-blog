<template>
  <div id="app">
    <v-app>
      <v-toolbar dark dense color="#3a3e44">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
      </div>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
      <v-footer class="pa-4" dark color="#3a3e44">
        <v-spacer></v-spacer>
        <div>&copy; 2019.01 Created By rebch86.(Made of vue / vuetify)</div>
      </v-footer>

      <v-navigation-drawer v-model="drawer" absolute dark temporary width="230" class="grey darken-4">
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" @click="clickMenu">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

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
          {title: '처음으로', icon: 'dashboard'},
          {title: 'About', icon: 'account_box'}
        ]
      }
    },
    methods: {
      clickMenu() {
        alert('준비중')
      }
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
</style>
