<script setup lang="ts">
interface Props {
	error: Object;
}

defineProps<Props>();

const goBackHome = () => clearError({ redirect: "/" });
</script>

<template>
	<main class="default-layout">
		<TheHeader />
		<div class="error-content">
			<h3 class="error-content__title heading-1">{{ error.statusCode }} Error</h3>
			<p class="error-content__message heading-3">
				<template v-if="error.statusCode === 404">
					This page not found; <br />
					back to home and start again
				</template>
				<template v-else> An unexpected error occurred and that's why you're seeing this page. Go back home and start again.</template>
			</p>
			<BaseButton variant="outline-black" size="medium" text="HOMEPAGE" @click="goBackHome" />
		</div>
		<TheFooter />
	</main>
</template>

<style lang="scss" scoped>
main {
	min-height: 100vh;
}

.error-content {
	width: 100%;
	text-align: center;
	margin-top: 10rem;

	@media screen and (min-width: 600px) {
		margin-top: 27.2rem;
	}

	&__title {
		color: var(--black-color);
		margin-bottom: 1.2rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 2.4rem;
		}
	}

	&__message {
		color: var(--dark-gray);
		margin-bottom: 2.8rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 6.4rem;
		}
	}
}
</style>
