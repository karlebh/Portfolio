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
				<textarea name="" id="" cols="50" rows="10" placeholder="What do you have in mind?"></textarea>
			</div>

			<button type="submit">
				Send Email
			</button>
		</form>
	</div>
</template>

<style scoped>
	textarea {
		font-size: 1.4rem;
	}

	input {
		font-size: 1rem;
	}

	label {
		margin: .5rem 0;
		display: block;
	}

	textarea, input {
		color: rgba(29, 139, 82, 1);
		width: 30rem;
		margin: 0 0 1rem 0;
		outline: none;
		border-radius: 4px 18px;
		border: none;
		padding: 1rem;
	}

	textarea:focus, input:focus {
		border: .01rem rgba(29, 139, 82, 1) outset;
	}

	button {
		font-variant: small-caps;
		line-height: .3rem;
		letter-spacing: .1rem;
		padding: 1rem;
		font-weight: bold;
		outline: none;
		border-radius: 2px 8px;
		border: none;
		color: white;
		background-color: rgba(29, 139, 82, 1);
	}

	button:hover {
		color: rgba(29, 139, 82, 1);
		background-color: white;
		transition: .4s .5s ease;
	}

	::placeholder {
		color: green;
	}

	@media screen and (max-width: 960px) {

		input, textarea {
			width: 20rem;
		}

	}

	
</style>