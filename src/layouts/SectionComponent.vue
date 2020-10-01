<template>
	<section>

		<Hero></Hero>
		<About></About>
		<Card>
			Hello!
		</Card>

		<Contact class="contact"
		></Contact>

		<footer-component></footer-component>		

	</section>
</template>

<style>
	section 
	{
		margin: 0 0 3rem 0;
	}
</style>

<script>
	import Hero from '@/components/mobile/Hero.vue'
	import About from '@/components/mobile/About.vue'
	import Card from '@/components/mobile/Card.vue'
	import Contact from '@/components/mobile/Contact.vue'
	import FooterComponent from '@/layouts/FooterComponent.vue'

	export default
	{
		components : 
		{
			Hero,
			About,
			Card,
			Contact,
			FooterComponent,
		},
	}
</script>

<style>
	section {
		height: 100vh;
	}

	.contact {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0 5rem auto;
		/*width: 500px;*/
	}
</style>