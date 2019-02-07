<template>
  <v-layout align-center justify-start row wrap fill-height>
    <v-flex xs12 md12>
      <vue-simple-markdown
        style="text-align: left"
        :source="source"
        :heading="true"
        :strong="true"
        :lists="true"
        :horizontal-line="true"
        :inline-code="true"
        :blockquote="true"/>
    </v-flex>
    <v-flex xs10 offset-xs1 mt-5>
      <div>
        <p>그림 1 - vue-cli 이미지</p>
        <v-img :src="require('@/assets/vue/vue-cli.png')" aspect-ratio="1.8" contain style="border: 1px solid #6b6f75"></v-img>
      </div>
      <v-divider class="mt-5 mb-5"/>
      <div>
        <p>그림 2 - vue-cli 프로젝트 생성1</p>
        <v-img :src="require('@/assets/vue/vue-create.png')" aspect-ratio="1.8" contain style="border: 1px solid #6b6f75"></v-img>
      </div>
      <v-divider class="mt-5 mb-5"/>
      <div>
        <p>그림 3 - vue-cli 프로젝트 생성2</p>
        <v-img :src="require('@/assets/vue/vue-create2.png')" aspect-ratio="1.8" contain style="border: 1px solid #6b6f75"></v-img>
      </div>
      <v-divider class="mt-5 mb-5"/>
      <div>
        <p>그림 4 - vue-cli 프로젝트 생성결과 및 실행</p>
        <v-img :src="require('@/assets/vue/create-sucess.png')" aspect-ratio="1.8" contain style="border: 1px solid #6b6f75"></v-img>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    name: 'vue1',

    data() {
      return {
        source: '# Vue 시작하기 - 2019.02.07\n' +
        '## npm 및 vue-cli 설치\n' +
        '- https://nodejs.org/ko/  Node.js를 설치하고, Node.js의 패키지 매니저인 NPM(Node Packaged Manager)을 설치한다.(노드를 설치하면 내장이 되어있기 때문에 자동으로 설치)\n' +
        '- Vue.js를 사용할 때, vue-cli를 활용할 수 있다. 다음 명령으로 설치할 수 있다.(3.x 버전을 설치하려면 @vue/cli 이용)\n' +
        '```\n npm install -g vue-cli ```\n' +
        '- npm i 또는 npm install 은 패키지를 설치하는 명령어이며, 옵션을 줄 수 있는데 -g 는 글로벌 패키지로 설치하겠다는 거다. 글로벌 패키지로 설치하면 모든 프로젝트에서 해당 패키지를 사용할 수 있다. \n' +
        '- vue-cli는 Vue.js 프로젝트의 빠른 시작과 구현을 위해 빌드 설정이 포함된 프로젝트를 생성해준다.\n' +
        '- 3.x 기준으로, vue create [프로젝트명] 새로운 프로젝트 생성이 가능하다.(생성하면서, 몇가지 프리셋 설정이 가능하다.)' +
        '- 프로젝트 생성 후, cd [프로젝트명] 폴더로 이동 후 npm run serve 명령어로 프로젝트를 실행한다.\n' +
        '## 기타\n' +
        '- Vue 공식 사이트 : https://vuejs.org/ \n' +
        '- vue-cli 사이트 : https://cli.vuejs.org/'

      }
    }

  }
</script>

<style scoped>

</style>
