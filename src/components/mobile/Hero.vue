<template>
	<div class="parent">
		<div>
			<h2 class="child-1">
			Hi! <br>
			I am Caleb Akeju
			</h2>

			<h1>A fullstack web developer.</h1>
			
			<button>CONTACT</button>

			<p>Social Media Links</p>
		</div>

		<div class="image">

		</div>
	</div>
</template>

<style scoped>

	button {
		padding: .5rem 1rem;
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

	.parent {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin: 3rem 0;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: left;
	}

	.parent > div {
		/*margin: 0 0 10% 10%;*/
		display: flex;
		flex-direction: column;
		
		margin: 3rem 0 0;
	}

/*	.child-1 {
		padding: 0 1rem;
	}*/

	h1 {
		position: relative;
		font-size: 2rem;
		
		color: rgba(29, 139, 82, .7); 
		animation: second_header 4s;
	}
	
	@keyframes second_header {
		from {bottom: -200px;}
		to {bottom: 0}
	}

	h2 {
		position: relative;
		animation: first_header 7s;
	}

	@keyframes first_header {
		from {left: -100px; }
		to { left: 0; }
	}

	.image {
		position: relative;
		background: no-repeat url('~@/assets/hey.png');
		width: 25rem;
		height: 25rem;
		transition: .5s ease-in;
		animation: image 1.5s;
		border-radius: .5rem 3rem;
	}

	.image:hover {
		transform: scale(1.05);
	}

	@keyframes image {
		from {right: -100px;}
		to {right: 0}
	}
	
	/* mobile */
	@media screen and (max-width: 960px) {
		.parent {
			flex-direction: column;
			justify-content: center;
			align-items: center;

		}

		.parent div {
			justify-content: center;
			align-items: center;
		}

		.child-1 {
			position: relative;
			left: -6.5rem;
		}

		.image {
			margin: 7rem auto;
		}

		button {
			padding: .5rem;
			width: 6rem;
		}
	}
	
	/* desktop */
	@media screen and (min-width: 960px) {
		.parent > div {
			justify-content: center;
			align-items: center;
		}

		h1 {
			left: 3.12rem;
		}
	}

</style>