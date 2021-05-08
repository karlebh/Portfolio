<template>
	<section>
		<Hero />
		<h1 style="text-align: center;">About</h1>
		<About />

		<h1 style="text-align: center;">Projects</h1>

		<div class="card">
			<card>
				<a class="" href="http://www.lara-blog-example.herokuapp.com" title="click link to go to project page">
					<h3>A social platform built with PHP/Laravel and Javascript/Vuejs</h3>
				</a>
			</card>

			<card>
				<a class="" href="http://www.lara-e-commerce-example.herokuapp.com" title="click link to go to project page">
					<h3>An E-commerce platform built with PHP/Laravel and Javascript/Vuejs</h3>
				</a>
			</card>

			<card>
				<a class="" href="" title="click link to go to project page">
					<h3>Loop Studios Front End Design</h3>
				</a>
			</card>

			<card>
				<a class="" href="" title="click link to go to project page">
					<h3>Room Front End Design</h3>
				</a>
			</card>


			<card>
				<a class="" href="" title="click link to go to project page">
					<h3>Crowd funding Front End Design</h3>
				</a>
			</card>
		</div>


		
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

<style scoped>
a {
	text-decoration: none;
	color: white;
	font-style: italic; 
}

.card {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
}
</style>