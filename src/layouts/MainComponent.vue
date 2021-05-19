<template>
	<main>
		<Hero />
		<h1 style="text-align: center;">About</h1>

		<About />

		<h1 style="text-align: center;">Projects</h1>

		<projects />
	
		<br><br><br>

	</main>
</template>

<script>
	import Hero from '@/components/Hero.vue'
	import About from '@/components/About.vue'
	import Projects from '@/components/Projects.vue'

	export default
	{
		components : 
		{
			Hero,
			About,
			Projects,
		},
	}
</script>

<style scoped>

img {
	width: 200px;
	height: 200px;
	border-radius: 15px 25px;
}

@media and screen (min-width: 1024px) {
	img {
		width: 320px;
		height: 320px;
	}
}

a {
	text-decoration: none;
	color: white;
	font-style: italic; 
}

.card {
	display: inline-block;	
	text-align: center;
}
</style>
