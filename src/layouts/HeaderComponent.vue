<template>
	<header>


		<div class="head">
			<h2>Caleb</h2>
			
			<Hambuger @click="toggleMobile" class="hambuger"></Hambuger>

			<div class="desktop">
				<a href="#about" title="about link">About</a>
				<a href="#cv" title="cv link">CV</a>
				<a href="#contact" title="contact link">Contact</a>
				<a href="#projects" title="projects link">Projects</a>
			</div>
		</div>

		<div v-if="isOpen" class="mobile">
			<a href="#about" title="about link">About</a>
			<a href="#cv" title="cv link">CV</a>
			<a href="#contact" title="contact link">Contact</a>
			<a href="#projects" title="projects link">Projects</a>
		</div>

	</header>
</template>

<script>
	import Hambuger from '@/components/Hambuger'

	export default 
	{
		data() 
		{
			return {
				isOpen: false,
				prevScrollPos: window.pageYOffset,
			}
		},

		mounted() 
		{
		},

		methods: 
		{
			toggleMobile() {
				this.isOpen = ! this.isOpen
			},

			hideHeaderOnScroll() {
				let currScrollPos = window.pageYOffset

				if(this.prevScrollPos > currScrollPos) {
					document.getElementsByClassName('head').style.top = "0"
				} else {
					document.getElementsByClassName('head').style.top = "-50px"
				}

				this.prevScrollPos = currScrollPos
			}

			
		},

		components: 
		{
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

	@keyframes h {
		from {
			left: -500px;
		}

		to {
			left: 0;
		}
	}

	@-webkit-keyframes h {
			from {
			left: -500px;
		}

		to {
			left: 0;
		}
	}
	@-o-keyframes h {
			from {
			left: -500px;
		}

		to {
			left: 0;
		}

	}
	@-moz-keyframes h {
			from {
			left: -500px;
		}

		to {
			left: 0;
		}
	}

	.head {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		position: relative;
	}


	header {
		display: flex;
		flex-direction: column;
		/*justify-content: space-between;*/
		padding: 1rem;
		/*background-color: gray;*/
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

		@keyframes desktop {
			from {
				right: -500px;
			}

			to {
				right: 0;
			}
		}

		@-webkit-keyframes desktop {
			from {
				right: -500px;
			}

			to {
				right: 0;
			}
		}
		@-o-keyframes desktop {
			from {
				right: -500px;
			}

			to {
				right: 0;
			}
		}
		@-moz-keyframes desktop {
			from {
				right: -500px;
			}

			to {
				right: 0;
			}
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
			transition: color .3s;
		}

		.desktop a:nth-child(1) {
			margin-top: 0;
		}

		.desktop a:nth-child(2) {
			margin-top: .7rem;
			transition: 3s ease-out;
		}

		.desktop a:nth-child(2):hover {
			transform: translateY(-.7rem);
			transition: .5s ease-in;
		}


		.desktop a:nth-child(3) {
			margin-top: 0;
		}


		.desktop a:nth-child(4) {
			margin-top: .7rem;
			transition: 3s ease-out;
		}


		.desktop a:nth-child(4):hover {
			transform: translateY(-.7rem);
			transition: .5s ease-in;
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

		@keyframes animateTop {
			from {
				top: 100px;
				opacity: 0;
			}
			to {
				top: 0;
				opacity: 1;
			}
		}

		@-webkit-keyframes animateTop {
				from {
				top: 100px;
				opacity: 0;
			}
			to {
				top: 0;
				opacity: 1;
			}
		}
		@-o-keyframes animateTop {
					from {
				top: 100px;
				opacity: 0;
			}
			to {
				top: 0;
				opacity: 1;
			}
		}
		@-moz-keyframes animateTop {
					from {
				top: 100px;
				opacity: 0;
			}
			to {
				top: 0;
				opacity: 1;
			}
		}

		.mobile a {
			padding: 0.3rem 1rem;
			color: rgba(29, 139, 82, 1);
			position: relative;
			animation: link .5s;
			font-weight: bold;
			width: 100%;
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

		@keyframes link {
			from {
				left: 1500px;
				transition: 1s;
			}

			to {
				left: 0;
				transition: 1.1s;
			}
		}

		@-webkit-keyframes link {
			from {
				left: 1500px;
				transition: 4s;
			}

			to {
				left: 0;
				transition: 4s;
			}
		}
		@-o-keyframes link {
			from {
				left: 1500px;
				transition: 4s;
			}

			to {
				left: 0;
				transition: 4s;
			}
		}
		@-moz-keyframes link {
			from {
				left: 1500px;
				transition: 4s;
			}

			to {
				left: 0;
				transition: 4s;
			}
		}

		.hambuger {
			display: block;
			margin: 3.2rem 1.5rem 0 0 ;
			/*float: right;*/
		}

		h2 {
			padding-left: 1rem;
		}
	}


</style>


