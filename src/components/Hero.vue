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
				<a href="mailto:akejucaleb@gmail.com">
					<button>
						CONTACT
					</button>
				</a>

				<div class="links">
					<links />
				</div>

			</div>

		</div>

		<div class="image"></div>
	</div>
</template>

<script>
	import Links from './Links'
	
	export default {
		components: {
			Links,
		},
	}
</script>

<style scoped>
	
	.links {
		display: inline-block;
		text-align: center;
		margin-left: 3rem;
	}

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

	h1 {
		/*font-family: 'Verdana';*/
		position: relative;
		font-size: 2rem;
		color: rgba(29, 139, 82, .7); 
		animation: second_header 1.5s;
	}

	h2 {
		position: relative;
		animation: first_header 2s;
	}


	.image {
		position: relative;
		background: no-repeat url('~@/assets/karleb.png');
		width: 25rem;
		height: 25rem;
		transition: .5s ease-in;
		animation: image 1.5s;
		border-radius: .5rem 3rem;
		left: 4rem;
		animation: image 1.4s;
	}

	.image:hover {
		transform: scale(1.05);
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

		.links {
			margin-bottom: 5rem;
		}

		.heroText {
			margin-left: 3rem;
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