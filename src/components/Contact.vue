<template>
	<div class="contact" id="contact">
		<form action="">
			<div>
				<label for="name">Name</label>
				<input type="text" name="name" placeholder="What is your name?" />
			</div>

			<div>
				<label for="email">Email</label>
				<input type="text" name="email" placeholder="Your e-mail?" required />
			</div>
			
			<div>
				<label for="content">Content</label>
				<textarea name="" id="" placeholder="What do you have in mind?" required></textarea>
			</div>

			<button type="submit">
				Send Email
			</button>
		</form>
	</div>
</template>

<style scoped>
	.contact {
		margin: 0 2rem 5rem;

	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: space-around;
		/*align-items: center;*/
	}

	form div {
		margin: 1rem 0;
	}

	label {
		display: block;
	}

	textarea,input {
		flex: 1;
		width: 100%;
		padding: .7rem;
		outline: none;
		border-radius: .4rem 1rem;
	}

	textarea:focus, input:focus {
		border: 2px solid rgba(29, 139, 82, .7);
	}

	input {
		height: 2rem;
	}

	textarea {
		height: 7rem;
	}

	button {
		width: 10rem;
		padding: .7rem 0;
		border-radius: .6rem 1.2rem;
		outline: none;
	}

	/*::placeholer {
		background-color: background: rgba(29, 139, 82, .7);
	}*/

	/* desktop */

	@media screen and (min-width: 800px) {

		.contact {
			margin: 0 10rem 5rem;

		}
	}

	@media screen and (min-width: 1100px) {

		.contact {
			margin: 0 20rem 5rem;

		}
	}

	
	
</style>