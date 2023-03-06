<template>
  <div>
    <navmenu></navmenu>
    <businessCarousel></businessCarousel>
    <businessField></businessField>
    <moreServer></moreServer>
    <medicalPlatform></medicalPlatform>
    <institution></institution>
  </div>
</template>

<script>
  import navmenu from '@/components/navMenu/navmenu.vue'
  import businessCarousel from '@/components/business-carousel/business-carousel.vue'
  import businessField from '@/components/business-field/business-field.vue'
  import moreServer from '@/components/more-server/more-server.vue'
  import medicalPlatform from '@/components/medical-platform/medical-platform.vue'
  import institution from '@/components/institution/institution.vue'
  export default {
    components: {
      navmenu,
      businessCarousel,
      businessField,
      moreServer,
      medicalPlatform,
      institution
    }
  }
</script>

<style>


</style>
