<template>
	<footer>
		<div>
			<h1>Caleb</h1>

			<p>&copy; <span id="date"></span> copyright all rights reserved<span ></span></p>

			<div class="links">
				<links />
			</div>
		</div>
	</footer>
</template>

<script>
	import Links from '@/components/Links'
	
	export default {
		components: {
			Links,
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
	color: rgba(29, 139, 82, .7);
	background-color: #dcdcdc;
	padding: 2rem 5rem 5rem;
}

p {
	margin-top: 1rem;
	font-size: 1.3rem;
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
</style>
