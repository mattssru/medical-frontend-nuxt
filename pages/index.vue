<template lang="">
  <main>
    <div class="sdfsdf">sdf2222sdfsd</div>
  </main>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    layout: "default",
    head: {
      script: [
        {
          // type: 'module',
          body: true,
          src: '../assets/js/main.js',
          crossorigin: "anonymous"
        }
      ]
    },
};
</script>
<!-- <script src="https://unpkg.com/dev-widget@1.0.3/dist/card.component.mjs" type="module"></script> -->
<style scoped>
  main{
    padding-top: 110px;
    min-height: 210vh;
  }
</style>