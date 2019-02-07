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
        <p>그림 1 - MVVM 패턴</p>
        <v-img :src="require('@/assets/vue/mvvm.png')" aspect-ratio="1.8" contain style="border: 1px solid #6b6f75"></v-img>
      </div>
      <v-divider class="mt-5 mb-5"/>
      <div>
        <p>그림 2 - MVVM 패턴</p>
        <v-img :src="require('@/assets/vue/mvvm2.png')" aspect-ratio="1.8" contain style="border: 1px solid #6b6f75"></v-img>
      </div>
      <v-divider class="mt-5 mb-5"/>
      <div>
        <p>그림 3 - Vue Component</p>
        <v-img :src="require('@/assets/vue/vue-component-structure.png')" aspect-ratio="1.8" contain style="border: 1px solid #6b6f75"></v-img>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    name: 'vue1',

    data() {
      return {
        source: '# Vue 개요 - 2019.02.04\n' +
        '## Vue 란?\n' +
        '- Evan You(에번 유)가 만들었으며, 2014년 릴리즈를 시작으로 꾸준히 발전하고 있는 자바스크립트 프레임워크(JS 프레임워크)\n' +
        '- 프레임워크란? 뼈대를 의미한다. 뼈대가 갖추어져 있기 때문에, 개발자는 원하는 기능구현에만 집중하여 빠르게 개발이 가능하다.\n' +
        '- Vue JS 는 React / Angular 와 같이 가상DOM(Virtual DOM)을 사용한다.\n' +
        '## Vue 특징\n' +
        '- 가상DOM 사용\n' +
        '- MVVM패턴 사용(그림1, 2 참조)\n' +
        '- 템플릿 : HTML 템플릿을 그대로 활용(별도로 학습할 이유가 없음)\n' +
        '- 컴포넌트 기반 개발 : 웹 애플리케이션의 구성요소(HTML, CSS, JS)를 컴포넌트로 관리 + 컴포넌트로 관리하기 때문에, 재사용성 및 확장성에 유리함\n' +
        '## 기타\n' +
        '- Vue 공식 사이트 : https://vuejs.org/'

      }
    }

  }
</script>

<style scoped>

</style>
