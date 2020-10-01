<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SectionComponent></SectionComponent>
  </div>
</template>

<script>
import HeaderComponent from './layouts/HeaderComponent'
import SectionComponent from './layouts/SectionComponent'


export default 
{
  name: 'App',
  components: 
  {
    HeaderComponent,
    SectionComponent,
  }
}
</script>

<style>

</style>
