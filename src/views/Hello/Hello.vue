<template>
  <div class="hello">
    <navmenu></navmenu>
    <aboutxhc></aboutxhc>
  </div>
</template>

<script>
  import navmenu from '@/components/navMenu/navmenu.vue'
  import aboutxhc from '@/components/aboutxhc/aboutxhc.vue'
  export default {
    components: {
      navmenu,
      aboutxhc
    },
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>

</style>
