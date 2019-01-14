<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="#3a3e44">
        <v-toolbar-side-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Title</v-toolbar-title>
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
    </v-app>
  </div>
</template>

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
