<template>
	<div class="container" id="projects">
		<div class="card">
			<slot></slot>
		</div>

		<div class="card">
			<slot></slot>
		</div>

		<div class="card">
			<slot></slot>
		</div>

		<div class="card">
			<slot></slot>
		</div>

		<div class="card">
			<slot></slot>
		</div>
		
		<div class="card">
			<slot></slot>
		</div>
		
		<div class="card">
			<slot></slot>
		</div>
		
	</div>
</template>

<style>
	.container {
		display: flex;
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
</style>

