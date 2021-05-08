<template>
	<!-- eslint-disable -->
	<div id="contact" class="contact">
		<form @submit.prevent="sendEmail">
			<div>
				<label>Name</label>
				<input  type="text"  v-model="name" name="name" placeholder="Your Name">
			</div>

			<div>
				<label>Email</label>
				<input  type="email"  v-model="email" name="email" placeholder="Your Email">
			</div>
			<div>
				<label>Message</label>
				<textarea  name="message" v-model="message" cols="30" rows="5" placeholder="Message" >
			</textarea>
		</div>

		<button type="submit"> Send </button>
	</form>
</div>
</template>

<script>
	export default {
		name: 'ContactUs',
		data() {
			return {
				name: '',
				email: '',
				message: ''
			}
		},
		methods: {
			sendEmail() {
				// window.open(`mailto:${this.email}?body${this.message}`)
			},
		}
	}
</script>

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