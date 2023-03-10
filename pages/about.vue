<template>
	<div class="about-page page-layout-margin">
		<div class="page-group">
			<h1 class="heading-1 page__title about-page__title">about</h1>
			<p class="heading-3 about-page__subtitle text-center hide-on-mobile">Who we are and why we do what we do!</p>
			<p class="heading-5">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.</p>
		</div>
		<div class="page-group">
			<h4 class="page-group__title heading-2">Top trends</h4>
			<div class="page-group__image">
				<NuxtImg src="/top-trends.png" alt="Top Trends Image" format="webp" quality="100" loading="lazy" />
			</div>
			<p class="page-group__text heading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</p>
			<p class="page-group__text heading-5">● consectetur adipiscing elit. Aliquam placerat</p>
			<p class="page-group__text heading-5">● Lorem ipsum dolor sit amet consectetur</p>
		</div>
		<div class="page-group">
			<h4 class="page-group__title heading-2">Produced with care</h4>
			<div class="page-group__image">
				<NuxtIng src="/produced-with-care.png" alt="Produced With Care Image" format="webp" quality="100" />
			</div>
			<p class="page-group__text heading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</p>
		</div>
	</div>
</template>

<style lang="scss">
.about-page {
	max-width: 67rem;

	&__title {
		margin-bottom: 3.9rem;

		@media screen and (min-width: 768px) {
			margin-bottom: 2.4rem;
		}
	}

	&__subtitle {
		margin-bottom: 4.6rem;
	}
}

.page-group {
	&:not(:last-child) {
		margin-bottom: 2.2rem;

		@media screen and (min-width: 768px) {
			margin-bottom: 3.9rem;
		}
	}

	&__title {
		margin-bottom: 1.3rem;

		@media screen and (min-width: 768px) {
			margin-bottom: 2.3rem;
		}
	}

	&__image {
		margin-bottom: 1.6rem;

		@media screen and (min-width: 768px) {
			margin-bottom: 4.8rem;
		}

		img {
			height: auto;
			width: 100%;
			max-height: 100%;
			max-width: 100%;
			object-fit: cover;
		}
	}

	&__text {
		&:not(:last-child) {
			margin-bottom: 1.6rem;
		}
	}
}
</style>
