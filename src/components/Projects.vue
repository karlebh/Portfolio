<template>
	<div class="container" id="projects">
		<div>
			<a href="">
				<div class="projects" id="project-1"></div>
			</a>
			<p>Crowd funding - A Front End Mentor Challenge</p>
		</div>

		<div>
			<a href="">
				<div class="projects"  id="project-2"></div>
			</a>
			<p>An E-commerce store</p>
		</div>

		<div>
			<a href="">
				<div class="projects"  id="project-3"></div>
			</a>
			<p>Forum - A forum website for users.</p>
		</div>

		<div>
			<a href="">
				<div class="projects"  id="project-4"></div>
			</a>
			<p>Room - A landing page</p>
		</div>

		<div>
			<a href="">
				<div class="projects"  id="project-5"></div>
			</a>
			<p>Loop Studio - A Landing page</p>
		</div>

	</div>
</template>

<style scoped>
	p {
		text-align: center;
		font-size: 1.4rem;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	@media screen and (max-width: 960px) {
		.container {
			flex-direction: column;
		}
	}

	#project-1 {
		background: no-repeat url('~@/assets/crowd.png') ;
	}

	#project-2 {
		background: no-repeat url('~@/assets/e-commerce.png');
	}

	#project-3 {
		background: no-repeat url('~@/assets/forum.png');
	}

	#project-4 {
		background: no-repeat url('~@/assets/room.png');
	}

	#project-5 {
		background: no-repeat url('~@/assets/loop-studio.png');
	}

	.projects {
		position: relative;
		width: 25rem;
		height: 30rem;
		transition: .5s ease-in;
		animation: image 1.5s;
		border-radius: .5rem 3rem;
		animation: image 1s;
		margin: 4rem;
	}

	.projects:hover {
		transform: scale(1.05);
	}

</style>

