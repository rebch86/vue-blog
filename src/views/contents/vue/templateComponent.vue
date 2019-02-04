<template>
  <vue-simple-markdown :source="source" :heading="true" :strong="true" :lists="true" :horizontal-line="true" :inline-code="true" :blockquote="true"></vue-simple-markdown>
</template>

<script>
  export default {
    name: 'templateComponent',

    data() {
      return {
        source: '# Contents Title \n' +
        ''
      }
    }

  }
</script>

<style scoped>

</style>
