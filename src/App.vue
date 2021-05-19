<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './layouts/HeaderComponent'
import MainComponent from './layouts/MainComponent'
import FooterComponent from './layouts/FooterComponent'


export default 
{
  name: 'App',
  components: 
  {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  }
}
</script>

