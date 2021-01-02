<template>
	<div class="container" id="projects">


		<a class="" href="http://www.lara-blog-example.herokuapp.com" title="click link to go to project page">
			<button class="card">
				<h3>A social platform built with PHP/Laravel and Javascript/Vuejs</h3>
			</button>
		</a>

		<a class="" href="#" title="click link to go to project page">
			<button class="card">
				<h3>A single page application built with PHP/Laravel and Javascript/Vuejs</h3>
			</button>
		</a>

		

	</div>
</template>

<style scoped>
	.container {
		display: flex;
		/*flex-direction: row;*/
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.card {
		background-color: rgba(29, 139, 82, .7);
		color: white;
		margin: 2rem 2rem;
		padding: 3rem;
		width: 15rem;
		height: 15rem;
		text-align: center;
		border-radius: 2rem 4rem;
		transition: 1s;
	}

	.card:hover {
		transform: scale(1.1);
		background-color: rgba(29, 139, 82, 1);
	}

	a {
		text-decoration: none;
		color: white;
		font-style: italic; 
	}

	button, button:hover, button:active {
		cursor: pointer;
		outline: none;
		border: 1px;
	}
</style>

