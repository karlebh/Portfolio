<template>
	<header>
		<div class="head">
			<h2>Caleb</h2>
			
			<Hambuger @click="toggleMobile" class="hambuger"></Hambuger>

			<div class="desktop">
				<a href="#about" title="about link">About</a>
				<a href="@/assets/Akeju_Caleb_Resume.pdf" target="blanck" title="cv link" download>CV</a>
				<a href="mailto:akejucaleb@gmail.com" title="contact link">Contact</a>
				<a href="#projects" title="projects link">Projects</a>
			</div>
		</div>

		<div v-show="isOpen" class="mobile">
			<a href="#about" title="about link">About</a>
			<a href="../assets/Akeju_Caleb_Resume.pdf" target="blanck" title="cv link" download>CV</a>
			<a href="mailto:akejucaleb@gmail.com" title="contact link">Contact</a>
			<a href="#projects" title="projects link">Projects</a>
		</div>

	</header>
</template>

<script>
	import Hambuger from '@/components/Hambuger'

	export default {
		data() {
			return {
				isOpen: false,
			}
		},
		methods: {
			toggleMobile() {
				this.isOpen = !this.isOpen
			},
		},

		components: {
			Hambuger,
		}
	}
</script>

<style scoped>

	a {
		text-decoration: none;
	}

	h2 {
		padding-left: 8rem;
		cursor: pointer;
		position: relative;
		animation: h 2s;
		margin-top: 0;
		letter-spacing: .1rem;
	}

	
	.head {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		position: relative;
		align-items: center;
	}


	header {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		transition: 5s;
		overflow: hidden;
		position: relative;
		z-index: 10;
		transition: .2s ease;
		color: white;
		/*animation: header 1s;*/
	}

	.hambuger {
		display:none;
	}

	/* Desktop */
	@media screen and (min-width: 960px) {
		
		.desktop {
			display: flex;
			margin: 1rem 0 -.5rem 0;
			color: #000;
			position: relative;
			overflow: hidden;
			animation: desktop 1.1s;
		}

		.desktop a {
			padding: 0 2rem;
			letter-spacing: .05rem;
			font-weight: 60;
			color: rgba(29, 139, 82, 1);
			font-weight: bold;
		}

		.desktop a:hover {
			color: white;
			transition: color .1s;
		}

		.desktop a:nth-child(1) {
			margin-top: 0;
		}

		.desktop a:nth-child(2) {
			margin-top: .7rem;
			transition: .3s ease-out;
		}

		.desktop a:nth-child(3) {
			margin-top: 0;
		}


		.desktop a:nth-child(4) {
			margin-top: .7rem;
			transition: .3s ease-out;
		}

		.mobile {
			display: none;
			transition: 10s;
		}

	}

	/* Mobile */
	@media screen and (max-width: 960px) {

		.desktop {
			display: none;
		}

		.mobile {
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			width: 100%;
			flex-direction: column;
			transition: 1s;
			position: relative;
			animation: animateTop .5s;
		}

		
		.mobile a {
			padding: 0.3rem 1rem;
			color: rgba(29, 139, 82, 1);
			position: relative;
			animation: link .5s;
			font-weight: bold;
			width: 100%;
			font-size: 1.1rem;
		}

		.mobile a:hover {
			background-color: #ddd;
			transition: .7s ease-in;
		}

		.mobile a:nth-child(1) {
			padding-top: 0.7rem;
			animation: link .4s;
		}

		.mobile a:nth-child(2) {
			animation: link .5s;
		}
		
		.mobile a:nth-child(3) {
			padding-left: 1rem;
			animation: link .6s;
		}

		.mobile a:nth-child(4) {
			padding-left: 1rem;
			padding-bottom: 0.7rem;
			animation: link .7s;
		}

		.link-out {
			display: none;
			animation: link-out .7s;
		}

		.hambuger {
			display: block;
		}

		h2 {
			padding-left: 1rem;
		}
	}


</style>


