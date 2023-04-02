<script setup lang="ts"></script>

<template>
	<main class="main-layout">
		<TheHeader />
		<slot />
		<TheFooter />
		<Notifications position="bottom right" classes="app-notification" width="320px" />
	</main>
</template>

<style lang="scss">
.main-layout {
	max-width: 124.8rem;
	margin: 0 auto;
	padding: 1.5rem 1.6rem 2.4rem;

	@media screen and (min-width: 600px) {
		padding: 4.8 2rem 9rem;
	}

	@media screen and (min-width: 992px) {
		padding: 4.8rem 3.2rem 9rem;
	}
}
</style>
