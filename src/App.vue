<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SectionComponent></SectionComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './layouts/HeaderComponent'
import SectionComponent from './layouts/SectionComponent'
import FooterComponent from './layouts/FooterComponent'


export default 
{
  name: 'App',
  components: 
  {
    HeaderComponent,
    SectionComponent,
    FooterComponent,
  }
}
</script>

