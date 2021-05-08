<template>
	<div class="container" @click="toggleHambuger">
		<div class="bar1"></div>
		<div class="bar2"></div>
		<div class="bar3"></div>
	</div>
</template>

<script>
    export default {
      methods: {
          toggleHambuger() {
            document.querySelector('.container').classList.toggle("change");
          }
      }
    }
</script>

<style>

.container {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: rgba(29, 139, 82, 1);
  margin: 6px 0;
  transition: 0.4s ease-in-out;
}

/* Rotate first bar */
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
  transform: rotate(-45deg) translate(-9px, 6px) ;
  background-color: rgba(29, 139, 82, 1);
}

/* Fade out the second bar */
.change .bar2 {
  opacity: 0;
}

/* Rotate last bar */
.change .bar3 {
  background-color: white;
  -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>