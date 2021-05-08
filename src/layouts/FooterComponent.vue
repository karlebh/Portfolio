<template>
	<footer>
		<div>
			<h1>Caleb</h1>

			<p>&copy; <span id="date"></span> copyright all rights reserved<span ></span></p>

			<div class="links">
				<twitterSVG />
				<githubSVG />
				<facebookSVG />
				<linkedInSVG />
			</div>
		</div>
	</footer>
</template>

<script>
	import facebookSVG from '../components/facebookSVG'
	import githubSVG from '../components/githubSVG'
	import twitterSVG from '../components/twitterSVG'
	import linkedInSVG from '../components/linkedInSVG'
	
	export default {
		components: {
			twitterSVG,
			githubSVG,
			facebookSVG,
			linkedInSVG,
		}, 

		mounted() {
			let date = new Date()
			document.querySelector('#date').innerHTML = date.getFullYear()
		}
	}
</script>

<style scoped>
footer {
	display: flex;
	min-width: 100%;
	flex: 1;
	text-align: left;
	background: rgba(29, 139, 82, .7);
	padding: 2rem 5rem 5rem;
}

p {
	margin-top: 1rem;
}

.links {
	display: flex;
	margin-top: 2rem;
	color: white;
}

@media screen and (min-width: 700px) {
	div {
		margin: 0 30%;
	}
}

/* mobile */
/*@media screen and (max-width: 960px) {
	.links {
		margin-bottom: 4rem;
	}
}*/


</style>
