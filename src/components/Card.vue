<template>
	<div class="container" id="projects">
		<a :href="theLink">
			<slot></slot>
			<slot class="slot-value" name="desciption"></slot>
		</a>
	</div>
</template>

<script>
	export default {
		props: ['link'],

		data() {
			return {
				theLink: this.link,
			}
		}
	}
</script>

<style scoped>
	.container {
		margin: 1rem;
		transition: .5s ease-in-out;
	}

	.container:hover {
		transform: scale(1.03);
}

	a {
		text-decoration: none;
		color: white;
		font-style: italic; 
	}
</style>

