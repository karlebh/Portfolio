<template>
	<section>


		<Hero />
		<h1 style="text-align: center;">About</h1>
		<About />

		<h1 style="text-align: center;">Projects</h1>
		<Card />
		
		<h1 style="text-align: center;">Contact</h1>

		<Contact />


	</section>
</template>

<script>
	import Hero from '@/components/Hero.vue'
	import About from '@/components/About.vue'
	import Card from '@/components/Card.vue'
	import Contact from '@/components/Contact.vue'

	export default
	{
		components : 
		{
			Hero,
			About,
			Card,
			Contact,
		},
	}
</script>

<style>

</style>