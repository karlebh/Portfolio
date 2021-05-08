<template>
	<div class="parent">
		<div>
			<div class="heroText">
				<h2>
				Hi! <br>
				I am Caleb Akeju
				</h2>

				<br>

				<h1>A fullstack web developer.</h1>
			</div>

			<div id="util">
				<a href="#contact">
					<button>
						CONTACT
					</button>
				</a>

				<div class="links">
					<twitterSVG />
					<githubSVG />
					<facebookSVG />
					<linkedInSVG />
				</div>

			</div>

		</div>

		<div class="image"></div>
	</div>
</template>

<script>
	import facebookSVG from './facebookSVG'
	import githubSVG from './githubSVG'
	import twitterSVG from './twitterSVG'
	import linkedInSVG from './linkedInSVG'
	
	export default {
		
		components: {
			facebookSVG,
			githubSVG,
			twitterSVG,
			linkedInSVG,
		}
	}
</script>

<style scoped>

	.links a {
		margin-right: 2rem;
	}
	
	a {
		text-decoration: none;
		color: inherit;
	}

	.parent {
		display: flex;
		justify-content: space-around;
		align-content: center;
		height: auto;
		margin: 5rem 0;
		text-align: left;
		overflow: hidden;
	}
	
	button {
		padding: 1rem 2rem;
		font-weight: bold;
		font-size: 1rem;
		border: none;
		background-color: #eee;
		color: rgba(29, 139, 82);
		border-radius: 2px 10px;
		letter-spacing: .05rem;
		margin: 4rem;
		outline: none;
		transition: 1s;
	}

	button:hover {
		color: #eee;
		background-color: rgba(29, 139, 82, .7);
	}

	h2 {
	}

	h1 {
		/*font-family: 'Verdana';*/
		position: relative;
		font-size: 2rem;
		color: rgba(29, 139, 82, .7); 
		animation: second_header 1.5s;
	}
	
	@keyframes second_header {
		from {bottom: -200px;}
		to {bottom: 0}
	}

	@-webkit-keyframes second_header {
		from {bottom: -200px;}
		to {bottom: 0}
	}
	@-o-keyframes second_header {
		from {bottom: -200px;}
		to {bottom: 0}
	}
	@-moz-keyframes second_header {
		from {bottom: -200px;}
		to {bottom: 0}
	}

	h2 {
		position: relative;
		animation: first_header 2s;
	}

	@keyframes first_header {
		from {left: -100px; }
		to { left: 0; }
	}

	@-webkit-keyframes first_header {
		from {left: -100px; }
		to { left: 0; }
	}
	@-o-keyframes first_header {
		from {left: -100px; }
		to { left: 0; }
	}
	@-moz-keyframes first_header {
		from {left: -100px; }
		to { left: 0; }
	}

	.image {
		position: relative;
		background: no-repeat url('~@/assets/karleb.png');
		width: 25rem;
		height: 25rem;
		transition: .5s ease-in;
		animation: image 1.5s;
		border-radius: .5rem 3rem;
		position: relative;
		left: 4rem;
		animation: image 1s;
	}

	.image:hover {
		transform: scale(1.05);
	}

	@keyframes image {
		from {right: -100px;}
		to {right: 0}
	}

	@-webkit-keyframes image {
		from {right: -100px;}
		to {right: 0}
	}
	@-o-keyframes image {
		from {right: -100px;}
		to {right: 0}
	}
	@-moz-keyframes image {
		from {right: -100px;}
		to {right: 0}
	}
	
	#util {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;

	}
	
	/* mobile */
	@media screen and (max-width: 960px) {
		.parent {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.heroText {
			margin-left: 3rem;
		}

		.links {
			margin-bottom: 4rem;
		}

		button {
			padding: 1rem 2rem;
		}


		.image {
			display: flex;
			position: relative;
			left: 3.8rem;

		}

		.child-1 {
			position: relative;
			left: -6.5rem;
		}
	}

</style>