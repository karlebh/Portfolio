<template>
	<main>
		<Hero />
		<h1 style="text-align: center;">About</h1>
		<About />

		<h1 style="text-align: center;">Projects</h1>

		<div class="card">
			<card link="http://www.lara-blog-example.herokuapp.com">
				<template v-slot:default>
					<img src="@/assets/forum.png" alt="Forum Website" />
				</template>
				<template v-slot:desciption>
					<a style="text-align: center;" href="http://www.lara-blog-example.herokuapp.com" title="click link to go to project page">
						<h3>A social media platform</h3>
					</a>
				</template>
			</card>

			<card link="http://www.lara-e-commerce.herokuapp.com">
				<template v-slot:default>
					<img src="@/assets/e-commerce.png" alt="E-commerce Website" />
				</template>
				<template v-slot:desciption>
					<a style="text-align: center;" href="http://www.lara-e-commerce.herokuapp.com" title="click link to go to project page">
						<h3>An e-commerce Platform</h3>
					</a>
				</template>
			</card>

			<card link="https://www.crowd-funding-rho.vercel.app">
				<template v-slot:default>
					<img src="@/assets/crowd.png" alt="" />
				</template>
				<template v-slot:desciption>
					<a style="text-align: center;" href="https://www.crowd-funding-rho.vercel.app" title="click link to go to project page">
						<h3>Crowd Funding,  A Front-end only.</h3>
					</a>
				</template>
			</card>

			<card link="https://www.loop-studio-slime.vercel.app">
				<template v-slot:default>
					<img src="@/assets/loop-studio.png" alt="Loop studio" />
				</template>
				<template v-slot:desciption>
					<a style="text-align: center;" href="https://www.loop-studio-slime.vercel.app" title="click link to go to project page">
						<h3>Loop Studios landing page</h3>
					</a>
				</template>
			</card>

			<card link="https://www.room-karlebh.vercel.app">
				<template v-slot:default>
					<img src="@/assets/room.png" alt="" />
				</template>
				<template v-slot:desciption>
					<a style="text-align: center;" href="https://www.room-karlebh.vercel.app" title="click link to go to project page">
						<h3>Room marketing page</h3>
					</a>
				</template>
			</card>

		</div>


		<br><br><br>
		<h1 style="text-align: center;">Contact</h1>

		<Contact />


	</main>
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
