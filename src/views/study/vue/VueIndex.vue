<template>
  <v-layout row wrap fill-height>
    <v-flex xs12 md10 offset-md1>

      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in vueItems">
            <v-list-tile :key="index" avatar ripple @click="viewContent">
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
          {title: 'Vue 컨텐츠', subtitle: 'Vue v-model', createDate: '2019-01-24'},
          {title: 'Vue 컨텐츠', subtitle: 'Vue v-model', createDate: '2019-01-24'}
        ]
      }
    },

    methods: {
      viewContent() {
        alert('준비중..')
      }
    }
  }
</script>

<style scoped>

</style>
