<template>
	<div class="container" id="projects">
		<slot></slot>
	</div>
</template>

<style scoped>
	.container {
		background-image: url('~@/assets/crowd.png');
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		background-color: rgba(29, 139, 82, .7);
		color: white;
		margin: 2rem 2rem;
		padding: 3rem;
		width: 25rem;
		height: 20rem;
		text-align: center;
		border-radius: 2rem 4rem;
		transition: 1s;
		cursor: pointer;
		outline: none;
		border: 1px;
	}

	.container:hover {
		transform: scale(1.1);
		background-color: rgba(29, 139, 82, 1);
	}

	a {
		text-decoration: none;
		color: white;
		font-style: italic; 
	}
</style>

