<template>
  <v-layout row wrap fill-height>
    <v-flex xs12 md10 offset-md1>

      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in vueItems">
            <v-list-tile :key="index" avatar ripple @click="viewContent(item.path)">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.createDate }}</v-list-tile-action-text>
              </v-list-tile-action>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < vueItems.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'VueIndex',

    data() {
      return {
        vueItems: [
          {title: '1. Vue 소개', subtitle: 'Vue JS에 대한 간략한 소개', createDate: '2019-02-04', path: '/contents/vue-1'},
          {title: '2. Vue 시작하기', subtitle: 'Vue JS 설치 및 시작', createDate: '2019-02-07', path: '/contents/vue-2'}
        ]
      }
    },

    methods: {
      viewContent(path) {
        this.$router.push({
          path: path
        })
      }
    }
  }
</script>

<style scoped>

</style>
